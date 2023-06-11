"use client"
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { Inter } from "next/font/google"
import "../global.css"
import { ThemeProvider } from "@/utils/theme/theme-provider"


const inter = Inter({subsets: ['latin']});

type Props = {
    children: ReactNode
    params: { locale: string }
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    let messages
    try {
        messages = (await import(`@/utils/locales/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    return (
        <html className={`h-full antialiased`} lang={locale}>
            <body className={`${inter.className} flex h-full flex-col`}>
                    <ThemeProvider>
                        <NextIntlClientProvider locale={locale} messages={messages}>
                                {children}
                            {/*<Layout>{children}</Layout>*/}
                        </NextIntlClientProvider>
                    </ThemeProvider>
            </body>
        </html>
    )
}
