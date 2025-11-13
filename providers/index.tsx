"use client";

import React, { useLayoutEffect, useMemo } from "react";

import { QueryClientProvider, type DehydratedState } from "@tanstack/react-query";
import { App, ConfigProvider } from "antd";

import { getQueryClient } from "./get-query-client";

import "@ant-design/v5-patch-for-react-19";

import English from "antd/locale/en_US";
import viVN from "antd/locale/vi_VN";

import { LANG_TYPE } from "@/constants";
import { ThemeAntd } from "@/theme";

interface ProvidersProps {
    children: React.ReactNode;
    locale: LANG_TYPE;
    dehydratedState?: DehydratedState;
}

export function Providers({ children, locale }: ProvidersProps) {
    const queryClient = useMemo(() => getQueryClient(), []);

    useLayoutEffect(() => {
        ConfigProvider.config({
            holderRender: (children) => <App>{children}</App>,
        });
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider locale={checkLocale(locale).antd} theme={ThemeAntd}>
                {children}
            </ConfigProvider>
        </QueryClientProvider>
    );
}

const checkLocale = (locale: LANG_TYPE) => {
    const localeMap = {
        [LANG_TYPE.VI]: {
            locale: "vi-VN",
            antd: viVN,
        },
        [LANG_TYPE.EN]: {
            locale: "en-US",
            antd: English,
        },
    };

    return localeMap[locale] || localeMap[LANG_TYPE.VI];
};
