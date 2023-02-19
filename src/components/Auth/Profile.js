import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div class="profile-main" id="main">
      <div class="header">
        <img
          class="banner"
          src="https://anmolbansal7.github.io/cogoport-a2-responsive/assets/banner.png"
        />
        <div class="details">
          <div class="details-left">
            <span class="avatar-container">
              <span class="avatar"> </span>
              <span class="tick">
                <img src="https://anmolbansal7.github.io/cogoport-a2-responsive/assets/icons/tick.svg" />
              </span>
            </span>
            <span class="info">
              <span class="name"> Olivia Rhye </span>
              <br />
              <span class="email"> olivia@untitledui.com </span>
            </span>
          </div>
        </div>
      </div>
      <div class="personal-info">
        <span class="title">
          <p class="title">Personal info</p>
          <p class="sub-title">Update your photo and personal details.</p>
        </span>
        <div class="card">
          <div class="card-top">
            <div class="input-name">
              <div class="input">
                <label>First name</label>
                <input type="text" value="Olivia" />
              </div>
              <div class="input">
                <label>Last name</label>
                <input type="text" value="Rhye" />
              </div>
            </div>
            <div class="input email">
              <label>Email address</label>
              <input type="email" value="olivia@untitledui.com" />
            </div>
          </div>
        </div>
      </div>
      <hr class="line" />
      <div class="profile-info">
        <span class="title">
          <p class="title">Profile</p>
          <p class="sub-title">Update your portfolio and bio.</p>
        </span>
        <div class="card">
          <div class="card-top">
            <div class="input username">
              <label>Description</label>
              <textarea id="description" cols="30" rows="4" maxlength="400">
                I'm a Product Designer based in Melbourne, Australia. I
                specialise in UX/UI design, brand strategy, and Webflow
                development.
              </textarea>
              <span class="char-count" id="count">
                275 characters left
              </span>
            </div>
          </div>
        </div>

        <div class="card-btn">
          <button class="full-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
