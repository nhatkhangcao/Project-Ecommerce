<!DOCTYPE html>
<html>

<head>
    <title>XÁC NHẬN ĐƠN HÀNG - EATCLEAN</title>
</head>

<body>
    <h2>Xác nhận đơn hàng</h2>
    <p>Kính gửi quý khách hàng {{ $order->customer_name }},</p>
    <p>Cảm ơn quý khách đã đặt hàng tại EATCLEAN. Chúng tôi xin trân trọng thông báo rằng đơn hàng của quý khách đã được
        nhận thành công và đang được xử lý.</p>
    <p>Thông tin đơn hàng:</p>
    <ul>
        <li>Mã combo: {{ $order->order_code }}</li>
        <li>Combo: {{ $order->order_name }}</li>
        <li>Giá combo: {{ $order->order_price }}VNĐ</li>
        <li>Phương thức thanh toán: {{ $order->payment_method }}</li>
        <li>Địa chỉ: {{ $order->address }}</li>
        <li>Email: {{ $order->email }}</li>
        <li>Tên khách hàng: {{ $order->customer_name }}</li>
        <li>Ghi chú: {{ $order->note }}</li>
        <li>Điện thoại: {{ $order->phone }}</li>
    </ul>
    <p>Chúng tôi sẽ thông báo cho quý khách khi đơn hàng của quý khách được gửi đi. Nếu quý khách có bất kỳ câu hỏi hoặc
        cần hỗ trợ thêm, xin vui lòng liên hệ đội ngũ hỗ trợ khách hàng của chúng tôi.</p>
    <p>Xin chân thành cảm ơn quý khách đã lựa chọn EATCLEAN!</p>
    <p>Trân trọng,<br>
        Đội ngũ EATCLEAN</p>
</body>

</html>
