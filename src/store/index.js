
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const useAuthstore = create(persist(
    (set) => ({
    token: null,
    isAuthenticated: false,

    login: (token) => {
        set({
            token,
            isAuthenticated: true
        })
    }
}),
    {
        name: "auth-token"
    }
))

// logout:() => {
//      set({

//          token: null,
//          isAuthenticated: false,
//      })
//  }