import { useMutation } from "react-query";

export const useCreateImage = () => {
    return useMutation(
        async ({
            html,
            css,
            width,
            height,
        }: {
            html: string;
            css: string;
            width: number;
            height: number;
        }) => {
            const response = await fetch("/api/hti", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }),
                body: JSON.stringify({
                    html,
                    css,
                    width,
                    height,
                }),
            });
            const data = await response.json();
            if (data.error) throw data.message;

            return data.fileName;
        }
    );
};
