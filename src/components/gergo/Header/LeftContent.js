"use client";
import {
  Button,
  Kbd,
  Link,
  NavbarBrand,
  NavbarContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { projectConfig } from "app/config/project";
import SearchModal from "components/SearchModal";
import Translation from "components/Translation";
import Icon from "components/icons";
import { UserContext } from "contexts/UserContext";
import { ssoAPI } from "lib/sso";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function LeftContent({
  cookieData,
  dictionary,
  selectedLanguageFromCookie,
}) {
  const { isGlobalAdmin, isReseller, selectedBrand, userToken } =
    useContext(UserContext);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "k" || event.key === "K")
      ) {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleNTAKClick = async () => {
    let res = await ssoAPI.createToken(selectedBrand?.id, userToken);
    console.log(res);
    if (res.success) {
      router.push(`https://ntak.app.barsoft.hu/sso/${res.data.uuid}`);
    }
  };
  return (
    <NavbarContent className="flex grow-0 flex-row gap-3 p-0" justify="start">
      <NavbarBrand className="grow-0">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="48"
                fill="none"
                viewBox="0 0 57 58"
              >
                <rect
                  width="56.292"
                  height="56.292"
                  y=".854"
                  fill="#212123"
                  rx="13.245"
                  className="fill-current"
                />
                <path
                  fill="#E8E8E8"
                  className="fill-background"
                  d="M17.352 40.463V26h3.973v14.463h-3.973Zm0-15.761v-3.974h3.973v3.974h-3.973Zm7.172 15.761V20.728H32.1c1.36 0 2.561.239 3.603.715 1.06.477 1.89 1.184 2.49 2.12.6.936.9 2.092.9 3.47 0 1.342-.308 2.481-.926 3.417-.6.936-1.43 1.651-2.49 2.146-1.042.477-2.234.715-3.577.715h-3.47v7.152h-4.106Zm4.106-10.728h3.497c.583 0 1.086-.115 1.51-.345.424-.23.75-.547.98-.953.247-.406.37-.874.37-1.404 0-.548-.123-1.024-.37-1.43a2.429 2.429 0 0 0-.98-.954c-.424-.23-.927-.345-1.51-.345H28.63v5.43Z"
                />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2 p-4">
              <h1 className="text-md font-semibold">Modul választó</h1>
              <div className="grid grid-cols-2	gap-2 ">
                <Link
                  href="https://ipanel.barsoft.hu"
                  color="foreground"
                  className="flex flex-col items-center justify-center gap-2 rounded-lg bg-thirty p-2 "
                >
                  <div className="h-10 w-10">
                    <Icon
                      name="ipanelV1"
                      className="fill-current"
                      secondClassName={"fill-background"}
                    />
                  </div>
                  iPanel
                </Link>

                <Link
                  href="https://barsoft.hu/ipanel"
                  color="foreground"
                  className="flex flex-col items-center justify-center gap-2 rounded-lg bg-thirty p-2 "
                >
                  <div className="h-10 w-10">
                    <Icon
                      name="ipanelLogo"
                      className="fill-current"
                      secondClassName={"fill-background"}
                    />
                  </div>
                  iPanel V2
                </Link>
                <Link
                  href="https://barsoft.hu/billing"
                  color="foreground"
                  className="flex flex-col items-center justify-center gap-2 rounded-lg bg-thirty p-2 "
                >
                  <div className="h-10 w-10">
                    <Icon
                      name="ipanelLogo"
                      className="fill-primary"
                      secondClassName={"fill-white"}
                    />
                  </div>
                  Billing
                </Link>
                <Button
                  onPress={handleNTAKClick}
                  color="foreground"
                  className="flex h-auto flex-col items-center justify-center gap-2 rounded-lg bg-thirty p-2 "
                >
                  <div className="h-10 w-10">
                    <Icon
                      name="ntak"
                      className="fill-current"
                      secondClassName={"fill-background"}
                    />
                  </div>
                  NTAK portál
                </Button>
                {/* <Card isPressable onPress={() => router.push("billing")}>
                <CardBody className="flex  select-none flex-col items-center justify-center gap-3	">
                  <div className="h-10 w-10">
                    <Icon name="billing" className="stroke-current" />
                  </div>
                  <p className="text-lg font-bold">Billing</p>
                </CardBody>
              </Card>
              <Card
                isPressable={isGlobalAdmin}
                className={!isGlobalAdmin && "opacity-50"}
                onPress={() => router.push("ipanel")}
              >
                <CardBody className="flex h-44 w-44 select-none flex-col items-center justify-center gap-3	">
                  <div className="h-16 w-16">
                    <Icon
                      name="ipanelV2"
                      className="stroke-current"
                      secondClassName={"fill-current"}
                    />
                  </div>
                  <p className="text-lg font-bold">iPanel V2</p>
                  {!isGlobalAdmin && <p className="text-sm">Hamarosan...</p>}
                </CardBody>
              </Card> */}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        {/* <Link
          href={`/${projectConfig.baseURL}/brand/dashboard`}
          color="foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="48"
            fill="none"
            viewBox="0 0 57 58"
          >
            <rect
              width="56.292"
              height="56.292"
              y=".854"
              fill="#212123"
              rx="13.245"
              className="fill-current"
            />
            <path
              fill="#E8E8E8"
              className="fill-background"
              d="M17.352 40.463V26h3.973v14.463h-3.973Zm0-15.761v-3.974h3.973v3.974h-3.973Zm7.172 15.761V20.728H32.1c1.36 0 2.561.239 3.603.715 1.06.477 1.89 1.184 2.49 2.12.6.936.9 2.092.9 3.47 0 1.342-.308 2.481-.926 3.417-.6.936-1.43 1.651-2.49 2.146-1.042.477-2.234.715-3.577.715h-3.47v7.152h-4.106Zm4.106-10.728h3.497c.583 0 1.086-.115 1.51-.345.424-.23.75-.547.98-.953.247-.406.37-.874.37-1.404 0-.548-.123-1.024-.37-1.43a2.429 2.429 0 0 0-.98-.954c-.424-.23-.927-.345-1.51-.345H28.63v5.43Z"
            />
          </svg>
        </Link> */}
      </NavbarBrand>
      <Link
        color={pathname.startsWith("/brand/") ? "primary" : "foreground"}
        href={`/${projectConfig.baseURL}/brand/dashboard`}
        className="hidden sm:block"
      >
        Brand
      </Link>
      {isGlobalAdmin && (
        <Link
          color={pathname.startsWith("/global/") ? "primary" : "foreground"}
          href={`/${projectConfig.baseURL}/global/dashboard`}
          className="hidden sm:block"
        >
          Global
        </Link>
      )}
      {isReseller && (
        <Link
          color={pathname.startsWith("/reseller/") ? "primary" : "foreground"}
          href={`/${projectConfig.baseURL}/reseller/dashboard`}
          className="hidden sm:block"
        >
          Reseller
        </Link>
      )}

      <Button
        auto
        aria-label="Quick search"
        className="hidden bg-default-400/40 text-sm font-normal text-default-500 dark:bg-default-500/20 sm:flex "
        onClick={() => setIsOpen(!isOpen)}
        startContent={
          <div className="h-4 w-4">
            <Icon name="search" className="stroke-current" />
          </div>
        }
        endContent={<Kbd>Ctrl + K</Kbd>}
        data-tut="search"
      >
        <p className="opacity-70">
          <Translation
            defaultValue={
              dictionary?.["header.ipanelV2.search"]?.[
                selectedLanguageFromCookie
              ]
            }
            transkey={"header.ipanelV2.search"}
          />
        </p>
      </Button>
      <Button
        auto
        aria-label="Quick search"
        className="flex bg-default-400/40 text-sm font-normal text-default-500 dark:bg-default-500/20 sm:hidden "
        onClick={() => setIsOpen(!isOpen)}
        isIconOnly
      >
        <div className="h-4 w-4">
          <Icon name="search" className="stroke-current" />
        </div>
      </Button>
      {isOpen && (
        <SearchModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dictionary={dictionary}
          cookieData={cookieData}
          selectedLanguageFromCookie={selectedLanguageFromCookie}
        />
      )}
    </NavbarContent>
  );
}
