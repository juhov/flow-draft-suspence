import { RouteObject } from 'react-router-dom'
import { App } from './App'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import { CurrentPlan } from './pages/CurrentPlan'
import { BillingInformation } from './pages/BillingInformation'
import { ExportData } from './pages/ExportData'
import { AuthReturn } from './pages/AuthReturn'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'current-plan',
            element: <CurrentPlan />,
          },
          {
            path: 'billing-information',
            element: <BillingInformation />,
          },
          {
            path: 'export-data',
            element: <ExportData />,
          },
        ],
      },
      {
        path: '/auth/return',
        element: <AuthReturn />,
      },
    ],
  },
]

