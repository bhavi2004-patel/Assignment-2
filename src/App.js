import React from "react";
import UserProfile from "./UserProfile";

function App() {
  const userData = {
    name: 'Bhavi',
    age: 20,
    location: 'Chikhli',
    bio: 'Sucks in college'
  }
  return (
    <>
      <div>
        <UserProfile name={userData.name} age={userData.age} location={userData.location} bio={userData.bio} />
      </div>
    </>
  );
}

export default App;
