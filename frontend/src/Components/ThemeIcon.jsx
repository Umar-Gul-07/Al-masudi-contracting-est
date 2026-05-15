import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaPlay,
  FaRegClock,
  FaRegUser,
  FaStar,
  FaXTwitter,
} from "react-icons/fa6";

const iconMap = {
  "angle-left": FaAngleLeft,
  "angle-right": FaAngleRight,
  clock: FaRegClock,
  "facebook-f": FaFacebookF,
  instagram: FaInstagram,
  "linkedin-in": FaLinkedinIn,
  "pinterest-p": FaPinterestP,
  play: FaPlay,
  star: FaStar,
  user: FaRegUser,
  "x-twitter": FaXTwitter,
};

function ThemeIcon({ name, className = "", ...props }) {
  const Icon = iconMap[name];

  if (!Icon) {
    return null;
  }

  return <Icon className={`theme-icon ${className}`.trim()} aria-hidden="true" {...props} />;
}

export default ThemeIcon;
