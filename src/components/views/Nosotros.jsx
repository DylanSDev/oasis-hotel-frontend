import Carousel from "react-bootstrap/Carousel";
import LogoOasis from "../commons/LogoOasis.jsx";
import "./styles/Nosotros.css";
import { BsStarFill } from "react-icons/bs";
import NosotrosHistoria from "../extras/NosotrosHistoria.jsx";

const Nosotros = () => {
  return (
    <section className="mainSection containerNosotros">
      {/* Primera Pantalla */}
      <article>
        <Carousel indicators={false} className="text-nunito">
          <Carousel.Item>
            <img
              className="d-block w-100 imgSliderNosotros"
              src="https://res.cloudinary.com/dylansdev/image/upload/v1737038310/Slider-1_ubqqhg.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="text-center">
                <LogoOasis width={85} height={85} fill="white" />
              </div>
              <h2 className="text-poppins mt-4 mb-0 fs-1">OASIS HOTEL</h2>
              <div className="color-arena fs-5 ">
                <BsStarFill className="me-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="ms-2" />
              </div>
              <p className="fs-5 fw-light mt-3">
                Un rincón de paraiso solo para tí.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSliderNosotros"
              src="https://images.pexels.com/photos/11434425/pexels-photo-11434425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="text-center">
                <LogoOasis width={85} height={85} fill="white" />
              </div>
              <h2 className="text-poppins mt-4 mb-0 fs-1">OASIS HOTEL</h2>
              <div className="color-arena fs-5 ">
                <BsStarFill className="me-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="ms-2" />
              </div>
              <p className="fs-5 fw-light mt-3">
                Un rincón de paraiso solo para tí.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSliderNosotros"
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="text-center">
                <LogoOasis width={85} height={85} fill="white" />
              </div>
              <h2 className="text-poppins mt-4 mb-0 fs-1">OASIS HOTEL</h2>
              <div className="color-arena fs-5 ">
                <BsStarFill className="me-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="ms-2" />
              </div>
              <p className="fs-5 fw-light mt-3">
                Un rincón de paraiso solo para tí.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </article>

      {/* Segunda Pantalla */}
      <article className="container min-vh-86  d-flex align-items-center">
        <NosotrosHistoria></NosotrosHistoria>
      </article>
    </section>
  );
};

export default Nosotros;
