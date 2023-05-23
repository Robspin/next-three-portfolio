'use client'

import { FooterBase } from "@/components/footer/footer-base"
import { useTranslation } from "@/utils/i18n/client"

export const Footer = ({ lng }) => {
    const { t } = useTranslation(lng, 'footer')
    return <FooterBase t={t} lng={lng} />
}
