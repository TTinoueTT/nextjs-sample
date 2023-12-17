"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-slate-600 text-gray-100 shadow-lg">
            <nav className="flex items-center justify-between p-4">
                <Link href={"/"} className="text-xl font-bold">
                    Book Commerce
                </Link>
                <div className="flex items-center gap-1">
                    <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                        ホーム
                    </Link>
                    <Link href="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                        ログイン
                    </Link>

                    <Link href={"/profile"}>
                        <Image width={50} height={50} alt="profile_icon" src={"/icon.webp"} />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
