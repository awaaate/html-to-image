import {
    chakra,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import { basicTemplate } from "../lib/templates";
import { schema } from "../lib/validateParams";
import { CodeEditor } from "./CodeEditor";
import { Field } from "./Field";
import { GenerateModal } from "./GenerateModal";

interface ConverterProps {}

export const Converter: React.FC<ConverterProps> = ({}) => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: basicTemplate({ domain: router.basePath }),
        validationSchema: schema,
        onSubmit: () => {},
    });

    return (
        <FormikProvider value={formik}>
            <chakra.div
                width={"100%"}
                bg={"gray.700"}
                rounded={"sm"}
                maxW={"container.xl"}
                m="auto"
            >
                <Flex bg="gray.800" minH="500px">
                    <Tabs
                        borderRight={"2px solid"}
                        borderColor={"gray.600"}
                        flex={1}
                        display={"flex"}
                        flexDir={"column"}
                        colorScheme="primary"
                        isFitted
                    >
                        <TabList h="50px" minH={"50px"}>
                            <Tab>HTML</Tab>
                            <Tab>CSS</Tab>
                            <Tab>Properties</Tab>
                        </TabList>

                        <TabPanels h="100%">
                            <TabPanel h="100%">
                                <CodeEditor
                                    code={formik.values.html}
                                    onChange={(value) =>
                                        formik.setFieldValue("html", value)
                                    }
                                    language="html"
                                />
                            </TabPanel>
                            <TabPanel h="100%">
                                <CodeEditor
                                    code={formik.values.css}
                                    onChange={(value) =>
                                        formik.setFieldValue("css", value)
                                    }
                                    language="css"
                                />
                            </TabPanel>
                            <TabPanel>
                                <Field
                                    name="width"
                                    type="number"
                                    helperText="Width of the image"
                                    label="Width"
                                />
                                <Field
                                    name="height"
                                    type="number"
                                    helperText="Height of the image"
                                    label="Height"
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Flex
                        bg="gray.700"
                        flex={1}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Flex
                            w="100%"
                            bg="gray.800"
                            h="50px"
                            alignItems={"center"}
                            borderBottom={"2px solid"}
                            borderColor={"gray.600"}
                            justifyContent={"space-between"}
                            px={4}
                            alignSelf={"flex-start"}
                        >
                            <chakra.span>Preview</chakra.span>
                            <GenerateModal />
                        </Flex>
                        <chakra.div
                            p={4}
                            flexGrow={1}
                            bg="white"
                            color={"black"}
                        >
                            <chakra.div
                                css={css(formik.values.css)}
                                dangerouslySetInnerHTML={{
                                    __html: formik.values.html,
                                }}
                            ></chakra.div>
                        </chakra.div>
                    </Flex>
                </Flex>
            </chakra.div>
        </FormikProvider>
    );
};
