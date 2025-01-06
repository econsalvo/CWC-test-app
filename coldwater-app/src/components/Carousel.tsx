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
              <Container>
                <ItemsBody>
                  <LabelContainer>
                    <Label >Name: {product.productName}</Label>
                    <Label >Category: {product.category}</Label>
                    <Label >Price: {product.price}</Label>
                    <Label >Currency: {product.priceCurrency}</Label>
                  </LabelContainer>
                  <img
                    src={product.imageMain}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "public/images/fallback-image.png";
                    }}
                    style={{ maxHeight: "12rem" }}
                  />
                </ItemsBody>
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
`;

const ItemsBody = styled.div`
  border: solid 1px grey;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-family: sans-serif;
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;