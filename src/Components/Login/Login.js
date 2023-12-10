import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthContextProvider";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    loginUser(email, password)
      .then((userCredential) => alert("Login Successful !"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now</h1>
          <p className="py-6">Please Login </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
          <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <p className=" text-red-700 mt-2">
                  Please Provide a valid email address
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  pattern:
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <p className=" text-red-700 mt-2">
                  Password should contain uppercase,lowercase letters,
                  punctuation,and must be at least length of 8
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
