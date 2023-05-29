"use client"
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { Inter } from "next/font/google"
// import { Layout } from "@/components/dom/Layout"
import "../global.css"


const inter = Inter({subsets: ['latin']});

type Props = {
    children: ReactNode
    params: { locale: string }
};

// export async function generateMetadata({params: {locale}}: Props) {
//     // const messages = (await import(`@/utils/locales/${locale}.json`)).default
//
//     // You can use the core (non-React) APIs when you have to use next-intl
//     // outside of components. Potentially this will be simplified in the future
//     // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
//     // const t = createTranslator({ locale, messages })
//
//     return {
//         title: 'test'
//     };
// }

export default async function LocaleLayout({ children, params: { locale } }: Props) {

    console.log(children)

    let messages
    try {
        messages = (await import(`@/utils/locales/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    // const smoother = useRef();
    // const ctx = useRef();
    // const pathname = usePathname();
    //
    // useIsomorphicLayoutEffect(() => {
    //     // ctx.current = gsap.context(() => {
    //     //     smoother.current = ScrollSmoother.create({
    //     //         smooth: 2,
    //     //         effects: true,
    //     //     });
    //     // });
    //     //
    //     // return () => ctx.current.revert();
    // }, [pathname]);

    return (
        <html className="h-full antialiased" lang={locale}>
            <body className={`${inter.className} flex h-full flex-col `}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                    {/*<Layout>{children}</Layout>*/}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
