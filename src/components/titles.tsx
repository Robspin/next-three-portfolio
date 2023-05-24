import { useEffect, useState } from "react"
import { gsap } from "gsap"
import SplitTextJS from 'split-text-js'
import { useTranslations } from "next-intl"

const Titles = () => {
    const [show, setShow] = useState(false)
    const t = useTranslations('Landing.titles')

    const titles = [t('frontend'), t('creative'), t('uxUi')]

    useEffect(() => {
        setShow(true)
        const titles = gsap.utils.toArray('.titleAnimation')
        const tl = gsap.timeline()

        const animationHeight = window.innerWidth / 20

        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title)

            tl
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: animationHeight,
                    rotateX: -90,
                    stagger: 0.02
                }, "<")
                .to(splitTitle.chars, {
                    opacity: 0,
                    y: animationHeight * -1,
                    rotateX: 90,
                    stagger: 0.02,
                    delay: 4
                }, "<1")
                .repeat(-1)

        })
    }, [])

    return (
        <div>
            {titles.map((title) => <p key={title}
              className={`leading-[0] ${show ? 'opacity-100' : 'opacity-0'} transition-opacity text-red-500 titleAnimation`}>{title} {t('developer')}</p>)}
        </div>
    )
}

export default Titles
