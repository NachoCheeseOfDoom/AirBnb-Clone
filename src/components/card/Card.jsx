/* eslint-disable react/prop-types */
import "./card.css";
import starImg from "../../assets/images/star.png";

export const Card = ({ card }) => {
  console.log(card);
  let badgeText;
  if (card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className="card-container">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img
          src={`src/assets/images/${card.coverImg}`}
          alt="Katie Zaferes"
          className="card-img"
        />
        <div className="card-stats">
          <img src={starImg} alt="Star" className="star-img" />
          <span>{card.stats.rating}</span>
          <span className="color-gray">({card.stats.reviewCount}) • </span>
          <span className="color-gray">{card.location}</span>
        </div>
        <h2 className="person-name">{card.title}</h2>
        <p className="card--price">
          <strong>From ${card.price}</strong> / person
        </p>
      </div>
    </>
  );
};
