/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Waitlist } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WaitlistUpdateFormInputValues = {
    name?: string;
    email?: string;
    date_time?: string;
    company?: string;
    role?: string;
};
export declare type WaitlistUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    date_time?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WaitlistUpdateFormOverridesProps = {
    WaitlistUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    date_time?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WaitlistUpdateFormProps = React.PropsWithChildren<{
    overrides?: WaitlistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    waitlist?: Waitlist;
    onSubmit?: (fields: WaitlistUpdateFormInputValues) => WaitlistUpdateFormInputValues;
    onSuccess?: (fields: WaitlistUpdateFormInputValues) => void;
    onError?: (fields: WaitlistUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WaitlistUpdateFormInputValues) => WaitlistUpdateFormInputValues;
    onValidate?: WaitlistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WaitlistUpdateForm(props: WaitlistUpdateFormProps): React.ReactElement;
