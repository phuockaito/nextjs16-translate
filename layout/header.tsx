"use client";

import { Button } from "antd";

import { useTranslation } from "@/i18n";
import { ChangeLocale, NavBar } from "@/ui";

export const Header = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex-1">
                    <NavBar />
                </div>
                <div className="flex items-center gap-3">
                    <ChangeLocale />
                    <div className="w-px h-4 bg-gray-300" />
                    <Button type="link" className="font-bold! p-0!">
                        {t("Login")}
                    </Button>
                </div>
            </div>
        </div>
    );
};
