import { Carousel } from 'react-bootstrap';
import NavBar from './Navbar';
import "../css/home.css"

import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <>
            <div class='uno'>
                <div class='pry'>
                    <NavBar />
                </div>
                <div class='label'>
                    <Carousel indicators controls>
                        <Carousel.Item>
                            <img
                                class="d-block w-100"
                                src="https://i.pinimg.com/736x/24/1e/a4/241ea4d4e6c5d316e9ee5d6aef25beea.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                class="d-block w-100"
                                src="https://i.pinimg.com/736x/bc/36/cc/bc36cc82fcb60c586b3f0a9c55d595bd.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                class="d-block w-100"
                                src="https://i.pinimg.com/originals/c7/7d/8b/c77d8bf902fc7d1a13df51d1efc38ca9.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='saludo'>

                    <h1>Hola! 😁 </h1>
                    <h2> Ya puedes verme en tu movil!</h2>

                </div>

            </div>
        </>
    );
};

export default Home;