"use client";
import {
  Button,
  Code,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Translation from "components/Translation";
import moment from "moment";

function DetailsModal({
  isOpen,
  setIsOpen,
  dictionary,
  selectedLanguageFromCookie,
  error,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={() => setIsOpen(!isOpen)}
      size="2xl"
      className="max-h-[90vh] overflow-y-auto"
      classNames={{
        wrapper: "overflow-hidden",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex w-full flex-col justify-center gap-1">
              <Translation
                defaultValue={
                  dictionary?.["errors.ipanelV2.modal.header"]?.[
                    selectedLanguageFromCookie
                  ]
                }
                transkey={"errors.ipanelV2.modal.header"}
              />
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <Input
                  value={error?.info?.errorOrigin}
                  label={
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.modal.errorOrigin"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.modal.errorOrigin"}
                    />
                  }
                  isDisabled
                />
                <Input
                  label={
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.modal.errorMessage"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.modal.errorMessage"}
                    />
                  }
                  isDisabled
                  value={error?.info?.params?.response?.message}
                />
                <Input
                  isDisabled
                  label={
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.modal.location"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.modal.location"}
                    />
                  }
                  value={error?.locationName}
                />
                <Input
                  isDisabled
                  label={
                    <Translation
                      defaultValue={
                        dictionary?.["errors.ipanelV2.modal.timestamp"]?.[
                          selectedLanguageFromCookie
                        ]
                      }
                      transkey={"errors.ipanelV2.modal.timestamp"}
                    />
                  }
                  value={moment(error?.insertTimestamp).format(
                    "YYYY-MM-DD HH:mm:ss",
                  )}
                />
                <Code>
                  <pre
                    style={{
                      overflowX: "auto",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {JSON.stringify(error, null, 2)}
                  </pre>
                </Code>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                <Translation
                  defaultValue={
                    dictionary?.["errors.ipanelV2.modal.cancel"]?.[
                      selectedLanguageFromCookie
                    ]
                  }
                  transkey={"errors.ipanelV2.modal.cancel"}
                />
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default DetailsModal;
