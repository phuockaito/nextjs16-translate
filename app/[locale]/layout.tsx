import { Suspense } from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { notFound } from "next/navigation";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { getAsyncTranslations, routing } from "@/i18n";

import "@ant-design/v5-patch-for-react-19";

import { LANG_TYPE } from "@/constants";
import { Header } from "@/layout";
import { Providers } from "@/providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Suspense fallback={<div className="min-h-screen" />}>
                    <NextIntlClientProvider>
                        <AntdRegistry>
                            <Providers locale={locale as LANG_TYPE}>
                                <div className="min-h-screen">
                                    <Header />
                                    {children}
                                </div>
                            </Providers>
                        </AntdRegistry>
                    </NextIntlClientProvider>
                </Suspense>
            </body>
        </html>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    const t = await getAsyncTranslations(locale);

    return {
        title: t("Hello developer Documentation DNPay"),
        description: t("Hello developer Documentation DNPay"),
    };
}
