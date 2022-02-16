import styles from "src/commons/styles/Footer.module.css"
import Image from "next/image"

import facebook from "src/assets/svg/facebook.svg"
import twitter from "src/assets/svg/twitter.svg"
import youtube from "src/assets/svg/youtube.svg"
import dribble from "src/assets/svg/dribble.svg"
import email from "src/assets/svg/email.svg"
import phone from "src/assets/svg/phone.svg"
import clock from "src/assets/svg/clock.svg"

const Footer = () => {
    return (
        <>
            <footer className="container-fluid bg-dark" style={{ height: '100%' }}>
                <div className={`container ${styles['wrapper']}`}>
                    <main className="row" >
                        <section className="col-sm">
                            <h1 className={`text-white ${styles['brand-text']}`}>RAZ</h1>
                            <p className={`${styles['description-text']}`}>
                                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                                Quisque a nunc vel diam auctor commodo.
                            </p>
                            <div className="row">
                                <div className="col">
                                    <Image src={facebook} alt="avatar" />
                                </div>
                                <div className="col">
                                    <Image src={twitter} alt="avatar" />
                                </div>
                                <div className="col">
                                    <Image src={youtube} alt="avatar" />
                                </div>
                                <div className="col">
                                    <Image src={dribble} alt="avatar" />
                                </div>
                            </div>
                        </section>

                        <section className="col-sm">
                            <div className={`${styles['wrapper-mobile']}`}>
                                <h2 className={`text-white ${styles['h2-text']}`}>COMPANY</h2>
                                <div className={`${styles['list']}`}>
                                    <p>ABOUT US</p>
                                    <p>HELP CENTER</p>
                                    <p>LICENSES</p>
                                    <p>MARKET API</p>
                                </div>
                            </div>
                        </section>

                        <section className="col-sm">
                            <div className={`${styles['wrapper-mobile']}`}>
                                <h2 className={`text-white ${styles['h2-text']}`}>USERFUL</h2>
                                <div className={`${styles['list']}`}>
                                    <p>THE COLLECTIONS</p>
                                    <p>SIZE GUID</p>
                                    <p>LOOKBOOK</p>
                                    <p>INSTAGRAM SHOP</p>
                                </div>
                            </div>
                        </section>

                        <section className="col-sm">
                            <div className={`${styles['wrapper-mobile']}`}>
                                <h2 className={`text-white ${styles['h2-text']}`}>CONTACT US</h2>
                                <div className={`${styles['list']}`}>
                                    <div className={`row ${styles['wrapper-contact']}`}>
                                        <div className="col">
                                            <div className={`${styles['icon-contact']}`}>
                                                <Image src={email} alt="avatar" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <p className={`${styles['list-contacts']}`}>info@la-studioweb.com</p>
                                        </div>
                                    </div>

                                    <div className={`row ${styles['wrapper-contact']}`}>
                                        <div className="col">
                                            <div className={`${styles['icon-contact']}`}>
                                                <Image src={phone} alt="avatar" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <p className={`${styles['list-contacts']}`}>+44.954.954.86</p>
                                        </div>
                                    </div>

                                    <div className={`row ${styles['wrapper-contact']}`}>
                                        <div className="col">
                                            <div className={`${styles['icon-contact']}`}>
                                                <Image src={clock} alt="avatar" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <div className={`${styles['clock']}`}> */}
                                            <p className={`${styles['list-clocks']}`}>9:00am - 19:00pm Monday - Sunday</p>
                                            {/* </div> */}
                                            {/* <p></p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <p className={`${styles['copyright-text']}`}>© 2019 RAZ Store All rights reserved</p>
                    </main>
                </div>
            </footer>
        </>
    )
}

export default Footer