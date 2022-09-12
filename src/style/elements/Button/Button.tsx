import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  width: 184px;
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  justify-content: center;
  background: #7860d7;
  border-radius: 8px;
  font-size: 16px;
  color: #def4f6;
  text-align: center;
  font-weight: bold;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #53477d;
  }
`;

export default Button;
