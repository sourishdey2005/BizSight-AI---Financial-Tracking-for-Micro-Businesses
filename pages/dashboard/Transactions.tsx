import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Trash2, Edit2, FileImage } from 'lucide-react';
import { Transaction } from '../../types';

export const Transactions: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', type: 'Sale', amount: 4500.00, category: 'Hardware', date: '2023-11-01', notes: 'Sold 5 LED Bulbs' },
    { id: '2', type: 'Expense', amount: 1500.00, category: 'Marketing', date: '2023-11-02', notes: 'Google My Business Ads' },
    { id: '3', type: 'Sale', amount: 8000.00, category: 'Services', date: '2023-11-03', notes: 'AC Repair Service' },
    { id: '4', type: 'Expense', amount: 15000.00, category: 'Rent', date: '2023-11-01', notes: 'Shop Rent Nov' },
  ]);

  const [newTx, setNewTx] = useState<Partial<Transaction>>({
    type: 'Sale',
    amount: 0,
    category: 'Miscellaneous',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const tx = { ...newTx, id: Math.random().toString() } as Transaction;
    setTransactions([tx, ...transactions]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Transactions</h1>
          <p className="text-slate-500">Record and manage your daily sales and expenses.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-white transition text-sm font-medium">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button 
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium shadow-lg shadow-blue-100"
          >
            <Plus className="w-4 h-4" /> Add Transaction
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 animate-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">New Transaction</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600">Close</button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl mb-4">
                <button 
                  type="button"
                  onClick={() => setNewTx({...newTx, type: 'Sale'})}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${newTx.type === 'Sale' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
                >
                  Sale
                </button>
                <button 
                  type="button"
                  onClick={() => setNewTx({...newTx, type: 'Expense'})}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${newTx.type === 'Expense' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500'}`}
                >
                  Expense
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Amount (₹)</label>
                  <input 
                    type="number" required
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    value={newTx.amount}
                    onChange={(e) => setNewTx({...newTx, amount: parseFloat(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Date</label>
                  <input 
                    type="date" required
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={newTx.date}
                    onChange={(e) => setNewTx({...newTx, date: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label>
                <select 
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  value={newTx.category}
                  onChange={(e) => setNewTx({...newTx, category: e.target.value})}
                >
                  <option>Rent</option>
                  <option>Utilities</option>
                  <option>Inventory</option>
                  <option>Staff Salary</option>
                  <option>Hardware</option>
                  <option>Services</option>
                  <option>GST Payment</option>
                  <option>Miscellaneous</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Notes</label>
                <textarea 
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                  placeholder="Details about the transaction..."
                  value={newTx.notes}
                  onChange={(e) => setNewTx({...newTx, notes: e.target.value})}
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Receipt Upload</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-200 cursor-pointer transition">
                  <FileImage className="w-8 h-8 mb-2" />
                  <span className="text-sm">Click to upload bill image</span>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-100">
                Confirm {newTx.type}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search history..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50">
              <Filter className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-xs uppercase font-bold text-slate-500 tracking-wider">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Transaction</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">{tx.date}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{tx.notes || 'No description'}</p>
                      <p className="text-xs text-slate-400">{tx.type}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-tight">
                      {tx.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">
                    <span className={tx.type === 'Sale' ? 'text-emerald-600' : 'text-rose-600'}>
                      {tx.type === 'Sale' ? '+' : '-'}₹{tx.amount.toLocaleString('en-IN')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="text-slate-400 hover:text-blue-600 transition"><Edit2 className="w-4 h-4" /></button>
                      <button className="text-slate-400 hover:text-rose-600 transition"><Trash2 className="w-4 h-4" /></button>
                    </div>
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
