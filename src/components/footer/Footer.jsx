import companyLogo from "../../assets/icons/company-logo.svg";
import logo from "../../assets/icons/logo-white.svg";
import { contactPrompt, email, footerCTA, menuList, phoneNumber } from "../../data/footer";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col justify-center items-center pt-10">
      <section className="max-w-375 w-full text-white py-15 px-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>

          <div className="mt-4 md:mt-0 flex flex-col items-start sm:flex-row sm:justify-between sm:items-baseline">
            <p className="inline-block mb-4 md:mr-2">{contactPrompt}</p>
            <Button className="bg-green text-white border-2 border-transparent hover:bg-black hover:border-green">
              {footerCTA}
            </Button>
          </div>
        </div>
        <div className="bg-white h-px my-8 md:my-16"></div>
        <div className="flex flex-col sm:flex-row justify-between">
          <ul className="flex gap-2 text-[14px] mb-3 md:gap-4">
            {menuList?.map(({ id, name }) => (
              <li
                key={id}
                className="border-b-2 border-b-transparent hover:border-white transition-all duration-200 ease-in-out"
              >
                <a href="#">{name}</a>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 md:gap-6">
            <span>{phoneNumber}</span>
            <span>{email}</span>
          </div>
        </div>

        <div className="flex flex-col mt-15 sm:flex-row sm:justify-between">
          <span>Prawa zastrzeżone © 2022</span>
          <span className="flex mt-2 sm:mt-0">
            made by
            <a href="#" className="cursor-pointer ml-3">
              <img src={companyLogo} alt="company logo" />
            </a>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
