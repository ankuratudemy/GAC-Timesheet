import React from 'react';

import { SignUpContainer} from './sign-up.styles';

class SignUp extends React.Component {




  render() {
    
    
    return (
      <SignUpContainer>

       <img alt="LOGO" src={require('../../assets/Login.png')}  width="120" height="120"/>
       <img alt= "Timesheet" src={require('../../assets/Login page.png')}  width="485" height="405"/>
       <img alt= "Timesheet Text" src={require('../../assets/login_page_text.png')}  width="496" height="112"/>


         

      </SignUpContainer>
    );
  }

}

export default SignUp;
