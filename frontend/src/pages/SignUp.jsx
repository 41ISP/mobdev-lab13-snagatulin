import { Link } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import { useState } from "react"

function SignUp() 
{
const [error, setError] = useState("");
const handleSubmit = (e) =>
{
        e.preventDefault()
        setError();
        console.log(e.target.username.value)
        if(e.target.password.value != e.target.password2.value)
        {
            setError("Пароли не совпадают");
            return
        }

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

}
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input placeholder="Введите имя пользователя" required name = "username"/>
                    <Input placeholder="Введите почту" required name = "email" type="email"/>
                    <Input placeholder = "Введите пароль" required name = "password" type="password"/>
                    <Input placeholder = "Повторите пароль" required name = "password2" type="password"/>
                    <Button>Зарегистрироваться</Button>
                </form>
                <footer className="auth-footer">
                        <Link to="/signin">Войти</Link>
                </footer> 
            </div>
        </div>

    )
}
export default SignUp