import styled from 'styled-components';

const FormWrapper = styled.div`
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  gap: 10px;
  height: 240px;
  -webkit-box-shadow: inset rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
    inset rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
  -moz-box-shadow: inset rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
    inset rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
  box-shadow: inset rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
    inset rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
`;

const FormInput = styled.input`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 20px;
  width: 100%;
  margin-bottom: 15px;

  -moz-box-shadow: 2px 2px 7px -0.5px rgba(34, 60, 80, 0.2) inset;
  -webkit-box-shadow: 2px 2px 7px -0.5px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 2px 2px 7px -0.5px rgba(34, 60, 80, 0.2) inset;
`;

const FormButton = styled.button`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: pink;
  border: none;
  border-radius: 15px;
  width: 150px;
  height: 30px;
  font-weight: bold;
  -webkit-box-shadow: rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
    rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
  -moz-box-shadow: rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
    rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
    rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
  &:hover {
    background-color: #f26b94;
    color: white;
    -webkit-box-shadow: inset rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
      inset rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
    -moz-box-shadow: inset rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
      inset rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
    box-shadow: inset rgba(50, 50, 93, 0.25) 2px 0px 3px 1px,
      inset rgba(0, 0, 0, 0.3) -2px 1px 3px 0px;
  }
`;
const FindLabel = styled.label`
  font-size: 18px;
`;

const FindWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export { FormWrapper, FormInput, FormButton, FindLabel, FindWrapper };
