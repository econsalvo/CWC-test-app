import Slider from 'react-slick';
import { products } from '../../public/products';
import { styled } from 'styled-components';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>Product Slider</h2>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div>
              <Container style={{ padding: "1rem" }}>
                <div style={{ border: "solid 1px grey", padding: "1rem", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div >Name: {product.productName}</div>
                  <div >Category: {product.category}</div>
                  <div >Price: {product.price}</div>
                  <img
                    src={product.imageMain}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "public/fallback-image.png";
                    }}
                    style={{ maxHeight: "12rem" }}
                  />
                </div>
              </Container>
            </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

const Container = styled.div`
  padding: 1rem;
`