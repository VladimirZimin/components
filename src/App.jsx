import Section from "./components/Section/Section";
import MainStatisticList from "./components/StatisticList/StatisticList";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Section title={"Social network profile"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section className="statistics" title={"Statistics section"}>
        <MainStatisticList title={"Upload stats"} stats={data} />
      </Section>

      <Section className="friendList" title={"Friend list"}>
        <FriendList friends={friends} />
      </Section>

      <Section className="friendList" title={"Transactions-history"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
}

export default App;
