import photoGrid from "../../assets/images/photo-grid.png";
import "./hero.css";

export const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <img src={photoGrid} alt="Photo grid" className="photo-grid" />
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </>
  );
};
