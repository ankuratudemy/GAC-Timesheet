import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: none;
  background-color: #016879;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: bottom;
  
`;

export const OptionLink = styled(Link)`
  padding: 30px 30px;
  cursor: pointer;
  display: flex;
  float: left;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 20px;
  color: white;
  
  text-align: flex;
  &:hover {
  background-color: white;
  color: #016879;
  border: 0px solid black;
  margin-left: 5px
  

}
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: absolute;
  background-color: #016879;
`;

export const HeaderLogoutButton = styled(CustomButton)`
width: 60%;
height: 50%
margin-top: 27px;
display: flex;
font-size: 20px;
margin-right: 25px;
min-width: 70px;
  width: 70px;
  align-items: left;  
  letter-spacing: 2px;
  line-height: 40px;
  text-transform: none;
`;