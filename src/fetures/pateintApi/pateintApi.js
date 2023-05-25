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
        getAllPatinets : builder.query({
            query:()=>"/pateint"
        })
    })
        
})

export const {useAddPateintMutation,useGetAllPatinetsQuery} = pateintApi