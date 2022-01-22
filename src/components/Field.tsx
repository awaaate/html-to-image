import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    InputProps,
} from "@chakra-ui/react";
import { ErrorMessage, useField } from "formik";

export interface FieldProps extends InputProps {
    name: string;
    label: string;
    helperText: string;
}

export const Field: React.FC<FieldProps> = ({
    name,
    label,
    helperText,
    ...props
}) => {
    const [input, { error, touched }] = useField(name);
    const allProps: InputProps = {
        ...input,
        ...props,
        rounded: "sm",
        size: "lg",
        variant: "filled",
        shadow: "lg",
        bg: "dracula",
        color: "white",
        _hover: {},
        px: 8,
        py: 4,
        _focus: {
            border: "2px solid",
            bg: "gray.800",
            borderColor: "primary.500",
        },
    };

    return (
        <FormControl isInvalid={!!(error && touched)} mt={4}>
            <FormLabel>{label}</FormLabel>
            <Input {...allProps} />
            <FormHelperText>{helperText}</FormHelperText>
            <ErrorMessage name={name}>
                {(error) => <FormErrorMessage>{error}</FormErrorMessage>}
            </ErrorMessage>
        </FormControl>
    );
};
