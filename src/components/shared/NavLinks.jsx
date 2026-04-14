'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdHome } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { GoGraph } from "react-icons/go";
const NavLinks = ({href, text}) => {
    const pathName=usePathname()
    return (
        <li className={`text-[#64748b] font-semibold px-4 py-3 rounded-sm ${pathName===href&& 'bg-[#244d3f]  text-white'}`}>
            <Link href={href} className="flex gap-1 items-center" >{text==='Home'?<IoMdHome size={20} />:text==='Timeline'?<IoMdTime size={20} />:<GoGraph size={20} />}{text}</Link>
        </li>
    );
};

export default NavLinks;