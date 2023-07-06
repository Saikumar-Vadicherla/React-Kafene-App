import React, { useState } from "react";
import "./usersScreen.css";

export const UsersScreen = (props) => {
  console.log("users--------------", props.users);

  const [searchKey, setSearchKey] = useState("");

  const onUserSearch = (event) => {
    const searchKey = event.target.value.toLowerCase();
    setSearchKey(searchKey);
  };

  const filteredData = props.users.filter((user) => {
    return (
      user.fullName.toLowerCase().includes(searchKey) ||
      user.currentCity.toLowerCase().includes(searchKey) ||
      user.id.toString().includes(searchKey) ||
      user.gender.toLowerCase().includes(searchKey) ||
      user.dob.toLowerCase().includes(searchKey)
    );
  });

  console.log("filteredData-----------", filteredData);

  return (
    <div className="users-screen">
      <div className="h1-in-users">
        <h1>Users</h1>
      </div>
      <div className="inside-label-users">
        <input
          type="text"
          id="searchBar"
          className="search-bar"
          placeholder="Search By Name"
          value={searchKey}
          onChange={onUserSearch}
        />
        <button
          type="button"
          onClick={() => setSearchKey("")}
          className="button"
        >
          Reset
        </button>
      </div>

      <div className="users-div">
        <div className="users-head">
          <div className="user-id">
            <h4>ID</h4>
          </div>
          <div className="user-avatar">
            <h4>User Avatar</h4>
          </div>
          <div className="user-full-name">
            <h4>Full Name</h4>
          </div>
          <div className="user-dob">
            <h4>DoB</h4>
          </div>
          <div className="user-gender">
            <h4>Gender</h4>
          </div>
          <div className="user-current-location">
            <h4>Current Location</h4>
          </div>
        </div>

        {filteredData.map((user) => (
          <div
            key={user.id}
            className="users"
            style={{ boxShadow: "0 2px 4px #ccc" }}
          >
            <div className="user-id">
              <h4>{user.id}</h4>
            </div>
            <div className="user-avatar">
              <h4>
                <img src={user.profilePic} alt="userProfilePic" />
              </h4>
            </div>
            <div className="user-full-name">
              <h4>{user.fullName}</h4>
            </div>
            <div className="user-dob">
              <h4>{user.dob}</h4>
            </div>
            <div className="user-gender">
              <h4>{user.gender}</h4>
            </div>
            <div className="user-current-location">
              <h4>
                {user.currentCity}, {user.currentCountry}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
