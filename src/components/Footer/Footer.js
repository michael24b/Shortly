import fb from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pin from "../../images/icon-pinterest.svg";
import insta from "../../images/icon-instagram.svg";
import MenuItem from "./MenuItem";

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:px-8 md:items-start">
        {/* <!-- Logo --> */}
        <img src="images/logo.svg" alt="" />

        {/* <!-- Menus Container --> */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* <!-- Menu 1 --> */}
          <MenuItem
            title="Features"
            first="Link Shortening"
            second="Branded Links"
            third="Analytics"
            fourth=""
          />

          <MenuItem
            title="Resources"
            first="Blog"
            second="Developers"
            third="Support"
            fourth=""
          />
          <MenuItem
            title="Company"
            first="About"
            second="Our Team"
            third="Careers"
            fourth="Contact"
          />
        </div>

        {/* <!-- Social Container --> */}
        <div className="flex space-x-6">
          <a href>
            <img src={fb} alt="" className="ficon" />
          </a>
          <a href>
            <img src={twitter} alt="" className="ficon" />
          </a>
          <a href>
            <img src={pin} alt="" className="ficon" />
          </a>
          <a href>
            <img src={insta} alt="" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
