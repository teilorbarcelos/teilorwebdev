import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import imgLetmeask from '../../public/letmeask.png'
import imgDevdotfinance from '../../public/devdotfinance.png'
import imgGameplay from '../../public/gameplay.png'
import imgOrigin from '../../public/origin.png'
import styles from './styles.module.css'

export default function Works() {
  const [showWork, setShowWork] = useState<null | number>(null)

  const works = [
    {
      id: 1,
      name: 'Letmeask',
      link: 'https://letmeask-f38c5.web.app/',
      type: 'ReactJs SPA',
      img: imgLetmeask
    },
    {
      id: 2,
      name: 'Devdotfinance',
      link: 'https://devdotfinance.web.app/',
      type: 'HTML, CSS and JS only',
      img: imgDevdotfinance
    },
    {
      id: 3,
      name: 'Gameplay',
      link: 'https://github.com/teilorbarcelos/gameplay',
      type: 'React Native App',
      img: imgGameplay
    },
    {
      id: 4,
      name: 'Origin',
      link: 'https://origin-ten.vercel.app/',
      type: 'NextJs website',
      img: imgOrigin
    }
  ]

  return (
    <section id="works">
      <div className={styles.workTitle}>
        <h2>Selected Works</h2>
      </div>

      {
        works.map((work) => {
          return (
            <>
              <div key={work.id} className={styles.work}>
                <h5>0{work.id}.</h5>
                <Link href={work.link}>
                  <a target="_blank">
                    <h3
                      title={work.type}
                      onMouseEnter={() => setShowWork(work.id)}
                      onMouseLeave={() => setShowWork(null)}
                    >{work.name} &#8599;</h3>
                  </a>
                </Link>
                <div className={`${styles.workImg} ${(showWork === work.id) ? styles.show : ''}`}>
                  <Image
                    src={work.img}
                    alt={`${work.name} image`}
                  />
                </div>
              </div>

              {(works.length > work.id) &&
                <div className={styles.bbGray} id="bb-gray"></div>
              }
            </>
          )
        })
      }

    </section>
  )
}