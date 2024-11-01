import React from "react";


import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import './UsersList.css';

function UsersList(props) {
  // Check if the items array is empty
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
        <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  // Render a list of UserItem components for each user in the items array
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
}

export default UsersList;
