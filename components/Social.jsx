import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/bhavesh-jethava-b41186101" },
    { icon: <FaWhatsapp />, path: "https://wa.me/919924677037" },
    { icon: <FaGithub />, path: "https://github.com/j-bhavesh" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;