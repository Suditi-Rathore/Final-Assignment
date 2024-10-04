

const ContactFooter = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-around w-full border-2 border-gray-200 mt-20 md:p-20">
      <div className="flex flex-col gap-3 p-4 md:gap-5">
        <img className="w-20 md:w-36" src="/images/image.png" alt="img" />
        <div>
        <p>Email: info@ecomposershop.com</p>
        <p>Phone: 212 555-1234</p>
        </div>
        <p>Sign up for sale, new arrivals & more</p>
        <div className="flex justify-between items-center border-[1px] border-black md:text-base text-xs ">
        <i className="bi bi-envelope text-sm px-2">
            <input type="text" placeholder="Enter email...."  /></i>
            <button className="bg-black text-white p-2">Sign Up</button>

        </div>
      </div>

      <div className="flex md:flex-row flex-col px-5 gap-9 md:gap-20">
        <ul className="space-y-5">
            <label className="font-bold">About us</label>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact </li>
        </ul>
        <ul className="space-y-5">
            <label className="font-bold">Help</label>
            <li>FAQ</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Sitemap </li>
        </ul>
        <ul className="space-y-5">
            <label className="font-bold">Resources</label>
            <li>Return</li>
            <li>Find Store</li>
            <li>Legal</li>
            <li>Contact </li>
        </ul>
        <ul className="space-y-5">
            <label className="font-bold">Help</label>
            <li>FAQ</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Sitemap </li>
        </ul>
      </div>
    
    </div>
    
  );
};

export default ContactFooter;
