import styles from "src/commons/styles/orderUser.module.css";
import Image from "next/image";
import chair from "src/assets/img/chair-home.png";

function CardOrderUser({ name, price, shiping, quantity, status, total }) {
  return (
    <>
      <section className={`${styles["card-order"]} row col-12`}>
        <div className={`${styles["image-order"]} col-md-2`}>
          <Image src={chair} alt="order" width={69} height={83} />
        </div>
        <div className={`${styles["name-product"]} col-md-4`}>
          <p className={styles.nameProduct}>{name}</p>
        </div>
        <div className={`${styles["price-product"]} col-md-2`}>
          <p className={styles.priceProduct}>{price}</p>
        </div>
        <div className={`${styles["quantity-product"]} col-md-1`}>
          <p className={styles.quantityProduct}>{quantity}</p>
        </div>
        <div className={`${styles["status-product"]} col-md-1`}>
          <p className={styles.statusProduct}>{status}</p>
        </div>
        <div className={`${styles["status-shipping"]} col-md-2`}>
          <p className={styles.totalProduct}>{shiping}</p>
        </div>
        <div className={`${styles["total-product"]} col-md-2`}>
          <p className={styles.totalProduct}>{total}</p>
        </div>
      </section>
    </>
  );
}

export default CardOrderUser;
