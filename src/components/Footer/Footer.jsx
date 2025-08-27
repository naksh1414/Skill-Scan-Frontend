import logo from "../../assets/lightLogo.png";
import LightLogo from "../../assets/SkillScanLogo.png";
import { Linkedin } from "lucide-react";
// import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
// import { Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import useTheme from "../../context/theme";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
function Footer() {
  const { themeMode } = useTheme();
  return (
    <div className="px-8 md:px-16 pt-8 flex flex-col items-center bg-white dark:bg-[#023247] border-t border-t-[#02324742] dark:border-t-[#ffffff]/30 no-prnt">
      <div className="flex flex-col justify-between w-full gap-10 md:flex-row ">
        {themeMode == "dark" ? (
          <Link
            to={"/"}
            className="flex justify-center w-full md:w-40 md:justify-start"
          >
            <img src={LightLogo} alt="" className="object-cover w-40 h-11" />
          </Link>
        ) : (
          <Link
            to={"/"}
            className="flex justify-center w-full md:w-40 md:justify-start"
          >
            <img src={logo} alt="" className="object-cover w-40 h-11" />
          </Link>
        )}

        <div className="flex gap-20">
          <div>
            <p className="text-[#023247] dark:text-white text-lg font-bold mb-4">
              Solutions
            </p>
            <ul className="flex flex-col gap-2 dark:text-white/90">
              <Link to={"/jobs"}>Jobs/Careers</Link>
              <Link to={"/resume-builder"}>Resume Templates</Link>
              <Link to={"/qr-generator"}>QR Generator</Link>
              <Link to={"/blogs"}>Blogs</Link>
            </ul>
          </div>
          <div>
            <p className="text-[#023247] dark:text-white text-lg font-bold mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2 dark:text-white/90">
              <Link to={"/about-us"}>About Us</Link>
              <Link to={"/jobs"}>Career</Link>
              <Link to={"/#contact-form"}>Contact</Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[#023247] text-lg font-bold mb-4 dark:text-white">
            Follow us on
          </p>
          <div className="flex gap-8 mt-2 dark:text-white/90">
            <Link
              to={
                "https://www.linkedin.com/in/Skill Scan-b3633434b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              target={"_blank"}
            >
              <Linkedin className="w-7 h-7" />
            </Link>
            <Link to={"https://x.com/Skill Scan?s=21"} target={"_blank"}>
              <FaXTwitter className="w-7 h-7" />
            </Link>
            <Link
              to={
                "https://www.instagram.com/Skill Scan?igsh=eHNwbm9mZWV2bzNi&utm_source=qr"
              }
              target={"_blank"}
            >
              <Instagram className="w-7 h-7" />
            </Link>
            <Link
              to={"https://www.threads.net/@Skill Scan?igshid=NTc4MTIwNjQ2YQ=="}
              target={"_blank"}
            >
              <FaThreads className={"w-7 h-7"} />
            </Link>
          </div>
        </div>
      </div>
      <hr className="h-0 w-full mt-10 border-[#02324742] dark:border-[#ffffff]/30  " />
      <p className="py-5 text-center text-black/90 dark:text-white/90">
        ©Skill Scan 2025. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
