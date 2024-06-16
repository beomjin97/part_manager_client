import axios, { AxiosResponse } from "axios";
import SigninStyled from "./Signin.styled";
import { FormEventHandler, useRef } from "react";
import InputStyled from "./Input.styled";
import { redirect } from "react-router-dom";

function Signin() {
    const inputAdminRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/auth", {
            admin: inputAdminRef.current?.value, 
            password: inputPasswordRef.current?.value
        })
        .then((res: AxiosResponse) => {
            return redirect('/')
        })
        .catch((err) => {
            alert('등록되지 않은 계정입니다.')
        })    
    }

    return (
    <SigninStyled handleSubmit={handleSubmit}>
        <InputStyled id="admin" label="Administrator" size="small" ref={inputAdminRef}/>
        <InputStyled id="password" label="Password" size="small" type="password" ref={inputPasswordRef}/>
    </SigninStyled>
    )
}

export default Signin;