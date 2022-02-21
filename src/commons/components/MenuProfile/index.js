import Main from "src/commons/components/Main";
import styles from "src/commons/styles/MenuProfile.module.css";

import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const MenuProfile = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <section className={`container ${styles.wrapper}`}>
        <div className="row">
          <div className="col">
            <Link href="/profile" passHref>
              <h3 className={pathname == "/profile" ? `${styles["menu-profile-text"]} ${styles["on"]}` : `${styles["menu-profile-text"]} ${styles["off"]}`}>Profile</h3>
            </Link>
            <span className={pathname == "/test" ? `${styles["line"]}` : ""}></span>
          </div>
          <div className="col" onClick={() => setDropdown(!dropdown)}>
            <h3 className={pathname === "/product/list" ? `${styles["menu-profile-text"]} ${styles["on"]}` : `${styles["menu-profile-text"]} ${styles["off"]}`}>My Product</h3>
            <span className={dropdown ? `${styles["line"]}` : ""}></span>
            {dropdown ? (
              <>
                <div className={`${styles["dropdown-profile"]}`}>
                  <ul>
                    <Link href="/product/list" passHref>
                      <li className={`${styles["menu-profile"]}`}>
                        <p>View All</p>
                      </li>
                    </Link>
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
                router.push("/product/new");
              }}
              className={pathname == "/pageTestProfileMenu" ? `${styles["menu-profile-text"]} ${styles["on"]}` : `${styles["menu-profile-text"]} ${styles["off"]}`}
            >
              Selling Product
            </h3>
            <span className={pathname == "/pageTestProfileMenu" ? `${styles["line"]}` : ""}></span>
          </div>
          <div className="col">
            <h3
              onClick={() => {
                router.push("/product/list");
              }}
              className={pathname == "/profile" ? `${styles["menu-profile-text"]} ${styles["on"]}` : `${styles["menu-profile-text"]} ${styles["off"]}`}
            >
              My Order
            </h3>
            <span className={pathname == "/test" ? `${styles["line"]}` : ""}></span>
          </div>
        </div>
      </section>

      <section className="container">{children}</section>
    </>
  );
};

export default MenuProfile;
