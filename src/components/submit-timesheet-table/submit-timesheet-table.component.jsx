import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {makeGetCall} from '../../firebase/user.utils'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './submit-timesheet.styles.css'
import { useEffect } from 'react';
import WithSpinner from '../with-spinner/with-spinner.component'
import {selectSubmitSelectedDays,selectSubmitWeekNumber} from '../../redux/submit-timesheet/submit-timesheet.selectors'
import moment from 'moment';
import  NumericCellEditor  from './NumericEditor';
import {SubmitTimesheetButton,ButtonsBarContainer} from './button.styles'
import { GridApi } from 'ag-grid-community';
import Alert from 'react-bootstrap/Alert'
import {makePostCall} from '../../firebase/user.utils'


const ButtonsBarContainerWithSpinner = WithSpinner(ButtonsBarContainer);

const SubmitTimesheetTable = ({user,dates, weekNumber}) => {
    
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [selectedDates,setSelectedDates] = useState(dates);
    const [totalHours,setTotalHours] = useState(0);
    const [rowData, setRowData] = useState([]);
    const [columnDefs,setColumnDefs] = useState([]);
    const [showAlert,setShowAlert] = useState(false);
    const [show, setShow] = useState(true);
    const [alertMessage, setAlertMessage] = useState(null);
    const [loading,setLoading] = useState(false);
    const [showSuccess,setShowSuccess] = useState(false);
    const [successMessage,setSuccessMessage] = useState('')
    var alertMessages='';
    const frameworkComponents = {

          'numericCellEditor': NumericCellEditor,

       }
    

    const onGridReady = (params) => { 
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
      
    };



  const onCellValueChanged = (event) => {
      
      console.log('Data after change is', event);
      let allRowsData = [];


//gridColumnApi.setColumnAggFunc(event.column.colId, 'sum')
console.log(event.column.colId)


gridApi.forEachNode(node => allRowsData.push(node.data));
        
console.log(allRowsData)
 let totalHours = 0;
 let columnSum =0;
allRowsData.forEach(row =>{
   
  
    for (const [key, value] of Object.entries(row)) {
      if(key !== "project" && key !=="ProjectId"){
      //console.log(typeof value);
      totalHours = totalHours + parseInt(value);
      }
      if(key === event.column.colId){
      columnSum = columnSum + parseInt(value)
      
      }
    }

  })
  console.log("Total Hours: ", totalHours)
  console.log("Column Sum: ",columnSum)
  if(columnSum > 8 || totalHours >40){
    
    let rowNode = gridApi.getRowNode(event.node.id);
    rowNode.setDataValue(event.column.colId,event.oldValue)
    setAlertMessage('Total Hours for week cannot be greater than 40.\nTotal hours for one day cannot be greater than 8');
    setShow(true)
    setShowAlert(true)

  }
  else{
  setTotalHours(totalHours)
  }


    };

  
   const submitTotalHours = (event) =>{

    try{
     event.preventDefault();



  let finalRowsData=[];
  let finalData=[]
  
  gridApi.forEachNode(node => finalRowsData.push(node.data));
  //console.log(finalRowsData)


  finalRowsData.forEach(row =>{
   
    let i=0;
    let weekDays =["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

    for (const [key, value] of Object.entries(row)) {

      
      if(key !== "project" && key !== "ProjectId"){
        finalData.push({
        "ProjectId": row.ProjectId,
        "ProjectName": row.project,
        "WeekDate": key,
         "WeekDay": weekDays[i],
        "WeekDayHours": value

      })
      i++;
    }

  }
}




  )
  
  let dataToSubmit ={
   
    "SvsId": user.UserId,
    "WeekEndDate": moment(dates[6]).format('YYYY-MM-DD'),
    "Status": "submit",
    "WeekNumber": weekNumber,
    "TotalHours": 20,
    "lstTimeSheetDetails": finalData


  }
  console.log("Final Data",dataToSubmit)

  const onSuccess = (data) => {

    console.log("Data",data)
    if(data === "TimeSheet Submitted")
    setShowSuccess(true)
    setSuccessMessage("Timesheet Submitted Successfully")

    
    //TimeSheet Already Submitte
  };

  const onFailure = error => {
    console.log("Error",error);
    setAlertMessage('Something went wrong\n'+error);
    setShow(true)
    setShowAlert(true)
    //this.setState({errors: error.response.data, isLoading: false});
  };
  

      makePostCall('/gac/submitTimeSheet', dataToSubmit)
      .then(onSuccess)
      .catch(onFailure);
    } catch (error) {
      console.log("Error caught",error);
    }        





   }

    useEffect(() => {
      
      setLoading(true)
      console.log("Dates##", dates)
      let columns =[];
      let rows = []
      columns.push({headerName: 'Project', field: 'project', width:150})
      columns.push({headerName: 'Project Id', field: 'ProjectId', hide: true})
      dates.forEach(date => {
      columns.push({headerName: moment(date).format('YYYY-MM-DD'), field: moment(date).format('YYYY-MM-DD'),width:110, editable: true, cellEditor: 'numericCellEditor' })

       })
      setColumnDefs(columns)


      console.log("Columns## : ",columns)
      async function fetchData() {
      let result = await makeGetCall('/gac/projectAllocationDates',{svsId: user.UserId, weekStartDate: moment(dates[0]).format('YYYY/MM/DD'), weekEndDate: moment(dates[6]).format('YYYY/MM/DD')})
      console.log("Result##: ",result)
      
   
      result.lstProjectsAllocation.forEach(row => {
        let o = {}

        o['project'] = row.ProjectName
        o['ProjectId'] = row.ProjectId
        //console.log(this.state.rowData)
        dates.forEach(date => {

          o[`${moment(date).format('YYYY-MM-DD')}`] = 0;
          
        })

        rows.push(o);
        setLoading(false)
      })
      setRowData(rows)
      setTotalHours(0)
      

      }

       fetchData();
      
      
    },[dates])
  
    return (
       
      loading ? (<ButtonsBarContainerWithSpinner isLoading={loading} />):(
      <div 
      style={{
        width: '100%',
        height: 'auto',
        
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <div className="example-wrapper">

          <div className="grid-wrapper">
            <div
              id="myGrid"
              style={{
                
                width: '100%',
              }}
              className="ag-theme-alpine"
            >
 
              <AgGridReact
                      modules={[ClientSideRowModelModule]}
                      columnDefs={columnDefs}
                      rowData={rowData}
                      onGridReady={onGridReady}
                      onCellValueChanged={onCellValueChanged}
                      onCellEditingStarted = {function (event) {
                        console.log('cellEditingStarted');
                      }}
                      onCellEditingStopped={function (event) {
                        console.log('cellEditingStopped');
                      }}
                      frameworkComponents={frameworkComponents}
                      domLayout='autoHeight'
                     >
                      
              </AgGridReact>
              {showAlert ? (<Alert variant="danger"  show={show} onClose={() =>{setShow(false);setAlertMessage(null);setShowAlert(false)}} dismissible>
               <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
               {alertMessage}
          </p>
             </Alert>):(null)}

             {showSuccess ? (<Alert variant="success"  show={show} onClose={() =>{setShowSuccess(false);setSuccessMessage(null)}} dismissible>
               <Alert.Heading>Success!</Alert.Heading>
          <p>
               {successMessage}
          </p>
             </Alert>):(null)}
              
              <form onSubmit={submitTotalHours}>
               <div>
                  <span style={{fontSize: '15px'}}>Total Hours: {totalHours}</span>
                  <ButtonsBarContainer>
                     <SubmitTimesheetButton type='submit' onClick={(event)=>submitTotalHours(event)}> Submit </SubmitTimesheetButton>
            
                 </ButtonsBarContainer>
               </div>
      </form>
             


              
            </div>
          </div>
        </div>
      </div>
    )
    );    
    
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    dates: selectSubmitSelectedDays,
    weekNumber: selectSubmitWeekNumber
  });



export default connect(
    mapStateToProps
  )(SubmitTimesheetTable);