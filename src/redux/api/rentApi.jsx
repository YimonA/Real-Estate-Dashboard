import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rentApi = createApi({
  reducerPath: "rentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://property-eof8.onrender.com`,
  }),
  tagTypes: ["rent"],

  endpoints: (builder) => ({
    getRent: builder.query({
      query: () => `/rent`,
      providesTags: ["rent"],
    }),
    getDetailRent: builder.query({
      query: (id) => `/rent/${id}`,
      providesTags: ["rent"],
    }),
    createRent: builder.mutation({
      query: (rent) => ({
        url: "/rent",
        method: "POST",
        body: rent,
      }),
      invalidatesTags: ["rent"],
    }),
    deleteRent: builder.mutation({
      query: (id) => ({
        url: `/rent/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rent"],
    }),
    editRent: builder.mutation({
      query: (newData) => ({
        url: `/rent/${newData?.id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["rent"],
    }),
    
  }),
});

export const {
  useGetRentQuery,
  useGetDetailRentQuery,
  useCreateRentMutation,
  useDeleteRentMutation,
  useEditRentMutation
} = rentApi;
