import React from 'react';

import { AssignprojectPageContainer } from './assignproject.styles';
import { withRouter } from 'react-router-dom';
import {AssignProject} from '../../components/assign-project/assign-project.component'

const HomePage = ({history, match}) => (
  <AssignprojectPageContainer>
<AssignProject/>
  </AssignprojectPageContainer>
);




export default withRouter(HomePage);

