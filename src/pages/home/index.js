import styles from "src/commons/styles/Home.module.css"
import Main from 'src/commons/components/Main'

const Home = () => {
  return (
    <Main>
      <section className={`${styles['bg-home']}`}>
        <h1 className={`${styles['furniture-text']}`}>Minimal Furniture Store</h1>

      </section>
    </Main>
  )
}

export default Home
