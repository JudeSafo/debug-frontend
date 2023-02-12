/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, TextProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CallAPIInputValues = {};
export declare type CallAPIValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CallAPIOverridesProps = {
    CallAPIGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement01?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement00?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CallAPIProps = React.PropsWithChildren<{
    overrides?: CallAPIOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CallAPIInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: CallAPIInputValues) => CallAPIInputValues;
    onValidate?: CallAPIValidationValues;
} & React.CSSProperties>;
export default function CallAPI(props: CallAPIProps): React.ReactElement;
