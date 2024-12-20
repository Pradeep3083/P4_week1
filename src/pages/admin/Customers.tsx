import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Mail, Phone, MapPin } from 'lucide-react';

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      address: '123 Main St, City, Country',
      orders: 5,
      totalSpent: 549.99,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 891',
      address: '456 Oak St, City, Country',
      orders: 3,
      totalSpent: 299.99,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Customers</h1>

          <div className="grid grid-cols-1 gap-6">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {customer.name}
                    </h2>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {customer.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {customer.address}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Total Orders</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {customer.orders}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">Total Spent</div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${customer.totalSpent.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;