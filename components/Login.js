import { signIn } from "next-auth/react";
import Image from "next/image";
import React from 'react'

export const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
    <Image
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          height={240}
          width={240}
        />
        <a onClick={ signIn } className="px-10 py-4 z-10 text-2xl cursor-pointer bg-blue-500 rounded-md text-white">Login</a>
   </div> 
  )
}

export default Login;