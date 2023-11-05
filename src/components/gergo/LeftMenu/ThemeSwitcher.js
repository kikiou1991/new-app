"use client";

import { Button } from "@nextui-org/react";
import ThemeSelector from "components/ThemeSelector";
import Translation from "components/Translation";
import { useState } from "react";

function TheSwitcher({ dictionary, selectedLanguageFromCookie }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ThemeSelector isOpen={isOpen} setIsOpen={setIsOpen} />
      <Button onClick={() => setIsOpen(!isOpen)} data-tut="switchTheme">
        <Translation
          defaultValue={
            dictionary?.["leftBar.ipanelV2.theme.switcher.label"]?.[
              selectedLanguageFromCookie
            ]
          }
          transkey="leftBar.ipanelV2.theme.switcher.label"
        />
      </Button>
    </>
  );
}

export default TheSwitcher;
