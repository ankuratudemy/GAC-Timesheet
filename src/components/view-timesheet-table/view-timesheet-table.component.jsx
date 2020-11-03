import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {makeGetCall} from '../../firebase/user.utils'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { useEffect } from 'react';
import {ViewTimesheetProxyContainerForWithSpinner} from './view-timesheet-table.styles'
import WithSpinner from '../with-spinner/with-spinner.component'

const ViewTimesheetTableWithSpinner = WithSpinner(ViewTimesheetProxyContainerForWithSpinner);
const ViewTimesheetTable = ({user}) => {
   // const [gridApi, setGridApi] = useState(null);
    //const [gridColumnApi, setGridColumnApi] = useState(null);
    

    
    const [rowData, setRowData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      async function fetchData() {
      let result = await makeGetCall('/gac/viewTimeSheet',{svsId: user.UserId})
    
     // console.log(result)
      setRowData(result)
      setLoading(false)
      }
      fetchData();
    },[user.UserId])
  
    function statusStyle(params) {
      if(params.value === "approved")
      return { backgroundColor: '#77DD77',fontWeight: 'bold' };
      if(params.value ==="submitted")
      return { backgroundColor: '#FDFD96' };
    }
    
    return (
         loading ? (<ViewTimesheetTableWithSpinner isLoading={loading}/>)
         :(
        <div className="ag-theme-alpine" style={ { padding: '20px',display: 'inline-table', height: 'auto', width: '100%' } }>
           {rowData? ( <AgGridReact
                rowData={rowData}
                domLayout='autoHeight'>
                <AgGridColumn field="SvsId"></AgGridColumn>
                <AgGridColumn field="WeekNumber"></AgGridColumn>
                <AgGridColumn field="WeekEndDate"></AgGridColumn>
                <AgGridColumn field="TotalHours"></AgGridColumn>
                <AgGridColumn field="Status" cellStyle={statusStyle} ></AgGridColumn>
            </AgGridReact>) : null}
        </div>
    ));
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser 
  });



export default connect(
    mapStateToProps
  )(ViewTimesheetTable);