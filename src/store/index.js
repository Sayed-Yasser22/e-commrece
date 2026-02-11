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
      
      addToCart: (book) => set((state) => ({ 
        cart: [...state.cart, book] 
      })),
    }),
    {
      name: "auth-token",
    }
  )
);