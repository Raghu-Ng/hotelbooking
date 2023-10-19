import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Foter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://th.bing.com/th/id/OIG.IVG_9qkZV0WKKzDsBD2K?pid=ImgGn",
    },
    {
      src: "https://th.bing.com/th/id/OIG.k2nsEz1OOODHqQALLX_U?pid=ImgGn",
    },
    {
      src: "https://th.bing.com/th/id/OIG.m5myv2.yAiyFaMsr_gVY?pid=ImgGn",
    },
    {
      src: "https://th.bing.com/th/id/OIG.cP3xS2LOu7OjeYp_yCPs?pid=ImgGn",
    },
    {
      src: "https://th.bing.com/th/id/OIG.n01xQrgaLmQFFzQ7yE6D?pid=ImgGn",
    },
    {
      src: "https://th.bing.com/th/id/OIG.5sadNB4gEdPnU.kjkJut?pid=ImgGn",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hotel Taj</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Banglore</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over  ₹1000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod omnis sit optio debitis tenetur, accusantium consequuntur vero fugiat ducimus hic repellat, qui totam fuga culpa aut? Atque, sint nulla beatae cum minus fugit quae illum facere ducimus vitae, quis repudiandae aliquam. Soluta mollitia quibusdam at distinctio cupiditate quisquam. Asperiores, quae.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b> ₹10000</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;