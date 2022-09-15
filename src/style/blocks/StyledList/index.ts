import styled from 'styled-components';

import Thead from './Thead';
import Tbody from './Tbody';
import Td from './Td';
import Th from './Th';

const StyledList: any = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

StyledList.Thead = Thead;
StyledList.Tbody = Tbody;
StyledList.Td = Td;
StyledList.Th = Th;

export default StyledList;
