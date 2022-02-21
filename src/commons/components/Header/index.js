import styles from "src/commons/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

import search from "src/assets/svg/search.svg";
import searchWhite from "src/assets/svg/search-white.svg";
import wishlist from "src/assets/svg/wishlist.svg";
import cart from "src/assets/svg/cart.svg";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchProduct } from "src/commons/module/product";

const Header = () => {
  const { cart: carts } = useSelector((state) => state.cart);
  const state = useSelector((state) => state);
  const { wishList } = state.wishList;
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState({});
  const router = useRouter();

  console.log("ROUTER", router);

  const handleKeyword = (e) => {
    if (e.key === "Enter") {
      router.push(`${router.asPath}?keyword=${keyword}`);
    }
  };

  const getProduct = (search, page) => {
    const query = `?search=${search}&per_page=9&page=${page}`
    searchProduct(query)
      .then((res) => {
        console.log("search data", res.data);
        setProducts({
          products: res.data.data,
        });
      });
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
    getProduct(keyword, 1);
    // console.log("search", keyword)
  };

  useEffect(() => {
    let search = router.query.keyword ? router.query.keyword : "";
    getProduct(search, 1);
  }, [router]);

  return (
    <>
      <header
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "transparent" }}
      >
        <nav className="container">
          <h1 className={`${styles["brand-text"]}`}>RAZ</h1>
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
                >
                  Page
                </p>

                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                  <Link href="/about-us" passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>About Us</p>
                    </li>
                  </Link>
                  <Link href='/contact-us' passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>Contact Us</p>
                    </li>
                  </Link>
                  <Link href='/comingsoon' passHref>
                    <li>
                      <p className={`dropdown-item ${styles["submenu"]}`}>Coming Soon</p>
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
                      <p className={`dropdown-item ${styles["submenu"]}`}>FAQ page</p>
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

                    <Link href='/cart' passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>Shopping Cart</p>
                      </li>
                    </Link>
                    <Link href='/cart/checkout' passHref>
                      <li>
                        <p className={`dropdown-item ${styles["submenu"]}`}>Check Out</p>
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
                <div
                  className={styles["logo"]}
                  onClick={() => setShowSearch(!showSearch)}
                >
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
              <div className="col">
                <div className={styles["hamburger-menu"]}>
                  <span className={styles["line-up"]}></span>
                  <span className={styles["line-center"]}></span>
                  <span className={styles["line-down"]}></span>
                </div>
              </div>
            </div>
          </section>
        </nav>
      </header>
      {showSearch ? (
        <>
          <div className={`${styles["search-box"]}`}>
            <input
              // onChange={(e) => {
              //   setKeyword(e.target.value);
              // }}
              onChange={handleChange}
              onKeyDown={handleKeyword}
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
  // navigasi header
  // check2
};

export default Header;
