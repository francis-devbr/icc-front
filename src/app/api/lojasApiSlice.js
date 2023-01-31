import { apiSlice } from "./apiSlice";

const lojaApiSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    lojas: builder.mutation({
      query: () => "/lojas/v1",
    }),
    loja: builder.mutation({
      query: ({ id }) => `/lojas/v1/${id}`,
    }),
    addLoja: builder.mutation({
      query: (rest) => ({
        url: "/lojas/v1",
        method: "POST",
        body: rest,
      }),
    }),
    updateLoja: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/lojas/v1/${id}`,
        method: "PUT",
        body: { rest },
      }),
    }),
  }),
});

export const { useLojasMutation, useLojaMutation, useAddLojaMutation, useUpdateLojaMutation } = lojaApiSlice;
