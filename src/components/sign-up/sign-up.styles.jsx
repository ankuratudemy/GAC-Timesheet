import styled from 'styled-components';
import loginpagepng from './assets/login-page.png'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  height: 100vh;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;


export const BackgroundImageContainer = styled.div`
  width: 100vh;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;

  align-items: center;
  background-position: relative;
  margin: 0px;
  
  position: relative;
  background-image: url(${loginpagepng});
`;