import { apiSlice } from "./apiSlice";

const pessoaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPessoas: builder.mutation({
      query: () => "/pessoas/v1",
    }),
    getPessoa: builder.mutation({
      query: ({ id }) => `/pessoas/v1/${id}`,
    }),
    addPessoa: builder.mutation({
      query: (rest) => ({
        url: "/pessoas/v1",
        method: "POST",
        body: rest,
      }),
    }),
    updatePessoa: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/pessoas/v1/${id}`,
        method: "PUT",
        body: { rest },
      }),
    }),

    deletePessoa: builder.mutation({
      query: (id) => ({
        url: `/pessoas/v1/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPessoasMutation,
  useGetPessoaMutation,
  useAddPessoaMutation,
  useUpdatePessoaMutation,
  useDeletePessoaMutation,
} = pessoaApiSlice;
