import { useState } from "react";
import { faEnvelope, faEye, faEyeSlash, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div style={{
            backgroundImage: 'url("https://birdsofpreycentre.co.uk/wp-content/uploads/2016/03/Photography-Camera-HD-Wallpaper1.jpg")',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <img src="" alt="" />
            <div className='containerr opacity-90'>
                <form onSubmit={loginHandler} className='form signUp'>
                    <h2>Sign In</h2>
                    <div className="inputBox">
                        <input name="email" type="email" required />
                        <FontAwesomeIcon className='icone' icon={faEnvelope} />
                        <span>Email Adderss</span>
                    </div>
                    <div className="inputBox">
                        <input name="password" type={`${showPass ? "text" : "password"}`} required />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Password</span>
                        <i>{
                            showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                                <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                        }</i>
                    </div>
                    <div className="inputBox">
                        <input type="submit" value=" LogIn " />
                    </div>
                    <p className="-mb-2">Do not have an account ? <Link to={"/register"} >Sign Up</Link> </p>
                    <span className="text-white -my-3 ">or</span>
                    <p>social login</p>
                </form>

                
            </div>
        </div>
    );
};

export default Login;