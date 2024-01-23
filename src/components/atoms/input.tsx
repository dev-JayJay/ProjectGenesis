import styled from "styled-components";

export interface InputProps {
    type: string,
    placeholder: string,
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <InputContainer>
        <input type={props.type} placeholder={props.placeholder}/>
    </InputContainer>
  )
}
export default Input;

export const InputContainer = styled.div`
    input {
    width: 100%;
    height: 40px;
    border: 0.5px solid gray;
    border-radius: 10px;
    padding: 10px 10px;
    }
`;
