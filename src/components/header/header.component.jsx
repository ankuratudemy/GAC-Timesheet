import React,{ useState } from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { logoutUser } from '../../redux/user/user.actions';


import {
  HeaderContainer,
  LogoContainer,
  ButtonsBarContainer,
  OptionsContainer,
  OptionLink,
  HeaderLogoutButton,
  DropDownListContainer,
  DropDownContainer,
  DropDownList,
  ListItem,
  DropDownHeader
} from './header.styles';


const Header = ({history, currentUser, hidden,logoutUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  let homeIcon = require('../../assets/home.svg')
  let timesheetIcon = require('../../assets/Timesheet.png')
  let approveTimesheetIcon = require('../../assets/Approve Timesheet.png')
  let assignProjectIcon = require('../../assets/Assign_Projects.png')
  let dashboardIcon = require('../../assets/Dashboard.png')


  return (
  <HeaderContainer>
    {/* <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer> */}
    <OptionsContainer>

      <OptionLink style={{display: 'flex', alignContent: 'space-between'}}  to='/'>
        <div style={{paddingRight: '2px'}}>
             <img width="15" height="15" src={homeIcon} />
        </div>Home
      </OptionLink>
      <OptionLink  style={{display: 'flex' }}  onMouseEnter={toggling} onMouseLeave={toggling} >
      <div style={{paddingRight: '2px'}}>
             <img width="15" height="15" src={timesheetIcon} />
        </div>Timesheet
      {isOpen && (
          <DropDownListContainer >
            <DropDownList>
              <ListItem onClick={()=>history.push('/my-timesheet/view')}>View Timesheet</ListItem>
              <ListItem onClick={()=>history.push('/my-timesheet/submit')}>Submit Timesheet</ListItem>
              
            </DropDownList>
          </DropDownListContainer>
        )}
      </OptionLink>
      <OptionLink style={{display: 'flex', alignContent: 'space-between'}} to='/approve'><div style={{paddingRight: '2px'}}>
             <img width="15" height="15" src={approveTimesheetIcon} />
        </div>Approve Timesheets</OptionLink>
      <OptionLink style={{display: 'flex', alignContent: 'space-between'}} to='/assignproject'><div style={{paddingRight: '2px'}}>
             <img width="15" height="15" src={assignProjectIcon} />
        </div>Assign Projects</OptionLink>
      <OptionLink style={{display: 'flex', alignContent: 'space-between'}} to='/shop'><div style={{paddingRight: '2px'}}>
             <img width="15" height="15" src={dashboardIcon} />
        </div>Dashboard</OptionLink>
      {/* {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )} */}
      {/* <CartIcon /> */}
      
      {/* <OptionLink as='div' onClick={() => auth.signOut()}>
          Logout
      </OptionLink> */}

      
    </OptionsContainer>
    <ButtonsBarContainer>
            <HeaderLogoutButton type='submit' onClick={()=>logoutUser(null)}> Logout </HeaderLogoutButton>
            
      </ButtonsBarContainer>
  </HeaderContainer>
)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
