import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-3">Login With </h2>
      <div  className="flex flex-col gap-2">
        <button className="btn w-full btn-outline text-blue-700">
          <FcGoogle /> Login with Google
        </button>
        <button className="btn w-full btn-outline ">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialPage;
