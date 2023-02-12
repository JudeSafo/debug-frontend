/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Waitlist, APIDOCs } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    "haiphen_logo_updated 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    FAQ?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    waitlist?: Waitlist;
    aPIDOCs?: APIDOCs;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
