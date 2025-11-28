import { useAccount } from '../root';

export function AccountInfo() {
  const account = useAccount();

  return (
    <p>Account: {account.email} - Timestamp: {account.timestamp}</p>
  )
}

