import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: none;
  background-color: #006189;
  position: relative;
  z-index: 10000;
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
  display: block;
  float: left;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 20px;
  color: white;
  
  text-align: flex;
  &:hover {
  background-color: white;
  color: #006189;
  border: 0px solid black;
  margin-left: 5px
  

}
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: absolute;
  background-color: #006189;
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


export const DropDownContainer = styled("div")`
  width: 5.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

export const DropDownListContainer = styled("div")`

background: #016789;
`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 0.3em;
  padding-right: 0.3em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1rem;
  font-weight: 500;
  background: #016789;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;