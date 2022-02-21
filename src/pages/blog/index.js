import Layout from "src/commons/components/Layout"
import Main from "src/commons/components/Main"
import Banner from "src/commons/components/Banner"
import SideBar from "src/commons/components/SideBar"
import Image from "next/image"

import freshii from "src/assets/img/freshii.png"
import table from "src/assets/img/table.png"

import clock from "src/assets/svg/clock-black.svg"
import tag from "src/assets/svg/tag.svg"

const Blog = () => {
    return (
        <Layout title='Blog'>
            <Main>
                <Banner title='Our Blog' text='Read and enjoy content from us' />
                <div className="container">
                    <div className="row" style={{ position: 'relative', top: '23px' }}>
                        <div className="col-3">
                            <SideBar />
                        </div>
                        <div className="col">
                            <div>
                                <Image src={freshii} alt='avatar' />
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <div style={{ position: 'relative', top: '2px' }}>
                                        <Image src={clock} alt='avatar' />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <p style={{ position: 'relative', right: '53px' }} >24 Apr 2019, 45 mins ago, by Admin</p>
                                </div>
                                <div className="col-1">
                                    <div style={{ position: 'relative', top: '2px', right: '112px' }}>
                                        <Image src={tag} alt='avatar' />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <p style={{ position: 'relative', right: '173px' }}>Kids, Interior, Photos</p>
                                </div>
                                <p>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                                <h5>Read More</h5>
                            </div>
                            <iframe style={{ position: 'relative', top: '23px' }} width="90%" height="25%" src="https://www.youtube.com/embed/f3nfVH1QiRA" title="YouTube video player" ></iframe>
                            <h3 style={{ position: 'relative', top: '23px' }}>Scandinavian Style 2019</h3>

                        </div>
                    </div>
                </div>

            </Main>
        </Layout >
    )
}

export default Blog