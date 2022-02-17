import Main from 'src/commons/components/Main'
import styles from 'src/commons/styles/MenuProfile.module.css'

const MenuProfile = ({ children }) => {
    return (
        <>
            <Main>
                <section className={`container-fluid p-0 ${styles['bg-menu']}`}>
                    <h2 className={`${styles['profile-text']}`}>Profile</h2>
                    <p className={`${styles['see-notification-text']}`}>See your notifications for the latest updates</p>
                </section>

                <section className='container'>
                    <div className='row'>
                        <div className='col-sm'>
                            <h3 className={`${styles['menu-profile']}`}>Profile</h3>
                        </div>
                        <div className='col'>
                            <h3>My Product</h3>
                        </div>
                        <div className='col'>
                            <h3>Selling Product</h3>
                        </div>
                        <div className='col'>
                            <h3>My Order</h3>
                        </div>
                    </div>
                </section>

                <di>

                </di>
            </Main>
        </>
    )
}

export default MenuProfile