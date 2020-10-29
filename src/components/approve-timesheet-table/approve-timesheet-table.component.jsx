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

const ApproveTimesheetTable = ({user}) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    
    const frameworkComponents = {

    
        'btnCellRenderer': BtnCellRenderer
    }

   
    
    const [rowData, setRowData] = useState([]);
    const [columnDef, setColumnDef] = useState([])
    const handleButtonClick =(e) => {
      console.log("Event",e)
    }
    useEffect(() => {
      async function fetchData() {
      let result = await makeGetCall('/gac/pendingTimeSheet',{})
    
      console.log(result)
      setRowData(result)
     
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
         
        <div className="ag-theme-alpine" style={ {padding: '20px', margin:'2px', display: 'inline-table', width: '100%' } }>
           {rowData? ( <AgGridReact
                rowData={rowData}
                columnDefs={columnDef}
                frameworkComponents={frameworkComponents}
                domLayout='autoHeight'>
            </AgGridReact>) : null}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser 
  });



export default connect(
    mapStateToProps
  )(ApproveTimesheetTable);