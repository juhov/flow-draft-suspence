import { Outlet, Link } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

