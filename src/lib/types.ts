export interface Plan {
  id: string
  name: string
  price: number
}

export interface Account {
  id: string
  name: string
  email: string
  timestamp: string
  plans: Plan[]
}
