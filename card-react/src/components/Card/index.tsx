import React from "react";

import styled from "./card.module.css";

interface Props {
  image: string;
  title: string;
  description: string;
  rate: number;
}

const Card = ({ image, title, rate, description }: Props) => {
  return (
    <>
      <div className={styled.card}>
        <div className={styled.sectionImage}>
          <img src={image} alt="Logo" />
        </div>
        <div className={styled.sectionContent}>
          <div className={styled.itemContent}>
            <div className={styled.itemTitle}>
              <h2>{title}</h2>
            </div>

            <div className={styled.stars}>
              <svg
                className={styled.starIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 17.27l-6.18 3.36 1.18-6.88L2.4 9.63l6.88-.99L12 2.4l2.72 6.24 6.88.99-4.6 4.12 1.18 6.88z" />
              </svg>
              <svg
                className={styled.starIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 17.27l-6.18 3.36 1.18-6.88L2.4 9.63l6.88-.99L12 2.4l2.72 6.24 6.88.99-4.6 4.12 1.18 6.88z" />
              </svg>
              <svg
                className={styled.starIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 17.27l-6.18 3.36 1.18-6.88L2.4 9.63l6.88-.99L12 2.4l2.72 6.24 6.88.99-4.6 4.12 1.18 6.88z" />
              </svg>
              <svg
                className={styled.starIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 17.27l-6.18 3.36 1.18-6.88L2.4 9.63l6.88-.99L12 2.4l2.72 6.24 6.88.99-4.6 4.12 1.18 6.88z" />
              </svg>
              <svg
                className={styled.starIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 17.27l-6.18 3.36 1.18-6.88L2.4 9.63l6.88-.99L12 2.4l2.72 6.24 6.88.99-4.6 4.12 1.18 6.88z" />
              </svg>

              <span className={styled.textSimple}>{rate}</span>
              {rate < 2 && <p>Menos avaliado</p>}

              {rate >= 2 && <p>Mais avaliado</p>}
            </div>

            <div className={styled.itemContentText}>
              <p className={styled.textSimple}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
