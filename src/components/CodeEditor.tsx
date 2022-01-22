import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";

import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import { chakra } from "@chakra-ui/react";
export interface CodeEditorProps {
    language: string;
    code: string;
    onChange: (value: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
    code,
    onChange,
    language,
}) => {
    return (
        <chakra.div
            bg="dracula"
            color="white"
            rounded="sm"
            border="2"
            outline="none"
            m="auto"
            mt="2"
            h="100%"
            sx={{
                ".code": { height: "100%" },
            }}
        >
            <Editor
            className="code"
                value={code}
                onValueChange={onChange}
                highlight={(code) =>
                    highlight(code, languages[language], language)
                }
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
        </chakra.div>
    );
};
