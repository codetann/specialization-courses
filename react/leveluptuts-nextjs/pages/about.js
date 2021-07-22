import styles from "../styles/About.module.sass";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout>
      <h1 className={styles.about}>About</h1>
    </Layout>
  );
}
