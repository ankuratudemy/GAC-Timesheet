import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {makeGetCall} from '../../firebase/user.utils'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { useEffect } from 'react';
import WithSpinner from '../with-spinner/with-spinner.component'
import BtnCellRenderer from './button-cellrenderer.component'
import {ButtonsBarContainer} from './button.styles'
import {makePostCall} from '../../firebase/user.utils'

const ApproveTimesheetTableWithSpinner = WithSpinner(ButtonsBarContainer)
const ApproveTimesheetTable = ({user}) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
       
    
    const [rowData, setRowData] = useState([]);
    const [columnDef, setColumnDef] = useState([])
    const [loading,setLoading] = useState(false);
    const frameworkComponents = {

    
        'btnCellRenderer': BtnCellRenderer
    }



    const handleButtonClick =(e) => {
      console.log("Event",e)

      try {
        let dataToSubmit =  {
                    "SvsId": e.SvsId,
                    "WeekNumber": e.WeekNumber,
                    "Status": "approved",
                    "ProjectName": e.ProjectName

                  }
        
                

                const onSuccess = (data) => {

                  console.log(data)
                  if(data === "TimeSheet Approved"){
                    rowData.forEach(row => {

                      if(row.SvsId === data.SvsId && row.ProjectName === data.ProjectName && row.WeekNumber === data.WeekNumber){

                        rowData.Status = "Approved"
                      }
                      

                    })
                  }
                  // if(data === "Project Assigned Successfully")
                  // this.setState({showSuccess: true, successMessage: "Project Assigned Successfully"})
            
                  // if(data.error){
                  // this.setState({showError: true})
                  // this.setState({errorMessage: "Failed to assign project!"})
                  // }
                  
                  // this.setState({submitLoading: false,capacity:null,project: null,startDate:null,endDate: null,employee:null})
                };
            
                const onFailure = error => {
                  console.log(error);
                  // this.setState({submitLoading: false,capacity:null,project: null,startDate:null,endDate: null,employee:null})
                 
                  //this.setState({errors: error.response.data, isLoading: false});
                };
                
                    makePostCall('/gac/approveTimeSheet', dataToSubmit)
                    .then(onSuccess)
                    .catch(onFailure);
                  } catch (error) {
                    console.log(error);
                  }   


    }
    useEffect(() => {
      setLoading(true)
      async function fetchData() {
      let result = await makeGetCall('/gac/pendingTimeSheet',{})
    
      console.log(result)
      setRowData(result)
      setLoading(false)
      }
      setColumnDef([
        {
          headerName: 'Resource Id',
          field: 'SvsId',
          width: 150,
        },
        {
          headerName: 'Resource Name',
          field: 'ResourceName',
          width: 150,
        },
        {
          headerName: 'Project Name',
          field: 'ProjectName',
          width: 150,
        },
        {
          headerName: 'Week Number',
          field: 'WeekNumber',
          width: 150,
        },
        {
          headerName: 'Week End Date',
          field: 'WeekEndDate',
          width: 120,
        },
        {
          headerName: 'Total hours',
          field: 'TotalHours',
          minWidth: 150,
        },
		 {
          headerName: 'Action',
          field: 'status',
		      cellRenderer: 'btnCellRenderer',
		      
          minWidth: 150,
          
          cellRendererParams: {
            clicked: handleButtonClick
          }
        }
      ])
      fetchData();

    },[])
  
    
    return (
         loading ? (<ApproveTimesheetTableWithSpinner isLoading={loading} />)
          :(
        <div className="ag-theme-alpine" style={ {padding: '20px', margin:'2px', display: 'inline-table', width: '100%' } }>
           {rowData? ( <AgGridReact
                rowData={rowData}
                columnDefs={columnDef}
                frameworkComponents={frameworkComponents}
                domLayout='autoHeight'>
            </AgGridReact>) : null}
        </div>
    ));
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser

  });



export default connect(
    mapStateToProps
  )(ApproveTimesheetTable);