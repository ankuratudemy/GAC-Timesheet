import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { HomePageContainer } from './homepage.styles';

import SubmitTimesheet from '../../components/submit-timesheet-icon/submit-timesheet-icon.component';

const HomePage = () => (
  <HomePageContainer>
  <SubmitTimesheet />
  </HomePageContainer>
);




export default HomePage;

