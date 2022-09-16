import styled, { css } from 'styled-components';

type AsideProps = {
  visibility?: 'on' | 'off';
};

const StyledSideBar: any = styled.aside<AsideProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-right: 1px solid #eaeaea;
  transition: 1s;

  ${({ visibility }) =>
    visibility === 'on' &&
    css`
      left: -100vw;
    `}
`;

export default StyledSideBar;
