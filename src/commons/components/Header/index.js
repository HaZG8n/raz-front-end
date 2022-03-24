import styles from "src/commons/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

import search from "src/assets/svg/search.svg";
import searchWhite from "src/assets/svg/search-white.svg";
import wishlist from "src/assets/svg/wishlist.svg";
import cart from "src/assets/svg/cart.svg";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setsearch } from "src/redux/actions/product";

const Header = () => {
  const dispatch = useDispatch()
  const allState = useSelector((state) => state)
  console.log("fakyuuuu", allState);

  const { token } = useSelector((state) => state.auth);
  const { cart: carts } = useSelector((state) => state.cart);
  const wishList = useSelector((state) => state.wishList.wishList);
  const [showSearch, setShowSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  console.log("WISH", wishList);

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
      <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "transparent" }}>
        <nav className="container">
          <Link href="/" passHref>
            <h1 className={`${styles["brand-text"]}`}>RAZ</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

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
                  <Link href="/about-us" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>About Us</p>
                    </li>
                  </Link>
                  <Link href="/contact-us" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>Contact Us</p>
                    </li>
                  </Link>
                  <Link href="/comingsoon" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>Coming Soon</p>
                    </li>
                  </Link>
                  <Link href="/404" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>404 Page</p>
                    </li>
                  </Link>
                  <Link href="/frequently-asked-questions" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>FAQ page</p>
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <p className={`nav-link dropdown-toggle active ${styles["menu-nav"]}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </p>
                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <p className={`dropdown-item disable ${styles["other-page-text"]}`}>Other Page</p>
                  </li>
                  <div className={`${styles["other-submenu"]}`}>
                    <Link href="/cart" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>Shopping Cart</p>
                      </li>
                    </Link>
                    <Link href="/cart/checkout" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>Check Out</p>
                      </li>
                    </Link>
                    <Link href="/profile" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>My Account</p>
                      </li>
                    </Link>
                    <Link href="/myorder" passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>Order Tracking</p>
                      </li>
                    </Link>
                  </div>
                </ul>
              </li>
              <Link href="/blog" passHref>
                <li className="nav-item">
                  <p className={`nav-link active ${styles["menu-nav"]}`} aria-current="page">
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
                  <div className={styles.total}>{wishList.length}</div>
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
              <div className="col dropdown" >
                <div className={`${styles["hamburger-menu"]}`} onClick={clickDropdown}>
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
                              <li className={`${styles["li-menu"]}`}>Register</li>
                            </Link>
                            <Link href="/chat" passHref>
                              <li className={`${styles["li-menu"]}`}>Chat</li>
                            </Link>
                            <Link href="/notification" passHref>
                              <li className={`${styles["li-menu"]}`}>Notification</li>
                            </Link>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`${styles["box-hamburger-menu"]}`}>
                          <ul className={`${styles["ul-menu"]}`}>
                            <Link href="/profile" passHref>
                              <li className={`${styles["li-menu"]}`}>Profile</li>
                            </Link>
                            <Link href="/chat" passHref>
                              <li className={`${styles["li-menu"]}`}>Chat</li>
                            </Link>
                            <Link href="/notification" passHref>
                              <li className={`${styles["li-menu"]}`}>Notification</li>
                            </Link>
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
                  // router.push(`${router.asPath}&keyword=${keyword}`);
                  router.query.keyword = keyword
                  router.push({
                    pathname: router.pathname,
                    query: router.query
                  });
                  dispatch(setsearch(keyword))
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
    </>
  );
  // coba
};

export default Header;
