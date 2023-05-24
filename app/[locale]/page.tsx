'use client'

import { useTranslations } from 'next-intl'
import LocaleSwitcher from "@/components/locale-switcher"

export default function IndexPage() {
    const t = useTranslations('IndexPage')

    return (
        <div>
            <LocaleSwitcher />
            <p className="max-w-[590px]">
                {t.rich('description', {
                    p: (chunks) => <p className="mt-4">{chunks}</p>,
                    code: (chunks) => (
                        <code className="font-mono text-white">{chunks}</code>
                    )
                })}
            </p>
        </div>
    );
}
