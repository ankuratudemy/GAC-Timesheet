import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  TimesheetPreviewContainer,
  TitleContainer,
} from './timesheet-preview.styles';

const TimesheetPreview = ({history, match }) => (
  <TimesheetPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/view`)}>
      View Timesheet
    </TitleContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/submit`)}>
      Submit Timesheet
    </TitleContainer>
  </TimesheetPreviewContainer>
);

export default withRouter(TimesheetPreview);
