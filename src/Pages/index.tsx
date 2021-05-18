import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <img src="./images/logo.svg" alt="logotipo my super hero" />
      </header>
      <main>
        <div>
          <h1>Api Marvel Comics Characters</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis culpa veritatis, sequi itaque qui, quos aperiam aut
            saepe eos quisquam quod earum perferendis quis voluptatum eveniet
            illum iusto minus esse?
          </p>
          <a href="/characters">Pesquisar</a>
          {/* <Link to={`/characters`}>Pesquisar</Link> */}
        </div>

        <div>
          <img src="./images/invincible-Iron-Man.jpg" alt="" />
        </div>
      </main>
      <footer>
        <small>Data Provided by Marvel &copy; 2020 MARVEL</small>
      </footer>
    </div>
  );
}
