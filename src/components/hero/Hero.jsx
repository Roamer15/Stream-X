import styles from "./Hero.module.css";
import Navbar from "../navbar/Navbar";
import PropTypes from "prop-types";

export default function Hero({ title, backgroundImage, description }) {
  return (
    <>
      <div
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(#0037, #111), url(https://image.tmdb.org/t/p/original${backgroundImage})`
        }}
      >
        <Navbar />
        <div className={styles.movieDetail}>
          <h1>{title}</h1>
          <div className="initial">
            <div className="frame">CBFC:U/A</div>
            <p>Action</p>
            <span>.</span>
            <p>Action</p>
            <span>.</span>
            <p>7h 28m</p>
          </div>
          <p className="description">
          {description}
          </p>

          <div className="hero-btn">
            <button className="btn-left">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 19.9902C11.366 19.9902 12.652 19.7289 13.8578 19.2062C15.0637 18.6836 16.1274 17.9618 17.049 17.0406C17.9706 16.1195 18.6928 15.0563 19.2156 13.851C19.7385 12.6458 20 11.3604 20 9.99506C20 8.62971 19.7385 7.34439 19.2156 6.13909C18.6928 4.93381 17.9706 3.8706 17.049 2.94948C16.1274 2.02836 15.0621 1.30649 13.8529 0.78387C12.6438 0.261249 11.3562 -6.10352e-05 9.99018 -6.10352e-05C8.62417 -6.10352e-05 7.33823 0.261249 6.13235 0.78387C4.92646 1.30649 3.86437 2.02836 2.94607 2.94948C2.02778 3.8706 1.30719 4.93381 0.784313 6.13909C0.261438 7.34439 0 8.62971 0 9.99506C0 11.3604 0.261438 12.6458 0.784313 13.851C1.30719 15.0563 2.02941 16.1195 2.95097 17.0406C3.87255 17.9618 4.93627 18.6836 6.14214 19.2062C7.34803 19.7289 8.63398 19.9902 9.99999 19.9902Z"
                  fill="black"
                  fillOpacity="0.85"
                />
                <path
                  d="M8.13724 13.9441C7.90195 14.0878 7.67483 14.1123 7.45587 14.0176C7.23692 13.9228 7.12744 13.7546 7.12744 13.5129V6.48696C7.12744 6.24525 7.24182 6.08193 7.47058 5.997C7.69933 5.91208 7.92156 5.93168 8.13724 6.0558L13.902 9.46589C14.1046 9.59002 14.2075 9.76967 14.2108 10.0048C14.2141 10.2401 14.1111 10.423 13.902 10.5536L8.13724 13.9441Z"
                  fill="white"
                />
              </svg>
              Watch Now
            </button>
            <button className="btn-right">
              <svg
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 2.81611C1 1.83427 1.76751 1.03833 2.71429 1.03833H11.2857C12.2325 1.03833 13 1.83427 13 2.81611V17.0383L7 13.9272L1 17.0383V2.81611Z"
                  stroke="white"
                  strokeOpacity="0.85"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add Watchlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};
