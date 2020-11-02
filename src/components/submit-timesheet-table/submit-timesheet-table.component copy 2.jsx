
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
//import './submit-timesheet.styles.css'
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
    console.log(moment(this.props.dates[0]).format('YYYY-MM-DD'))
    let columns =[];
    columns.push({headerName: 'Project', field: 'project'})
    
    this.props.dates.forEach(date => {
      columns.push({headerName: moment(date).format('YYYY-MM-DD'), field: moment(date).format('YYYY-MM-DD'),cellEditor: 'numericCellEditor',editable: true,cellRenderer: 'numberFormatter',type: 'numericColumn' })

    })

   
   
    console.log(columns)
 
    

    this.state = {
        columnDefs: columns,
        rowData: [],
        frameworkComponents: {
            'numberFormatter': NumberFormatter,
            'numericCellEditor': NumericCellEditor,
            'rangeFilter': RangeFilter
        }
    }
}
componentDidMount() {
  let rows = []
  fetch('http://iis.srivensolutions.com:8088/gac/projectAllocationDates?svsId=divyak&weekStartDate=2020/10/01&weekEndDate=2020/10/18')
      .then(result => result.json())
      .then(rowData => {
        
        if(rowData.lstProjectsAllocation.length >0){
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
    else this.state.rowData =null      
    }
      )
      

      
      this.state.rowData =rows;
      console.log(this.state.rowData)
      console.log(this.state.columnDefs)

}





  render(){
      return (

      this.state.rowData ? (

    <div
                className="ag-theme-balham"
                style={{height: '200px', width: '600px'}}
            >
            <AgGridReact
                    enableSorting={true}
                    enableFilter={true}
                    pagination={true}
                    columnDefs={this.state.columnDefs}
                    frameworkComponents={this.state.frameworkComponents}
                    rowData={this.state.rowData}>
            </AgGridReact>
            </div>) : <div><p>No Projects have been assigned to you for selected  week</p></div>

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


