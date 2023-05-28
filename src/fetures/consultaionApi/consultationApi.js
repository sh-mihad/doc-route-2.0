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
        }),
        patientsUpdate:builder.mutation({
            query:(id)=>({
                url :`/consulation/${id}`,
                method: "PUT",
            })
        })
    })
})

export const  {useAddCounsultaionMutation,useGetPatientsByEmailQuery,use} = consultaionApi