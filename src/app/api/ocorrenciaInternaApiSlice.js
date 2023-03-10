import { apiSlice } from "./apiSlice";

const ocorrenciaInternaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOcorrenciasInterna: builder.mutation({
      query: () => "/ocorrencias-internas/v1",
    }),
    getOcorrenciaInterna: builder.mutation({
      query: (id) => `/ocorrencias-internas/v1/${id}`,
    }),
    addOcorrenciaInterna: builder.mutation({
      query: (rest) => ({
        url: "/ocorrencias-internas/v1",
        method: "POST",
        body: rest,
      }),
    }),
    updateOcorrenciaInterna: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/ocorrencias-internas/v1/${id}`,
        method: "PUT",
        body: { rest },
      }),
    }),

    deleteOcorrenciaInterna: builder.mutation({
      query: (id) => ({
        url: `/ocorrencias-internas/v1/${id}`,
        method: "DELETE",
      }),
    }),

  
  }),
});

export const {
  useGetOcorrenciasInternaMutation,
  useGetOcorrenciaInternaMutation,
  useAddOcorrenciaInternaMutation,
  useUpdateOcorrenciaInternaMutation,
  useDeleteOcorrenciaInternaMutation,
 
} = ocorrenciaInternaApiSlice;
