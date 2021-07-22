import Link from "next/link";
import styles from "./Nav.module.sass";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          {/* Internal Links */}
          <Link href="/">
            <a className={styles.a}>Home</a>
          </Link>
        </li>

        <li>
          <Link href="about">
            <a className={styles.a}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
