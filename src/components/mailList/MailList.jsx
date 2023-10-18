import "./mailList.css"

export default function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save Money</h1>
        <span className="MailDesc">Sign Up Now</span>
        <div className="mailInputContainer">
            <input type="email" placeholder="Your Email" />
            <button>Subcribe!</button>
        </div>
    </div>
  )
}
