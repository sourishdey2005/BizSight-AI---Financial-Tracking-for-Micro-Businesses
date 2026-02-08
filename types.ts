
export type Role = 'Owner' | 'Accountant' | 'Staff' | 'Admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  businessId: string;
}

export interface Business {
  id: string;
  name: string;
  type: string;
  currency: string;
  timezone: string;
}

export interface Transaction {
  id: string;
  type: 'Sale' | 'Expense';
  amount: number;
  category: string;
  date: string;
  notes: string;
  receiptUrl?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  costPerUnit: number;
  salePrice: number;
  category: string;
}
