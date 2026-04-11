import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Carousel from '../components/carousel/Carousel';
import Footer from '../components/footer/Footer';

function Home () {
    return (
        <div>
            <Navbar />
            <main className='bg-[#f4f1ec]'>
                <Carousel />
                <Banner />
            </main>
            <Footer />
        </div>
    )
}
export default Home;