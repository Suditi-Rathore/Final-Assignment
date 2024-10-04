import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full  bg-white flex justify-between items-center px-5 ">
      <div><img className="w-20 md:w-40" src="https://ecomposer.app/images/logo-text.png" alt="img" /></div>
      <div className="flex md:p-5 md:gap-4 md:text-base  p-3 gap-2 text-xs">
      <Link href="/" passHref className="bg-gray-300 text-[#2d394b] md:p-3 rounded-md p-1">
        Seasonal Holiday
      </Link>
      <Link href="/contact" passHref className="bg-gray-300 text-[#2d394b] md:p-3 rounded-md p-1">
        Contact Us
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
