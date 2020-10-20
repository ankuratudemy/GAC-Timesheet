import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/icons8-calendar.svg'

export const ViewTimesheetContainer = styled.div`

  display: content;
  flex-direction: row;
  position: relative;
  cursor: pointer;
`;

export const ViewTimesheetIcon = styled(ShoppingIconSVG)`
  width: 50px;
  height: 50px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
