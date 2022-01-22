import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Button, Image,
    Modal,
    ModalBody, ModalContent, ModalOverlay, Spinner,
    useDisclosure
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { useCreateImage } from "../hooks/useCreateImage";

interface GenerateModalProps {}

export const GenerateModal: React.FC<GenerateModalProps> = ({}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { values, submitForm } = useFormikContext<any>();
    const { mutate, isLoading, data } = useCreateImage();
    async function clickHandler() {
        await submitForm();
        onOpen();
        mutate(values);
    }
    console.log(values);
    return (
        <>
            <Button
                size="sm"
                onClick={clickHandler}
                colorScheme="primary"
                rounded={"sm"}
                rightIcon={<ArrowForwardIcon />}
            >
                Generate
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    rounded={"sm"}
                    bg="gray.900"
                    padding={0}
                    height={values.height}
                    overflow={"hidden"}
                    width={values.width}
                >
                    <ModalBody
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        height={"100%"}
                        width={"100%"}
                        padding={0}
                    >
                        {!isLoading && data ? (
                            <Image
                                objectFit={"contain"}
                                rounded={"sm"}
                                height={values.height}
                                width={values.width}
                                src={`${window.location.href}api/${data}`}
                            />
                        ) : (
                            <Spinner />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
