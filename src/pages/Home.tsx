import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
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
  )
}

