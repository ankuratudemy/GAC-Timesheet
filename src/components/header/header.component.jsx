import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { logoutUser } from '../../redux/user/user.actions';


import {
  HeaderContainer,
  
  ButtonsBarContainer,
  OptionsContainer,
  OptionLink,
  HeaderLogoutButton,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from './header.styles';


const Header = ({history,logoutUser,currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  let homeIcon = require('../../assets/home.svg')
  let timesheetIcon = require('../../assets/Timesheet.png')
  let approveTimesheetIcon = require('../../assets/Approve Timesheet.png')
  let assignProjectIcon = require('../../assets/Assign_Projects.png')
  let dashboardIcon = require('../../assets/Dashboard.png')


  return (
  <HeaderContainer>
   
    <OptionsContainer>

      <OptionLink style={{display: 'flex', alignContent: 'space-between'}}  to='/'>
        <div style={{paddingRight: '2px'}}>
             <img style={{verticalAlign: 'baseline'}} alt="home" width="15" height="15" src={homeIcon} />
        </div>Home
      </OptionLink>
      <OptionLink  style={{display: 'flex', flexDirection: 'column' }}  onMouseEnter={toggling}  onMouseLeave={toggling} >
      <div style={{paddingRight: '2px'}}>
             <img alt="timesheet" width="15" height="15" src={timesheetIcon} />Timesheet
        </div>
      {isOpen && (
          <DropDownListContainer >
            <DropDownList>
              <ListItem onClick={()=>history.push('/my-timesheet/view')}>View Timesheet</ListItem>
              <ListItem onClick={()=>history.push('/my-timesheet/submit')}>Submit Timesheet</ListItem>
              
            </DropDownList>
          </DropDownListContainer>
        )}
        
      </OptionLink>

      { currentUser.UserRole === "ADMIN" && (
      <OptionLink style={{display: 'flex', alignContent: 'space-between'}} to='/approve'>
        <div style={{paddingRight: '2px'}}>
             <img alt="approve_timesheet" width="15" height="15" src={approveTimesheetIcon} />
        </div>Approve Timesheets</OptionLink>
        )}
{ currentUser.UserRole === "ADMIN" && (
      <OptionLink style={{display: 'flex', alignContent: 'space-between'}} to='/assignproject'><div style={{paddingRight: '2px'}}>

             <img alt="assign project" width="15" height="15" src={assignProjectIcon} />
        </div>Assign Projects</OptionLink>
)}
{ currentUser.UserRole === "ADMIN" && (
      <OptionLink style={{display: 'flex', alignContent: 'space-between'}} to='/dashboard'><div style={{paddingRight: '2px'}}>
             <img alt="dashboard" width="15" height="15" src={dashboardIcon} />
        </div>Dashboard</OptionLink>
)}
    
      
    </OptionsContainer>
    <ButtonsBarContainer>
            <HeaderLogoutButton type='submit' onClick={()=>logoutUser(null)}> Logout </HeaderLogoutButton>
            
      </ButtonsBarContainer>
  </HeaderContainer>
)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
