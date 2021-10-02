import { StyledButton } from "./styles";
import {VscLoading} from "react-icons/vsc";

export interface IProps {
  width?: string;
  height?: string;
  border_radius?: string;
  submitForm?: (e: any) => void;
  isLoading?: boolean;
}

const Button: React.FC<IProps> = ({
  children,
  width,
  height,
  submitForm,
  isLoading,
}) => {
  return (
    <StyledButton width={width} height={height} onClick={submitForm}>
      {isLoading ? <VscLoading className="loading-circle" /> : children}
    </StyledButton>
  );
};

export default Button;
