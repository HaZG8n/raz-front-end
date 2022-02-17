import styles from "src/commons/styles/cardProduct.module.css"
import Image from "next/image";
import chair from "src/assets/img/chair.png"

function CardProduct() {
  return (
    <>
        <section className={`${styles["card-product"]}`}>
            <div className={styles.image}>
                <Image 
                    width={293}
                    height={472}
                    src={chair}
                    alt="product"
                />
            </div>
            <figcaption className={styles["fill-product"]}>
                <p className={styles["name-product"]}>Nama Produk</p>
            </figcaption>
            <figcaption className={styles["fill-product"]}>
                <p className={styles["price-product"]}>Price</p>
            </figcaption>
        </section>
    </>
  )
}

export default CardProduct;