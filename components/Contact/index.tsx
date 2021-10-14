import Link from 'next/link'
import Github from '../svg/Github'
import Instagram from '../svg/Instagram'
import Linkedin from '../svg/Linkedin'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'

export default function Contact() {
  return (
    <section className={`${styles.get} ${globals.mt9}`} id="get">
      <h2>Get in touch</h2>
      <h3 data-aos="fade-left" className={`${styles.email} ${globals.mt6} ${globals.mask}`}>tsb.developer87@gmail.com</h3>
      <div data-aos="fade-right" className={styles.folowMe}>
        <div className={`${styles.folowMeItem} ${globals.py4}`}>
          <Link href="https://github.com/teilorbarcelos">
            <a target="_blank">

              <Github className={styles.ionicon} />

              <h6 className={`${globals.px1} ${styles.link}`}>Github</h6>

            </a>
          </Link>
        </div>
        <div className={`${styles.folowMeItem} ${globals.py4}`}>
          <Link href="https://www.instagram.com/teilor.dev/">
            <a target="_blank">

              <Instagram className={styles.ionicon} />

              <h6 className={`${globals.px1} ${styles.link}`}>Instagram</h6>

            </a>
          </Link>
        </div>
        <div className={`${styles.folowMeItem} ${globals.py4}`}>
          <Link href="https://www.linkedin.com/in/teilorsb/">
            <a target="_blank">

              <Linkedin className={styles.ionicon} />

              <h6 className={`${globals.px1} ${styles.link}`}>Linkedin</h6>

            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}