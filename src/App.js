import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import UnauthorizedPage from './pages/Unauthorized/unauthorized.component'
import Timesheet from './pages/Timesheet/timesheet.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import AssignProject from './components/assign-project/assign-project.component'
import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import ApproveTimesheetTable from './components/approve-timesheet-table/approve-timesheet-table.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        {!this.props.currentUser ? null: <Header />}
        <Switch>
          
          <Route path='/my-timesheet' render={() => this.props.currentUser ? (<Timesheet />) :(<SignInAndSignUpPage />)} />
          <Route path='/home' render={() => this.props.currentUser ? (<HomePage />) :(<SignInAndSignUpPage />)}  />
          <Route exact path='/dashboard' render={() => this.props.currentUser 
            ? this.props.currentUser.UserRole ==="ADMIN" ?
            (<HomePage />) 
            : (<UnauthorizedPage/>)
            :
            (<SignInAndSignUpPage />)
          }
            />
          <Route exact path='/approve' render={() => this.props.currentUser
           ? this.props.currentUser.UserRole ==="ADMIN" ?
            (<ApproveTimesheetTable />)
            : (<UnauthorizedPage/>)
            :
            (<SignInAndSignUpPage />)

            }
            />

          <Route exact path='/assignproject' render={() => this.props.currentUser
             ? this.props.currentUser.UserRole ==="ADMIN" ?
              (<AssignProject />)
              :(<UnauthorizedPage/>)
              :
              (<SignInAndSignUpPage />)}  />

          <Route exact path='/signin'   render={() => this.props.currentUser ? ( <Redirect to='/my-timesheet' />

              ) : (
                <SignInAndSignUpPage />
              )

            }
           
          />
          <Route path='/' render={() => this.props.currentUser ? (<HomePage />) :(<SignInAndSignUpPage />)}  />

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
