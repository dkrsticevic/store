import { createContext, ReactNode, useContext, useState } from "react"; 

type CartProviderProps = {
    children: ReactNode
}

type Item = {
    id: number 
    quantity: number 
}

type CartContext = {
    getCart: () => Item[]
    addToCart: (id: number) => void
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

    function addToCart(id : number){        
        setItems(curr => { 
            if (curr.find(item => item.id === id) == null){
                return [...curr, {id: id, quantity: 1}]
            } else { 
                return curr.map(item => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }


    return (
        <CartContext.Provider value={{ getCart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}