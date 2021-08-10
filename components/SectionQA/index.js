import { useState } from "react";
import styled from "@emotion/styled";

import { Section, Sides, Side, ClickEventWrapper } from "../index";

import questions from "./questions";

const StyledContent = styled.div`
  & > ul {
    list-style: none;
    @media (max-width: 760px) {
      padding: 0;
    }
  }
`;

const StyledListItem = styled.li`
  transition: all 0.3s;
  border-top: 0.125rem solid rgb(58 77 97 / 22%);
  border-bottom: 0.125rem solid rgb(58 77 97 / 22%);
  margin-bottom: 1rem;
  strong {
    display: block;
    position: relative;
    margin: 0;
    padding: 1rem 4rem 1rem 1rem;
    cursor: pointer;
    svg {
      width: 2.5rem;
      height: 2.5rem;
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translate3D(0, -50%, 0)
        rotate(${(props) => (props.selected ? "270deg" : "90deg")});
      opacity: 0.22;
      transition: transform 0.3s;
    }
  }
  & > div {
    height: auto;
    max-height: 32rem;
    transition: all 0.6s;
    margin: 0 4rem 0 1rem;
    @media (max-width: 760px) {
      margin: 0 1rem;
    }
  }
  & > div {
    max-height: ${(props) => (props.selected ? "32rem" : "0rem")};
    overflow: hidden;
  }
`;

const StyledAnswer = styled.div`
  & > div {
    padding-bottom: 1rem;
  }
`;

const Arrow = () => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M184.7,413.1l2.1-1.8l156.5-136c5.3-4.6,8.6-11.5,8.6-19.2c0-7.7-3.4-14.6-8.6-19.2L187.1,101l-2.6-2.3  C182,97,179,96,175.8,96c-8.7,0-15.8,7.4-15.8,16.6h0v286.8h0c0,9.2,7.1,16.6,15.8,16.6C179.1,416,182.2,414.9,184.7,413.1z" />
  </svg>
);

const Question = ({ q, a, i, selected, select }) => (
  <StyledListItem selected={selected}>
    <ClickEventWrapper
      component={"strong"}
      eventname={"clickOnQA" + i}
      onClick={select}
    >
      {q}
      <Arrow />
    </ClickEventWrapper>
    <StyledAnswer>
      <div>{a}</div>
    </StyledAnswer>
  </StyledListItem>
);
const QA = () => {
  const [selected, Select] = useState(-1);
  return (
    <Section id="qa" light>
      <Sides>
        <Side>
          <StyledContent>
            <h2>Q&A</h2>
            <ul>
              {(questions || []).map(({ q, a }, i) => (
                <Question
                  q={q}
                  a={a}
                  i={i}
                  key={i}
                  selected={selected === i}
                  select={() => Select(selected !== i ? i : -1)}
                />
              ))}
            </ul>
          </StyledContent>
        </Side>
      </Sides>
    </Section>
  );
};

export default QA;
