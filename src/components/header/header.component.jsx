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
  return (
  <HeaderContainer>
    {/* <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer> */}
    <OptionsContainer>

      <OptionLink to='/'>Home</OptionLink>
      <OptionLink onMouseEnter={toggling} onMouseLeave={toggling} >
      Timesheet
      {isOpen && (
          <DropDownListContainer >
            <DropDownList>
              <ListItem onClick={()=>history.push('/my-timesheet/view')}>View Timesheet</ListItem>
              <ListItem onClick={()=>history.push('/my-timesheet/submit')}>Submit Timesheet</ListItem>
              
            </DropDownList>
          </DropDownListContainer>
        )}
      </OptionLink>
      <OptionLink to='/shop'>Approve Timesheets</OptionLink>
      <OptionLink to='/shop'>Assign Projects</OptionLink>
      <OptionLink to='/shop'>Dashboard</OptionLink>
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
