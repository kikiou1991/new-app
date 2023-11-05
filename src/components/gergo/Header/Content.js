"use client";
import { Navbar } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function HeaderContent({ cookieData, dictionary, selectedLanguageFromCookie }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [pathname]);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        base: " w-screen",
        wrapper: "w-screen  max-w-none",
      }}
      position="sticky"
    >
      <LeftContent
        cookieData={cookieData}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
      />
      <RightContent
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cookieData={cookieData}
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
      />
    </Navbar>
  );
}

export default HeaderContent;
