import apiSlice from "../api/apiSlice";

const doctorsApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({

      getDoctors : builder.query({
        query:()=>"/doctors"
      }),

      getDoctorData : builder.query({
          query:(email)=>`http://localhost:5000/doctors-login?email=${email}`
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
