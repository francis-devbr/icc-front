import { apiSlice } from "./apiSlice";

const lojaApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Loja"],
  endpoints: (builder) => ({
    lojas: builder.mutation({
      query: () => "/lojas/v1",
      providesTags: ["Loja"],
    }),
    loja: builder.mutation({
      query: ({ id }) => `/lojas/v1/${id}`,
      providesTags: ["Loja"],
    }),
    addLoja: builder.mutation({
      query: (rest) => ({
        url: "/loja/v1",
        method: "POST",
        body: rest,
      }),
      invalidatesTags: ["Loja"],
    }),
    updateLoja: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/lojas/v1/${id}`,
        method: "PUT",
        body: { rest },
      }),
      invalidatesTags: ["Loja"],
    }),
  }),
});

export const { useLojasMutation, useLojaMutation } = lojaApiSlice;
