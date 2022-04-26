
import styled from "styled-components";



export const Input = styled.input`
    font-size: 14px;
    line-height: 1;
    background-color: transparent;
    width: 100%;
    margin-left: 1rem;
    border: none;
    color: white;
    transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus,
    &:active {
    outline: none;
    }
    &::placeholder {
    color: white;
    }
`;