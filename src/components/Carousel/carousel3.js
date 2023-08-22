import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { styled } from '@mui/system';

const CarouselContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxHeight: 336,
  padding: 8,
  overflow: 'hidden',
  margin: '0 auto',
}));

const CarouselImage = styled('img')({
  objectFit: 'cover',
  borderRadius: 48,
});

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);
  const [carouselTl, setCarouselTl] = useState(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const [widths, setWidths] = useState([320, 192, 96]);
  const proxyRef = useRef(null);
  const dragStartXRef = useRef(0);
  const snapAnimRef = useRef(null);

  const initAnim = useCallback(() => {
    const imgEls = carouselRef.current.querySelectorAll('.carousel-img');
    gsap.set(imgEls, { width: widths[2], height: widths[0] });
    gsap.set(imgEls[0], { width: widths[0] });
    gsap.set(imgEls[1], { width: widths[1] });

    const tl = gsap.timeline({ paused: true });
    setCarouselTl(tl);

    for (let i = 0; i < Math.ceil(imgEls.length / 3); i++) {
      if (i * 3 + 1 >= imgEls.length) break;
      const intermediateWidth =
        i * 3 + 2 >= imgEls.length ? widths[1] : (widths[1] + widths[2]) / 2;
      tl.addLabel(`Img${i * 3 + 1}`);
      tl.to(imgEls[i * 3], { width: intermediateWidth, duration: 2 });
      tl.to(imgEls[i * 3 + 1], { width: widths[0], duration: 2 }, "-=2");
      if (i * 3 + 2 >= imgEls.length) break;
      tl.to(
        imgEls[i * 3 + 2],
        { width: intermediateWidth, duration: 2 },
        "-=2"
      );
      tl.addLabel(`Img${i * 3 + 2}`);

      tl.to(imgEls[i * 3], { width: widths[2], duration: 2 });
      tl.to(imgEls[i * 3 + 1], { width: widths[1], duration: 2 }, "-=2");
      tl.to(imgEls[i * 3 + 2], { width: widths[0], duration: 2 }, "-=2");

      if (i * 3 + 3 >= imgEls.length) break;
      tl.addLabel(`Img${i * 3 + 3}`);
      tl.to(carouselRef.current, {
        x: -1 * Math.min(maxScrollWidth, (i + 1) * 3 * (widths[2] + 8)),
        duration: 4,
      });
      tl.to(imgEls[i * 3 + 1], { width: widths[2], duration: 2 }, "-=4");
      tl.to(imgEls[i * 3 + 2], { width: widths[2], duration: 2 }, "-=4");
      tl.to(imgEls[i * 3 + 3], { width: widths[0], duration: 2 }, "-=4");
      if (i * 3 + 4 >= imgEls.length) break;
      tl.to(imgEls[i * 3 + 4], { width: widths[1], duration: 2 }, "-=4");
    }
    
    tl.to(carouselRef.current, { x: -1 * maxScrollWidth, duration: 2 });
    tl.addLabel("end");
  }, [maxScrollWidth, widths]);

  useEffect(() => {
    const listWidth = widths[2] * images.length + 8 * (images.length - 1) + widths[0];
    let newWidth = 0;
    for (let i = 1; i <= Math.floor(images.length / 3); i++) {
      const val = widths[0] + widths[2] * 3 * i + 8 * (3 * i - 1);
      if (val > window.innerWidth - 48) break;
      newWidth = val;
    }

    if (newWidth === 0) {
      setWidths([160, 96, 48]);
      newWidth = widths[0] + widths[2] * 3 + 8 * 2;
    }

    gsap.set('.carousel-img', { borderRadius: 24 });
    gsap.set(carouselRef.current, { width: newWidth + 8 });
    setMaxScrollWidth(Math.max(listWidth - newWidth + 8, 0));

    initAnim();
    initDraggable();

  }, [images, widths, initAnim]);

  const updateStart = useCallback(() => {
    dragStartXRef.current = carouselTl.progress();
  }, [carouselTl]);

  const updateProgress = useCallback(() => {
    const addOnProgress = (-1 * proxyRef.current.deltaX) / (10 * (maxScrollWidth || listWidth));
    const newProgress = Math.min(1, Math.max(dragStartXRef.current + addOnProgress, 0));
    carouselTl.progress(newProgress);
  }, [carouselTl, maxScrollWidth, listWidth]);

  const updateEnd = useCallback(() => {
    const diffX = proxyRef.current.x - dragStartXRef.current;
    const previousLabel = carouselTl.previousLabel() || 'Img1';
    const nextLabel = carouselTl.nextLabel() || 'end';
    const newProgress = carouselTl.labels[diffX > 0 ? previousLabel : nextLabel] / carouselTl.labels['end'];

    carouselTl.pause();
    snapAnimRef.current = gsap.to(carouselTl, { progress: newProgress, ease: 'none' });
  }, [carouselTl]);

  const initDraggable = useCallback(() => {
    const draggable = new Draggable(proxyRef.current, {
      type: 'x',
      trigger: '.carousel-container',
      onDragStart: updateStart,
      onDrag: updateProgress,
      onDragEnd: updateEnd,
    });
  }, [updateStart, updateProgress, updateEnd]);

  return (
    <CarouselContainer>
      <div id="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className="carousel-img"
          />
        ))}
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
