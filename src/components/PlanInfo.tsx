import { usePlans } from '../root';

export function PlansInfo() {
  const plans = usePlans();

  return (
    <ul style={{ padding: '0.5em', background: 'lightblue' }}>
      {plans.map((plan) => (
        <li key={plan.id}>{plan.name} - {plan.price}</li>
      ))}
    </ul>
  );
}
