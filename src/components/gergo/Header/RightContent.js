"use client";
import { NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import BrandSelect from "components/BrandSelect";
import Profile from "components/Profile";
import MobileMenu from "./MobileMenu";

export default function RightContent({
  isMenuOpen,
  cookieData,
  dictionary,
  setIsMenuOpen,
}) {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="cursor-pointer">
        <Profile
          defaultEmailValue={cookieData?.userEmail}
          defaultNameValue={cookieData?.userName}
        />
      </NavbarItem>
      <NavbarItem className="hidden sm:flex">
        <BrandSelect
          dictionary={dictionary}
          selectedLanguageFromCookie={cookieData?.selectedLanguage}
        />
      </NavbarItem>
      {/* <NavbarItem className="hidden sm:flex">
        <Support
          dictionary={dictionary}
          selectedLanguageFromCookie={cookieData?.selectedLanguage}
        />
      </NavbarItem> */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <MobileMenu
        dictionary={dictionary}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </NavbarContent>
  );
}
