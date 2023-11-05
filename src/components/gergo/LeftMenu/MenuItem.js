"use client";
import { Chip, Link } from "@nextui-org/react";
import Translation from "components/Translation";
import Icon from "components/icons";
import { UserContext } from "contexts/UserContext";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { canUseFeature } from "utils/AppPermission";

export default function MenuItem({
  dictionary,
  selectedLanguageFromCookie,
  name,
  module,
  app,
  feature,
  isMenuOpen,
  setIsMenuOpen,
  anySubID,
}) {
  const { userData, selectedBrand, logs } = useContext(UserContext);
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
        pathname.startsWith(`${module}/${name}`) ? "primary" : "foreground"
      }
      href={`/${module}/${name}`}
      key={`${module}/${name}`}
      isDisabled={!canUse}
      className={
        `flex w-full flex-row items-center justify-between gap-3 bg-transparent p-2 pl-4 hover:bg-thirty/40 ` +
        `${
          pathname.startsWith(`/${module}/${name}`)
            ? "border-l-4 border-primary"
            : "border-l-4 border-transparent"
        }`
      }
    >
      <div className="flex flex-row items-center gap-2">
        <div className="h-4 w-4">
          <Icon
            name={name}
            className={
              pathname === `/${module}/${name}`
                ? "stroke-primary"
                : "stroke-foreground"
            }
            secondClassName={
              pathname === `/${module}/${name}`
                ? "fill-primary"
                : "fill-foreground"
            }
          />
        </div>
        <div
          className={`${
            pathname.includes(`${module}/${name}`)
              ? "text-primary"
              : "text-current"
          }`}
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
      </div>
      {name === "error-logs" && (
        <Chip color={logs?.length > 0 ? "danger" : "success"} variant="flat">
          {logs?.length}
        </Chip>
      )}
      {!canUse && (
        <div className="h-4 w-4">
          <Icon
            name={"lock"}
            className={
              pathname === `/${module}/${name}`
                ? "stroke-primary"
                : "stroke-current"
            }
          />
        </div>
      )}
    </Link>
  );
}
