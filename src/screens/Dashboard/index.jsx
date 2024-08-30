import { UserSection } from '@partials';
import { useOutletContext } from 'react-router-dom';

function Dashboard() {
  const { user } = useOutletContext();
  return <UserSection user={user} />;
}

export default Dashboard;
