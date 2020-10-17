import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import WeekSelector  from '../week-selector/week-selector.component'

import { selectSelectedDays,selectHoverRange} from '../../redux/submit-timesheet/submit-timesheet.selectors'
import SubmitTimesheetTable from '../submit-timesheet-table/submit-timesheet-table.component'

import {
  SubmitTimesheetDropdownContainer,
  
} from './submit-timesheet-dropdown.styles';

const SubmitTimesheetDropdown = ({hoverRange,selectedDays}) => (
  <SubmitTimesheetDropdownContainer>
  
    <WeekSelector/>
    {selectedDays.length === 7 && (
          <SubmitTimesheetTable />)}
  </SubmitTimesheetDropdownContainer>
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
)(SubmitTimesheetDropdown));

