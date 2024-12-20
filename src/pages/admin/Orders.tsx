import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: '#1001',
      customer: 'John Doe',
      date: '2024-03-15',
      status: 'Completed',
      total: 299.99,
      items: [
        { name: 'Classic T-Shirt', quantity: 2, price: 29.99 },
        { name: 'Denim Jeans', quantity: 1, price: 89.99 },
      ],
    },
    {
      id: '#1002',
      customer: 'Jane Smith',
      date: '2024-03-14',
      status: 'Processing',
      total: 159.99,
      items: [
        { name: 'Summer Dress', quantity: 1, price: 59.99 },
        { name: 'Sandals', quantity: 1, price: 49.99 },
      ],
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'Cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus, isUpdated: true } : order
      )
    );
  };

  const handleUpdate = (orderId) => {
    // Handle the update action here (e.g., call an API or update the status in the backend)
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, isUpdated: false } : order
      )
    );
    // Add any further logic to notify about successful update
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Orders</h1>

          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                          Order {order.id}
                        </h2>
                        <span className="ml-4 flex items-center">
                          {getStatusIcon(order.status)}
                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleStatusChange(order.id, e.target.value)
                            }
                            className="ml-2 text-sm font-medium border-gray-300 rounded"
                          >
                            <option value="Completed" className="text-green-500">
                              Completed
                            </option>
                            <option value="Processing" className="text-yellow-500">
                              Processing
                            </option>
                            <option value="Cancelled" className="text-red-500">
                              Cancelled
                            </option>
                          </select>
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {order.customer} - {order.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Total Amount</div>
                      <div className="text-xl font-bold text-gray-900">
                        ${order.total.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Order Items
                    </h3>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div className="flex items-center">
                            <span className="text-sm text-gray-900">
                              {item.quantity}x {item.name}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {order.isUpdated && (
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => handleUpdate(order.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
