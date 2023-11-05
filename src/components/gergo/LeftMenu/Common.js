"use client";
import { Link } from "@nextui-org/react";
import Translation from "components/Translation";
import Icon from "components/icons";
import NextLink from "next/link";

export default function Common({ dictionary, selectedLanguageFromCookie }) {
  return (
    <>
      {/* <Link
        as={NextLink}
        showAnchorIcon
        color="foreground"
        href={"https://ipanel.barsoft.hu/"}
        isExternal
        className="flex w-full flex-row items-center justify-between gap-3 p-2"
      >
        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            fill="none"
            viewBox="0 0 16 17"
          >
            <path
              stroke="#101828"
              strokeWidth="1.5"
              className="stroke-current"
              d="M1.333 4.5c0-.933 0-1.4.182-1.756.16-.314.414-.57.728-.729.357-.182.823-.182 1.757-.182.933 0 1.4 0 1.756.182.314.16.569.415.729.729.181.356.181.823.181 1.756 0 .934 0 1.4-.181 1.757a1.67 1.67 0 0 1-.729.728c-.356.182-.823.182-1.756.182-.934 0-1.4 0-1.757-.182a1.667 1.667 0 0 1-.728-.728c-.182-.357-.182-.823-.182-1.757Zm0 8c0-.933 0-1.4.182-1.757.16-.313.414-.568.728-.728.357-.181.823-.181 1.757-.181.933 0 1.4 0 1.756.181.314.16.569.415.729.728.181.357.181.824.181 1.757 0 .934 0 1.4-.181 1.757a1.67 1.67 0 0 1-.729.728c-.356.182-.823.182-1.756.182-.934 0-1.4 0-1.757-.182a1.667 1.667 0 0 1-.728-.728c-.182-.357-.182-.823-.182-1.757Zm8 0c0-.933 0-1.4.182-1.757.16-.313.414-.568.728-.728.357-.181.823-.181 1.757-.181.933 0 1.4 0 1.756.181.314.16.569.415.729.728.181.357.181.824.181 1.757 0 .934 0 1.4-.181 1.757a1.67 1.67 0 0 1-.729.728c-.356.182-.823.182-1.756.182-.934 0-1.4 0-1.757-.182a1.667 1.667 0 0 1-.728-.728c-.182-.357-.182-.823-.182-1.757Z"
            />
            <path
              fill="#101828"
              className="fill-current"
              d="m13.777 3.928-2.205 2.205.707.707 2.205-2.205-.707-.707Zm-3.41 1 2.205-2.205-.707-.707L9.66 4.22l.707.707Zm-.24 1.654c-.117.025-.21.045-.29.06a1.52 1.52 0 0 1-.171.024c-.037.002-.034-.002-.011.004a.25.25 0 0 1 .11.065l-.707.707c.216.216.485.234.671.222.177-.011.393-.059.607-.104l-.21-.978ZM8.94 6.164c-.046.214-.093.43-.104.606-.012.186.006.456.222.672l.707-.707a.254.254 0 0 1 .065.11c.006.023.001.026.004-.011.002-.036.01-.09.024-.17.015-.08.035-.174.06-.291l-.978-.21Zm4.837-3.441c.245.245.295.301.32.345l.867-.5c-.108-.187-.28-.353-.48-.552l-.707.707Zm.707 1.912c.2-.2.372-.366.48-.553l-.867-.5c-.025.044-.075.1-.32.346l.707.707Zm-.387-1.567a.514.514 0 0 1 0 .514l.867.5c.27-.468.27-1.045 0-1.514l-.867.5Zm.387-1.052c-.2-.2-.366-.372-.553-.48l-.5.866c.045.026.1.076.346.321l.707-.707Zm-1.912.707c.245-.245.301-.295.346-.32l-.5-.867c-.187.108-.353.28-.553.48l.707.707Zm1.36-1.187a1.514 1.514 0 0 0-1.514 0l.5.866a.514.514 0 0 1 .513 0l.5-.866Zm-2.36 4.597c-.13.13-.309.214-.562.28a5.398 5.398 0 0 1-.413.083c-.145.025-.31.052-.47.086l.209.978c.134-.03.272-.052.431-.079.154-.026.322-.057.49-.1.337-.086.712-.23 1.022-.541l-.707-.707Zm-1.654.24c.034-.16.061-.326.086-.47a5.08 5.08 0 0 1 .084-.413c.064-.253.149-.431.279-.562l-.707-.707c-.31.31-.455.685-.541 1.021a6.36 6.36 0 0 0-.1.49c-.028.16-.05.297-.079.432l.978.209Z"
            />
          </svg>
          <Translation
            defaultValue={
              dictionary?.["leftBar.ipanelV2.external.appEditor"]?.[
                selectedLanguageFromCookie
              ]
            }
            transkey={"leftBar.ipanelV2.external.appEditor"}
          />
        </div>
      </Link> */}
      <Link
        as={NextLink}
        showAnchorIcon
        isExternal
        color="foreground"
        href={"https://docs.barsoft.hu/"}
        className="flex w-full flex-row items-center justify-between gap-3 p-2"
      >
        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            fill="none"
            viewBox="0 0 16 17"
          >
            <path
              className="stroke-current"
              stroke="#101828"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10 2.167v1c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h1"
            />
            <path
              stroke="#101828"
              className="stroke-current"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M2.667 11.167V5.833c0-1.885 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h2.781c.273 0 .409 0 .531.051.123.05.22.147.412.34l2.552 2.552c.193.193.29.29.34.412.05.122.05.258.05.53v5.449c0 1.885 0 2.828-.585 3.414-.586.586-1.529.586-3.414.586H6.667c-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.529-.586-3.414Zm2.666-3.334h5.333m-5.333 2h5.333m-5.333 2h4.333"
            />
          </svg>

          <Translation
            defaultValue={
              dictionary?.["leftBar.ipanelV2.external.docs"]?.[
                selectedLanguageFromCookie
              ]
            }
            transkey={"leftBar.ipanelV2.external.docs"}
          />
        </div>
      </Link>
      <Link
        as={NextLink}
        showAnchorIcon
        isExternal
        color="foreground"
        href={"https://barsoft.hu/billing"}
        className="flex w-full flex-row items-center justify-between gap-3 p-2"
      >
        <div className="flex flex-row items-center gap-2">
          <div className="h-4 w-4">
            <Icon
              name={"billing"}
              className={"stroke-current"}
              secondClassName={"fill-current"}
            />
          </div>

          <Translation
            defaultValue={
              dictionary?.["leftBar.ipanelV2.external.billing"]?.[
                selectedLanguageFromCookie
              ]
            }
            transkey={"leftBar.ipanelV2.external.billing"}
          />
        </div>
      </Link>
    </>
  );
}
