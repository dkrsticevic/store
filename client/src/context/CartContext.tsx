import { createContext, ReactNode, useContext, useState } from "react"; 

type CartProviderProps = {
    children: ReactNode
}

type Item = {
    id: number 
    quantity: number 
    price: number
}

type CartContext = {
    getCart: () => Item[]
    addToCart: (id: number, price: number) => void
    getQuantity: (id: number) => number
    getTotalItems: () => number
    removeFromCart: (id: number) => void
}

const CartContext = createContext({} as CartContext)

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider( {children} : CartProviderProps){
    const [items, setItems] = useState<Item[]>([])

    function getCart(){
        return items
    }

    function addToCart(id : number, price: number){        
        setItems(curr => { 
            if (curr.find(item => item.id === id) == null){
                return [...curr, {id: id, quantity: 1, price: price}]
            } else { 
                return curr.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity + 1, price}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function getTotalItems(){
        let total = 0; 
        items.map(e => total += e.quantity)
        return total
    }

    function getQuantity(id : number){
        return items.find(item => item.id === id)?.quantity || 0
    }

    function removeFromCart(id: number){
        setItems(curr => {
            return curr.filter(i => i.id != id)
        })
    }

    return (
        <CartContext.Provider value={{ getCart, addToCart, getTotalItems, getQuantity, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}