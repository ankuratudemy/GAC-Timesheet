import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {SubmitTogglePickerHidden } from '../../redux/submit-timesheet/submit-timesheet.actions';
import {selectSubmitPickerHidden} from '../../redux/submit-timesheet/submit-timesheet.selectors'
import SubmitTimesheetDropdown from '../../components/submit-timesheet-dropdown/submit-timesheet-dropdown.component';

import {SubmitTimesheetContainer,SubmitTimesheetIcon} from './submit-timesheet-icon.styles'

const SubmitTimesheet = ({SubmitTogglePickerHidden,submitHidden}) => (
  <SubmitTimesheetContainer >
    <SubmitTimesheetIcon onClick={SubmitTogglePickerHidden}/>
    {submitHidden ? null : <SubmitTimesheetDropdown />}
  </SubmitTimesheetContainer>
  
);

const mapDispatchToProps = dispatch => ({
  SubmitTogglePickerHidden: () => dispatch(SubmitTogglePickerHidden())
});

const mapStateToProps = createStructuredSelector({
  submitHidden: selectSubmitPickerHidden
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SubmitTimesheet);
