import React, {useState } from "react";
import html2canvas from "html2canvas"
import Header from "./Header";
import IdCardInfo from "./IdCardInfo"
import IdCardFooter  from "./IdCardFooter";


const Card = (props) => {
  const [buttonText, setButtonText] = useState("Download Card")
  const downloadImage = () => {
    html2canvas(document.getElementById(props.name)).then(canvas => {
      document.body.appendChild(canvas);
      const link = document.createElement('a');
      const data = canvas.toDataURL()
      link.href = data;
      link.target = "_blank"
      link.download = `id-card-${props.image}`;
  
      document.body.appendChild(link);
      link.click();
      });
    }
  return (
    <div className="app__card" id= {props.name} >
      <Header />
      <div className="app__card-body">
        <div className="app__card-body_button"
            onMouseOver={() => setButtonText("Identity card")}
            onMouseOut = {() => {setButtonText("Download card")}}
            onClick = {downloadImage}>
          <button type="button">
            {buttonText}
          </button>
        </div>
        <IdCardInfo 
            key={props.name}
            name = {props.name}
            address = {props.address}
            dob = {props.dob}
            level = "B.Sc.CSIT"
            roll ={props.roll}
            validDate = "31 Chaitra 2082"
            image={props.image}
        />
      </div>
      <div className="app__card-footer">
        <IdCardFooter />
      </div>
    </div>
    )
}

export default Card