import React from 'react';

import { SignUpContainer} from './sign-up.styles';

class SignUp extends React.Component {




  render() {
    
    
    return (
      <SignUpContainer>

       <img alt="LOGO" src={require('../../assets/Login.png')}  width="120" height="120"/>
       <img alt= "Timesheet" src={require('../../assets/Login page.png')}  width="485" height="405"/>

         

      </SignUpContainer>
    );
  }

}

export default SignUp;
