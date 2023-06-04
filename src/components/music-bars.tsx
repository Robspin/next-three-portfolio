import { useEffect, useState } from "react"


export default function MusicBars() {
    const [music, setMusic] = useState<HTMLAudioElement | null>(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        const music = new Audio('music/Moon Landing Countdown.mp3')
        music.volume = 0.3
        music.loop = true
        setMusic(music)
    }, [])

    const toggleMusic = () => {
        if (!music) return
        if (music.paused) {
            music.play()
            setPlaying(true)
        } else {
            music.pause()
            setPlaying(false)
        }
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer"
             onClick={toggleMusic}
             viewBox="0 0 52 37">
            <path className={`${playing ? 'music-playing fill-red-500' : 'fill-slate-300'} music-path`}
                  strokeWidth="1"
                  d='M 50.00,20         C 50.00,20 50.00,35.00 50.00,35.00             50.00,35.00 47.00,35.00 47.00,35.00             47.00,35.00 47.00,20 47.00,20             47.00,20 50.00,20 50.00,20 Z           M 41.00,20           C 41.00,20 41.00,35.00 41.00,35.00             41.00,35.00 38.00,35.00 38.00,35.00             38.00,35.00 38.00,20 38.00,20             38.00,20 41.00,20 41.00,20 Z           M 32.00,20           C 32.00,20 32.00,35.00 32.00,35.00             32.00,35.00 29.00,35.00 29.00,35.00             29.00,35.00 29.00,20 29.00,20             29.00,20 32.00,20 32.00,20 Z           M 23.00,20           C 23.00,20 23.00,35.00 23.00,35.00             23.00,35.00 20.00,35.00 20.00,35.00             20.00,35.00 20.00,20 20.00,20             20.00,20 23.00,20 23.00,20 Z           M 14.00,20           C 14.00,20 14.00,35.00 14.00,35.00             14.00,35.00 11.00,35.00 11.00,35.00             11.00,35.00 11.00,20 11.00,20             11.00,20 14.00,20 14.00,20 Z           M 5.00,20           C 5.00,20 5.00,35.00 5.00,35.00             5.00,35.00 2.00,35.00 2.00,35.00             2.00,35.00 2.00,20 2.00,20             2.00,20 5.00,20 5.00,20 Z'/>
        </svg>
    )
}
