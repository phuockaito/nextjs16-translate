import { set } from "lodash";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

function transformMessages(messages: Record<string, unknown>): Record<string, unknown> {
    const output: Record<string, unknown> = {};

    Object.entries(messages).forEach(([key, value]) => {
        if (key.includes(".")) {
            const cleanKey = key.replaceAll(/\.\s+/g, ".");
            set(output, cleanKey, value);
        } else {
            output[key] = value;
        }
    });

    return output;
}

export default getRequestConfig(async ({ requestLocale }) => {
    // Static for now, we'll change this later
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    const rawMessages = (await import(`../messages/${locale}.json`)).default;
    const messages = transformMessages(rawMessages);

    return {
        locale,
        messages,
    };
});
