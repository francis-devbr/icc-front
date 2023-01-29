import { apiSlice } from "./apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    lojas: builder.mutation({
      query: () => ({
        url: "/lojas/v1",
        method: "GET",
      }),
    }),
  }),
});

export const { useLojasMutation } = orderApiSlice;
