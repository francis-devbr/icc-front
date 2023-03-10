import { apiSlice } from "./apiSlice";

const lojaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLojas: builder.mutation({
      query: () => "/lojas/v1",
    }),
    getLoja: builder.mutation({
      query: (id) => `/lojas/v1/${id}`,
    }),

    getLojaBySigla: builder.mutation({
      query: (args) => {
        const { sigla } = args;
        return { url: "/lojas/v1/search", method: "GET", params: { sigla } };
      },
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

    deleteLoja: builder.mutation({
      query: (id) => ({
        url: `/lojas/v1/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetLojasMutation,
  useGetLojaMutation,
  useGetLojaBySiglaMutation,
  useAddLojaMutation,
  useUpdateLojaMutation,
  useDeleteLojaMutation,
} = lojaApiSlice;
