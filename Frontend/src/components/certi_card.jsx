import React from 'react';
import styled from 'styled-components';

const Cardcerti = ({image, Card_title, Description}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={image} alt="Certificate" />
        <div className="card__content">
          <p className="card__title">{Card_title}</p>
          <p className="card__description">{Description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 220px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: black;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
  }

  .card:hover__image {
    scale: 0;
  }

  .card__description {
    margin: 10px 10px;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }`;

export default Cardcerti;
