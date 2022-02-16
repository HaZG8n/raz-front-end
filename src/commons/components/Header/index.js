import styles from 'src/commons/styles/Header.module.css'
import Image from 'next/image'

import search from 'src/assets/svg/search.svg'
import wishlist from 'src/assets/svg/wishlist.svg'
import cart from 'src/assets/svg/cart.svg'

const Header = () => {
    return (
        <>
            <header className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: 'transparent' }}>
                <nav className='container'>
                    <h1 className={`${styles['brand-text']}`}>RAZ</h1>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <section className='collapse navbar-collapse' id='navbarText'>
                        <ul className='nav navbar-nav mx-auto'>

                            <li className='nav-item'>
                                <p className={`nav-link active ${styles['menu-nav']}`} aria-current="page">Home</p>
                            </li>

                            <li className='nav-item dropdown'>
                                <p className={`nav-link dropdown-toggle active ${styles['menu-nav']}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Page</p>
                                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>About Us</p></li>
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>Contact Us</p></li>
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>Coming Soon</p></li>
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>404 Page</p></li>
                                    <li><p className={`dropdown-item ${styles['submenu']}`}>FAQ page</p></li>
                                </ul>
                            </li>

                            <li className='nav-item dropdown'>
                                <p className={`nav-link dropdown-toggle active ${styles['menu-nav']}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</p>
                                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                                    <li><p className={`dropdown-item disable ${styles['other-page-text']}`}>Other Page</p></li>
                                    <di className={`${styles['other-submenu']}`}>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>Shopping Cart</p></li>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>Check Out</p></li>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>My Account</p></li>
                                        <li><p className={`dropdown-item ${styles['submenu']}`}>Order Tracking</p></li>
                                    </di>
                                </ul>
                            </li>

                            <li className='nav-item'>
                                <p className={`nav-link active ${styles['menu-nav']}`} aria-current="page">Blog</p>
                            </li>
                        </ul>

                        <div className='row'>
                            <div className='col'>
                                <div className={styles['logo']}>
                                    <Image src={search} alt='avatar' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles['logo']}>
                                    <Image src={wishlist} alt='avatar' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles['logo']}>
                                    <Image src={cart} alt='avatar' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles['hamburger-menu']}>
                                    <span className={styles['line-up']}></span>
                                    <span className={styles['line-center']}></span>
                                    <span className={styles['line-down']}></span>
                                </div>
                            </div>
                        </div>

                    </section>
                </nav>
            </header>
        </>
    )
}

export default Header