"use client";

import { Button } from "@nextui-org/react";
import Icon from "components/icons";
import { useEffect, useState } from "react";

function Support() {
  const [isOpen, setIsOpen] = useState(false);
  const onTidioChatApiReady = () => {
    window.tidioChatApi?.hide();
  };
  const handleClick = () => {
    if (isOpen) {
      window.tidioChatApi.hide();
      setIsOpen(false);
    } else {
      window.tidioChatApi.show();
      window.tidioChatApi.open();
      setIsOpen(true);
    }
  };
  useEffect(() => {
    document.addEventListener("tidioChat-ready", onTidioChatApiReady);
  }, []);
  useEffect(() => {
    if (window.tidioChatApi) {
      window.tidioChatApi.on("open", () => {
        console.log("opened");
        setIsOpen(true);
      });
    }
  }, []);
  return (
    <Button
      isIconOnly
      onPress={handleClick}
      color={isOpen ? "primary" : "default"}
    >
      <div className="h-6 w-6">
        <Icon name="support" className="stroke-current" />
      </div>
    </Button>
  );
}

export default Support;
