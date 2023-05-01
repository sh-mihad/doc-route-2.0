import apiSlice from "../api/apiSlice";

const doctorsApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({

      getDoctors : builder.query({
        query:()=>"/doctors"
      }),

        addDoctor : builder.mutation({
            query: (data) =>({
                url:"/doctors",
                method:"POST",
                body:data
            })
        }),
    })
        
})

export const {useAddDoctorMutation,useGetDoctorsQuery} = doctorsApi
