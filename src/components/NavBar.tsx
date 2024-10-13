"use client"; // Mark as a client-side component

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { FaPerson } from "react-icons/fa6"; // Use the correct import
import logo from "@/assets/logo.png";
import { useAuth } from "@/app/hooks/useAuth"; // Ensure the correct import

const NavBar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth(); // Ensure user and logout are defined in your useAuth hook
  console.log(user)
  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150); // Change the scroll position if necessary
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div
          className={`navbar sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
            isScrolled ? "bg-transparent backdrop-blur-md " : "bg-green-200 shadow-md"
          }`}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div>
            <Image alt="logo" src={logo} width={75} height={75} />
          </div>
          <div className="mx-2 flex-1 px-2 text-xl font-bold text-white">
            Green World 
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <Link
                  href="/"
                  className={isActive("/") ? "font-bold text-blue-500" : "font-bold"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={isActive("/about") ? "font-bold text-blue-500" : "font-bold"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isActive("/contact") ? "font-bold text-blue-500" : "font-bold"}
                >
                  Contact
                </Link>
              </li>
              <li>
               {
                user?.name?(
                  <Link
                  href="/posts"
                  className={isActive("/posts") ? "font-bold text-blue-500" : "font-bold"}
                >
                  posts
                </Link>
                ):(
                  <div>
                    <p>
                      
                    </p>

                  </div>
                )
               }
              </li>
              <li className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 rounded-full">
                  {user?.name ? (
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <Image alt="user avatar" src={user?.photoUrl|| logo} width={8} height={8} />
                      </div>
                    </div>
                  ) : (
                    <FaPerson className="h-8 w-8" />
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  {user?.name ? (
                    <>
                      {user.role === 'admin' ? (
        <Link href="/admin-dashboard" className="font-bold text-center m-2">
          Admin Dashboard
        </Link>
      ) : (
        <Link href="/user-dashboard" className="font-bold text-center m-2">
          User Dashboard
        </Link>
      )}
      <button
        className="btn btn-error mt-2 btn-outline"
        onClick={logout}
      >
        Log out
      </button>
                    </>
                  ) : (
                    <Link href="/register" className="font-bold text-center">
                      Sign up
                    </Link>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <Link
              href="/"
              className={isActive("/") ? "font-bold text-blue-500" : "font-bold"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={isActive("/about") ? "font-bold text-blue-500" : "font-bold"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={isActive("/contact") ? "font-bold text-blue-500" : "font-bold"}
            >
              Contact
            </Link>
          </li>
          <li className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-full"
            >
              {user?.name ? (
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <Image
                      alt="user avatar"
                      src={user?.photoUrl||logo}
                      width={8}
                      height={8}
                    />
                  </div>
                </div>
              ) : (
                <FaPerson className="h-8 w-8" />
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {user?.name ? (
                <>
                  {user.role === 'admin' ? (
        <Link href="/admin-dashboard" className="font-bold text-center m-2">
          Admin Dashboard
        </Link>
      ) : (
        <Link href="/user-dashboard" className="font-bold text-center m-2">
          User Dashboard
        </Link>
      )}
      <button
        className="btn btn-error mt-2 btn-outline"
        onClick={logout}
      >
        Log out
      </button>
                </>
              ) : (
                <Link href="/register" className="font-bold">
                  Sign up
                </Link>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
