import Layout from "src/commons/components/Layout"
import Main from "src/commons/components/Main"
import Banner from "src/commons/components/Banner"
import ProductOwner from "src/commons/components/ProductOwner"
import MenuProfile from "src/commons/components/MenuProfile"

const List = () => {
    return (
        <>
            <Layout title='My Product'>
                <Main>
                    <Banner title='My Product'
                        text='See your notifications for the latest updates'
                    />
                    <MenuProfile>
                        <ProductOwner />
                    </MenuProfile>
                </Main>
            </Layout>
        </>
    )
}

export default List