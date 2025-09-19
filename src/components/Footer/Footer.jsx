import Button from "@mui/material/Button";
import React from "react";
import { FaRegMessage, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Checkbox from "@mui/material/Checkbox";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-50 border-t border-gray-300">
      <div className="container pt-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* first div */}
          <div className="flex flex-col gap-4 pr-4 border-r-2 border-r-gray-300">
            <h3 className="text-xl font-semibold">Contact us</h3>
            <p>
              Classyshop - Mega Super Store <br />
              507-Union Trade Centre France
            </p>
            <p className="hover:text-primary cursor-pointer">sales@yourcompany.com</p>
            <p className="text-2xl font-bold">(+880) 1724 630245</p>
            <div className="flex gap-3 items-center">
              <FaRegMessage size={30} />
              <p>
                Online Chat <br /> Get Expert Help
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Products</h3>
            <Link to={"#"} className="hover:text-primary">Prices drop</Link>
            <Link to={"#"} className="hover:text-primary">New products</Link>
            <Link to={"#"} className="hover:text-primary">Best sales</Link>
            <Link to={"#"} className="hover:text-primary">Contact us</Link>
            <Link to={"#"} className="hover:text-primary">Sitemap</Link>
            <Link to={"#"} className="hover:text-primary">Stores</Link>
          </div>

          {/* Our company */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Our company</h3>
            <Link to={"#"} className="hover:text-primary">Delivery</Link>
            <Link to={"#"} className="hover:text-primary">Legal Notice</Link>
            <Link to={"#"} className="hover:text-primary">Terms and conditions of use</Link>
            <Link to={"#"} className="hover:text-primary">About us</Link>
            <Link to={"#"} className="hover:text-primary">Secure payment</Link>
            <Link to={"#"} className="hover:text-primary">Login</Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Subscribe to newsletter</h3>
            <p>
              Subscribe to our latest newsletter to get news about special discounts.
            </p>
            <input
              type="text"
              placeholder="Your Email Address"
              className="w-full py-2 px-3 border border-gray-300 rounded outline-none focus:border-primary"
            />
            <Button className="hover:!bg-red-500 !text-white !bg-black hover:!text-white">
              SUBSCRIBE
            </Button>
            <p className="flex items-start gap-2">
              <Checkbox />
              I agree to the terms and conditions and the privacy policy
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 mt-10 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social icons */}
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Center text */}
          <p className="text-gray-600 text-sm text-center">
            © {year} - Ecommerce Template
          </p>

          {/* Payment cards */}
          <div className="flex gap-1">
            <img src="./payment.png" alt="payment methods" className="h-8" />
            <img src="./payment-2.png" alt="payment methods" className="h-8" />
            <img src="./payment-3.png" alt="payment methods" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
