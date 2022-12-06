import { createContext, ReactNode, useContext } from "react";

const shoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}
type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export function ShoppingCardProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((prev) => {
      const item = prev.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      } else {
        prev.push({ id, quantity: 1 });
      }
      return [...prev];
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((prev) => {
      const item = prev.find((item) => item.id === id);
      if (item) {
        item.quantity--;
      }
      return [...prev];
    });
  }

  function removeFromCart({ id: number }) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <shoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}
