import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: 20px;
`;

const Header = styled.h2`
  font-size: 55px;
  text-align: center;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header>Facebook/react</Header>
    <ContentWrapper>{children}</ContentWrapper>
  </LayoutContainer>
);

export default Layout;
