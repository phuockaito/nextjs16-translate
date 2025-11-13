import Link from "next/link";

import { routing, useTranslation } from "@/i18n";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({
        locale,
        rest: [],
    }));
}

export default function NotFound() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
            <div className="text-center max-w-2xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        404
                    </h1>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("Page Not Found")}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    {t("The page you are looking for does not exist.")}
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                    {t("Back to Home")}
                </Link>
            </div>
        </div>
    );
}
