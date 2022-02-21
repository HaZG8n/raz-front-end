import styles from "src/commons/styles/comingsoon.module.css";
import Image from "next/image";
import Link from "next/link";
import Layout from "src/commons/components/Layout";

import search from "src/assets/svg/searchcoming.svg";
import searchWhite from "src/assets/svg/search-white.svg";
import wishlist from "src/assets/svg/favcoming.svg";
import cart from "src/assets/svg/cartcoming.svg";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

import facebook from "src/assets/svg/facebook.svg";
import twitter from "src/assets/svg/twitter.svg";
import youtube from "src/assets/svg/youtube.svg";
import dribble from "src/assets/svg/dribble.svg";

function ComingSoon() {
  const { token } = useSelector((state) => state.auth);
  const { cart: carts } = useSelector((state) => state.cart);
  const [showSearch, setShowSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  console.log("ROUTER", router);

  const handleKeyword = (e) => {
    if (e.key === "Enter") {
    }
  };

  const clickSearch = () => {
    setDropdown(false);
    setShowSearch(!showSearch);
  };

  const clickDropdown = () => {
    setDropdown(!dropdown);
    setShowSearch(false);
  };
  return (
    <>
    <Layout title="ComingSoon"/>
      <header
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "black", color: "white"}}
      >
        <nav className="container">
          <Link href="/home" passHref>
            <h1 className={`${styles["brand-text"]}`}>RAZ</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <section className="collapse navbar-collapse" id="navbarText">
            <ul className="nav navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/home" passHref>
                  <p
                    className={`nav-link active ${styles["menu-nav"]}`}
                    aria-current="page"
                    style={{ color: "#FFF" }}
                  >
                    Home
                  </p>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <p
                  className={`nav-link dropdown-toggle active ${styles["menu-nav"]}`}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#FFF" }}
                >
                  Page
                </p>
                <ul
                  className="dropdown-menu bg-black"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link href="/about-us" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>
                        About Us
                      </p>
                    </li>
                  </Link>
                  <Link href="/contact-us" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>
                        Contact Us
                      </p>
                    </li>
                  </Link>
                  <Link href="/comingsoon" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>
                        Coming Soon
                      </p>
                    </li>
                  </Link>
                  <Link href="/404" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>
                        404 Page
                      </p>
                    </li>
                  </Link>
                  <Link href="/frequently-asked-questions" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>
                        FAQ page
                      </p>
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <p
                  className={`nav-link dropdown-toggle active ${styles["menu-nav"]}`}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#FFF" }}
                >
                  Shop
                </p>
                <ul
                  className="dropdown-menu bg-black"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <p
                      className={`dropdown-item disable ${styles["other-page-text"]}`}
                    >
                      Other Page
                    </p>
                  </li>
                  <div className={`${styles["other-submenu"]}`}>
                    <Link href="/cart" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>
                          Shopping Cart
                        </p>
                      </li>
                    </Link>
                    <Link href="/cart/checkout" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>
                          Check Out
                        </p>
                      </li>
                    </Link>
                    <Link href="/profile" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>
                          My Account
                        </p>
                      </li>
                    </Link>
                    <Link href="/myorder" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>
                          Order Tracking
                        </p>
                      </li>
                    </Link>
                  </div>
                </ul>
              </li>
              <Link href="/blog" passHref>
                <li className="nav-item">
                  <p
                    className={`nav-link active ${styles["menu-nav"]}`}
                    aria-current="page"
                    style={{ color: "#FFF" }}
                  >
                    Blog
                  </p>
                </li>
              </Link>
            </ul>

            <div className="row">
              <div className="col">
                <div className={styles["logo"]} onClick={clickSearch}>
                  <Image src={search} alt="avatar" />
                </div>
              </div>
              <div className="col">
                <div
                  className={styles["logo"]}
                  onClick={() => {
                    router.push("/wishlist");
                  }}
                >
                  <div className={styles.total}>1</div>
                  <Image src={wishlist} alt="avatar" />
                </div>
              </div>
              <div className="col">
                <div
                  className={styles["logo"]}
                  onClick={() => {
                    router.push("/cart");
                  }}
                >
                  <div className={styles.total}>{carts.length}</div>
                  <Image src={cart} alt="avatar" />
                </div>
              </div>
              <div className="col dropdown">
                <div
                  className={`${styles["hamburger-menu"]}`}
                  onClick={clickDropdown}
                >
                  {console.log(dropdown)}
                  <span className={styles["line-up"]}></span>
                  <span className={styles["line-center"]}></span>
                  <span className={styles["line-down"]}></span>
                </div>
                {dropdown ? (
                  <>
                    {!token ? (
                      <>
                        <div className={`${styles["box-hamburger-menu"]}`}>
                          <ul className={`${styles["ul-menu"]}`}>
                            <Link href="/auth" passHref>
                              <li className={`${styles["li-menu"]}`}>Login</li>
                            </Link>
                            <Link href="/auth" passHref>
                              <li className={`${styles["li-menu"]}`}>
                                Register
                              </li>
                            </Link>
                            <li className={`${styles["li-menu"]}`}>Chat</li>
                            <li className={`${styles["li-menu"]}`}>
                              Notification
                            </li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`${styles["box-hamburger-menu"]}`}>
                          <ul className={`${styles["ul-menu"]}`}>
                            <Link href="/profile" passHref>
                              <li className={`${styles["li-menu"]}`}>
                                Profile
                              </li>
                            </Link>
                            <li className={`${styles["li-menu"]}`}>Chat</li>
                            <li className={`${styles["li-menu"]}`}>
                              Notification
                            </li>
                            <li className={`${styles["li-menu"]}`}>Logout</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </section>
        </nav>
      </header>
      {showSearch ? (
        <>
          <div className={`${styles["search-box"]}`}>
            <input
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  router.push(`${router.asPath}&keyword=${keyword}`);
                }
              }}
              className={`${styles["animated-input-in"]}`}
            />
            <div className={styles["logo-input"]}>
              <Image src={searchWhite} alt="avatar" />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <section className={`${styles["main-section"]} row`}>
        <div className={`${styles["form-coming"]} col-md-6`}>
          <p className={`${styles["text-coming"]}`}>
            We{"'"}re Building <br /> Something New
          </p>
          <div className={`${styles["days-coming"]} row`}>
            <div className={`${styles["coming-day"]} col-md-2`}>
              <p className={styles.num}>09</p>
              <p className={styles.day}>Days</p>
            </div>
            <div className={`${styles["coming-day"]} col-md-3`}>
              <p className={styles.num}>18</p>
              <p className={styles.day}>Hours</p>
            </div>
            <div className={`${styles["coming-day"]} col-md-3`}>
              <p className={styles.num}>36</p>
              <p className={styles.day}>Mins</p>
            </div>
            <div className={`${styles["coming-day"]} col-md-3`}>
              <p className={styles.num}>56</p>
              <p className={styles.day}>Secs</p>
            </div>
          </div>
          <input
            type="email"
            defaultValue="Your Email"
            className={styles.input}
          />
        </div>
        <div className={`${styles["form-coming"]} col-md-6`}></div>
        <div className={`${styles["left-icon"]} row col-md-6`}>
          <p className={`${styles["brand-icon"]} col-md-3`}>RAZ</p>
          <p className={`${styles["text-brand"]} col-md-9`}>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            <br /> Quisque a nunc vel diam auctor commodo.
          </p>
        </div>
        <div className={`${styles["right-side"]} row col-md-6`}>
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
    </>
  );
}

export default ComingSoon;
