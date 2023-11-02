import { Spinner } from "react-bootstrap";
import { arrayOf, string } from 'prop-types'
import { Carousel } from "react-bootstrap";

function CarouselImages({ images }) {
    return images ? (
        <Carousel fade>
            {images.map(i => {
                <Carousel.Item>
                    <img src={i} alt="" />
                </Carousel.Item>
            })}
        </Carousel>
    ) : (
        <Carousel.Item>
            <Spinner animation="border" role="status">
            </Spinner>
        </Carousel.Item>
    )
}

CarouselImages.propTypes = {
    images: arrayOf(string)
}

export default CarouselImages