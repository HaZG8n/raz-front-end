
import styles from "src/commons/styles/home.module.css"
import Main from 'src/commons/components/Main'

const Home = () => {

  return (
    <Main>
      <section className={`${styles['bg-home']}`}>
        <h1 className={`${styles['furniture-text']}`}>Minimal Furniture Store</h1>

        <p className={`${styles['text']}`} style={{
          position: 'relative',
          fontFamily: 'Arimo',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '16px',
          lineHeight: '37px',
          textAlign: 'center',
          // color: '#4D4D4D',
          // width: '50%'
        }}>
          Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
          Quisque a nunc vel diam auctor commodo.
          Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim
        </p>
      </section>
      <div>
        <p className={`${styles['text']}`}>dsadasdas</p>
      </div>
    </Main>
  )
}

export default Home
