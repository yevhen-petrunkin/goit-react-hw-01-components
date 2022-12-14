import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import StatList from './StatList/StatList';
import FriendList from './FriendList/FriendList';
import Transactions from './Transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats">
        <StatList stats={data} />
      </Statistics>
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
