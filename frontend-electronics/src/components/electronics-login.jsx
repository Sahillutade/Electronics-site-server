import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import axios from "axios";
import './electronics-login-css.css';

export function ElectronicsLogin()
{

    const [ , setCookie] = useCookies(['uname']);

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit : (user) => {
            axios.get(`https://electronics-site-1.onrender.com/users`)
            .then(response => {
                let userdetails = response.data.find(item => item.username===user.username);
                if(userdetails){
                    if(user.password===userdetails.password){
                        setCookie('uname', userdetails.username);
                        navigate('/');
                    }
                    else{
                        alert('Invalid Password');
                    }
                }
                else{
                    alert("User doesn't exist");
                }
            })
        }
    })

    return(
        <div className="login-form">
            <div className="login-form-cont d-block">
                <div className="login-text">
                    <h2>Login</h2>
                </div>
                <div className="login-cont">
                    <form onSubmit={formik.handleSubmit}>
                        <dl>
                            <dt>User Name</dt>
                            <dd> <input type="text" name="username" onChange={formik.handleChange} className="login-textbox" /> </dd>
                            <dt>Password</dt>
                            <dd> <input type="password" name="password" onChange={formik.handleChange} className="login-textbox" /> </dd>
                        </dl>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <div className="register-txt">
                        <span>New User ?<Link to={'/register'}> Register </Link> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}