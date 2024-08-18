import { UserHero } from '@partials';
import { useOutletContext } from 'react-router-dom';

function Dashboard() {
  const { user } = useOutletContext();
  return <UserHero user={user} />;
}

export default Dashboard;
