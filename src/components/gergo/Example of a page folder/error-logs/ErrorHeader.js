"use client";

import { Button, Select, SelectItem, Switch } from "@nextui-org/react";
import Translation from "components/Translation";
import { useContext } from "react";
import { ErrorLogsContext } from "./ErrorLogsContext";

function ErrorHeader({ dictionary, selectedLanguageFromCookie }) {
  const {
    selectedRows,
    resolveMultipleErrors,
    loading,
    logs,
    selectedDevice,
    setSelectedDevice,
    filter,
    setFilter,
  } = useContext(ErrorLogsContext);
  const availableDevices = [...new Set(logs?.map((log) => log.deviceName))];
  return (
    <div
      className={`flex w-full items-center justify-between p-4 ${
        loading && "pointer-events-none opacity-70"
      }`}
    >
      <div className="text-lg font-bold">
        <Translation
          defaultValue={
            dictionary?.["errors.ipanelV2.header"]?.[selectedLanguageFromCookie]
          }
          transkey={"errors.ipanelV2.header"}
        />
      </div>
      <div className="flex w-1/2 flex-row items-center justify-end gap-2">
        <Switch
          isSelected={filter?.confirmation === 2}
          onValueChange={(value) => {
            setFilter({ ...filter, confirmation: value ? 2 : 1 });
          }}
        >
          <Translation
            defaultValue={
              dictionary?.["errors.ipanelV2.showResolved"]?.[
                selectedLanguageFromCookie
              ]
            }
            transkey={"errors.ipanelV2.showResolved"}
          />
        </Switch>
        <Select
          className="max-w-xs"
          selectedKeys={selectedDevice ? [selectedDevice] : []}
          label={
            <Translation
              defaultValue={
                dictionary?.["errors.ipanelV2.device"]?.[
                  selectedLanguageFromCookie
                ]
              }
              transkey={"errors.ipanelV2.device"}
            />
          }
          onSelectionChange={(key) => {
            const arrayFromKeys = Array.from(key);
            setSelectedDevice(arrayFromKeys[0]);
          }}
        >
          {availableDevices.map((device) => {
            return <SelectItem key={device}>{device}</SelectItem>;
          })}
        </Select>
        <Button
          isDisabled={selectedRows.length < 1}
          onPress={() => resolveMultipleErrors()}
        >
          <Translation
            defaultValue={
              dictionary?.["errors.ipanelV2.resolveMultiple"]?.[
                selectedLanguageFromCookie
              ]
            }
            transkey={"errors.ipanelV2.resolveMultiple"}
          />
          ({selectedRows.length})
        </Button>
      </div>
    </div>
  );
}

export default ErrorHeader;
