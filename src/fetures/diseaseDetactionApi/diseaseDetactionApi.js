import apiSlice from "../api/apiSlice";

const diseaseDetactionApi =apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getDisease : builder.query({
            query:(imgUrl)=>`https://serpapi.com/search.json?engine=google_lens&url=${imgUrl}`
        })
    })
})

export const {useGetDiseaseQuery} = diseaseDetactionApi