import styled, { createGlobalStyle } from "styled-components";

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
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    background-color: #ffffff;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  `,
  User: styled.p`
    font-size: 14px;
    margin-bottom: 4px;
  `,
  CommentsCount: styled.p`
    font-size: 20px;
    margin-bottom: 4px;
  `,
  State: styled.p`
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.children === "open" ? "#51af67fa" : "red")};
  `,
};
