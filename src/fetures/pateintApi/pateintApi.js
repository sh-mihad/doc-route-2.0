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
        }),
        deletePatient : builder.mutation({
            query:(id)=>({
                url : `/pateint/${id}`,
                method:"DELETE",
            }),
            async onQueryStarted(id,{dispatch,queryFulfilled}){
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getAllPatinets",undefined,(draft)=>{
                        const deletePatient = draft.findIndex(d=>d.id === id)
                        draft.splice(deletePatient,1)
                    })
                )
                try{
                    await queryFulfilled
               }catch(err){
                   patchResult.undo()
               }
              }
        })
    })
        
})

export const {useAddPateintMutation,useGetAllPatinetsQuery,useDeletePatientMutation} = pateintApi