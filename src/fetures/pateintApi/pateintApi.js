import apiSlice from "../api/apiSlice";

const pateintApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addPateint : builder.mutation({
            query: (data) =>({
                url:"/pateint",
                method:"POST",
                body:data
            })
        }),
    })
        
})

export const {useAddPateintMutation} = pateintApi