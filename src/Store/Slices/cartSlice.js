import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        value : []
    },
    reducers:{

        addToCart:(state,action)=>{

            let product = action.payload;

            const idx = state.value.findIndex(p=>p.id===product.id);
            if(idx>-1){
                state.value[idx].quantity += 1;
                return;
            }
      
            product["quantity"] = 1;
            state.value.push(product);
        },
        removeFromCart:(state,action)=>{
            let pid = action.payload;

            const idx = state.value.findIndex(p=>p.id===pid);
            if(state.value[idx].quantity>1){
                state.value[idx].quantity -= 1;
                return;
            }
      
            state.value.splice(idx,1); 
        },
        removeProduct:(state,action)=>{
            let pid = action.payload;
            const idx = state.value.findIndex(p=>p.id===pid);
      
            state.value.splice(idx,1); 
        }
    }
});

export const {addToCart,removeFromCart,removeProduct} = cartSlice.actions;

export default cartSlice.reducer;