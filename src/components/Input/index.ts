import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px 22px;
  border: 1px solid transparent;
  margin-bottom: 25px;

  background: #e8e8e8;
  border-radius: 5px;
  font-size: 14px;
  line-height: 17px;
  outline: none;
  color: #878888;
  transition: 150ms;


  &:focus {
    border: 1px solid #fbb5cf;
    box-shadow: 0px 0px 0px 3px #feedf3;
    background: white;
  }

  &:hover{
    box-shadow: 0px 0px 0px 3px #feedf3;
  }
`;

export default Input;
