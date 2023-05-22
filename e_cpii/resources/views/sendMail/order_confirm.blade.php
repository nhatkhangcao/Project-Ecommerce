<!DOCTYPE html>
<html>
<head>
    <title>Order Confirmation - EATCLEAN</title>
</head>
<body>
    <h2>Order Confirmation</h2>
    <p>Dear {{ $order->customer_name }},</p>
    <p>Thank you for placing your order with EATCLEAN. We are pleased to inform you that your order has been successfully received and is being processed.</p>
    <p>Order Details:</p>
    <ul>
        <li>Order Code: {{ $order->order_code }}</li>
        <li>Order Name: {{ $order->order_name }}</li>
        <li>Order Price: {{ $order->order_price }}VNĐ</li>
        <li>Payment Method: {{ $order->payment_method }}</li>
        <li>Address: {{ $order->address }}</li>
        <li>Email: {{ $order->email }}</li>
        <li>Customer Name: {{ $order->customer_name }}</li>
        <li>Note: {{ $order->note }}</li>
        <li>Phone: {{ $order->phone }}</li>
    </ul>
    <p>We will notify you once your order is shipped. If you have any questions or need further assistance, please don't hesitate to contact our customer support team.</p>
    <p>Thank you for choosing EATCLEAN!</p>
    <p>Best regards,<br>
    EATCLEAN Team</p>
</body>
</html>
