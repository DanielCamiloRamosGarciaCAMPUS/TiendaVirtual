import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
    <Carousel interval={3000} className='w-100'> {/* Intervalo de 3 segundos */}
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" // URL de la imagen del carrusel
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Primer slide label</h3>
          <p>Descripción del primer slide...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://media.istockphoto.com/id/1367357589/es/foto/cielo-rojo-en-forma-de-coraz%C3%B3n-al-atardecer-hermoso-paisaje-con-flores-me-encanta-el-fondo-con.jpg?s=612x612&w=0&k=20&c=A2u-PoF7LGHvwhjf3_CRziNxK-Zh8tiRFjl7i7M2Gv4=" // URL de la imagen del carrusel
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Primer slide label</h3>
          <p>Descripción del primer slide...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default CustomCarousel;