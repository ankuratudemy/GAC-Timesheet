import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {togglePickerHidden } from '../../redux/submit-timesheet/submit-timesheet.actions';
import {selectPickerHidden} from '../../redux/submit-timesheet/submit-timesheet.selectors'
import SubmitTimesheetDropdown from '../../components/submit-timesheet-dropdown/submit-timesheet-dropdown.component';

import {SubmitTimesheetContainer,SubmitTimesheetIcon} from './submit-timesheet-icon.styles'

const SubmitTimesheet = ({togglePickerHidden,hidden}) => (
  <SubmitTimesheetContainer >
    <SubmitTimesheetIcon onClick={togglePickerHidden}/>
    {hidden ? null : <SubmitTimesheetDropdown />}
  </SubmitTimesheetContainer>
  
);

const mapDispatchToProps = dispatch => ({
  togglePickerHidden: () => dispatch(togglePickerHidden())
});

const mapStateToProps = createStructuredSelector({
  hidden: selectPickerHidden
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SubmitTimesheet);
