import { Link } from 'react-router';
import { useRootLoaderData } from '../root';

export function Home() {
  const account = useRootLoaderData();

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {account.name}!</p>
      <p>Data fetched at: {account.timestamp}</p>
      <ul>
        <li>
          <Link to="/current-plan">Current Plan</Link>
        </li>
        <li>
          <Link to="/billing-information">Billing Information</Link>
        </li>
        <li>
          <Link to="/export-data">Export Data</Link>
        </li>
      </ul>
    </div>
  );
}
