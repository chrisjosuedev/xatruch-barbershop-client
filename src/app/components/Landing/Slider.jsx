import { useEffect, useState } from "react";
import { SlideReview } from "..";

export const Slider = ({ reviews }) => {

  const [sliders, setSliders] = useState([]);
  let value;

  useEffect(() => {
    const allSliders = Array.from(
      document.querySelectorAll('.slider__body')
    );
    setSliders(allSliders);
  }, []);

  const onClickLeft = () => {
    changeSlidePosition(-1);
  }

  const onClickRigth = () => {
    changeSlidePosition(1);
  }

  const changeSlidePosition = (change) => {
    const currentSlide = Number(document.querySelector('.slider__body--show').dataset.id);
    value = currentSlide;
    value += change;
    if (value === 0 || value === sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    sliders[currentSlide - 1].classList.toggle('slider__body--show')
    sliders[value - 1].classList.toggle('slider__body--show')
  }

  return (
    <>
      <img onClick={onClickLeft} src="/assets/img/recursos/arrow-left.svg" alt="left-arrow" className="slider__arrow" id="before" />
      {
        /**
        TODO: Show first 5 selected reviews aproved by admin.
        */
        reviews.map((review, index) => (
          <SlideReview
            key={review.id}
            index={index}
            title={review.title}
            review={review.review}
            icon={review.icon}
            user={review.user}
          />
        ))
      }
      <img onClick={onClickRigth} src="/assets/img/recursos/arrow-right.svg" alt="left-arrow" className="slider__arrow" id="after" />
    </>
  )
}
