"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { Dropdown } from "antd";

import { dataLanguage, LanguageType } from "@/constants";
import { usePathname, useRouter } from "@/i18n";

import { FaAngleDown } from "react-icons/fa6";

export function ChangeLocale() {
    const router = useRouter();
    const pathname = usePathname();
    const { locale } = useParams();
    const checkIsActive = dataLanguage.find((lang: LanguageType) => lang.value === locale);

    const handleChangeLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };
    return (
        <Dropdown
            placement="bottomRight"
            className="cursor-pointer"
            arrow
            menu={{
                items: dataLanguage.map((lang) => ({
                    key: lang.value,
                    onClick: () => handleChangeLocale(lang.value),
                    label: (
                        <div className="flex items-center gap-1">
                            <Image src={lang.img} alt={lang.label} width={20} height={20} />
                            <p className="pl-2 font-normal text-sm">{lang.label}</p>
                        </div>
                    ),
                })),
            }}
        >
            {checkIsActive && (
                <div className="flex items-center gap-2">
                    <Image src={checkIsActive.img} alt={checkIsActive.label} width={20} height={20} />
                    <div className="flex items-center gap-2 w-full">
                        <p className="text-sm font-normal">{checkIsActive.label}</p>
                        <FaAngleDown />
                    </div>
                </div>
            )}
        </Dropdown>
    );
}
