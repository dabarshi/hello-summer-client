import logo from "../../assets/logo.svg";
import Lottie from "lottie-react";
import registerLottiImg from "../../assets/register/registerLotti.json";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { loginWithEmailAndPassword, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handle password visibility

    const passwordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    }

    // handle google sign in 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                Swal.fire('Log-in successful')
                navigate(from)
            })
            .catch(error => setError(error.message))
    }

    // handle submit
    const onSubmit = data => {

        loginWithEmailAndPassword(data.email, data.password)
            .then((result) => {
                console.log(result)
                Swal.fire('Log-in successful')
                navigate(from)
            })
            .catch(error => {
                console.log(error)
                if (error.message == "Firebase: Error (auth/wrong-password).") {
                    setError("Please, enter correct password")
                    return;
                }
                if (error.message == "Firebase: Error (auth/user-not-found).") {
                    setError("Email does not match");
                    return;
                }
                setError(error.message);
            })

        // console.log(data)

        reset();
    };

    return (
        <div className="bg-gray-200 p-4 rounded-2xl">
            {/* Header Section */}
            <div className="grid place-items-center m-4 gap-4 bg-gray-100 rounded-2xl p-4">
                <figure>
                    <img className="w-[100px]" src={logo} alt="" />
                </figure>
                <div>
                    <h3 className="text-4xl font-bold">Login</h3>
                </div>
            </div>
            {/* Main Content */}
            <div className="grid md:grid-cols-2 items-center">
                {/* Lottie imgae left side */}
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-300 pb-2">
                    <Lottie className="h-full" animationData={registerLottiImg} loop={true} />
                </div>
                {/* Right Side */}
                <div className=" px-4 lg:px-32 py-4">
                    {/* Google sign in */}
                    <div className="text-center">
                        <button onClick={handleGoogleSignIn} className="btn bg-[#005BA2] text-white hover:bg-[#07416d]"><FaGoogle></FaGoogle>Google Sign-in</button>
                    </div>
                    <div className="divider"></div>
                    {/* Form Start */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                        </div>
                        {/* Password */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} placeholder="Password" className="input input-bordered" />
                            <button className="absolute top-14 right-5" onClick={passwordVisibilityToggle}>
                                {
                                    showPassword ? <FaEyeSlash title="hide" /> : <FaEye title="show" />}
                            </button>
                            <p className="text-red-600"><small>{error}</small></p>
                            {errors.password?.type === 'required' && <p className="text-red-600" role="alert">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600" role="alert">The password is less than 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600" role="alert">The password don`t have a special character or a capital letter</p>}
                        </div>
                        {/* Submit Button */}
                        <div className="mt-8">
                            <input type="submit" value="Login" className="btn bg-[#005BA2] hover:bg-[#07416d] text-white w-full" />
                        </div>
                    </form>
                    <p className="my-4">New here? please <Link to="/register" className="link link-primary">Register</Link></p>

                </div>

            </div>

        </div>
    );
};

export default Login;