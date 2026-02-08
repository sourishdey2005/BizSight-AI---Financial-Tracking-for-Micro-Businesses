import React from 'react';
import { Package, AlertCircle, Plus, Layers, ArrowDownUp } from 'lucide-react';
import { InventoryItem } from '../../types';

const items: InventoryItem[] = [
  { id: '1', name: 'LED Tube Light 20W', stock: 5, costPerUnit: 120.00, salePrice: 250.00, category: 'Electrical' },
  { id: '2', name: 'Cable Wire 90m', stock: 120, costPerUnit: 250.00, salePrice: 450.00, category: 'Hardware' },
  { id: '3', name: 'Solar Inverter 1kW', stock: 2, costPerUnit: 18500.00, salePrice: 24999.00, category: 'Power' },
  { id: '4', name: 'Switch Socket 6A', stock: 15, costPerUnit: 40.00, salePrice: 120.00, category: 'Electrical' },
];

export const Inventory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Inventory</h1>
          <p className="text-slate-500">Track stock levels and unit costs for automated COGS.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <Layers className="text-blue-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Items</p>
            <p className="text-xl font-bold text-slate-900">1,240 Units</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
            <AlertCircle className="text-amber-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Low Stock Alerts</p>
            <p className="text-xl font-bold text-slate-900">4 Items</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
            <ArrowDownUp className="text-emerald-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Inventory Value</p>
            <p className="text-xl font-bold text-slate-900">₹1,88,450</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Item Name</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Unit Cost</th>
                <th className="px-6 py-4">Sale Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{item.stock} units</td>
                  <td className="px-6 py-4 text-sm text-slate-600">₹{item.costPerUnit.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">₹{item.salePrice.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                      item.stock < 10 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {item.stock < 10 ? 'Low Stock' : 'In Stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 text-sm font-medium hover:underline">Update Stock</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
