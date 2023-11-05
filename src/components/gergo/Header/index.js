import { cookies } from "next/headers";
import HeaderContent from "./Content";

async function getDictionaryKeys() {
  let userLanguage = cookies().get("selectedLanguage");

  try {
    const res = await fetch(
      `https://ipanel.barsoft.hu/api/v1/dictionary/global?app=ipanelV2&group=components&language=${
        userLanguage?.value || "hu"
      }`,
    );
    return res.json();
  } catch (e) {
    return { success: false, message: "Failed dictionary fetch" };
  }
}

export default async function Header() {
  let dictionary = {};
  let userLanguage = cookies().get("selectedLanguage");
  let selectedLanguageFromCookie = userLanguage?.value || "hu";
  const res = await getDictionaryKeys();

  if (res.success) {
    dictionary = res.data.reduce((accumulator, element) => {
      return { ...accumulator, [element.key]: element };
    }, {});
  }

  const cookieData = {
    isGlobalAdmin: cookies().get("userIsGlobalAdmin")?.value,
    isReseller: cookies().get("userIsReseller")?.value,
    userEmail: cookies().get("userEmail")?.value,
    userName: cookies().get("userName")?.value,
    selectedLanguage: cookies().get("selectedLanguage")?.value || "hu",
  };

  return (
    <div
      className=" bg-topBar w-full border-b-1 border-border"
      data-tut="topBar"
    >
      <HeaderContent
        cookieData={cookieData}
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
      />
    </div>
  );
}
