export const orderTrackingData = [
  { title: "Order Placed", desc: "your order has been received by our system", time: "June 12, 04.24 pm", active: true },
  { title: "Order Confirmed", desc: "We've confirmed the order with the restaurant.", time: "June 12, 04.24 pm", active: true },
  { title: "Food Preparation", desc: "The restaurant is preparing your food.", time: "June 12, 04.24 pm", active: true },
  { title: "Ready for Pickup", desc: "Your order is ready for pickup by the delivery person.", time: "June 12, 04.24 pm", active: false },
  { title: "Picked Up", desc: "Our delivery partner is on the way from the restaurant.", time: "June 12, 04.24 pm", active: false },
  { title: "On the Way", desc: "Your order is arriving to your location.", time: "June 12, 04.24 pm", active: false },
  { title: "Delivered", desc: "You've received the order. Enjoy your meal!", time: "June 12, 04.24 pm", active: false },
];

export const orderSummaryInfo = {
  orderId: "ORD-87494762",
  paymentMethod: "Paid online",
  estimatedDelivery: "2025-07-11 | 19:57 pm",
  status: "Processing"
};

export const orderItems = [
  { name: "Delivery Fees", price: 12.50, quantity: 1, originalPrice: 12.50 },
  { name: "Classic Cheeseburger", price: 12.50, quantity: 2, originalPrice: 7.99 },
  { name: "Chocolate Brownie Sundae", price: 12.50, quantity: 1, originalPrice: 3.49 },
];

export const orderTotals = {
  subtotal: 31.97,
  deliveryFees: 12.50,
  tax: 3.00,
  total: 34.97
};