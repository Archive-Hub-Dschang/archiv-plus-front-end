import React from "react";
import { CartItem as CartItemType } from "../types/cart";
import { useCart } from "../hooks/useCart";

type Props = {
  item: CartItemType;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <input
          type="number"
          min={1}
          value={item.quantity}
          onChange={e => updateQuantity(item.id, Number(e.target.value))}
          style={{ width: 50 }}
        />
      </td>
      <td>{item.price * item.quantity} €</td>
      <td>
        <button onClick={() => removeFromCart(item.id)}>Retirer</button>
      </td>
    </tr>
  );
};

export default CartItem;