import styles from "src/commons/styles/cardProduct.module.css"
import Image from "next/image"
import chair from "src/assets/img/chair-home.png"
import { myProductAction } from "src/redux/actions/product"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

function CardProductOwner() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { token } = state.auth
  useEffect(() => {
    dispatch(myProductAction(token))
  }, [dispatch, token])
  return (
    <>
      <section className={`${styles["main-section"]} row`}>
        <div className={`${styles["image-card"]} col-md-2`}>
          <Image
            src={chair}
            alt="chair"
            height={172}
            width={170}
          />
        </div>
        <div className={`${styles["product-name"]} col-md-3`}>Name Product</div>
        <div className={`${styles["stock-count"]} col-md-2`}>10 stock</div>
        <div className={`${styles["product-price"]} col-md-2`}>$765.99</div>
        <div className={`${styles["button-delete"]} col-md-3 btn`}>Delete</div>
      </section>
    </>
  )
}

export default CardProductOwner