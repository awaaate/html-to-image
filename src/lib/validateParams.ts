import * as yup from 'yup';
export const schema = yup.object({
    html: yup.string(),
    css: yup.string(),
    width: yup.number(),
    height: yup.number(),
});
export function validateParams(params: object) {
    return schema.validate(params);
}
