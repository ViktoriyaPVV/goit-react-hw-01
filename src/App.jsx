import userData from "./assets/Profile.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import friends from "./assets/Friends.json";
import transactions from "./assets/Transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import React from "react";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
