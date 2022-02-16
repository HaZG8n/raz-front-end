import Header from 'src/commons/components/Header'
import Footer from 'src/commons/components/Footer'

const Main = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Main