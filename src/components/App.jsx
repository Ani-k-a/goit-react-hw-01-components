import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList.jsx'
import TransactionHistory from './TransactionHistory/TransactionHistory'

import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

import { AppStyled } from '../components/App.styled'


export const App = () => {
  return (
    <AppStyled>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> 

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} /> 

    </AppStyled>
  );
};
