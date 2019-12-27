export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    
    // if item already exists it will have a quantity of 1 already and will increment if same item is added
    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    // when a new item is added quantity with value 1 is attached to it
    return [...cartItems, { ...cartItemToAdd, quantity:1 }]
}