import apiSlice from "../api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addUser : builder.mutation({
            query: (data) =>({
                url:"/users",
                method:"POST",
                body:data
            })
        }),
        getUserData : builder.query({
            query:(email)=>`http://localhost:5000/users?email=${email}`,
        }),
        getUserDataById : builder.query({
            query:(id)=>`http://localhost:5000/users/${id}`,
        }),
        deletUser : builder.mutation({
            query:(id)=>({
                url:`/users/${id}`,
                method:"DELETE"
            }),
        })
    })
})

export const { useAddUserMutation, useGetUserDataQuery, useGetUserDataByIdQuery,useDeletUserMutation } = usersApi;