import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';


import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {!this.props.currentUser ? null: <Header />}
        <Switch>
          
          <Route path='/my-timesheet' render={() => this.props.currentUser ? (<HomePage />) :(<SignInAndSignUpPage />)} />
          <Route path='/shop' render={() => this.props.currentUser ? (<HomePage />) :(<SignInAndSignUpPage />)}  />
          <Route exact path='/checkout' render={() => this.props.currentUser ? (<HomePage />) :(<SignInAndSignUpPage />)}  />

          <Route exact path='/signin'   render={() => this.props.currentUser ? ( <Redirect to='/my-timesheet' />
              ) : (
                <SignInAndSignUpPage />
              )

            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
