import type { Account } from './types'

export async function fetchAccount(): Promise<Account> {
  console.log('Fetching account data...')
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Simulate random error (30% chance)
  if (Math.random() < 0.3) {
    console.error('Failed to fetch account data.')
    throw new Error('Failed to fetch account data. Please try again.')
  }

  console.log('Account data fetched')
  return {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    timestamp: new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    plans: [
      {
        id: '1',
        name: 'Basic Plan',
        price: 10,
      },
      {
        id: '2',
        name: 'Pro Plan',
        price: 20,
      },
    ],
  }
}

