import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {makePostCall} from '../../firebase/user.utils'
import { setCurrentUser } from '../../redux/user/user.actions';
import WithSpinner from '../with-spinner/with-spinner.component'
import Alert from 'react-bootstrap/Alert'
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';
const SignInContainerWithSpinner = WithSpinner(SignInContainer)

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      loading: false,
      showErrorMessage: false,
      errorMessage: '',
  
    };
  }




  handleSubmit = async event => {
    event.preventDefault();

    const onSuccess = (data) => {
      // Set JSON Web Token on success
      //setClientToken(data.token);
      //this.setState({isLoading: false, isAuthorized: true});
    //  console.log(data)
      if(data.Status === "Success")
      this.props.setCurrentUser(data)

      if(data.Status === "Fail"){
      this.setState({showErrorMessage: true})
      this.setState({errorMessage: data.Error})
      }
      this.setState({loading: false});
    };

    const onFailure = error => {
     // console.log(error);
      //this.setState({errors: error.response.data, isLoading: false});
    };




    const { email, password } = this.state;
    this.setState({loading: true});
    try {
      makePostCall('/gac/employeeDetails', {"userId": email,"userPassword": password})
      .then(onSuccess)
      .catch(onFailure);
    } catch (error) {
    //  console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      
      this.state.loading ? (<SignInContainerWithSpinner isLoading={this.state.loading} />)
      :(
      <SignInContainer>
       

        <SignInTitle>Welcome</SignInTitle>
        {this.state.showErrorMessage ? (<Alert variant="danger"  show={this.state.showErrorMessage} onClose={() =>{this.setState({showErrorMessage: false});this.setState({errorMessage: null});}} dismissible>
               <Alert.Heading>Login failed!</Alert.Heading>
          <p>
               {this.state.errorMessage}
          </p>
             </Alert>):(null)}
        <form style={{alignItems: "center"}} onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='text'
            handleChange={this.handleChange}
            value={this.state.email}
            label='User ID'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='User Password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton  type='submit'> Login </CustomButton>
           
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
    );
  }
}



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
 
  mapDispatchToProps
)(SignIn);
