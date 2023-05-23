import { useTranslation } from "@/utils/i18n"
import { FooterBase } from "@/components/footer/footer-base"

export const Footer = async ({ lng }) => {
    const { t } = await useTranslation(lng, 'footer')
    return <FooterBase t={t} lng={lng} />
}
