import apiSlice from "../api/apiSlice";

const doctorsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getDoctors: builder.query({
            query: () => "/approved-doctor"
        }),

        getDoctorData: builder.query({
            query: (email) => `http://localhost:5000/doctors-login?email=${email}`
        }),

        getDoctorByEmail: builder.query({
            query: (email) => ({
                url: `/doctors/${email}`,
            }),
        }),

        getDoctor: builder.query({
            query: (id) => ({
                url: `/doctors/${id}`,
            }),
        }),

        addDoctor: builder.mutation({
            query: (data) => ({
                url: "/doctors",
                method: "POST",
                body: data
            })
        }),

        getApplyingDoctor : builder.query({
            query:()=>"/applying-doctor"
        }),
        approveDoctor: builder.mutation({
            query : (id)=>({
                url:`/applying-doctor/${id}`,
                method : "PUT",                
            })
        }) 
        
    })

})

export const { useAddDoctorMutation, useGetDoctorDataQuery,useGetApplyingDoctorQuery, useGetDoctorsQuery, useGetDoctorByEmailQuery, useGetDoctorQuery,useApproveDoctorMutation } = doctorsApi
