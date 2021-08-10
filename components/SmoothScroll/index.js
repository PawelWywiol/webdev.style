import { useEffect, useRef } from "react";

import { isMobile } from "react-device-detect";

import styled from "@emotion/styled";

import useWindowSize from "../../hooks/useWindowSize";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const Content = styled.main`
  display: block;
  position: relative;
  transform: translate3D(0, calc(-1px * var(--scroll-top, 1px)), 0);
  will-change: transform;
`;

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();

  const scrollingContainerRef = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
    lastRounded: 0,
    height: 0,
    lastHeight: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    if (!isMobile) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    if (!isMobile && typeof window !== "undefined" && windowSize.height) {
      data.current = window.scrollY;
      data.previous += (data.current - data.previous) * data.ease;
      data.rounded = Math.round(Math.max(data.previous, 0.001) * 1000) / 1000;

      data.height = scrollingContainerRef.current
        ? scrollingContainerRef.current.getBoundingClientRect().height
        : 0;
      if (data.height !== data.lastHeight) {
        document.body.style.height = `${data.height}px`;
        data.lastHeight = data.height;
      }

      if (data.lastRounded !== data.rounded) {
        if (scrollingContainerRef.current) {
          scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
        }
      }
    }
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return isMobile ? (
    <Content ref={scrollingContainerRef}>{children}</Content>
  ) : (
    <Wrapper>
      <Content ref={scrollingContainerRef}>{children}</Content>
    </Wrapper>
  );
};

export default SmoothScroll;
