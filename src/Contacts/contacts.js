
import React from "react";
import "./contacts.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Contacts() {
  return (
    <div className="contacts">
      <h1>Contact Information</h1>
      <div className="contactContainer">
        <div className="contactDetails">
          <AccountCircleIcon style={{ fontSize: 40, color: "white", marginRight: 10 }} />
          <h2>Adrián Pardo</h2>
          <p>
            Email: adpardo@alumnos.uai.cl <MailOutlineIcon style={{ fontSize: 20, color: "white", marginLeft: 5, verticalAlign: "middle" }} />
          </p>
          <p>
            Phone: +56 9 7537 6855 <PhoneAndroidIcon style={{ fontSize: 20, color: "white", marginLeft: 5, verticalAlign: "middle" }} />
          </p>
          {}
        </div>
        <div className="contactDetails">
          <AccountCircleIcon style={{ fontSize: 40, color: "white", marginRight: 10 }} />
          <h2>Julián Reyes</h2>
          <p>
            Email: julireyes@alumnos.uai.cl <MailOutlineIcon style={{ fontSize: 20, color: "white", marginLeft: 5, verticalAlign: "middle" }} />
          </p>
          <p>
            Phone: +56 9 9742 8129 <PhoneAndroidIcon style={{ fontSize: 20, color: "white", marginLeft: 5, verticalAlign: "middle" }} />
          </p>
          {}
        </div>
      </div>
    </div>
  );
}

export default Contacts;









