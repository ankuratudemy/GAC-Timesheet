import React from 'react';

import { HomePageContainer } from './homepage.styles';
import { withRouter } from 'react-router-dom';

const HomePage = ({history, match}) => (
  <HomePageContainer>
    {/* {console.log(history.location.pathname)} */}
   {/* <TimesheetPreview/> */}
 Homepage
  </HomePageContainer>
);




export default withRouter(HomePage);

