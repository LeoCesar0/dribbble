import styled from "styled-components";

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .form-title{
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.01em;
    margin-bottom: 36px;
    font-weight: 800;
  }
`;


export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;

  display: block;
`;

export const NameContainer = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 185px;

  >div:first-child {
    margin-right: 62px;
  }
`
