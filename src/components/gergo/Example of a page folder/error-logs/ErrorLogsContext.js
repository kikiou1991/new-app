"use client";
import Translation from "components/Translation";
import { UserContext } from "contexts/UserContext";
import getLogs from "lib/brand/errors/getLogs";
import resolveErr from "lib/brand/errors/resolveError";
import sendErrorMessage from "lib/sendErrorMessage";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ErrorLogsContext = createContext();

const ErrorLogsContextProvider = ({
  children,
  dictionary,
  selectedLanguageFromCookie,
}) => {
  const { selectedBrand, userToken } = useContext(UserContext);
  const [logs, setLogs] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [filter, setFilter] = useState({
    confirmation: 1,
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const fetchLogs = async () => {
    setFetching(true);
    let res = await getLogs(selectedBrand?.id, filter, userToken);
    if (res.success) {
      setLogs(res.data);
    } else {
      sendErrorMessage(
        res,
        "fetchLogs(ErrorLogsContext)",
        selectedBrand?.brandName,
      );
    }
    setFetching(false);
  };
  useEffect(() => {
    if (selectedBrand?.id) {
      fetchLogs();
    }
  }, [userToken, selectedBrand, filter]);

  const resolveError = async (id) => {
    setLoading(true);
    let res = await resolveErr(selectedBrand?.id, id, userToken);

    if (res?.success) {
      setLogs((prev) => {
        return prev.filter((log) => log.id !== id);
      });
      toast.success(
        <Translation
          defaultValue={
            dictionary?.["errors.ipanelV2.resolvedSuccessfully"]?.[
              selectedLanguageFromCookie
            ]
          }
          transkey={"errors.ipanelV2.resolvedSuccessfully"}
        />,
      );
    } else {
      sendErrorMessage(
        res,
        "resolveError(ErrorLogsContext)",
        selectedBrand?.brandName,
      );
    }
    setLoading(false);
  };
  const resolveMultipleErrors = async () => {
    if (selectedRows.length === 0) {
      return;
    }
    setLoading(true);
    for (const id of selectedRows) {
      try {
        let res = await resolveErr(selectedBrand?.id, id, userToken);
        if (res.success) {
          setLogs((prev) => {
            return prev.filter((log) => log.id !== parseInt(id));
          });
        }
      } catch (e) {
        console.log(e);

        return;
      }
    }
    setSelectedRows([]);
    setLoading(false);
    toast.success(
      <Translation
        defaultValue={
          dictionary?.["errors.ipanelV2.resolvedSuccessfully"]?.[
            selectedLanguageFromCookie
          ]
        }
        transkey={"errors.ipanelV2.resolvedSuccessfully"}
      />,
    );
  };
  return (
    <ErrorLogsContext.Provider
      value={{
        logs,
        setLogs,
        filter,
        setFilter,
        resolveError,
        selectedRows,
        setSelectedRows,
        resolveMultipleErrors,
        loading,
        selectedDevice,
        setSelectedDevice,
        fetching,
      }}
    >
      {children}
    </ErrorLogsContext.Provider>
  );
};

export { ErrorLogsContext, ErrorLogsContextProvider };
