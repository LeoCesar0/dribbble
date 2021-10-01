import { StyledButton } from "./styles";

export interface IProps {
  width?: string;
  height?: string;
  border_radius?: string;
  submitForm?: (e: any) => void
}

const Button: React.FC<IProps> = ({ children, width, height, submitForm}) => {
  return (
    <StyledButton width={width} height={height} onClick={submitForm} >
      {children}
    </StyledButton>
  );
};

export default Button;
