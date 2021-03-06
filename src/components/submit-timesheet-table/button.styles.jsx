import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #006089;
`;

export const SubmitTimesheetButton = styled(CustomButton)`
width: 60%;
height: 50%
margin-top: 5px;
margin-bottom: 5px;
display: flex;
font-size: 20px;
margin-right: 25px;
min-width: 70px;
  width: 70px;
  align-items: right;  
  letter-spacing: 2px;
  line-height: 30px;
  text-transform: none;
`;