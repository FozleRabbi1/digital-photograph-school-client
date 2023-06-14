import Lottie from "lottie-react";
import photography from "../../../ComponentFile/AllAnimation/Photography_03.json"
import { faEnvelope, faEye, faEyeSlash, faImage, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../SharedFile/RegisteAndLoginStyle.css'
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import SocialLogin from "../../SharedFile/NavBarFile/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Register = () => {
    const [againShowPass, setAgainShowPass] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, watch, formState: { errors, touchedFields } } = useForm();
    const password = watch('password');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        const { name, email, photoUrl, password } = data;
      // console.log(name, email, photoUrl, password)

        const userData = { name, email, image : photoUrl }

        createUser(email, password)
            .then(data => {
              // console.log(" create user ====>>  ", data)
                navigate("/")

                fetch("https://digital-photograph-school-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(data => {
                      // console.log("data 2 ========", data)
                        if (data) {
                            navigate("/")
                            Swal.fire({
                                position: '',
                                icon: 'success',
                                title: 'Register successfull',
                                showConfirmButton: false,
                                timer: 1000
                            })
                        }
                    })
                    .catch(err => console.log(err.message))
                    
                updateUserProfile(name, photoUrl)
                    .then((res) => {
                      // console.log("update ===>> ", res)

                    })
                    .catch(() => { })

            }).catch(err => {
              // console.log(err.message)
            })

    };



    return (
        <div className="w-10/12 mx-auto">
            <div className='containerr grid grid-cols-2 gap-8  items-center'>

                <div className="registerAnimation p-5 ">
                    <Lottie animationData={photography} ></Lottie>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='form signUp'>
                    <h2>Sign Up</h2>



                    <div className="inputBox">
                        <input
                            {...register("name", { required: true })}
                            required
                            type="text"
                        />
                        <FontAwesomeIcon className='icone' icon={faUser} />
                        <span>Username</span>
                    </div>
                    {touchedFields.name && errors.name && (
                        <p>{errors.name.message}</p>
                    )}

                    <div className="inputBox">
                        <input
                            name="email"
                            {...register("email", { required: true })}
                            type="text"
                            required
                        />
                        <FontAwesomeIcon className='icone' icon={faEnvelope} />
                        <span>Email Address</span>
                    </div>
                    {touchedFields.email && errors.email && (
                        <p>{errors.email.message}</p>
                    )}

                    <div className="inputBox">
                        <input
                            name="photo"
                            {...register("photoUrl")}
                            type="text"
                            required
                        />
                        <FontAwesomeIcon className='icone' icon={faImage} />
                        <span>Photo URL</span>
                    </div>

                    <div className="inputBox">
                        <input
                            name="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long'
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
                                    message: 'Password must contain at least one capital letter and one special character'
                                }
                            })}
                            type={`${showPass ? 'text' : 'password'}`}
                            required
                        />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Create Password</span>
                        <i>
                            {showPass ? (
                                <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} />
                            ) : (
                                <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} />
                            )}
                        </i>
                    </div>
                    {errors.password && <p>{errors.password.message}</p>}

                    <div className="inputBox">
                        <input
                            name="confirmPass"
                            {...register('confirmPass', {
                                validate: (value) => value === password || 'Passwords do not match'
                            })}
                            type={`${againShowPass ? 'text' : 'password'}`}
                            required
                        />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Confirm Password</span>
                        <i>
                            {againShowPass ? (
                                <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEye} />
                            ) : (
                                <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEyeSlash} />
                            )}
                        </i>
                    </div>
                    {errors.confirmPass && <p className="text-red-600">{errors.confirmPass.message}</p>}



                    {/* <div className="inputBox">
                        <input  {...register("name", { required: true })} required type="text" />
                        <FontAwesomeIcon className='icone' icon={faUser} />
                        <span>userName</span>
                    </div>

                    <div className="inputBox">
                        <input name="email"  {...register("email", { required: true })} type="text" required />
                        <FontAwesomeIcon className='icone' icon={faEnvelope} />
                        <span>Email Adderss</span>
                    </div>

                    <div className="inputBox">
                        <input name="photo" {...register("photoUrl")} type="text" required />
                        <FontAwesomeIcon className='icone' icon={faImage} />
                        <span>Photo URL</span>
                    </div> */}

                    {/* <div className="inputBox">
                        <input name="password" {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
                                message: 'Password must contain at least one capital letter and one special character'
                            }
                        })} type={`${showPass ? "text" : "password"}`} required />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Creat Password</span>
                        <i>{
                            showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                                <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                        }</i>

                    </div>
                    {errors.password && (
                        <p>{errors.password.message}</p>
                    )} */}
                    {/* <div className="inputBox">
                        <input name="confirmPass" {...register("confirmPass")} type={`${againShowPass ? "text" : "password"}`} required />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Confirm Password</span>
                        <i>{
                            againShowPass ? <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEye} ></FontAwesomeIcon> :
                                <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                        }</i>
                    </div> */}
                    {/* <div className="inputBox">
                        <input
                            name="confirmPass"
                            {...register('confirmPass', {
                                validate: (value) => value === password || 'Passwords do not match' // Custom validation to check if passwords match
                            })}
                            type={`${againShowPass ? 'text' : 'password'}`}
                            required
                        />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Confirm Password</span>
                        <i>
                            {againShowPass ? (
                                <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEye} />
                            ) : (
                                <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEyeSlash} />
                            )}
                        </i>
                    </div>
                    {errors.confirmPass && <p>{errors.confirmPass.message}</p>} */}



                    <div className="inputBox">
                        <input type="submit" value="Create Account" />
                    </div>
                    <p className="-mb-2" >already a member ? <Link to={"/login"} >Log in</Link> </p>
                    <span className="text-white -my-3 ">or</span>

                    <SocialLogin></SocialLogin>

                </form>



            </div>
        </div>



        // </div>
    );
};

export default Register;