import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import ViewWeekSelector  from '../week-selector/viewTimesheet-week-selector.component'

import { selectSelectedDays,selectHoverRange} from '../../redux/view-timesheet/view-timesheet.selectors'
import ViewTimesheetTable from '../view-timesheet-table/view-timesheet-table.component'

import {
  ViewTimesheetDropdownContainer,
  
} from './view-timesheet-dropdown.styles';

const ViewTimesheetDropdown = ({hoverRange,selectedDays}) => (
  <ViewTimesheetDropdownContainer>
  
    <ViewWeekSelector/>
    {selectedDays.length === 7 && (
          <ViewTimesheetTable />)}
  </ViewTimesheetDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  selectedDays: selectSelectedDays,
  hoverRange: selectHoverRange
});

// const mapDispatchToProps = dispatch => ({
//   setSelectedDays: selectedDays => dispatch(setSelectedDays(selectedDays)),
//   setHoverRange: hoverRange => dispatch(setHoverRange(hoverRange))
  
// });

export default withRouter(connect(
  mapStateToProps
)(ViewTimesheetDropdown));

