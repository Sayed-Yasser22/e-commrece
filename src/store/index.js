import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthstore = create(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      cart: [],

      login: (token) => set({ token, isAuthenticated: true }),

      logout: () => set({ token: null, isAuthenticated: false, cart: [] }),
      
      addToCart: (book) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === book.id);

        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.id === book.id 
                ? { ...item, quantity: item.quantity + (book.quantity || 1) } 
                : item
            ),
          };
        }
        return { 
          cart: [...state.cart, { ...book, quantity: book.quantity || 1 }] 
        };
      }),

      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId)
      })),

      decreaseQuantity: (productId) => set((state) => ({
        cart: state.cart.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      })),

      increaseQuantity: (productId) => set((state) => ({
        cart: state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      })),
    }),
    {
      name: "auth-token",
    }
  )
);