import styles from "src/commons/styles/notification.module.css"
import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Banner from "src/commons/components/Banner"

function Notification() {
  return (
    <>
        <Main>
            <Layout title="Notification">
                <Banner title="Notification" text="See your notifications for the latest updates"/>
                <section className={`${styles["fill-profile"]}`}>
              <div className={`${styles["gender-profile"]} row col-md-12`}>
                <div className={`${styles["gender-fill"]} col-md-9`}>
                  <p className={styles["word-titles"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className={styles["word-fill"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                </div>
                <div className={`${styles.notif} col-md-3`}></div>
              </div>
              <div className={`${styles["gender-profile"]} row col-md-12`}>
                <div className={`${styles["gender-fill"]} col-md-12`}>
                  <p className={styles["word-title"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className={styles["word-fill"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                </div>
              </div>
              <div className={`${styles["gender-profile"]} row col-md-12`}>
                <div className={`${styles["gender-fill"]} col-md-12`}>
                  <p className={styles["word-title"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className={styles["word-fill"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                </div>
              </div>
            </section>
            </Layout>
        </Main>
    </>
  )
}

export default Notification;