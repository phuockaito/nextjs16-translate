"use client";

import { Menu } from "antd";

import { useTranslation } from "@/i18n";

import { FaAngleDown } from "react-icons/fa6";

export const NavBar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Menu
            mode="horizontal"
            selectedKeys={["home"]}
            items={[
                {
                    label: t("Home"),
                    key: "home",
                },
                {
                    label: (
                        <div className="flex items-center gap-2">
                            <span>{t("Documentation")}</span>
                            <FaAngleDown />
                        </div>
                    ),
                    key: "documentation",
                    children: [
                        {
                            type: "group",
                            label: "API",
                            children: [
                                { label: "Social API", key: "setting:1" },
                                { label: "Payment API", key: "setting:2" },
                            ],
                        },
                        {
                            type: "group",
                            label: "SDK",
                            children: [
                                { label: "Android SDK", key: "setting:3" },
                                { label: "iOS SDK", key: "setting:4" },
                            ],
                        },
                    ],
                },
            ]}
        />
    );
};
