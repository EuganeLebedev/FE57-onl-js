import styled from "styled-components";

export const Container = styled.div`   
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
`;

export const AuthContainer = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const FormElement = styled.input`   
    width: 100%;
    height: 30px;
    border-radius: 8px;
    border: 1px solid darkgreen;
    padding: 0 10px;
`;

export const Button = styled.button`
    width: 100px;
    color: white;
    background-color: darkgreen;
    border: 1px solid darkgreen;
    border-radius: 8px;
    height: 30px;
`;
