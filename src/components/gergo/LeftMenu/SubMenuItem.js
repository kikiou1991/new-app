import { Link } from "@nextui-org/react";
import Translation from "components/Translation";
import Icon from "components/icons";
import { UserContext } from "contexts/UserContext";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { canUseFeature } from "utils/AppPermission";

export default function SubMenuItem({
  dictionary,
  mainCateg,
  selectedLanguageFromCookie,
  name,
  module,
  app,
  feature,
  isMenuOpen,
  setIsMenuOpen,
  anySubID,
}) {
  const { userData, selectedBrand } = useContext(UserContext);
  const canUse = canUseFeature(
    userData,
    app,
    feature,
    selectedBrand?.id,
    null,
    anySubID,
  );
  const pathname = usePathname();
  return (
    <Link
      as={NextLink}
      color={
        pathname.startsWith(`${module}/${mainCateg}/${name}`)
          ? "primary"
          : "foreground"
      }
      href={`/${module}/${mainCateg}/${name}`}
      key={`${module}/${mainCateg}/${name}`}
      className={
        pathname.includes(`${module}/${mainCateg}/${name}`)
          ? "flex w-full flex-row items-center justify-between gap-3 border-l-4 border-primary bg-transparent py-1 pl-2 hover:bg-thirty/40"
          : "flex w-full flex-row items-center justify-between gap-3 border-l-4 border-transparent bg-transparent  py-1 pl-2 hover:bg-thirty/40"
      }
      isDisabled={!canUse}
    >
      <div
        className={`${
          pathname.includes(`${module}/${mainCateg}/${name}`)
            ? "text-primary"
            : "text-current"
        } pl-4`}
      >
        <Translation
          defaultValue={
            dictionary?.[`leftBar.ipanelV2.menu.${name}`]?.[
              selectedLanguageFromCookie
            ]
          }
          transkey={`leftBar.ipanelV2.menu.${name}`}
        />
      </div>
      <div className="h-4 w-4">
        {!canUse && (
          <Icon
            name={"lock"}
            className={
              pathname === `/${module}/${name}`
                ? "stroke-primary"
                : "stroke-current"
            }
          />
        )}
      </div>
    </Link>
  );
}
