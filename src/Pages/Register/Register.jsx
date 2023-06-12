import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import registerLottiImg from "../../assets/register/registerLotti.json";
import logo from "../../assets/logo.svg";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    // console.log(watch("name"));
    return (
        <div className="bg-gray-200 p-4 rounded-2xl">
            <div className="grid place-items-center m-4 gap-4 bg-gray-100 rounded-2xl p-4">
                <figure>
                    <img className="w-[100px]" src={logo} alt="" />
                </figure>
                <div>
                    <h3 className="text-4xl font-bold">Register</h3>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center py-4">
                <div className="md:p-20 md:border-r-2 border-yellow-400">
                    <Lottie className="h-full" animationData={registerLottiImg} loop={true} />
                </div>
                <div className="px-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid md:grid-cols-2 gap-4">
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
                                <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                            </div>
                            {/* Confirm Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm  Password" className="input input-bordered" />
                                {errors.confirmPassword?.type === 'required' && <p role="alert">Confirm Password is required</p>}
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="mt-8">
                            <input type="submit" value="Register" className="btn btn-primary w-full" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;