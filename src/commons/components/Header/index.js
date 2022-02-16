import styles from 'src/commons/styles/Header.module.css'

const Header = () => {
    return (
        <>
            <header className='navbar navbar-expand-lg navbar-light bg-success'>
                <nav className='container'>
                    <h1 className={`${styles['brand-text']}`}>RAZ</h1>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>
                    <section className='collapse navbar-collapse' id='navbarText'>
                        <ul className='navbar-nav mx-auto'>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current="page">Home</p>
                            </li>
                            <li className='nav-item dropdown'>
                                <p className='nav-link dropdown-toggle' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Page</p>
                                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                    <li><a className="dropdown-item">Coming Soon</a></li>
                                    <li><a className="dropdown-item">404 Page</a></li>
                                    <li><a className="dropdown-item">FAQ page</a></li>
                                </ul>
                            </li>
                            <li className='nav-item dropdown'>
                                <p className='nav-link dropdown-toggle' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</p>
                                <ul className="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-white">Other Page</a></li>
                                    <li><a className="dropdown-item">Contact Us</a></li>
                                    <li><a className="dropdown-item">Coming Soon</a></li>
                                    <li><a className="dropdown-item">404 Page</a></li>
                                    <li><a className="dropdown-item">FAQ page</a></li>
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current="page">Blog</p>
                            </li>
                        </ul>

                        <div className='row'>
                            <div className='col'>
                                <p>kaca</p>
                            </div>
                            <div className='col'>
                                <p>search</p>
                            </div>
                        </div>

                    </section>
                </nav>
            </header>
        </>
    )
}

export default Header