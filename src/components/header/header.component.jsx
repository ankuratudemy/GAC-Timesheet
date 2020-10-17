import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { logoutUser } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  ButtonsBarContainer,
  OptionsContainer,
  OptionLink,
  HeaderLogoutButton
} from './header.styles';

const Header = ({ currentUser, hidden,logoutUser }) => (
  <HeaderContainer>
    {/* <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer> */}
    <OptionsContainer>
      <OptionLink to='/submit-timesheet'>Submit Timesheet</OptionLink>
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
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
