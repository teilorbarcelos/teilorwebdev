import styles from './styles.module.css'
import BgHero from '../svg/BgHero'

export default function Background() {
  return (
    <section className={styles.container}>
      <BgHero className={styles.svgHero} />
    </section>
  )
}