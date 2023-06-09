import { useContext, useState } from "react";
import { faEnvelope, faEye, faEyeSlash, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                if (user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(err => console.error(err.message))
    };


    return (
        <div style={{
            backgroundImage: 'url("https://birdsofpreycentre.co.uk/wp-content/uploads/2016/03/Photography-Camera-HD-Wallpaper1.jpg")',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <img src="" alt="" />
            <div className='containerr opacity-90'>
                <form onSubmit={handleSubmit(onSubmit)} className='form signUp'>
                    {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                    <h2>Sign In</h2>
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
                    {/* {errors.password && <small className="w-4/12 m-0 p-0">{errors.password.message}</small> } */}
                    {/* {errors.password && setError(errors.password.message)} */}
                    {/* {
                        error && <p> {error} </p>
                    } */}

                    {/* <div className="inputBox">
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
                    {errors.password && <p className="w-6/12 bg-gray-600">{errors.password.message}</p>} */}



                    {/* <div className="inputBox">
                        <input name="password" type={`${showPass ? "text" : "password"}`} required />
                        <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                        <span>Password</span>
                        <i>{
                            showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                                <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                        }</i>
                    </div> */}

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