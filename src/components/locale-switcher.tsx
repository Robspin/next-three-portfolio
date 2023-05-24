'use client'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { usePathname } from 'next-intl/client'

const LocaleSwitcher = () => {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const locales = {
        en: {
            name: 'EN',
            locale: 'en'
        },
        ja: {
            name: '日本語',
            locale: 'ja'
        }
    }

    const changeLocale = (locale: string) => router.replace(`/${locale}${pathname}`)
    const displayLocale = locale === 'en' ? locales['ja'] : locales['en']

    return <button onClick={() => changeLocale(displayLocale.locale)} className="cursor-pointer transition-color hover:text-red-500">{displayLocale.name}</button>
}

export default LocaleSwitcher
