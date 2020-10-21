import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedDays,selectHoverRange} from '../../redux/view-timesheet/view-timesheet.selectors'

const ViewTimesheetTable = ({selectSelectedDays}) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]);

    return (
        <div className="ag-theme-alpine" style={ { display: 'inline-table', height: 400, width: 600 } }>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectedDays: selectSelectedDays,
    hoverRange: selectHoverRange
  });

export default ViewTimesheetTable;