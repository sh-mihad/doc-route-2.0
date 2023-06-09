import apiSlice from "../api/apiSlice";

const doctorsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getDoctors: builder.query({
            query: () => "/approved-doctor"
        }),

        getDoctorData: builder.query({
            query: (email) => `https://doc-route-server.vercel.app/doctors-login?email=${email}`
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
        }),
        deleteDoctor : builder.mutation({
          query:(id)=>({
            url:`/doctors/${id}`,
            method:"DELETE"
          }),
          async onQueryStarted(id,{dispatch,queryFulfilled}){
            const patchResult = dispatch(
                apiSlice.util.updateQueryData("getDoctors",undefined,(draft)=>{
                    const deletedDoctorIndex = draft.findIndex(d=>d.id === id)
                    draft.splice(deletedDoctorIndex,1)
                })
            )
            try{
                await queryFulfilled
           }catch(err){
               patchResult.undo()
           }
          }
        }),
        deleteApplyingDoctor : builder.mutation({
            query:(id)=>({
              url:`/approved-doctor/${id}`,
              method:"DELETE"
            }),
            async onQueryStarted(id,{dispatch,queryFulfilled}){
              const patchResult = dispatch(
                  apiSlice.util.updateQueryData("getApplyingDoctor",undefined,(draft)=>{
                      const deletedDoctorIndex = draft.findIndex(d=>d.id === id)
                      draft.splice(deletedDoctorIndex,1)
                  })
              )
              try{
                  await queryFulfilled
             }catch(err){
                 patchResult.undo()
             }
            }
          }),
        
    })

})

export const { useAddDoctorMutation, useGetDoctorDataQuery,useGetApplyingDoctorQuery, useGetDoctorsQuery, useGetDoctorByEmailQuery, useGetDoctorQuery,useApproveDoctorMutation,useDeleteDoctorMutation,useDeleteApplyingDoctorMutation } = doctorsApi
