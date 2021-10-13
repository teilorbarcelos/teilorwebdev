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

  return (
    <section id="works">
      <div className={styles.workTitle}>
        <h2>Selected Works</h2>
      </div>

      <div className={styles.work}>
        <h5>01.</h5>
        <Link href="https://letmeask-f38c5.web.app/">
          <a target="_blank">
            <h3
              title="ReactJs SPA"
              onMouseEnter={() => setShowWork(1)}
              onMouseLeave={() => setShowWork(null)}
            >Letmeask &#8599;</h3>
          </a>
        </Link>
        <div className={`${styles.workImg} ${(showWork == 1) ? styles.show : ''}`}>
          <Image
            src={imgLetmeask}
            alt="Letmeask image"
          />
        </div>
      </div>

      <div className={styles.bbGray} id="bb-gray"></div>

      <div className={styles.work}>
        <h5>02.</h5>
        <Link href="https://devdotfinance.web.app/">
          <a target="_blank">
            <h3
              title="HTML, CSS and JS only"
              onMouseEnter={() => setShowWork(2)}
              onMouseLeave={() => setShowWork(null)}
            >Devdotfinance &#8599;</h3>
          </a>
        </Link>
        <div className={`${styles.workImg} ${(showWork == 2) ? styles.show : ''}`}>
          <Image
            src={imgDevdotfinance}
            alt="Devdotfinance image"
          />
        </div>
      </div>

      <div className={styles.bbGray} id="bb-gray1"></div>

      <div className={styles.work}>
        <h5>03.</h5>
        <Link href="https://github.com/teilorbarcelos/gameplay">
          <a target="_blank">
            <h3
              title="React Native App"
              onMouseEnter={() => setShowWork(3)}
              onMouseLeave={() => setShowWork(null)}
            >GamePlay &#8599;</h3>
          </a>
        </Link>
        <div className={`${styles.workImg} ${(showWork == 3) ? styles.show : ''}`}>
          <Image
            src={imgGameplay}
            alt="Gameplay image"
          />
        </div>
      </div>

      <div className={styles.bbGray} id="bb-gray1"></div>

      <div className={styles.work}>
        <h5>04.</h5>
        <Link href="https://origin-ten.vercel.app/">
          <a target="_blank">
            <h3
              title="NextJs website"
              onMouseEnter={() => setShowWork(4)}
              onMouseLeave={() => setShowWork(null)}
            >Origin &#8599;</h3>
          </a>
        </Link>
        <div className={`${styles.workImg} ${(showWork == 4) ? styles.show : ''}`}>
          <Image
            src={imgOrigin}
            alt="Origin image"
          />
        </div>
      </div>
    </section>
  )
}