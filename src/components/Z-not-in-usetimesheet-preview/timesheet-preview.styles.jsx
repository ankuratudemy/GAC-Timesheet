import styled from 'styled-components';

export const TimesheetPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
 
`;

export const TitleContainer = styled.h1`
  font-size: 20px;
  margin-right: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
