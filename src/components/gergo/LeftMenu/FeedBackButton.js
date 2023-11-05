"use client";

import { Button } from "@nextui-org/react";
import FeedBackForm from "components/FeedBack";
import Translation from "components/Translation";
import { useState } from "react";

function FeedBackButton({ dictionary, selectedLanguageFromCookie }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        fullWidth
        className="mt-2"
        variant="flat"
        data-tut="feedback"
      >
        <Translation
          defaultValue={
            dictionary?.["leftMenu.ipanelV2.feedback"]?.[
              selectedLanguageFromCookie
            ]
          }
          transkey={"leftMenu.ipanelV2.feedback"}
        />
      </Button>
      <FeedBackForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
      />
    </>
  );
}

export default FeedBackButton;
