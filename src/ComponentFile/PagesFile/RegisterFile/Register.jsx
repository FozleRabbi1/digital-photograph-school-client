import Lottie from "lottie-react";
import photography from "../../../ComponentFile/AllAnimation/Photography_03.json"
import { faEnvelope, faEye, faEyeSlash, faImage, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../SharedFile/RegisteAndLoginStyle.css'

const Register = () => {
    const [againShowPass, setAgainShowPass] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const registerHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="w-10/12 mx-auto">
            <div className='containerr grid grid-cols-2 gap-8  items-center'>

                {/* <div className="mainRegisterDiv  "> */}
                    <div className="registerAnimation p-5 ">
                        <Lottie animationData={photography} ></Lottie>
                    </div>

                    {/* <div className="form-div"> */}

                {/* </div> */}


                <form onSubmit={registerHandler} className='form signUp'>
                    <h2>Sign Up</h2>
                    <div className="inputBox">
                        <input name="name" type="text" required />
                        <FontAwesomeIcon className='icone' icon={faUser} />
                        <span>userName</span>
                    </div>

                    <div className="inputBox">
                        <input name="email" type="text" required />
                        <FontAwesomeIcon className='icone' icon={faEnvelope} />
                        <span>Email Adderss</span>
                    </div>

                    <div className="inputBox">
                        <input name="photo" type="text" required />
                        <FontAwesomeIcon className='icone' icon={faImage} />
                        <span>Photo URL</span>
                    </div>

                    <div className="inputBox">
                        <input name="password" type={`${showPass ? "text" : "password"}`} required />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Creat Password</span>
                        <i>{
                            showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                                <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                        }</i>
                    </div>
                    <div className="inputBox">
                        <input name="confirmPass" type={`${againShowPass ? "text" : "password"}`} required />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Confirm Password</span>
                        <i>{
                            againShowPass ? <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEye} ></FontAwesomeIcon> :
                                <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                        }</i>
                    </div>
                    <div className="inputBox">
                        <input type="submit" value="Create Account" />
                    </div>
                    <p className="-mb-2" >already a member ? <Link to={"/login"} >Log in</Link> </p>
                    <span className="text-white -my-3 ">or</span>

                    {/* <SocialLogin></SocialLogin> */}
                </form>



            </div>
        </div>



        // </div>
    );
};

export default Register;