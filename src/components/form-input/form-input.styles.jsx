import styled, { css } from 'styled-components';

const subColor = 'black';
const mainColor = 'white';

const shrinkLabelStyles = css`
  top: -45px;
  font-size: 28px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 60px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 25px;
  padding: 25px 10px 10px 5px;
  display: block;
  width: 93%;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid ${subColor};
  margin: 5px 5px;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 25px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
