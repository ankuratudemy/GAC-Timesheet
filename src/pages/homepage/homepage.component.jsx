import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { HomePageContainer } from './homepage.styles';
import { withRouter } from 'react-router-dom';
import SubmitTimesheet from '../../components/submit-timesheet-icon/submit-timesheet-icon.component';
import TimesheetPreview from '../../components/timesheet-preview/timesheet-preview.component'
import SubmitTimesheetTable from '../../components/submit-timesheet-table/submit-timesheet-table.component';

const HomePage = ({history, match}) => (
  <HomePageContainer>
    {console.log(history.location.pathname)}
   <TimesheetPreview/>
  {history.location.pathname === "/my-timesheet/view"? <SubmitTimesheetTable />: null}
  {history.location.pathname === "/my-timesheet/submit"? <SubmitTimesheet />: null}
  </HomePageContainer>
);




export default withRouter(HomePage);

