import { getAsyncTranslations, routing } from "@/i18n";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function IndexPage({ params }: Props) {
    const { locale } = await params;
    const t = await getAsyncTranslations(locale);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="absolute top-8 right-8 z-20"></div>
            <h1>{t("Hello developer Documentation DNPay")}</h1>
        </div>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({
        locale,
    }));
}
