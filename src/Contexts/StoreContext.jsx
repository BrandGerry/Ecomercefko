import React, {createContext, useReducer} from "react";


//CONTEXT
const StoreContext = createContext();

//REDUCER
const initalState = {
    
    list : [
        {
            id: 1,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/funko-pop-mirio-in-hero-costume-my-hero-academia-other-3_ea3bbb8b-8d7d-47e3-9507-838832c043d7_1800x1800.jpg?v=1637946741",
            product: "Funko Pop! Mirio",
            alt: "Funko-Pop",
            price: 399,
            description: "My hero academia",
        },
        {
            id: 2,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/Funko-Sasuke-Uchiha-Con-Rinnegan-Naruto-Shippuden-Special-Edition-1_9f1e7025-47a2-4c41-affb-817759587db3_1800x1800.jpg?v=1638482342",
            product: "Funko Pop! Sasuke",
            alt: "Funko-Pop",
            price: 319,
            description: "Animacion: Sasuke (Rinnegan)",
        },
        {
            id: 3,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/funko-pop-animation-my-hero-academia-infinite-deku-w-eri-other-3_1800x1800.jpg?v=1632854826",
            product: "Funko Pop! Deku",
            alt: "Funko-Pop",
            price: 399,
            description: "Animation: Academia-Infinite",
        },
        {
            id: 4,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/funko-pop-marvel-what-if-zombie-iron-man-other-1_eb74aa0b-80b3-43c4-8490-8f62eae6b79d_1800x1800.jpg?v=1638393494",
            product: "Funko Pop! Iron man",
            alt: "Funko-Pop",
            price: 399,
            description: "Marvel: What-if-Zombie",
        },
    
        {
            id: 5,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/funko-pop-marvel-what-if-zombie-captain-america-other-3_76c8d7f0-b9b6-42d3-9268-efbbef6be059_1800x1800.jpg?v=1638393050",
            product: "Funko Pop! Capitan.A",
            alt: "Funko-Pop",
            price: 399,
            description: "Marvel: What-if-Zombie",
        },
        
        {
            id: 6,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/funko-pop-animation-naruto-anbu-kakashi-other-3_1800x1800.jpg?v=1632783547",
            product: "Funko Pop! Kakashi",
            alt: "Funko-Pop",
            price: 399,
            description: "Naruto-Anbu Kakashi",
        },
    
        {
            id: 7,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/funko-pop-animation-mha-overhaul-other-3_4ecd7a0e-d3d2-4c8d-a986-6e0f01890795_1800x1800.jpg?v=1637949624",
            product: "Funko Pop! Overhaul",
            alt: "Funko-Pop",
            price: 399,
            description: "Pop-Animation:Mha-Overhaul",
        },
    
        {
            id: 8,
            img: "//cdn.shopify.com/s/files/1/0025/9384/9457/products/funko-pop-animation-naruto-gaara-funko-funko-3_1800x1800.jpg?v=1638476854",
            product: "Funko Pop! Gaara",
            alt: "Funko-Pop",
            price: 319,
            description: "Naruto-Shipudden Gaara",
        },
    
    ],
    cart: [],
    total: 0
};

const reducer =(state,action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
        const newProduct = state.list.find(
            (product) => product.id === action.payload.productId
        );

        const repeatedProduct = state.cart.find(item => item.id === newProduct.id)
        
        return repeatedProduct ? 
            {
                ...state,
                cart: state.cart.map((item) => 
                item.id === newProduct.id ? 
                {...item, quantity: item.quantity + 1} : item),
                total: state.total + action.payload.productPrice
            } : 
            {
                ...state,
                cart: [...state.cart, {...newProduct, quantity: 1}],
                total: state.total + action.payload.productPrice
            }


        case "REMOVE_ONE_FROM_CART":
        const handleRemoveOne = state.cart.find(item => item.id === action.payload.itemId)
           return handleRemoveOne.quantity > 1 ?
           {
               ...state,
               cart: state.cart.map(item => item.id === action.payload.itemId ? {...item, quantity: item.quantity - 1 } : item),
               total: state.total - action.payload.itemPrice
           }:
           {
               ...state,
               cart: state.cart.filter(item => item.id !== action.payload.itemId),
               total: state.total - action.payload.itemPrice
            };
            
        case "REMOVE_ITEM_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price * action.payload.quantity
            }
            
            case "REMOVE_ALL_FROM_CART":
            return{
                ...state,
                cart: initalState.cart,
                total: initalState.total
            }
            default:
                return state;    
    }
}

//PROVIDER
const StoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initalState);

    const data = 
        {
           state,
           dispatch
        }
    
    return(
        <StoreContext.Provider value={data}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext
export {StoreProvider};
