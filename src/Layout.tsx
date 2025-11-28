import { Link, Outlet } from 'react-router'

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

