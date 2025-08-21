import styles from "./NavBar.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={styles.container} role="banner">
      <section>
        <h1 style={{ margin: 0 }}>
          <Link
            className={styles.link}
            href="/"
            aria-label="Salvati Home Improvements home"
          >
            Salvati Home Improvements
          </Link>
        </h1>
      </section>

      <nav aria-label="Primary">
        <ul className={styles.navList}>
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/quote">
              Get Quote
            </Link>
          </li>
        </ul>
      </nav>

      <section>
        <Link className={styles.cta} href="/quote">
          Free Estimate
        </Link>
      </section>
    </header>
  );
}
