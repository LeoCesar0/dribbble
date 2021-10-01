import styled from "styled-components";

interface IProps{
    isActive: boolean
}

interface IToast{
    isActive: boolean
}

const CustomToast: React.FC<IProps> = ({isActive}) => {
  return (
    <Toast isActive={isActive} >
        We couldn’t find an account matching the username and password you
        entered. Please check your username and password and try again.
    </Toast>
  );
};



const Toast = styled.div<IToast>`
  padding: 12px;
  background: #ff5555;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;

  transition: 500ms;
    transform: ${(props) => props.isActive ? "translateY(0px)" : "translateY(-200px)"};

  /* animation: slideDown 500ms;

  @keyframes slideDown{
      from{
        transform: translateY(-200px);
      }
      to{
        transform: translateY(0px);
      }
  } */


`;



export default CustomToast;
