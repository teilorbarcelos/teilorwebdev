import Link from 'next/link'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import Github from '../svg/Github'
import Instagram from '../svg/Instagram'
import Linkedin from '../svg/Linkedin'
import Square from '../Square'

export default function Hero() {
  return (
    <section className={`${styles.hero} ${globals.container}`} id="hero">
      <div className={styles.containerLeft}>
        <div>
          <h1>Teilor Souza Barcelos</h1>
        </div>
        <div>
          <h5 className={`${styles.job1} ${globals.mask}`}>Web Developer</h5>
        </div>
        <div>
          <h5 className={`${styles.job2} ${globals.mask}`}>Front & Back-end Programming</h5>
        </div>
        <div className={styles.social}>
          <div className={styles.socialPanel}>
            <div className={styles.folowMe}>
              <Link href="https://github.com/teilorbarcelos">
                <a title="Github" target="_blank">

                  <Github />

                </a>
              </Link>
            </div>
            <div className={styles.folowMe}>
              <Link href="https://www.instagram.com/teilor.dev/">
                <a title="Instagram" target="_blank">

                  <Instagram />

                </a>
              </Link>
            </div>
            <div className={styles.folowMe}>
              <Link href="https://www.linkedin.com/in/teilorsb/">
                <a title="Linkedin" target="_blank">

                  <Linkedin />

                </a>
              </Link>
            </div>
          </div>
          <div className={styles.squareButton}>
            <Square href="#works" text="WORKS" />
          </div>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div>
          <h5 className={`${globals.mask} ${styles.iAm}`}>I am</h5>
        </div>
        <div className={styles.aboutMe}>
          <h4>A constant programming student who loves what does, always looking for self-improvement and learning new technologies.</h4>
        </div>
      </div>
    </section>
  )
}