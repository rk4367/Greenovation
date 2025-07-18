export const initialState = {
    basket: [],
    history: [
        {
            id: "test-1",
            title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)",
            price: 1099.00,
            rating: 5,
            image: "../images/tablet.jpg",
            badge_id: 0
        },
        {
            id: "test-2", 
            title: "Reusable Water Bottle",
            price: 19.99,
            rating: 5,
            image: "../images/bottle_eco.jpg",
            badge_id: 2
        }
    ],
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketitem) => basketitem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn("Cannot remove product. Not in cart");
            }
            return {
                    ...state,
                basket: newBasket,
            };
        case "ADD_TO_HISTORY":
            return {
                ...state,
                history: [...state.history, ...action.items],
            };
        case 'CLEAR_BASKET':
            return {
                ...state,
                basket: [], // Clear the basket
            };
            default:
            return state;
    }

        
}

export default reducer;