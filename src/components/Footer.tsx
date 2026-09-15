import styles from "./Footer.module.css";

function Footer() {
  return(
    <footer className={`${styles.footer} py-5`}>
      <div className="container">
        <div className="text-center">
          <h3 className={styles.footerName}>Mohammad Rehan</h3>
          <p className={styles.footerRole}>Frontend Developer</p>
          <p className={styles.footerCopyright}>© 2026 Mohammad Rehan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  ) ;
}

export default Footer;
