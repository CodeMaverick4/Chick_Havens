const orders = [
    {
        orderId: '1001',
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        orderDate: '2024-09-01',
        orderStatus: 'Pending',
        paymentStatus: 'Paid',
        totalAmount: 299.99,
        shippingAddress: '123 Main St, Springfield, USA',
        paymentMethod: 'Credit Card',
        items: [
            { productCode: '001', productName: 'Smart Earphone Mobile', price: 299.99, quantity: 1 },
        ],
    },
    {
        orderId: '1002',
        customerName: 'Jane Smith',
        customerEmail: 'jane@example.com',
        orderDate: '2024-09-05',
        orderStatus: 'Completed',
        paymentStatus: 'Paid',
        totalAmount: 89.99,
        shippingAddress: '456 Elm St, Springfield, USA',
        paymentMethod: 'PayPal',
        items: [
            { productCode: '002', productName: 'Wireless Headphones', price: 89.99, quantity: 1 },
        ],
    },
    {
        orderId: '1003',
        customerName: 'Michael Johnson',
        customerEmail: 'michael@example.com',
        orderDate: '2024-09-10',
        orderStatus: 'Cancelled',
        paymentStatus: 'Refunded',
        totalAmount: 899.99,
        shippingAddress: '789 Pine St, Springfield, USA',
        paymentMethod: 'Credit Card',
        items: [
            { productCode: '003', productName: 'Laptop', price: 899.99, quantity: 1 },
        ],
    },
    {
        orderId: '1004',
        customerName: 'Emily Davis',
        customerEmail: 'emily@example.com',
        orderDate: '2024-09-15',
        orderStatus: 'Processing',
        paymentStatus: 'Paid',
        totalAmount: 49.99,
        shippingAddress: '101 Maple St, Springfield, USA',
        paymentMethod: 'Debit Card',
        items: [
            { productCode: '004', productName: 'Portable Charger', price: 49.99, quantity: 2 },
        ],
    },
    {
        orderId: '1005',
        customerName: 'Christopher Lee',
        customerEmail: 'christopher@example.com',
        orderDate: '2024-09-20',
        orderStatus: 'Pending',
        paymentStatus: 'Unpaid',
        totalAmount: 199.99,
        shippingAddress: '202 Oak St, Springfield, USA',
        paymentMethod: 'Credit Card',
        items: [
            { productCode: '005', productName: 'Smartwatch', price: 199.99, quantity: 1 },
        ],
    },
];

export default orders