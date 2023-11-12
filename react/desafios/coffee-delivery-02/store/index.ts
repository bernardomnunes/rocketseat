import { create } from 'zustand'

export interface CoffeeType {
  id: number
  title: string
  image: string
  quantity: number
}

interface CoffeeState {
  cartQuantity: number
  wishCoffees: CoffeeType[] | null

  insert: (data: CoffeeType) => void
  delete: (id: number) => void
}

export const useStore = create<CoffeeState>((set, get) => {
  return {
    cartQuantity: 0,
    wishCoffees: null,

    insert: (data: CoffeeType) => {
      const { wishCoffees } = get()

      if (wishCoffees) {
        const objectExisted = wishCoffees.find((coffee) => {
          return coffee.id === data.id
        })

        const newCoffeesArray = wishCoffees.map((coffee) => {
          if (coffee.id === objectExisted?.id) {
            return { ...coffee, quantity: coffee.quantity + data.quantity }
          } else {
            return coffee
          }
        })

        if (objectExisted) {
          set(() => ({
            wishCoffees: newCoffeesArray,
          }))
        } else {
          set((state) => ({
            wishCoffees: [...wishCoffees, { ...data }],
            cartQuantity: state.cartQuantity + 1,
          }))
        }
      } else {
        set((state) => ({
          wishCoffees: [{ ...data }],
          cartQuantity: state.cartQuantity + 1,
        }))
      }
    },

    delete: (id: number) => {
      const { wishCoffees } = get()

      let newWishCoffees: CoffeeType[]

      if (wishCoffees) {
        newWishCoffees = wishCoffees.filter(
          (coffeeArray) => coffeeArray.id === id,
        )
      }

      set((state) => ({
        wishCoffees: newWishCoffees,
        cartQuantity: state.cartQuantity - 1,
      }))
    },
  }
})
