import styled from 'styled-components';

const Link = styled.li`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    color: #222;
    font-size: 14px;
    font-family: sans-serif;
    font-style: normal;
    line-height: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: unset;
    display: flex;
    align-items: start;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    border: unset;
    background-color: unset;

    &:hover {
      color: #696969;
      cursor: pointer;
    }
  }
`;

export default Link;
