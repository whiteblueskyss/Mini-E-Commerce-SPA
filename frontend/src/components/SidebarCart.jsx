export default function SidebarCart({ isOpen, onClose }) {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 2500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 3200,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 1800,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center",
    },
  ];

  // Calculate totals using for...loop
  let subtotal = 0;
  for (const { price, quantity } of cartItems) {
    subtotal += price * quantity;
  }

  const deliveryFee = 150;
  const total = subtotal + deliveryFee;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-4xl p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 max-h-96">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0"
            >
              {/* Product Image */}
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm mb-2 truncate">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">৳{item.price}</span>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-gray-600 text-sm font-medium">
                        −
                      </span>
                    </button>
                    <span className="text-sm font-medium min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-gray-600 text-sm font-medium">
                        +
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Remove Button */}
              <button className="text-red-500 hover:text-red-700 text-lg ml-2 p-1 rounded-full hover:bg-red-50 transition-colors">
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-200 bg-gray-50 p-6">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">৳{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium text-gray-900">৳{deliveryFee}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">
                  ৳{total}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-slate-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-slate-900 transition-colors duration-200 flex items-center justify-center space-x-2">
            <span>Checkout</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
