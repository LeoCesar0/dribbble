import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffcc81;
  height: 100%;
  padding: 60px 44px 0 44px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Logo = styled.img`
  width: max-content;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  font-weight: 800;
`;

export const Image = styled.img`
  // margin-top: auto;
  // margin-bottom: 117px;

  position: absolute;

  height: auto;
  left: 56%;
  transform: translate(-50%);
  bottom: 117px;
`;
