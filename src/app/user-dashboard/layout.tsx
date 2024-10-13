"use client";


import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";
import { usePathname } from "next/navigation";
const UserLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
  const isActive = (path: string): boolean => {
    return pathname === path;
  };
  return (
    <div>
      {/* small device */}
      <div className="lg:hidden">
      <div>
        <div className="flex  bg-green-300 justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-2">
          <Image alt="logo" src={logo} width={75} height={75} />
          <h1 className="text-xl "> Green World</h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link href="/"
             className={isActive("/") ? "font-bold text-blue-500" : "font-bold"}>Home</Link>
            <Link href="/admin-dashboard"
             className={isActive("/admin-dashboard") ? "font-bold text-blue-500" : "font-bold"}>Dashboard</Link>
            <Link href="/admin/users"
             className={isActive("/admin/users") ? "font-bold text-blue-500" : "font-bold"}>Users</Link>

          </div>
        </div>
        
      </div>
      <div>
          {children}
        </div>
      </div>
      {/* large device */}
      <div className="hidden lg:flex lg:justify-start lg:items-center lg:gap-2 ">
      <div className="bg-green-300 h-[100vh] w-2/12"> 
      <div className="grid grid-cols-1 items-center justify-center gap-2 bg-green-300">
         <div>
         <Image className="text-center" alt="logo" src={logo} width={75} height={75} />
         </div>
          <h1 className="text-xl text-center font-bold"> Green World</h1>
          </div>
          <div className="grid grid-cols-1 justify-center items-center text-center gap-2 mt-5">
            <h1>

            <Link href="/"
             className={isActive("/") ? "font-bold text-blue-500" : "font-bold"}>Home</Link>
            </h1>
            <h1>

            <Link href="/user-dashboard"
             className={isActive("/user-dashboard") ? "font-bold text-blue-500" : "font-bold"}>Dashboard</Link>
            </h1>
            <h1>

            <Link href="/user-dashboard/post"
             className={isActive("/user-dashboard/post") ? "font-bold text-blue-500" : "font-bold"}>create post</Link>
            </h1>

          </div>
      </div>
      <div className="w-10/12">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;