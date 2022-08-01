import React from "react";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "https://image1.thematicnews.com/uploads/images/68/22/63/92019/10/10/7b11bdd4e6.jpg",
  "https://image2.thematicnews.com/uploads/images/68/22/63/92019/10/10/34907a7d54.jpg",
  "https://image2.thematicnews.com/uploads/images/68/22/63/92019/10/10/aa147fced0.jpg",
  "https://image2.thematicnews.com/uploads/images/68/22/63/92019/10/10/18805dbb9c.jpg",
  "https://image2.thematicnews.com/uploads/images/68/22/63/92019/10/10/435a492cac.jpg",
  "https://image3.thematicnews.com/uploads/images/68/22/63/92019/10/10/abdeaeb7a0.jpg",
  "https://image1.thematicnews.com/uploads/images/68/22/63/92019/10/10/a088b87c64.jpg",
  "https://image2.thematicnews.com/uploads/images/68/22/63/92019/10/10/7dbd1f3eaa.jpg",
  "https://image1.thematicnews.com/uploads/images/68/22/63/92019/10/10/55bccc8a42.jpg",
];

function Carousel() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={1}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image + index}>
          {" "}
          <img src={`${image}`} alt="ззз" />{" "}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
