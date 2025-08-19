import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="px-[198px] flex items-center justify-between bg-[#0A0A0A] text-[#FFFFFF] py-5">
      <div className="icon">
        <Image src="/logo.png" width={238} height={44} alt=""></Image>
      </div>
      <div>
        <ul className="flex items-center gap-10 font-anton">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
