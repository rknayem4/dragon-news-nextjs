"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const NavBar = () => {
  const navLink = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/about">About</NavLink>
      </li>
      <li>
        <NavLink href="/career">Career</NavLink>
      </li>
    </>
  );
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <div className=" shadow bg-base-100 my-3">
      <div className="navbar mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {session ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={80}
                    height={80}
                  ></Image>
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user.name}</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={async ()=> await authClient.signOut()}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
