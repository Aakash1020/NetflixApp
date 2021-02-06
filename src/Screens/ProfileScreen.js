import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profilescreen">
      <Nav />
      <section className="profile__section">
        <h1>Edit Profile</h1>
        <div className="profilesection__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          ></img>

          <div className="profilescreen__details">
            <h2>{user.email}</h2>
            <div className="profilescreen__plans">
              <h3>Plans</h3>
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="profilescreen__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileScreen;
