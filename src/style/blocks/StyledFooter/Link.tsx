import styled from 'styled-components';

const Link = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: #222;
    font-size: 14px;
    font-family: sans-serif;
    font-style: normal;
    line-height: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: unset;

    &:hover {
      color: #696969;
      cursor: pointer;
    }
  }
`;

export default Link;
