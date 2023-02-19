import React from "react";
import "./Profile.css";

const Profile = (props) => {
  const userDetails = props.userDetails;
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
                  backgroundImage: "url(" + userDetails.image_url + ")",
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
              <input type="text" value={userDetails.name} />
            </div>
            <div className="profile-input profile-email">
              <label>Email address</label>
              <input type="email" value={userDetails.email} />
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
              <textarea id="description" cols="30" rows="4" maxlength="400">
                {userDetails.description}
              </textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-card-btn">
        <button className="profile-full-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;
