import Image from "next/image";
import React from "react";
import img from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center flex flex-col justify-center">
      <Image src={img} width={500} height={500} alt="logo" className="mx-auto my-2 gap-2" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE , MMM dd, yyyy ")}</p>
    </div>
  );
};

export default Header;
