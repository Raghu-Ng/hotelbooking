import "./featuredProperties.css"

export default function FeaturedProperties() {
  return (
    <div className="fp">
        <div className="fpItems">
        <img src="https://yourtravelgroup.co.uk/wp-content/uploads/2017/01/Miami-Offer.jpg" alt="Hotel" className="fpImg" />
        <span className="fpname">Hotels Taj</span>
        <span className="fpCity">Banglore</span>
        <span className="fpPrice">Starts from ₹1000</span>
        <div className="fprating">
            <button>
                8.9
            </button>
            <span>
                exellent
            </span>
        </div>
        </div>
        <div className="fpItems">
        <img src="https://luxuryhoteldeals.travel/wp-content/uploads/2021/04/49521305.jpg" alt="Hotel" className="fpImg" />
        <span className="fpname">Hotels Taj</span>
        <span className="fpCity">Banglore</span>
        <span className="fpPrice">Starts from ₹1000</span>
        <div className="fprating">
            <button>
                8.9
            </button>
            <span>
                exellent
            </span>
        </div>
        </div>
        <div className="fpItems">
        <img src="https://i2.wp.com/thekeystotravel.com/wp-content/uploads/2020/07/Hard-Rock-Los-Cabos-Pool-View-1.jpg?resize=1000%2C701&ssl=1" alt="Hotel" className="fpImg" />
        <span className="fpname">Hotels Taj</span>
        <span className="fpCity">Banglore</span>
        <span className="fpPrice">Starts from ₹1000</span>
        <div className="fprating">
            <button>
                8.9
            </button>
            <span>
                exellent
            </span>
        </div>
        </div>
    </div>
  )
}
