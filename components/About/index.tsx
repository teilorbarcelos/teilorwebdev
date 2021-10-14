import Link from 'next/link'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'

import Github from '../svg/Github'
import Html5 from '../svg/Html5'
import Javascript from '../svg/Javascript'
import Reactjs from '../svg/Reactjs'
import Sass from '../svg/Sass'
import Vuejs from '../svg/Vuejs'
import Laravel from '../svg/Laravel'
import Python from '../svg/Python'
import Typescript from '../svg/Typescript'
import Debian from '../svg/Debian'
import Nextjs from '../svg/Nextjs'
import Figma from '../svg/Figma'
import Nodejs from '../svg/Nodejs'
import Php from '../svg/php'
import Java from '../svg/Java'
import Mysql from '../svg/Mysql'
import Firebase from '../svg/Firebase'
import Csharp from '../svg/Csharp'
import Flutter from '../svg/Flutter'
import Elixir from '../svg/Elixir'

export default function About() {

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutItem}>
        <h2>About Me</h2>
      </div>
      <div className={`${styles.aboutItem} ${globals.flex}`}>
        <h4 className={`${styles.aboutMe} ${globals.mask}`}>Hello, I'm Teilor Souza Barcelos, Brazilian, resident in Criciúma - SC, a truly passionate about technology, web development & front and back-end programming.</h4>
        <div data-aos="fade-left" className={styles.myPhoto}>

          <img title="Hello!" className={styles.img} src='https://avatars.githubusercontent.com/u/80414833?v=4' />

        </div>
      </div>
      <div className={styles.aboutItem}>
        <h3 className={globals.mt3}>Some technologies that I know:</h3>
      </div>
      <div className={`${styles.technologies} ${globals.mt3}`}>
        <div>
          <Link href="https://github.com/teilorbarcelos">
            <a title="Github" target="_blank">

              <Github />

            </a>
          </Link>
        </div>
        <div title="NextJs" onClick={(e) => alert(e.currentTarget.title)}>

          <Nextjs />

        </div>
        <div title="Html5" onClick={(e) => alert(e.currentTarget.title)}>

          <Html5 />

        </div>
        <div title="Javascript" onClick={(e) => alert(e.currentTarget.title)}>

          <Javascript />

        </div>
        <div title="ReactJs / React Native" onClick={(e) => alert(e.currentTarget.title)}>

          <Reactjs />

        </div>
        <div title="Sass" onClick={(e) => alert(e.currentTarget.title)}>

          <Sass />

        </div>
        <div title="Vuejs" onClick={(e) => alert(e.currentTarget.title)}>

          <Vuejs />

        </div>
        <div title="Laravel" onClick={(e) => alert(e.currentTarget.title)}>

          <Laravel />

        </div>
        <div title="Python" onClick={(e) => alert(e.currentTarget.title)}>

          <Python />

        </div>
        <div title="Typescript" onClick={(e) => alert(e.currentTarget.title)}>

          <Typescript />

        </div>
        <div title="Debian" onClick={(e) => alert(e.currentTarget.title)}>

          <Debian />

        </div>
        <div title="Figma" onClick={(e) => alert(e.currentTarget.title)}>

          <Figma />

        </div>
        <div title="NodeJs" onClick={(e) => alert(e.currentTarget.title)}>

          <Nodejs />

        </div>
        <div title="PHP" onClick={(e) => alert(e.currentTarget.title)}>

          <Php />

        </div>
        <div title="Java" onClick={(e) => alert(e.currentTarget.title)}>

          <Java />

        </div>
        <div title="C#" onClick={(e) => alert(e.currentTarget.title)}>

          <Csharp />

        </div>
        <div title="MySQL" onClick={(e) => alert(e.currentTarget.title)}>

          <Mysql />

        </div>
        <div title="Firebase" onClick={(e) => alert(e.currentTarget.title)}>

          <Firebase />

        </div>
        <div title="Flutter" onClick={(e) => alert(e.currentTarget.title)}>

          <Flutter />

        </div>
        <div title="Elixir" onClick={(e) => alert(e.currentTarget.title)}>

          <Elixir />

        </div>

      </div>
    </section>
  )
}