import styled from "styled-components";
import { V } from "../styles/variables";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: ${V.md_padding};
`;

const Header = styled.h2`
  font-size: ${V.font_size_xl};
  text-align: center;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header>Facebook/react</Header>
    <ContentWrapper>{children}</ContentWrapper>
  </LayoutContainer>
);

export default Layout;
