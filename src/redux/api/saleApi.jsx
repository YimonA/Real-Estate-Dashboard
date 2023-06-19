import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const saleApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://property-eof8.onrender.com`,
  }),
  tagTypes: ["sale"],

  endpoints: (builder) => ({
    getSale: builder.query({
      query: () => `/sale`,
      providesTags: ["sale"],
    }),
    getDetailSale: builder.query({
      query: (id) => `/sale/${id}`,
      providesTags: ["sale"],
    }),
    createSale: builder.mutation({
      query: (sale) => ({
        url: "/sale",
        method: "POST",
        body: rent,
      }),
      invalidatesTags: ["sale"],
    }),
    deleteSale: builder.mutation({
      query: (id) => ({
        url: `/sale/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["sale"],
    }),
    editSale: builder.mutation({
      query: (newData) => ({
        url: `/sale/${newData?.id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["sale"],
    })
    
  }),
});

export const {
  useGetSaleQuery,
  useGetDetailSaleQuery,
  useCreateSaleMutation,
  useDeleteSaleMutation,
  useEditSaleMutation,
} = saleApi;
