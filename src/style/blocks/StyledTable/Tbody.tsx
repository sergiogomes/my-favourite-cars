import styled from 'styled-components';

const Tbody: any = styled.thead`
  width: 100%;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #222;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;

Tbody.Tr = Tr;

export default Tbody;
