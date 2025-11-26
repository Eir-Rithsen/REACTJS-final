import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito</h2>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Quitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

