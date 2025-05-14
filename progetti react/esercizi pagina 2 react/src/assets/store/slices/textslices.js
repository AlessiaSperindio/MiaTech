import {createSlice} from"@reduxjs/toolkit"
const textSlices =createslices ( {
    name : "data",
    initialState : {
        title: "my custom title",
        text: "my custom text"
    } ,
    reducers : {
        updateText:(state, {payload})=> {
            state.text = payload;
        },
        updateTitle:(state, {payload})=> {
            state.title = payload;
        }
    }
});
   
export const{updateText, updateTitle} = textSlices.actions;
export default textSlices.reducers