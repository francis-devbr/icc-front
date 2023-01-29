import { apiSlice } from "./apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    ocorrencias: builder.mutation({
      query: () => ({
        url: "/ocorrencias/v1",
        method: "GET",
      }),
    }),
  }),
});

export const { useOcorrenciasMutation } = orderApiSlice;
