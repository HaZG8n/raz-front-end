import styles from "src/commons/styles/chat.module.css";
import Layout from "src/commons/components/Layout";
import Banner from "src/commons/components/Banner";
import Main from "src/commons/components/Main";
import profile from "src/assets/img/profileraz.png";

import Image from "next/image";

function Chat() {
  return (
    <>
      <Main>
        <Layout title="Chat">
          <Banner
            title="Chat"
            text="See your notifications for the latest updates"
          />
          <section className={`row ${styles["main-section"]}`}>
            <div className={`${styles["fill-profile"]} col-md-4`}>
              <div className={`${styles["profile-chat"]} row`}>
                <div className={`${styles["profile"]} col-md-4`}>
                  <Image
                    alt="profile"
                    src={profile}
                    width={60}
                    height={60}
                    className={styles.profile}
                  />
                  <div className={styles.mark}></div>
                </div>
                <div className={`${styles["info-profile"]} col-md-8`}>
                  <p className={styles.name}>Syifa Guys</p>
                  <p className={styles.status}>Online</p>
                </div>
              </div>
              <div className={`${styles["info-chat"]} row`}>
                <div className={`${styles["profile"]} col-md-4`}>
                  <Image
                    alt="profile"
                    src={profile}
                    width={60}
                    height={60}
                    className={styles.profile}
                  />
                  <div className={styles.mark}></div>
                </div>
                <div className={`${styles["info-profile"]} col-md-8`}>
                  <p className={styles.namee}>Arul</p>
                  <p className={styles.statuss}>
                    Lorem ipsum dolor sit amet...{" "}
                  </p>
                </div>
              </div>
              <div className={`${styles["info-chat"]} row`}>
                <div className={`${styles["profile"]} col-md-4`}>
                  <Image
                    alt="profile"
                    src={profile}
                    width={60}
                    height={60}
                    className={styles.profile}
                  />
                  <div className={styles.mark}></div>
                </div>
                <div className={`${styles["info-profile"]} col-md-8`}>
                  <p className={styles.namee}>Afgan</p>
                  <p className={styles.statuss}>
                    Lorem ipsum dolor sit amet...{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles["fill-chat"]} col-md-8`}>
              <div className={`${styles["profile-chat"]} row`}>
                <div className={`${styles["profile"]} col-md-2`}>
                  <Image
                    alt="profile"
                    src={profile}
                    width={60}
                    height={60}
                    className={styles.profile}
                  />
                  <div className={styles.mark}></div>
                </div>
                <div className={`${styles["info-profile"]} col-md-10`}>
                  <p className={styles.name}>Arul</p>
                  <p className={styles.status}>Online</p>
                </div>
              </div>
              <div className={`${styles["chat-message"]} row`}>
                <input className={`${styles["types-message"]} col-md-6`}
                    type="text"
                    placeholder="Write Your Message ..."
                />
                <button className={`btn ${styles["button-send"]} col-md-6`}>Send</button>
              </div>
            </div>
          </section>
        </Layout>
      </Main>
    </>
  );
}

export default Chat;
