import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import Logo from '../../components/svg/Logo'

export default function Footer() {

  return (
    <footer className={`${styles.footer} ${globals.py4}`}>

      <div className={`${styles.bbGray2} ${globals.my5} ${styles.mobile}`}></div>

      {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
      <div className={`addthis_inline_share_toolbox_62v1 ${styles.mobile}`}></div>

      <div className={`${styles.bbGray2} ${globals.my5}`}></div>

      <div className={globals.my5}>

        <Logo />

      </div>

      <div>
        <h6 className={globals.mask}>Developed by Teilor Souza Barcelos &copy; 2021</h6>
      </div>

    </footer>
  )
}