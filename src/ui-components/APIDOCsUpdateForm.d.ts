/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { APIDOCs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type APIDOCsUpdateFormInputValues = {
    context?: string;
    prompt?: string;
};
export declare type APIDOCsUpdateFormValidationValues = {
    context?: ValidationFunction<string>;
    prompt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type APIDOCsUpdateFormOverridesProps = {
    APIDOCsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement00?: PrimitiveOverrideProps<DividerProps>;
    context?: PrimitiveOverrideProps<TextFieldProps>;
    prompt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type APIDOCsUpdateFormProps = React.PropsWithChildren<{
    overrides?: APIDOCsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aPIDOCs?: APIDOCs;
    onSubmit?: (fields: APIDOCsUpdateFormInputValues) => APIDOCsUpdateFormInputValues;
    onSuccess?: (fields: APIDOCsUpdateFormInputValues) => void;
    onError?: (fields: APIDOCsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: APIDOCsUpdateFormInputValues) => APIDOCsUpdateFormInputValues;
    onValidate?: APIDOCsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function APIDOCsUpdateForm(props: APIDOCsUpdateFormProps): React.ReactElement;
