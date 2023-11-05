import LanguageSelect from "components/LanguageSelect";
import { cookies } from "next/headers";
import LeftMenuContent from "./Content";
import FeedBackButton from "./FeedBackButton";
import Support from "./Support";
import ThemeSwitcher from "./ThemeSwitcher";
async function getDictionaryKeys() {
  let userLanguage = cookies().get("selectedLanguage");

  try {
    const res = await fetch(
      `https://ipanel.barsoft.hu/api/v1/dictionary/global?app=ipanelV2&group=leftBar&language=${
        userLanguage?.value || "hu"
      }`,
    );
    return res.json();
  } catch (e) {
    return { success: false, message: "Failed dictionary fetch" };
  }
}
async function LeftMenu() {
  let dictionary = {};
  let userLanguage = cookies().get("selectedLanguage");
  let selectedLanguageFromCookie = userLanguage?.value || "hu";

  const res = await getDictionaryKeys();

  if (res.success) {
    dictionary = res.data.reduce((accumulator, element) => {
      return { ...accumulator, [element.key]: element };
    }, {});
  }
  return (
    <div
      data-tut="leftBar"
      className="no-scrollbar relative hidden h-full w-72 max-w-xs flex-col items-center justify-between overflow-hidden  border-r-1 border-border py-2 md:flex"
    >
      <LeftMenuContent
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
      />
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-background p-2">
        <FeedBackButton
          dictionary={dictionary}
          selectedLanguageFromCookie={selectedLanguageFromCookie}
        />
        <div className="flex w-full flex-row items-center justify-center gap-4 bg-background p-2">
          <Support />

          <ThemeSwitcher
            dictionary={dictionary}
            selectedLanguageFromCookie={selectedLanguageFromCookie}
          />
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
