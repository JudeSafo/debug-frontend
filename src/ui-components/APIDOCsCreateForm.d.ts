/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type APIDOCsCreateFormInputValues = {
    context?: string;
    prompt?: string;
};
export declare type APIDOCsCreateFormValidationValues = {
    context?: ValidationFunction<string>;
    prompt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type APIDOCsCreateFormOverridesProps = {
    APIDOCsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    context?: PrimitiveOverrideProps<TextFieldProps>;
    prompt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type APIDOCsCreateFormProps = React.PropsWithChildren<{
    overrides?: APIDOCsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: APIDOCsCreateFormInputValues) => APIDOCsCreateFormInputValues;
    onSuccess?: (fields: APIDOCsCreateFormInputValues) => void;
    onError?: (fields: APIDOCsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: APIDOCsCreateFormInputValues) => APIDOCsCreateFormInputValues;
    onValidate?: APIDOCsCreateFormValidationValues;
} & React.CSSProperties>;
export default function APIDOCsCreateForm(props: APIDOCsCreateFormProps): React.ReactElement;
