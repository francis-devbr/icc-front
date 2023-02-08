import { apiSlice } from "./apiSlice";

const naturezaFatoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNaturezas: builder.mutation({
      query: () => "/naturezas/v1",
    }),
    getNatureza: builder.mutation({
      query: ({ id }) => `/naturezas/v1/${id}`,
    }),
    addNatureza: builder.mutation({
      query: (rest) => ({
        url: "/naturezas/v1",
        method: "POST",
        body: rest,
      }),
    }),
    updateNatureza: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/naturezas/v1/${id}`,
        method: "PUT",
        body: { rest },
      }),
    }),

    deleteNatureza: builder.mutation({
      query: (id) => ({
        url: `/naturezas/v1/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetNaturezasMutation,
  useGetNaturezaMutation,
  useAddNaturezaMutation,
  useUpdateNaturezaMutation,
  useDeleteNaturezaMutation,
} = naturezaFatoApiSlice;
