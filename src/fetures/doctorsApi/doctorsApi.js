import apiSlice from "../api/apiSlice";

const doctorsApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({

      getDoctors : builder.query({
        query:()=>"/doctors"
      }),

      getDoctor : builder.query({
          query:(email)=>`http://localhost:5000/doctor/${email}`
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

export const {useAddDoctorMutation,useGetDoctorDataQuery,useGetDoctorsQuery} = doctorsApi
