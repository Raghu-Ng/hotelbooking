import './featured.css'

export default function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.clubmahindra.com/blog/media/section_images/unique-thi-9b61e9cde66c5b4.jpg" alt="banglore" />
                <div className="featuredTitles">
                    <h1>Banglore</h1>
                    <h2>150 props</h2>
                </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.tripsavvy.com/thmb/pAlZ4kx0tM9HFLmgkYbqMlfxaok=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-846359134-5b515328c9e77c003738e40c.jpg" alt="banglore" />
                <div className="featuredTitles">
                    <h1>Delhi</h1>
                    <h2>150 props</h2>
                </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://i.pinimg.com/originals/d2/17/aa/d217aa9e60ee261429362eb67313ceea.jpg" alt="banglore" />
                <div className="featuredTitles">
                    <h1>kedarnath</h1>
                    <h2>150 props</h2>
                </div>
        </div>
    </div>
  )
}
