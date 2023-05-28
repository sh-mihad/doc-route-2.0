import apiSlice from "../api/apiSlice";

const consultaionApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addCounsultaion : builder.mutation({          
                query: (data) =>({
                    url:"/consultaion",
                    method:"POST",
                    body:data
                })           
        }),
        getPatientsByEmail : builder.query({
            query:(email)=>`/consulation?email=${email}`
        })
    })
})

export const  {useAddCounsultaionMutation,useGetPatientsByEmailQuery} = consultaionApi