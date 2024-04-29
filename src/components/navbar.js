import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 mx-10 px-6 border-b-[1px] bg-transparent z-10">
            <a href="" className="font-bold">XWING.GE</a>
            <ul className="flex space-x-6 items-center text-xs">
                <li>
                    Create an account
                </li>
                <li className="btn btn-warning text-white font-semibold w-28">
                    Login
                </li>
                <li>
                    <Image 
                        src="world.svg"
                        width={25}
                        height={25}
                        alt="World icon"
                        className="text-white"
                    />
                    
                </li>
            </ul>
        </nav>
    );
}