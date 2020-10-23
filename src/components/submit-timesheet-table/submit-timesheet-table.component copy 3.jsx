
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
//import './submit-timesheet.styles.css'
import "./styles.css";
import moment from 'moment';

import { NumberFormatter } from './NumberFormatter';
import { NumericCellEditor } from './NumericEditor';
import { RangeFilter } from './RangeFilter';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {selectSubmitSelectedDays} from '../../redux/submit-timesheet/submit-timesheet.selectors'
import { connect } from 'react-redux';
import {compose} from 'redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

class SubmitTimesheetTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(moment(props.dates[0]).format('YYYY-MM-DD'))
    let columns =[];
    columns.push({headerName: 'Project', field: 'project'})
    
    props.dates.forEach(date => {
      columns.push({headerName: moment(date).format('YYYY-MM-DD'), field: moment(date).format('YYYY-MM-DD')})

    })

   
   
    //console.log(columns)
 
    

    this.state = {
        columnDefs: columns,
        rowData: []
        // frameworkComponents: {
        //     'numberFormatter': NumberFormatter,
        //     'numericCellEditor': NumericCellEditor,
        //     'rangeFilter': RangeFilter
        // }
    }
}
componentDidMount() {
  let rows = []
  fetch('http://iis.srivensolutions.com:8088/gac/projectAllocationDates?svsId=divyak&weekStartDate=2020/10/01&weekEndDate=2020/10/18')
      .then(result => result.json())
      .then(rowData => {
       
       rowData.lstProjectsAllocation.forEach(row => {
        let o = {}

        o['project'] = row.ProjectName
        //console.log(this.state.rowData)
        this.props.dates.forEach(date => {

          o[`${moment(date).format('YYYY-MM-DD')}`] = 0;
          
        })

        rows.push(o);
      })

      
    }
      )
      

      
      this.state.rowData =rows;
      console.log(this.state.rowData)
      console.log(this.state.columnDefs)

}




sizeToFit() {
  this.gridApi.sizeColumnsToFit();
}
autoSizeAll() {
  var allColumnIds = [];
  this.gridColumnApi.getAllColumns().forEach(function(column) {
    allColumnIds.push(column.colId);
  });
  this.gridColumnApi.autoSizeColumns(allColumnIds);
}


  render(){
      return (

    // <div 
    // style={{
    //   width: '100%',
    //   height: '100%',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-between',
    // }}
    // >
    //   <div className="example-wrapper">
    //     <div
    //       style={{
    //         marginBottom: '5px',
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //       }}
    //     >
    //     </div>
    //     <div className="grid-wrapper">
    //       <div
    //         id="myGrid"
    //         style={{
    //           height: '100%',
    //           width: '100%',
    //         }}
    //         className="ag-theme-balham"
    //       >
    <div style={{ width: "100%", height: "100%" }}>
    <div class="grid-wrapper">
      <div
        id="myGrid"
        style={{
          boxSizing: "border-box",
          height: "100%",
          width: "100%"
        }}
        className="ag-theme-balham"
      >
            <AgGridReact
                    enableSorting={true}
                    enableFilter={true}
                    pagination={true}
                    columnDefs={this.state.columnDefs}
                    frameworkComponents={this.state.frameworkComponents}
                    rowData={this.state.rowData}>
            </AgGridReact>
            </div>
        </div>

      </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  dates: selectSubmitSelectedDays
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SubmitTimesheetTable));


