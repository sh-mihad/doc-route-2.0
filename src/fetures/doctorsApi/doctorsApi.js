import apiSlice from "../api/apiSlice";

const doctorsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getDoctors: builder.query({
            query: () => "/doctors"
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
    })

})

export const { useAddDoctorMutation, useGetDoctorDataQuery, useGetDoctorsQuery, useGetDoctorByEmailQuery, useGetDoctorQuery } = doctorsApi
