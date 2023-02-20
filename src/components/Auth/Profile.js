import React, { useState } from "react";
import "./Profile.css";
import ImgUpload from "./ImgUpload";
import axios from "axios";

const Profile = (props) => {
  const baseURL = props.baseURL;
  const userDetails = props.userDetails;
  const [image_url, setProfilePic] = useState(userDetails.image_url);
  const [name, setName] = useState(userDetails.name);
  const [email, setEmail] = useState(userDetails.email);
  const [description, setDescription] = useState(userDetails.description);
  var authToken = localStorage.getItem("token");
  var userId = localStorage.getItem("userId");

  const editProfile = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: authToken,
    };

    const data = {
      user: {
        email: email,
        name: name,
        description: description,
        image_url: image_url,
      },
    };
    console.log(data);
    console.log(baseURL + "users/" + userId);
    axios
      .patch(baseURL + "users/" + userId, data, headers)
      .then((response) => {
        console.log(response);
        window.alert("Profile Updated");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="profile-main" id="main">
      <div className="profile-header">
        <img
          className="profile-banner"
          src="https://anmolbansal7.github.io/cogoport-a2-responsive/assets/banner.png"
        />
        <div className="profile-details">
          <div className="profile-details-left">
            <span className="profile-avatar-container">
              <span
                className="profile-avatar"
                style={{
                  backgroundImage: "url(" + image_url + ")",
                }}
              >
                {" "}
              </span>
              <span className="profile-tick">
                <img src="https://anmolbansal7.github.io/cogoport-a2-responsive/assets/icons/tick.svg" />
              </span>
            </span>
            <span className="profile-info">
              <span className="profile-name"> {userDetails.name} </span>
              <br></br>
              <span className="profile-email"> {userDetails.email} </span>
            </span>
          </div>
        </div>
      </div>
      <div className="profile-personal-info">
        <span className="profile-title">
          <p className="profile-title">Personal info</p>
          <p className="profile-sub-title">
            Update your photo and personal details.
          </p>
        </span>
        <div className="profile-card">
          <div className="profile-card-top">
            <div className="profile-input profile-email">
              <label>Your name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="profile-input profile-email">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="profile-input profile-email">
              <label>Change Profile Photo</label>
              <ImgUpload
                banner={image_url}
                setBanner={setProfilePic}
              ></ImgUpload>
            </div>
          </div>
        </div>
      </div>
      <hr className="profile-line" />
      <div className="profile-info-1">
        <span className="profile-title">
          <p className="profile-title">Profile</p>
          <p className="profile-sub-title">Update your portfolio and bio.</p>
        </span>
        <div className="profile-card">
          <div className="profile-card-top">
            <div className="profile-input profile-username">
              <label>Description</label>
              <textarea
                id="description"
                cols="30"
                rows="4"
                maxlength="400"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-card-btn">
        <button className="profile-full-btn" onClick={editProfile}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
