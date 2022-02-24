import React, { useEffect, useState } from "react";
import Card from "./Card";
import loginLogo from "../assets/formlogo.jpg"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [index, setIndex] = useState(0)
  const [dob, setDob] = useState("")
  const [address, setAddress] = useState("")
  const [loggedSatus, setLogegdStatus] = useState([])

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("login"))
    if (loginStatus) {
      setLoggedIn(loginStatus[0])
      setIndex(loginStatus[1])
      setDob(loginStatus[2])
      setAddress(loginStatus[3])
      setLogegdStatus(loginStatus)
    } else {
      setLoggedIn(false)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(loggedSatus))
  }, [loggedSatus])

  const names = ["Abid Adhikari", "Amirdip Dhimal", "Amitabh Tamang", "Anish Dahal", "Anish Dhakal", "Anisha Dhakal", "Aruna Tamang", "Ayush Tripathi", "Babi Khadka", "Bibek Budhathoki", "Bijaya Thapaliya", "Bikash Sah", "Binay Thakur", "Binita Tamang", "Bishal  Tamang", "Dukindra Shrestha", "Giriraj Thapa", "Hemant  Regmi", "Iraj Manandhar", "Karunesh Pandit", "Kebal Khadka", "Kumar  Basnet", "Muskan Rijal", "Pranav Thapa", "Pratikshya  Katwal", "Rakesh Joshi", "Rohan Sainju", "Rupesh Rai", "Sahil Khadka", "Samiksha  Ghimire", "Sandesh Thapa", "Sushil Chand", "Unishma  Dahal", "Utshav Khadka"];
  let userName = ""

  const reDisplayForm = () => {
    alert("Match not found")
    setLoggedIn(false)
  }
  const displayCard = (i, dateOfBirth, address) => {
    setLoggedIn(true)
    setIndex(i)
    setLogegdStatus([true, i, dateOfBirth, address])
    setDob(dateOfBirth)
    setAddress(address)
  }

  function handleLoginButton() {
    const firstName = document.getElementById("stdfname").value;
    const lastName = document.getElementById("stdlname").value;
    const dateOfBirth = document.getElementById("stddob").value
    const address = document.getElementById("address").value
    userName = `${firstName.trim().toLowerCase()} ${lastName.trim().toLowerCase()}`;
    const i = names.findIndex((item) => {
      return item.toLowerCase() === userName;
    });
    (i === -1) ? reDisplayForm() : displayCard(i, dateOfBirth, address);
  }

  const namesForImage = ["Abid  Adhikari", "Amirdip Dhimal", "Amitabh Tamang", "suyog Dahal", "Anish Dhakal", "Anisha Dhakal", "Aruna Tamang", "Ayush Tripathi", "Babi Khadka", "Bibek Budhathoki", "Bijaya Thapaliya", "Bikash Sah", "Binay Thakur", "Binita Tamang", "Bishal  Tamang", "Dukindra Shrestha", "Giriraj Thapa", "Hemant  Regmi", "Iraj Manandhar", "Karunesh Pandit", "Kebal Khadka", "Kumar  Basnet", "Muskan Rijal", "Pranav Thapa", "Pratikshya  Katwal", "Rakesh Joshi", "Rohan Sainju", "Rupesh Rai", "Sahil Khadka", "Samiksha  Ghimire", "Sandesh Thapa", "Sushil Chand", "Unishma  Dahal", "Utshav Khadka"];
  return (
    <div className="app__main">
      <div id="preloader">
        <div className="spinner">

        </div>
        <div className="loadingtxt">
          Loading ...
        </div>
      </div>

      {
        loggedIn ?
          <div className="app__wrapper" >
            <h1 className="app__heading">Swastik Batch 2077</h1>
            <div className="app__cards">
              <Card
                name={names[index]}
                address={address}
                dob={dob}
                roll= {`CSIT/077/${index+1}`}
                image={namesForImage[index].split(" ")[0].toLowerCase()}
              />
            </div>
          </div> :
          <div className="app__login">
            <h1 className="app__heading">Login Form</h1>
            <div className="app__login-body">
              <form className="app__login-form">
                <label htmlFor="stdfname">First Name:</label>
                <input type="text" name="name" id="stdfname" />
                <label htmlFor="stdlname">Last Name:</label>
                <input type="text" name="lname" id="stdlname" />
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" id="address" />
                <label htmlFor="stddob">Date of Birth: </label>
                <input type="date" name="dob" id="stddob" />
                <button type="button" onClick={handleLoginButton}>View Id Card</button>
              </form>
              <div className="app__login-img">
                <img src={loginLogo} alt="" />
              </div>
            </div>
          </div>
      }
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>

        </div>
        <div className="footer-content">
          <h3>Got your details wrong?</h3>
          <h2>Contact us here:</h2>
          <ul className="social_icon">
            <li><a href="https://www.facebook.com/ssup.holmes"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="https://www.instagram.com/abid.adhikari/"><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="https://twitter.com/sahilkhadka15"><ion-icon name="logo-twitter"></ion-icon></a></li>
          </ul>
          <p>Copyright © Swastik Batch 2077 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App