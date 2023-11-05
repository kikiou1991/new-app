"use client";
import { Accordion, AccordionItem, ScrollShadow } from "@nextui-org/react";
import Translation from "components/Translation";
import Icon from "components/icons";
import { UserContext } from "contexts/UserContext";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import Common from "./Common";
import MenuItem from "./MenuItem";
import { menuItems } from "./MenuItems";
import SubMenuItem from "./SubMenuItem";

function LeftMenuContent({
  dictionary,
  selectedLanguageFromCookie,
  isMenuOpen = false,
  setIsMenuOpen,
}) {
  const pathname = usePathname();
  const { userData, selectedBrand, logs, isGlobalAdmin, isFruitUser } =
    useContext(UserContext);
  let activeMenuItems = [];

  if (pathname.startsWith("/brand/")) {
    activeMenuItems = menuItems.brand;
  } else if (pathname.startsWith("/global/")) {
    activeMenuItems = menuItems.global;
  } else if (pathname.startsWith("/reseller/")) {
    activeMenuItems = menuItems.reseller;
  }
  return (
    <div className="flex  w-full grow flex-col items-center justify-start overflow-hidden">
      <ScrollShadow className="h-full w-full">
        <div
          data-tut="menuItems"
          className="flex w-full flex-col items-center justify-center overflow-hidden  pl-0"
        >
          {activeMenuItems
            ?.filter((item) =>
              isGlobalAdmin ? true : !item.onlyGlobalAdmin === true,
            )
            ?.map((item) => {
              if (item.haveSubmenu) {
                return (
                  <Accordion
                    isCompact
                    key={item.name}
                    className="w-full px-4 "
                    defaultExpandedKeys={
                      (pathname.startsWith(`/${item.module}/${item.name}`) &&
                        "1") ||
                      ""
                    }
                  >
                    <AccordionItem
                      key="1"
                      aria-label={
                        <Translation
                          defaultValue={
                            dictionary?.[
                              `leftBar.ipanelV2.menu.${item.name}`
                            ]?.[selectedLanguageFromCookie]
                          }
                          transkey={`leftBar.ipanelV2.menu.${item.name}`}
                        />
                      }
                      title={
                        <div
                          className={
                            pathname.includes(item.href)
                              ? "text-primary"
                              : "text-current"
                          }
                        >
                          <Translation
                            defaultValue={
                              dictionary?.[
                                `leftBar.ipanelV2.menu.${item.name}`
                              ]?.[selectedLanguageFromCookie]
                            }
                            transkey={`leftBar.ipanelV2.menu.${item.name}`}
                          />
                        </div>
                      }
                      startContent={
                        <div className="h-4 w-4">
                          <Icon
                            name={item.name}
                            className={
                              pathname === `/${item.module}/${item.name}`
                                ? "stroke-primary"
                                : "stroke-current"
                            }
                            secondClassName={
                              pathname === `/${item.module}/${item.name}`
                                ? "fill-primary"
                                : "fill-foreground"
                            }
                          />
                        </div>
                      }
                      className="w-full border-l-4 border-transparent"
                    >
                      {item?.submenus
                        ?.filter((subItem) =>
                          isFruitUser ? true : !subItem.fruitOnly === true,
                        )
                        ?.map((subitem) => {
                          return (
                            <SubMenuItem
                              key={`${subitem.module}/${subitem.name}`}
                              dictionary={dictionary}
                              selectedLanguageFromCookie={
                                selectedLanguageFromCookie
                              }
                              name={subitem.name}
                              module={item.module}
                              mainCateg={item.name}
                              feature={subitem.feature}
                              app={subitem.app}
                              isMenuOpen={isMenuOpen}
                              anySubID={subitem.anySubID}
                              setIsMenuOpen={setIsMenuOpen}
                            />
                          );
                        })}
                    </AccordionItem>
                  </Accordion>
                );
              } else {
                return (
                  <MenuItem
                    key={`${item.module}/${item.name}`}
                    dictionary={dictionary}
                    selectedLanguageFromCookie={selectedLanguageFromCookie}
                    name={item.name}
                    module={item.module}
                    feature={item.feature}
                    app={item.app}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    anySubID={item.anySubID}
                  />
                );
              }
            })}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t-1 border-border p-2">
          <Common
            dictionary={dictionary}
            selectedLanguageFromCookie={selectedLanguageFromCookie}
          />
          {/* <FeedBackButton
            dictionary={dictionary}
            selectedLanguageFromCookie={selectedLanguageFromCookie}
          /> */}
        </div>
      </ScrollShadow>
    </div>
  );
}

export default LeftMenuContent;
