import { Spinner } from "react-bootstrap";
import { arrayOf, string } from 'prop-types'
import { Carousel } from "react-bootstrap";
import './CarouselImages.css'

function CarouselImages({ images }) {
    return images[0] !== "" ? (
        <Carousel className="car" data-bs-theme="dark" fade>
            {images.map(i => {
                return (
                    <Carousel.Item className="text-center">
                        <img className="imageCarousel" src={i} alt="" width="50%" height="100%" />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    ) : (
        <div id="spinner-div" className="text-center">
            <Spinner animation="border" role="status">
            </Spinner>
        </div>
    )
}

CarouselImages.propTypes = {
    images: arrayOf(string)
}

export default CarouselImages