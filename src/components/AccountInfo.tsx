import { useRootLoaderData } from '../root';

export function AccountInfo() {
  const account = useRootLoaderData();

  return (
    <p>Account: {account.email} - Timestamp: {account.timestamp}</p>
  )
}

