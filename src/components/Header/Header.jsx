import {faBed,
        faPlane,
        faCar,
        faTaxi,
        faCalendarDays,
        faPerson
        } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { useState} from "react";
import {format} from 'date-fns';
import { useNavigate } from "react-router-dom";


export default function Header({type}) {
    const [openDate, setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions, setOpenOptions] = useState(false);
      const [destination, setDestination] = useState("");
      const [options, setOptions] = useState({
        adult: 1,
        room: 1,
        children:0
      });

      const navigate = useNavigate()

      const handleOption = (name, operation) => {
        setOptions((prev)=>{
        return{
          ...prev,
          [name]: operation === "i" ? options[name]+1 : options[name]-1,
        }
      })
    }

    const handleSearch = ()=> {
      navigate("/hotels",{state: { destination, date, options}});
    }
      
      
  return (
<div className="header">
    <div className={type=== 'list' ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rents</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
            </div>
        </div>
        { type !== "list" &&
          <>
          <h1 className="headerTitle">Offer only for You</h1>
        <p className="headerDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ratione provident autem aliquid velit. Dignissimos a expedita, aliquam facilis numquam nesciunt, officia voluptatem, deleniti id aut iure et quibusdam maiores?</p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder="Where do You want to go" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOptions && <div className="options">
              <div className="optionItems">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button disabled={options.adult <=1} className="optionCounterButton" onClick={()=> handleOption("adult","d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={()=> handleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button disabled={options.children <=0} className="optionCounterButton" onClick={()=> handleOption("children","d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton" onClick={()=> handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button disabled={options.room <=1} className="optionCounterButton" onClick={()=> handleOption("room","d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton" onClick={()=> handleOption("room","i")}>+</button>
                </div>
              </div>
             </div>}
             </div>
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
            
        </div> </> }
    </div>
</div>
  )
}