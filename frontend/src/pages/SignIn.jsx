import { Link } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import { useState } from "react";

function SignIn() 
{
const [error, setError] = useState("");
const handleSubmit = (e) =>
{
        e.preventDefault()
        setError("");
        console.log(e.target.password.value)
}
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Войти</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input placeholder="Имя пользователя" required name = "email" type="email"/>
                    <Input placeholder="Пароль" required name = "password" type="password"/>
                    <Button>Войти</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signup">Зарегистрироваться</Link>
                </footer> 
            </div>
        </div>

    )
}
export default SignIn