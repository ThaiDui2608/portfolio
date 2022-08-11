import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    ava: AVATAR1,
    name: "Pham Thanh Thai",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget estlorem ipsum dolor sit",
  },
  {
    id: 2,
    ava: AVATAR2,
    name: "Vo Ngoc Lan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget estlorem ipsum dolor sit",
  },
  {
    id: 3,
    ava: AVATAR3,
    name: "Pham Dang Thiet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget estlorem ipsum dolor sit",
  },
  {
    id: 4,
    ava: AVATAR4,
    name: "Nong Thi Thuy Dung",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget estlorem ipsum dolor sit",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, ava, name, content }) => {
          return (
            <SwiperSlide key={id} className="testimonials">
              <div className="client-avatar">
                <img src={ava} alt={name} />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{content}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
