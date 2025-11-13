import { iconFlagUk, iconFlagVi } from "@/assets";

export const LOCALES = ["en", "vi"] as const;
export const DEFAULT_LOCALE = "en";

export enum LANG_TYPE {
    EN = "en",
    VI = "vi",
}
export interface LanguageType {
    value: LANG_TYPE;
    label: string;
    img: string;
}

export const dataLanguage: Array<{
    value: LANG_TYPE;
    label: string;
    img: string;
}> = [
    {
        value: LANG_TYPE.VI,
        label: "Tiếng Việt",
        img: iconFlagVi,
    },
    {
        value: LANG_TYPE.EN,
        label: "English",
        img: iconFlagUk,
    },
];
