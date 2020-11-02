import React from 'react';

import { TimesheetPageContainer } from './timesheet.styles';
import { withRouter } from 'react-router-dom';
import SubmitTimesheet from '../../components/submit-timesheet-icon/submit-timesheet-icon.component';
import ViewTimesheetTable from '../../components/view-timesheet-table/view-timesheet-table.component'
const Timesheet = ({history}) => (
  <TimesheetPageContainer>

  {history.location.pathname === "/my-timesheet/view"? <ViewTimesheetTable />: null}
  {history.location.pathname === "/my-timesheet/submit"? <SubmitTimesheet />: null}
  </TimesheetPageContainer>
);




export default withRouter(Timesheet);

