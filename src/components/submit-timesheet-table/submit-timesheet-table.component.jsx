import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {makeGetCall} from '../../firebase/user.utils'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './submit-timesheet.styles.css'
import { useEffect } from 'react';
import WithSpinner from '../with-spinner/with-spinner.component'
import {selectSubmitSelectedDays} from '../../redux/submit-timesheet/submit-timesheet.selectors'
import moment from 'moment';

const SubmitTimesheetTable = ({user,dates}) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [selectedDates,setSelectedDates] = useState(dates);
    const [rowData, setRowData] = useState([]);
    const [columnDefs,setColumnDefs] = useState([])
    useEffect(() => {
      
      console.log("Dates##", dates)
      let columns =[];
      let rows = []
      columns.push({headerName: 'Project', field: 'project', width:150})
      dates.forEach(date => {
      columns.push({headerName: moment(date).format('YYYY-MM-DD'), field: moment(date).format('YYYY-MM-DD'),width:110, editable: true })

       })
      setColumnDefs(columns)


      console.log("Columns## : ",columns)
      async function fetchData() {
      let result = await makeGetCall('/gac/projectAllocationDates',{svsId: user.UserId, weekStartDate: moment(dates[0]).format('YYYY/MM/DD'), weekEndDate: moment(dates[6]).format('YYYY/MM/DD')})
      console.log("Result##: ",result)
      
   
      result.lstProjectsAllocation.forEach(row => {
        let o = {}

        o['project'] = row.ProjectName
        //console.log(this.state.rowData)
        dates.forEach(date => {

          o[`${moment(date).format('YYYY-MM-DD')}`] = 0;
          
        })

        rows.push(o);
      })
      setRowData(rows)
      }

       fetchData();
      
      
    },[dates])
  
    return (

      <div 
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <div className="example-wrapper">
          <div
            style={{
              marginBottom: '5px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
          </div>
          <div className="grid-wrapper">
            <div
              id="myGrid"
              style={{
                height: '100%',
                width: '100%',
              }}
              className="ag-theme-alpine"
            >
 
              <AgGridReact

                      columnDefs={columnDefs}
                      rowData={rowData}>
              </AgGridReact>
              
            </div>
          </div>
        </div>
      </div>
    );    
    
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    dates: selectSubmitSelectedDays
  });



export default connect(
    mapStateToProps
  )(SubmitTimesheetTable);