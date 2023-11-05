import { cookies } from "next/headers";
import ErrorContent from "./ErrorContent";
import ErrorHeader from "./ErrorHeader";
import { ErrorLogsContextProvider } from "./ErrorLogsContext";
async function getDictionaryKeys() {
  let userLanguage = cookies().get("selectedLanguage");

  try {
    const res = await fetch(
      `https://ipanel.barsoft.hu/api/v1/dictionary/global?app=ipanelV2&group=errors&language=${
        userLanguage?.value || "hu"
      }`,
    );
    return res.json();
  } catch (e) {
    return { success: false, message: "Failed dictionary fetch" };
  }
}
async function Errors() {
  let dictionary = {};
  let userLanguage = cookies().get("selectedLanguage");
  let selectedLanguageFromCookie = userLanguage?.value || "hu";

  const res = await getDictionaryKeys();

  if (res.success) {
    dictionary = res.data.reduce((accumulator, element) => {
      return { ...accumulator, [element.key]: element };
    }, {});
  } else {
    console.log(res);
  }
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <ErrorLogsContextProvider
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
      >
        <ErrorHeader
          dictionary={dictionary}
          selectedLanguageFromCookie={selectedLanguageFromCookie}
        />
        <ErrorContent
          dictionary={dictionary}
          selectedLanguageFromCookie={selectedLanguageFromCookie}
        />
      </ErrorLogsContextProvider>
    </div>
  );
}

export default Errors;
