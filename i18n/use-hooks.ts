import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export function useTranslation() {
    const tBase = useTranslations();

    const t = (key: string) => {
        const cleanKey = key.replaceAll(/\.\s+/g, ".");
        return tBase(cleanKey);
    };
    return {
        t,
    };
}
export async function getAsyncTranslations(locale: string) {
    const messages = await getTranslations({ locale });
    const t = (key: string) => {
        const cleanKey = key.replaceAll(/\.\s+/g, ".");
        return messages(cleanKey);
    };
    return t;
}
