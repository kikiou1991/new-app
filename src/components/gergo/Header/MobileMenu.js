import {
  Link,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { projectConfig } from "app/config/project";

import BrandSelect from "components/BrandSelect";
import Selector from "components/LanguageSelect/Selector";
import LeftMenuContent from "components/LeftMenu/Content";
import TheSwitcher from "components/LeftMenu/ThemeSwitcher";
import { UserContext } from "contexts/UserContext";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function MobileMenu({
  dictionary,
  selectedLanguageFromCookie,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const pathname = usePathname();
  const { isGlobalAdmin, isReseller } = useContext(UserContext);
  return (
    <NavbarMenu className="overflow-y-scroll pb-0">
      <NavbarItem className="flex flex-row gap-2">
        <BrandSelect />
        <TheSwitcher
          dictionary={dictionary}
          selectedLanguageFromCookie={selectedLanguageFromCookie}
        />
        <Selector userLanguage={selectedLanguageFromCookie} />
      </NavbarItem>
      <NavbarMenuItem>
        <Link
          color={pathname.startsWith("/brand/") ? "primary" : "foreground"}
          href={`/${projectConfig.baseURL}/brand/dashboard`}
          onPress={() => setIsMenuOpen(false)}
        >
          Brand
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        {isGlobalAdmin && (
          <Link
            color={pathname.startsWith("/global/") ? "primary" : "foreground"}
            href={`/${projectConfig.baseURL}/global/dashboard`}
            onPress={() => setIsMenuOpen(false)}
          >
            Global
          </Link>
        )}
      </NavbarMenuItem>
      <NavbarMenuItem>
        {isReseller && (
          <Link
            color={pathname.startsWith("/reseller/") ? "primary" : "foreground"}
            href={`/${projectConfig.baseURL}/reseller/dashboard`}
            onPress={() => setIsMenuOpen(false)}
          >
            Reseller
          </Link>
        )}
      </NavbarMenuItem>
      <div className=" h-1 w-full border-b-1 border-border"></div>
      <LeftMenuContent
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </NavbarMenu>
  );
}
