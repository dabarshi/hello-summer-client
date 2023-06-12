import { useForm } from "react-hook-form";


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered" />
                </div>
                {/* Email */}
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered" />
                </div>

            </form>
        </div>
    );
};

export default Register;