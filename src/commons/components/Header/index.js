import styles from "src/commons/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
import search from 'src/assets/svg/search.svg'
import searchWhite from 'src/assets/svg/search-white.svg'
import wishlist from 'src/assets/svg/wishlist.svg'
import cart from 'src/assets/svg/cart.svg'
=======
import search from "src/assets/svg/search.svg";
import wishlist from "src/assets/svg/wishlist.svg";
import cart from "src/assets/svg/cart.svg";
>>>>>>> 0273be533c20829a52fef075263d1c3544e48e2d

import { useSelector } from 'react-redux'
import { useState } from 'react'

const Header = () => {
<<<<<<< HEAD
    const [showSearch, setShowSearch] = useState(false)

    console.log(showSearch)
    // const state = useSelector((state) => state)
    // const { token } = state.auth
    // console.log(token)
    return (
        <>
            <header className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: 'transparent' }}>
                <nav className='container'>
                    <h1 className={`${styles['brand-text']}`}>RAZ</h1>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>
=======
  return (
    <div className={styles.wrapper}>
      <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "transparent" }}>
        <nav className="container-fluid">
          <h1 className={`${styles["brand-text"]}`}>RAZ</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
>>>>>>> 0273be533c20829a52fef075263d1c3544e48e2d

          <section className="collapse navbar-collapse" id="navbarText">
            <ul className="nav navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/home" passHref>
                  <p className={`nav-link active ${styles["menu-nav"]}`} aria-current="page">
                    Home
                  </p>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <p className={`nav-link dropdown-toggle active ${styles["menu-nav"]}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Page
                </p>
                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <p className={`dropdown-item ${styles["submenu"]}`}>About Us</p>
                  </li>
                  <li>
                    <p className={`dropdown-item ${styles["submenu"]}`}>Contact Us</p>
                  </li>
                  <li>
                    <p className={`dropdown-item ${styles["submenu"]}`}>Coming Soon</p>
                  </li>
                  <li>
                    <p className={`dropdown-item ${styles["submenu"]}`}>404 Page</p>
                  </li>
                  <li>
                    <p className={`dropdown-item ${styles["submenu"]}`}>FAQ page</p>
                  </li>
                </ul>
              </li>

<<<<<<< HEAD
                            <li className='nav-item dropdown'>
                                <p className={`nav-link dropdown-toggle active ${styles['menu-nav']}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Page</p>
                                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>About Us</p></li>
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>Contact Us</p></li>
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>Coming Soon</p></li>
                                    <Link href='/404' passHref>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>404 Page</p></li>
                                    </Link>
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>FAQ page</p></li>
                                </ul>
                            </li>

                            <li className='nav-item dropdown'>
                                <p className={`nav-link dropdown-toggle active ${styles['menu-nav']}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</p>
                                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                                    <li><p className={`dropdown-item disable ${styles['other-page-text']}`}>Other Page</p></li>
                                    <di className={`${styles['other-submenu']}`}>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>Shopping Cart</p></li>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>Check Out</p></li>
                                        <Link href='/profile' passHref>
                                            <li><p className={`dropdown-item ${styles['submenu']}`}>My Account</p></li>
                                        </Link>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>Order Tracking</p></li>
                                    </di>
                                </ul>
                            </li>

                            <li className='nav-item'>
                                <p className={`nav-link active ${styles['menu-nav']}`} aria-current="page">Blog</p>
                            </li>
                        </ul>

                        <div className='row'>
                            <div className='col'>
                                <div className={styles['logo']} onClick={() => setShowSearch(!showSearch)}>
                                    <Image src={search} alt='avatar' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles['logo']}>
                                    <Image src={wishlist} alt='avatar' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles['logo']}>
                                    <Image src={cart} alt='avatar' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles['hamburger-menu']}>
                                    <span className={styles['line-up']}></span>
                                    <span className={styles['line-center']}></span>
                                    <span className={styles['line-down']}></span>
                                </div>
                            </div>
                        </div>
                    </section>
                </nav>
            </header>
            {
                showSearch ? (
                    <>
                        <div className={`${styles['search-box']}`}>
                            <input className={`${styles['animated-input-in']}`} />
                            <div className={styles['logo-input']}>
                                <Image src={searchWhite} alt='avatar' />
                            </div>
                        </div>
                    </>
                ) :
                    <></>
            }
        </>
    )
}

export default Header
=======
              <li className="nav-item dropdown">
                <p className={`nav-link dropdown-toggle active ${styles["menu-nav"]}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </p>
                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <p className={`dropdown-item disable ${styles["other-page-text"]}`}>Other Page</p>
                  </li>
                  <di className={`${styles["other-submenu"]}`}>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>Shopping Cart</p>
                    </li>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>Check Out</p>
                    </li>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>My Account</p>
                    </li>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>Order Tracking</p>
                    </li>
                  </di>
                </ul>
              </li>
              <li className="nav-item">
                <p className={`nav-link active ${styles["menu-nav"]}`} aria-current="page">
                  Blog
                </p>
              </li>
            </ul>

            <div className={styles.icons}>
              <div className="row">
                <div className="col">
                  <div className={styles["logo"]}>
                    <Image src={search} alt="avatar" />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["logo"]}>
                    <Image src={wishlist} alt="avatar" />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["logo"]}>
                    <Image src={cart} alt="avatar" />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["hamburger-menu"]}>
                    <span className={styles["line-up"]}></span>
                    <span className={styles["line-center"]}></span>
                    <span className={styles["line-down"]}></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </nav>
      </header>
    </div>
  );
};

export default Header;
>>>>>>> 0273be533c20829a52fef075263d1c3544e48e2d
