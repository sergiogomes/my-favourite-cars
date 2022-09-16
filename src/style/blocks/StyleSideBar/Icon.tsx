import styled from 'styled-components';

const Icon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin: 0;
  padding: 0;
  border: unset;
  background-color: unset;

  svg {
    width: 25px;
    height: 25px;
    color: #222;

    &:hover {
      color: #696969;
      cursor: pointer;
    }
  }
`;

export default Icon;
