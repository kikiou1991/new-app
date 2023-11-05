"use client";

import {
  Button,
  Chip,
  Pagination,
  Spinner,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from "@nextui-org/react";
import Translation from "components/Translation";
import Icon from "components/icons";
import { UserContext } from "contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import DetailsModal from "./DetailsModal";
import { ErrorLogsContext } from "./ErrorLogsContext";

function ErrorContent({ dictionary, selectedLanguageFromCookie }) {
  const {
    logs,
    resolveError,
    selectedRows,
    setSelectedRows,
    loading,
    selectedDevice,
    filter,
    fetching,
    setSelectedDevice,
  } = useContext(ErrorLogsContext);
  const { selectedBrandLocations } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("all");
  const rowsPerPage = 10;
  const [pages, setPages] = useState(0);
  const [selectedError, setSelectedError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(logs);
  useEffect(() => {
    if (logs) {
      if (selectedTab === "all") {
        setPages(Math.ceil(logs?.length / rowsPerPage));
      } else {
        let filteredLogs = logs?.filter(
          (log) => log.locationUUID === selectedTab,
        );
        setPages(Math.ceil(filteredLogs?.length / rowsPerPage));
      }
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      setItems(logs?.slice(start, end));
    }
  }, [page, logs, selectedTab, filter]);
  useEffect(() => {
    setPage(1);
  }, [logs]);
  const handleErrorClick = (error) => {
    setSelectedError(error);
    setIsOpen(true);
  };
  return (
    <div
      className={`flex grow flex-col gap-5 overflow-hidden p-4 ${
        loading && "pointer-events-none opacity-50"
      }`}
    >
      <DetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dictionary={dictionary}
        selectedLanguageFromCookie={selectedLanguageFromCookie}
        error={selectedError}
      />
      <Tabs
        aria-label="locations"
        classNames={{
          panel: "h-[calc(100%-3rem)] ",
        }}
        onSelectionChange={(e) => {
          setPage(1);
          setSelectedTab(e);
          setSelectedRows([]);
        }}
      >
        <Tab
          key={"all"}
          title={
            <Translation
              defaultValue={
                dictionary?.["errors.ipanelV2.tabs.allLocation"]?.[
                  selectedLanguageFromCookie
                ]
              }
              transkey={"errors.ipanelV2.tabs.allLocation"}
            />
          }
        >
          <Table
            aria-label="Error logs"
            isHeaderSticky
            classNames={{
              base: "overflow-hidden h-full",
              table: "h-full overflow-scroll",
            }}
            selectionMode="multiple"
            selectionBehavior="toggle"
            selectedRows={selectedRows}
            onSelectionChange={(e) => {
              if (e === "all") {
                setSelectedRows(
                  logs
                    ?.filter((log) => log.confirmUserUUID === null)
                    ?.map((log) => log.id),
                );
              } else {
                let keyArray = Array.from(e);
                setSelectedRows(keyArray);
              }
            }}
            disabledKeys={logs
              ?.filter((log) => log.confirmUserUUID)
              ?.map((log) => log.id.toString())}
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.deviceName"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.deviceName"}
                />
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.errorCode"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.errorCode"}
                />
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.insertedTimestamp"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.insertedTimestamp"}
                />
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.locationName"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.locationName"}
                />
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.message"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.message"}
                />
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.severity"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.severity"}
                />
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.confirm"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.confirm"}
                />
                <TableColumn>
                  <Translation
                    defaultValue={
                      dictionary?.["errors.ipanelV2.table.confirmedBy"]?.[
                        selectedLanguageFromCookie
                      ]
                    }
                    transkey={"errors.ipanelV2.table.confirmedBy"}
                  />
                </TableColumn>
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.confirmedBy"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.confirmedBy"}
                />
              </TableColumn>
              <TableColumn>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.table.details"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.table.details"}
                />
              </TableColumn>
            </TableHeader>
            <TableBody
              isLoading={fetching}
              loadingContent={<Spinner color="primary" label="loading..." />}
            >
              {items
                ?.filter((item) =>
                  selectedDevice ? item.deviceName === selectedDevice : item,
                )
                ?.map((log) => {
                  return (
                    <TableRow key={log.id}>
                      <TableCell>{log.deviceName}</TableCell>
                      <TableCell>{log.errorCode}</TableCell>
                      <TableCell>{log.insertTimestamp}</TableCell>
                      <TableCell>{log.locationName}</TableCell>
                      <TableCell>{log.message}</TableCell>
                      <TableCell>
                        <Chip
                          variant="flat"
                          color={
                            log.severity === 1
                              ? "primary"
                              : log.severity === 2
                              ? "warning"
                              : "danger"
                          }
                        >
                          {log.severity}
                        </Chip>
                      </TableCell>
                      <TableCell>
                        {log.confirmTimestamp ? (
                          log.confirmTimestamp
                        ) : (
                          <Button onPress={() => resolveError(log.id)}>
                            <Translation
                              defaultValue={
                                dictionary?.["errors.ipanelV2.resolveError"]?.[
                                  selectedLanguageFromCookie
                                ]
                              }
                              transkey={"errors.ipanelV2.resolveError"}
                            />
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>
                        {log.confirmUserUUID || (
                          <Translation
                            defaultValue={
                              dictionary?.["errors.ipanelV2.resolvedBy.none"]?.[
                                selectedLanguageFromCookie
                              ]
                            }
                            transkey={"errors.ipanelV2.resolvedBy.none"}
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          isIconOnly
                          onPress={() => handleErrorClick(log)}
                        >
                          <div className="h-6 w-6">
                            <Icon name="edit" className="fill-current" />
                          </div>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </Tab>
        {selectedBrandLocations?.map((location) => {
          return (
            <Tab key={location.uuid} title={location.name}>
              <Table
                aria-label="Error logs"
                isHeaderSticky
                classNames={{
                  base: "overflow-hidden h-full",
                  table: "h-full overflow-scroll",
                }}
                selectionMode="multiple"
                selectionBehavior="toggle"
                selectedRows={selectedRows}
                disabledKeys={logs
                  ?.filter((log) => log.confirmUserUUID)
                  ?.map((log) => log.id.toString())}
                onSelectionChange={(e) => {
                  if (e === "all") {
                    setSelectedRows(
                      logs
                        ?.filter((log) => log.confirmUserUUID === null)
                        ?.map((log) => log.id),
                    );
                  } else {
                    let keyArray = Array.from(e);
                    setSelectedRows(keyArray);
                  }
                }}
                bottomContent={
                  <div className="flex w-full justify-center">
                    <Pagination
                      isCompact
                      showControls
                      showShadow
                      color="primary"
                      page={page}
                      total={pages}
                      onChange={(page) => setPage(page)}
                    />
                  </div>
                }
              >
                <TableHeader>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.table.deviceName"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.table.deviceName"}
                    />
                  </TableColumn>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.table.errorCode"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.table.errorCode"}
                    />
                  </TableColumn>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.[
                          "errors.ipanelV2.table.insertedTimestamp"
                        ]?.[selectedLanguageFromCookie]
                      }
                      transkey={"errors.ipanelV2.table.insertedTimestamp"}
                    />
                  </TableColumn>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.table.locationName"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.table.locationName"}
                    />
                  </TableColumn>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.table.message"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.table.message"}
                    />
                  </TableColumn>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.table.severity"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.table.severity"}
                    />
                  </TableColumn>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.table.confirm"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.table.confirm"}
                    />
                    <TableColumn>
                      <Translation
                        defaultValue={
                          dictionary?.["errors.ipanelV2.table.confirmedBy"]?.[
                            selectedLanguageFromCookie
                          ]
                        }
                        transkey={"errors.ipanelV2.table.confirmedBy"}
                      />
                    </TableColumn>
                  </TableColumn>
                  <TableColumn>
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.table.confirmedBy"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.table.confirmedBy"}
                    />
                  </TableColumn>
                </TableHeader>
                <TableBody
                  isLoading={fetching}
                  loadingContent={
                    <Spinner color="primary" label="loading..." />
                  }
                >
                  {items
                    ?.filter(
                      (log) =>
                        log.locationUUID === location.uuid &&
                        (selectedDevice
                          ? log.deviceName === selectedDevice
                          : log),
                    )
                    ?.map((log) => {
                      return (
                        <TableRow key={log.id}>
                          <TableCell>{log.deviceName}</TableCell>
                          <TableCell>{log.errorCode}</TableCell>
                          <TableCell>{log.insertTimestamp}</TableCell>
                          <TableCell>{log.locationName}</TableCell>
                          <TableCell>{log.message}</TableCell>
                          <TableCell>
                            <Chip
                              variant="flat"
                              color={
                                log.severity === 1
                                  ? "primary"
                                  : log.severity === 2
                                  ? "warning"
                                  : "danger"
                              }
                            >
                              {log.severity}
                            </Chip>
                          </TableCell>
                          <TableCell>
                            {log.confirmTimestamp ? (
                              log.confirmTimestamp
                            ) : (
                              <Button onPress={() => resolveError(log.id)}>
                                <Translation
                                  defaultValue={
                                    dictionary?.[
                                      "errors.ipanelV2.resolveError"
                                    ]?.[selectedLanguageFromCookie]
                                  }
                                  transkey={"errors.ipanelV2.resolveError"}
                                />
                              </Button>
                            )}
                          </TableCell>
                          <TableCell>
                            {log.confirmUserUUID || (
                              <Translation
                                defaultValue={
                                  dictionary?.[
                                    "errors.ipanelV2.resolvedBy.none"
                                  ]?.[selectedLanguageFromCookie]
                                }
                                transkey={"errors.ipanelV2.resolvedBy.none"}
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default ErrorContent;
