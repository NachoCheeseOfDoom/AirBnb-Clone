import "./card.css";
import personImg from "../../assets/images/katie-zaferes.png";
import starImg from "../../assets/images/star.png";

export const Card = () => {
  return (
    <>
      <section>
        <div className="card-container">
          <img src={personImg} alt="Katie Zaferes" className="card-img" />
          <div className="card-stats">
            <img src={starImg} alt="Star" className="star-img" />
            <span>5.0</span>
            <span className="color-gray">(6) • </span>
            <span className="color-gray">USA</span>
          </div>
          <h2 className="person-name">Life lessons with Katie Zaferes</h2>
          <p>
            <strong>From $136</strong> / person
          </p>
        </div>
      </section>
    </>
  );
};
