import styled, { createGlobalStyle } from "styled-components";
import { V } from "./variables";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Issue = {
  Container: styled.div`
    padding: ${V.md_padding};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: ${V.md_margin};
    background-color: #ffffff;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.p`
    font-size: ${V.font_size_md};
    font-weight: bold;
    margin-bottom: 8px;
  `,
  User: styled.p`
    font-size: ${V.font_size_md};
    margin-bottom: 4px;
  `,
  CommentsCount: styled.p`
    font-size: ${V.font_size_lg};
    margin-bottom: 4px;
  `,
  State: styled.p`
    font-size: ${V.font_size_md};
    font-weight: bold;
    color: ${(props) => (props.children === "open" ? "#51af67fa" : "red")};
  `,
};
