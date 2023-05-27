import apiSlice from "../api/apiSlice";

const consultaionApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addCounsultaion : builder.mutation({          
                query: (data) =>({
                    url:"/pateint",
                    method:"POST",
                    body:data
                })            
        })
    })
})

export const  {useAddCounsultaionMutation} = consultaionApi