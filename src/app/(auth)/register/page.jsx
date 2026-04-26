"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegisterFunc = async (data) => {
    const { name, photo, email, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    if (error) {
      toast.error(`${error.message}`);
      // alert(`${error.message}`)
    }
    if(res){
      // toast.success(`Successful ${name} Registered`)
      alert(`Successful ${name} Registered`)
    }
    console.log(res, error);
  };
  return (
    <div className="container h-[80vh] mx-auto flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleRegisterFunc)}
        className="card-body max-w-md border rounded-2xl border-gray-200 shadow "
      >
        <h2 className="text-2xl font-bold text-center my-5">
          Register account
        </h2>

        <label className="label">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name field is required" })}
          className="input w-full"
          placeholder="Your Full Name"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        <label className="label">Photo URL</label>
        <input
          type="text"
          {...register("photo", { required: "Photo URL field is required" })}
          className="input w-full"
          placeholder="Photo URL"
        />
        {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}
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
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <div></div>
        <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  );
};

export default RegisterPage;
