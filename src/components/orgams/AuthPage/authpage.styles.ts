import styled from "styled-components";

export const AsideContent = styled.aside`
  flex: 7;
  flex-direction: column;
  justify-content: center;

  padding: 128px 88px;

  img {
    max-width: 328px;
  }
  strong {
    font-weight: bold;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: white;
  }
`;

export const MainContent = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;
export const SeparetorContent = styled.div`
  font-size: 14px;
  color: #6b46c1;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    flex: 1;
    height: 1px;
    background: blue;
    margin-right: 16px;
  }

  &:after {
    content: "";
    flex: 1;
    height: 1px;
    background: blue;
    margin-left: 16px;
  }
`;
