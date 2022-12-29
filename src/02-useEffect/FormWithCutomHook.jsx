import { useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {

    const { onInputChange, username,email,password,onResetForm } = useForm(
        { username: '', email: '', password: '' });

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />
            <input type="text"
                className="form-control"
                placeholder="User name"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input type="mail"
                className="form-control mt-2"
                placeholder="rodrigo@hotmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Reset</button>

        </>
    )
}
