// import Main from "src/commons/components/Main";
import styles from "src/commons/styles/MenuProfile.module.css";

import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const MenuProfile = ({ children }) => {
  const [dropdownProduct, setDropdownProduct] = useState(false);
  const [dropdownOrder, setDropdownOrder] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <section className={`container ${styles.wrapper}`}>
        <div className="row">
          <div className="col">
            <Link href="/profile" passHref>
              <h3 className={dropdownProduct === false && dropdownOrder === false && pathname === "/profile" ?
                `${styles["menu-profile-text"]} ${styles["on"]}` :
                `${styles["menu-profile-text"]} ${styles["off"]}`}>Profile</h3>
            </Link>
            <span className={pathname === "/test" ? `${styles["line"]}` : ""}></span>
          </div>
          <div className="col" onClick={() => {
            setDropdownProduct(!dropdownProduct)
            setDropdownOrder(false)
          }}>
            <h3 className={dropdownProduct === true || pathname === "/product/list" ?
              `${styles["menu-profile-text"]} ${styles["on"]}` :
              `${styles["menu-profile-text"]} ${styles["off"]}`}>My Product</h3>
            <span className={dropdownProduct ? `${styles["line"]}` : ""}></span>
            {dropdownProduct ? (
              <>
                <div className={`${styles["dropdown-profile"]}`}>
                  <ul>
                    <Link href="/product/list" passHref>
                      <li className={`${styles["menu-profile"]}`} style={pathname === '/product/list' ?
                        { color: '#fff' } : { color: '#B4B4B4' }} >
                        <p>All</p>
                      </li>
                    </Link>
                    <li className={`${styles["menu-profile"]}`}>
                      <p>Archieve</p>
                    </li>
                    <li className={`${styles["menu-profile"]}`}>
                      <p>Soldout</p>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="col">
            <h3
              onClick={() => {
                router.push("/product/new")
                setDropdownOrder(false)
                setDropdownProduct(false)
              }}
              className={pathname == "/product/new" && dropdownOrder === false && dropdownProduct === false ?
                `${styles["menu-profile-text"]} ${styles["on"]}` :
                `${styles["menu-profile-text"]} ${styles["off"]}`}
            >
              Selling Product
            </h3>
            <span className={pathname == "/product/new" && dropdownOrder === false && dropdownProduct === false ? `${styles["line"]}` : ""}></span>
          </div>
          <div className="col" onClick={() => {
            setDropdownOrder(!dropdownOrder)
            setDropdownProduct(false)
          }}>
            <h3 className={dropdownOrder === true || pathname === "/myorder" ?
              `${styles['menu-profile-text']} ${styles['on']}` :
              `${styles['menu-profile-text']} ${styles['off']}`
            }>My Order</h3>
            <span className={dropdownOrder ? `${styles["line"]}` : ""}></span>
            {dropdownOrder ? (
              <>
                <div className={`${styles["dropdown-profile"]}`}>
                  <ul>
                    <Link href="/myorder" passHref>
                      <li className={`${styles["menu-profile"]}`} style={pathname === '/order/track' ?
                        { color: '#fff' } : { color: '#B4B4B4' }} >
                        <p>All</p>
                      </li>
                    </Link>
                    <Link href="myorder" passHref>
                      <li className={`${styles["menu-profile"]}`}
                        style={pathname === '/myorder' ?
                          { color: '#fff' } : { color: '#B4B4B4' }} >
                        <p>Processed</p>
                      </li>
                    </Link>
                    <Link href='/myorder' passHref>
                      <li className={`${styles["menu-profile"]}`}
                        style={pathname === '/myorder' ?
                          { color: '#fff' } : { color: '#B4B4B4' }} >
                        <p>Send</p>
                      </li>
                    </Link>
                    <Link href='/myorder' passHref>
                      <li className={`${styles["menu-profile"]}`}
                        style={pathname === '/myorder' ?
                          { color: '#fff' } : { color: '#B4B4B4' }} >
                        <p>Completed</p>
                      </li>
                    </Link>
                    <Link href='/myorder' passHref>
                      <li className={`${styles["menu-profile"]}`}
                        style={pathname === '/myorder' ?
                          { color: '#fff' } : { color: '#B4B4B4' }} >
                        <p>Order Cancel</p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="container">{children}</section>
    </>
  );
};

export default MenuProfile;
