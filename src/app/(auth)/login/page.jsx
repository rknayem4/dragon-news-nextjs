"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = async (data) => {
    const {email, password} = data;

        const { data: res, error } = await authClient.signIn.email({
          email: email,
          password: password,
          callbackURL: "/",
        });
        if (error) {
          toast.error(`${error.message}`);
        }
        if(res){
          toast.success(`Successful Login`)
        }
  };
  console.log(errors);
  return (
    <div className="container h-[80vh] mx-auto flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleLoginFunc)}
        className="card-body max-w-md border rounded-2xl border-gray-200 shadow "
      >
        <h2 className="text-2xl font-bold text-center my-5">
          Login with account
        </h2>

        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email field is required" })}
          className="input w-full"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password field is required" })}
          className="input w-full"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn btn-neutral mt-4">Login</button>
        <p className="my-3 text-center font-semibold">
          Do not have an Account?{" "}
          <Link className="text-blue-800 " href="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
