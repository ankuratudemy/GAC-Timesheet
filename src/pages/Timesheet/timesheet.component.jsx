import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TimesheetPageContainer } from './timesheet.styles';
import { withRouter } from 'react-router-dom';
import SubmitTimesheet from '../../components/submit-timesheet-icon/submit-timesheet-icon.component';
import ViewTimesheetTable from '../../components/view-timesheet-table/view-timesheet-table.component'
import TimesheetPreview from '../../components/timesheet-preview/timesheet-preview.component'
const Timesheet = ({history, match}) => (
  <TimesheetPageContainer>
    {/* {console.log(history.location.pathname)} */}
    {/* <TimesheetPreview/> */}
  {history.location.pathname === "/my-timesheet/view"? <ViewTimesheetTable />: null}
  {history.location.pathname === "/my-timesheet/submit"? <SubmitTimesheet />: null}
  </TimesheetPageContainer>
);




export default withRouter(Timesheet);

