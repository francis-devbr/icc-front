import { apiSlice } from "./apiSlice";

const cepApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCep: builder.mutation({
      query: (cep) => `/cep/v1/${cep}`,
    }),
  }),
});

export const { useGetCepMutation } = cepApiSlice;
