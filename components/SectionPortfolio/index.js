import { useState, useEffect } from "react";

import { isMobile } from "react-device-detect";

import styled from "@emotion/styled";

import {
  animFromBottom,
  animToTop,
  animFadeIn,
  animFadeOut,
  animSwipeFromLeft3D,
  animSwipeToRight3D,
  animWidth,
} from "../../styles/animations";

import { Section, Sides, Side, Arrow } from "../index";
import { MediaPlayer, MediaContent } from "../MediaPlayer";

import useCounter from "../../hooks/useCounter";

import projects from "./projects";

const ProjectTitle = styled.h3`
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  & {
    span {
      position: relative;
      display: inline-block;
      animation-fill-mode: forwards;
      animation-duration: 1.5s;
      animation-name: ${(props) =>
        props.current ? animFromBottom : animToTop};
      will-change: transform;
      @media (max-width: 760px) {
        animation: none;
      }
    }
  }
`;
const ProjectTags = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
  & > span {
    position: relative;
    display: inline-block;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-name: ${(props) => (props.current ? animFadeIn : animFadeOut)};
    will-change: opacity;
    white-space: nowrap;
    font-size: 0.8rem;
    font-style: italic;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.1);
    margin: 0 0.5rem 0.5rem 0;
    border-radius: 0.125rem;
    @media (max-width: 760px) {
      animation: none;
    }
  }
`;
const ProjectDescription = styled.p`
  position: relative;
  overflow: hidden;
  & > span {
    position: relative;
    display: inline-block;
    animation-fill-mode: forwards;
    animation-duration: 1.5s;
    animation-name: ${(props) => (props.current ? animFromBottom : animToTop)};
    will-change: transform;
    @media (max-width: 760px) {
      animation: none;
    }
  }
`;

const ProjectMediaPlayer = styled(MediaPlayer)`
  position: relative;
  perspective: 48rem;
  transform: translate3D(5rem, -5rem, 0) scale(1.3);
  @media (max-width: 760px) {
    transform: none;
    margin-top: var(--gap-lg);
    margin-bottom: var(--gap-lg);
  }
  & {
    ${MediaContent} {
      animation-fill-mode: forwards;
      animation-duration: 1.5s;
      animation-name: ${(props) =>
        props.current
          ? props.direction >= 0
            ? animSwipeFromLeft3D
            : animSwipeFromLeft3D
          : props.direction >= 0
          ? animSwipeToRight3D
          : animSwipeToRight3D};
      will-change: transform;
      @media (max-width: 760px) {
        animation: none;
      }
      video {
        border-radius: 0.5rem;
        box-shadow: var(--box-shadow);
        ${(props) =>
          props.landscape
            ? "width: 30rem !important;"
            : "height: 30rem !important;"}

        @media (max-width: 760px) {
          width: 90% !important;
          height: auto !important;
        }
      }
    }
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  @media (max-width: 760px) {
    height: auto;
  }
`;
const Slides = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.current ? 10 : 1)};

  @media (max-width: 760px) {
    position: relative;
    height: auto;
    top: auto;
    left: auto;
  }
`;

const SectionWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

const ProgressBarWrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 3.5rem;
  margin: 2rem 0;
  width: calc(100% - 2 * 3.5rem);
  height: 0.125rem;
  @media (max-width: 760px) {
    display: none;
  }
  &:before {
    content: " ";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.125rem;
    background-color: var(--default-color);
    opacity: 0.1;
  }
  &:after {
    content: " ";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.125rem;
    background-color: var(--default-color);
    opacity: 0.6;
    animation-fill-mode: forwards;
    animation-duration: 20000ms;
    animation-name: ${(props) => (props.current ? animWidth : "none")};
    animation-timing-function: linear;
    will-change: width;
  }
`;

const ProgressBarContent = styled.div`
  display: ${(props) => (props.current ? "block" : "none")};
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate3d(-50%, -150%, 0);
  display: ${(props) => (props.current ? "block" : "none")};
`;

const SliderNavButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.left ? 0 : "auto")};
  right: ${(props) => (props.left ? "auto" : 0)};
  z-index: 10;
  cursor: pointer;
  transform: translate3D(
    ${(props) => (props.left ? "-3.5rem" : "3.5rem")},
    -50%,
    0
  );
  width: 3rem;
  height: 3rem;
`;

const Project = ({
  title,
  tags,
  description,
  url,
  current,
  direction,
  index,
  count,
  paginate,
  landscape,
}) => (
  <Sides align={"stretch"} fullheight>
    <Side>
      <ProjectTitle current={current}>
        <span>{title}</span>
      </ProjectTitle>
      <ProjectDescription current={current}>
        <span>{description}</span>
      </ProjectDescription>
      <ProjectTags current={current}>
        {(tags || []).map((tag, key) => (
          <span key={key}>{tag}</span>
        ))}
      </ProjectTags>
      {current && (
        <ProgressBarWrapper current={current}>
          <ProgressBarContent current={current}>{`${
            index + 1
          } / ${count}`}</ProgressBarContent>
          <SliderNavButton left onClick={() => paginate && paginate(-1)}>
            <Arrow left />
          </SliderNavButton>
          <SliderNavButton right onClick={() => paginate && paginate(+1)}>
            <Arrow right />
          </SliderNavButton>
        </ProgressBarWrapper>
      )}
    </Side>
    <Side justify="center" align={"center"}>
      <ProjectMediaPlayer
        url={url}
        current={current}
        playing={current || (isMobile && typeof window !== "undefined")}
        direction={direction}
        landscape={landscape}
      />
    </Side>
  </Sides>
);

const Portfolio = () => {
  const count = useCounter({ max: projects.length, delay: 20000 });

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    if (!projects.length) return;

    setPage([
      (page + newDirection) % projects.length >= 0
        ? (page + newDirection) % projects.length
        : projects.length + ((page + newDirection) % projects.length),
      newDirection,
    ]);
  };

  useEffect(() => paginate(1), [count]);

  return (
    <Section id="portfolio">
      <h2>Przykładowe projekty</h2>
      <SliderWrapper>
        <Slides>
          {projects.map((project, index) => (
            <Slide key={index} current={page === index}>
              <Project
                {...project}
                current={page === index}
                direction={direction}
                paginate={paginate}
                index={index}
                count={projects?.length || 0}
              />
            </Slide>
          ))}
        </Slides>
      </SliderWrapper>
    </Section>
  );
};

export default Portfolio;
