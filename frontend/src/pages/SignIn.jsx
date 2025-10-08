import { Link } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"

function SignIn() 
{
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Войти</h1>
                <form className="auth-form">
                    <Input/>
                    <Input type="password"/>
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