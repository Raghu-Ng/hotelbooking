import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/Header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Foter from "../../components/footer/Foter"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property Type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Reviews</h1>
      <FeaturedProperties/>
      <MailList/>
    </div>
    <Foter/>
    </div>
  )
}

