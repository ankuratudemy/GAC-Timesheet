import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {togglePickerHidden } from '../../redux/view-timesheet/view-timesheet.actions';
import {selectPickerHidden} from '../../redux/view-timesheet/view-timesheet.selectors'
import ViewTimesheetDropdown from '../view-timesheet-dropdown/view-timesheet-dropdown.component';

import {ViewTimesheetContainer,ViewTimesheetIcon} from './view-timesheet-icon.styles'

const ViewTimesheet = ({togglePickerHidden,hidden}) => (
  <ViewTimesheetContainer >
    <ViewTimesheetIcon onClick={togglePickerHidden}/>
    {hidden ? null : <ViewTimesheetDropdown />}
  </ViewTimesheetContainer>
  
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
)(ViewTimesheet);
