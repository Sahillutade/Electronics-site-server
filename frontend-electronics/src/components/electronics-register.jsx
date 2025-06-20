import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import './electronics-register-css.css';

export function ElectronicsRegister()
{

    let navigate = useNavigate();

    function ValidateUser(user){
        var errors = {username:'',password:'',mobile:0};

        if(user.username.length===0){
            errors.username = 'User Name Required';
        }
        else{
            if(user.username.length<4){
                errors.username = 'Name too short';
            }else{
                errors.username = '';
            }
        }

        if(user.password.length===0){
            errors.password = 'Password Required';
        }
        else{
            if(user.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
                errors.password = 'Password should contain atleast one lowercase, uppercase, digit, special character & 8 char length.';
            }
            else{
                errors.password = '';
            }
        }

        if(user.mobile.length===0){
            errors.mobile = 'Mobile Number Required';
        }
        else{
            if(user.mobile.length<10){
                errors.mobile = 'Mobile No. should contain 10 digits.';
            }
            else{
                errors.mobile = '';
            }
        }
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            mobile: 0
        },
        validate: ValidateUser,
        onSubmit : (user) => {
            axios.post(`https://electronics-site-1.onrender.com/register-user`, user).then(() => {
                console.log('Posted..');
            })
            alert('Registered Successfully..');
            navigate('/login');
        }
    })

    return(
        <div className="user-register">
            <div className="user-reg-cont d-block">
                <div className="reg-txt">
                    <h2>Register</h2>
                </div>
                <div className="reg-form-cont">
                    <form onSubmit={formik.handleSubmit}>
                        <dl>
                            <dt>User Name</dt>
                            <dd> <input type="text" onChange={formik.handleChange} name="username" className='textbox' /> </dd>
                            <dd className="errors"> {formik.errors.username} </dd>
                            <dt>Password</dt>
                            <dd> <input type="password" onChange={formik.handleChange} name="password" className='textbox' /> </dd>
                            <dd className="errors"> {formik.errors.password} </dd>
                            <dt>Confirm Password</dt>
                            <dd> <input type="password" name="ConfirmPassword" className='textbox' /> </dd>
                            <dd className="errors"></dd>
                            <dt>Email</dt>
                            <dd> <input type="email" name="email" onChange={formik.handleChange} className='email-textbox' /> </dd>
                            <dt>Mobile</dt>
                            <dd> <input type="number" onChange={formik.handleChange} name="mobile" className='textbox' /> </dd>
                            <dd className="errors"> {formik.errors.mobile} </dd>
                        </dl>
                        <button type="submit" className='register-btn'>Register</button>
                    </form>
                    <div className='existing-user'>
                        <span>Existing User ?<Link to={'/login'}> Login </Link> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}