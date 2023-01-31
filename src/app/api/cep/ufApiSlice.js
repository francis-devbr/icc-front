import { apiSlice } from "../apiSlice";

const ufApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUfs: builder.mutation({
      query: () => `/uf/v1`,
    }),
  }),
});

export const { useGetUfsMutation } = ufApiSlice;
