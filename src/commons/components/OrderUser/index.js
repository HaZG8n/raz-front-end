import styles from "src/commons/styles/orderUser.module.css"
import Image from "next/image";
import chair from "src/assets/img/chair-home.png"

function CardOrderUser() {
  return (
    <>
        <section className={`${styles["card-order"]} row col-12`}>
          <div className={`${styles["image-order"]} col-md-2`}>
            <Image 
              src={chair}
              alt="order"
              width={69}
              height={83}
            />
          </div>
          <div className={`${styles["name-product"]} col-md-4`}>
            <p className={styles.nameProduct}>Name Product</p>
          </div>
          <div className={`${styles["price-product"]} col-md-2`}>
            <p className={styles.priceProduct}>Price</p>
          </div>
          <div className={`${styles["quantity-product"]} col-md-1`}>
            <p className={styles.quantityProduct}>Quantity</p>
          </div>
          <div className={`${styles["status-product"]} col-md-1`}>
            <p className={styles.statusProduct}>Status</p>
          </div>
          <div className={`${styles["total-product"]} col-md-2`}>
            <p className={styles.totalProduct}>Total</p>
          </div>
        </section>
    </>
  )
}

export default CardOrderUser;