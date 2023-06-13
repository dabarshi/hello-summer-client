import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import registerLottiImg from "../../assets/register/registerLotti.json";
import logo from "../../assets/logo.svg";
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [matchPassword, setMatchPassword] = useState(false);
    const { createNewUser } = useContext(AuthContext);

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setMatchPassword(!matchPassword);
            return;
        }
        setMatchPassword(false);
        console.log(data)
        createNewUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        reset();
    };
    // console.log(watch("name"));
    return (
        <div className="bg-gray-200 p-4 rounded-2xl">
            {/* Header Section */}
            <div className="grid place-items-center m-4 gap-4 bg-gray-100 rounded-2xl p-4">
                <figure>
                    <img className="w-[100px]" src={logo} alt="" />
                </figure>
                <div>
                    <h3 className="text-4xl font-bold">Register</h3>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Lottie imgae left side */}
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-yellow-400 pb-2">
                    <Lottie className="h-full" animationData={registerLottiImg} loop={true} />
                </div>
                {/* Right Side form */}
                <div className="px-4">
                    {/* Google sign in */}
                    <div className="text-center">
                        <button className="btn bg-[#005BA2] text-white hover:bg-[#07416d]"><FaGoogle></FaGoogle>Google Sign-in</button>
                    </div>
                    <div className="divider"></div>
                    {/* Form Start */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid lg:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                {errors.name?.type === 'required' && <p role="alert">Name is required</p>}
                            </div>
                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
                                {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                            </div>
                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo?.type === 'required' && <p role="alert">Photo URL is required</p>}
                            </div>
                            {/* Gender */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <select {...register("gender")} className="select select-bordered w-full">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p role="alert">The password is less than 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p role="alert">The password don`t have a special character or a capital letter</p>}
                            </div>
                            {/* Confirm Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm  Password" className="input input-bordered" />
                                {errors.confirmPassword?.type === 'required' && <p role="alert">Confirm Password is required</p>}
                                {errors.confirmPassword?.type === 'validate' && <p role="alert">Not Matched</p>}
                                {matchPassword && <p role="alert">Passwords do not match.</p>}
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="mt-8">
                            <input type="submit" value="Register" className="btn bg-[#005BA2] hover:bg-[#07416d] text-white w-full" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;