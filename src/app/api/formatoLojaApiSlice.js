import { apiSlice } from "./apiSlice";

const formatoLojaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFormatos: builder.mutation({
      query: () => "/formatos/v1",
    }),
    formato: builder.mutation({
      query: ({ id }) => `/formatos/v1/${id}`,
    }),
    addFormato: builder.mutation({
      query: (rest) => ({
        url: "/formatos/v1",
        method: "POST",
        body: rest,
      }),
    }),
    updateFormato: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/formatos/v1/${id}`,
        method: "PUT",
        body: { rest },
      }),
    }),
  }),
});

export const {
  useGetFormatosMutation,
  useFormatoMutation,
  useAddFormatoMutation,
  useUpdateFormatoMutation,
} = formatoLojaApiSlice;
