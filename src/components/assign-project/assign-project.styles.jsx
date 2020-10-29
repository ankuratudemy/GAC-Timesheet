import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const AssignProjectContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: bottom;

  
  
`;

export const SignInTitle = styled.h2`
font-weight: bold;
margin-bottom: 106px;
font-size: 48px;
color: white;
text-align: center;
  
`;

export const DropdownBarContainer = styled.div`
  display: flex;
 
  background-color: #016879;
  justify-content: left;

  height: 50px;
  width: fit-content;
  
  margin-bottom: 10px;
  margin-top: 1px;
  background-color: #016879;
  position: relative;
  z-index: 1000;
`;

export const CapturedvaluesContainer = styled.div`
display: flex;
align-items: center;
color: white;
background-color: #016879;
justify-content: left;

height: 40px;
width: fit-content;

margin-bottom: 1px;
margin-top: 1px;
background-color: #016879;
position: fixed;
bottom: 20%;

`;

export const AssignProjectButton = styled(CustomButton)`
width: 60%;
height: 75%
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
