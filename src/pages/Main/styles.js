import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background: #87ceeb;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
