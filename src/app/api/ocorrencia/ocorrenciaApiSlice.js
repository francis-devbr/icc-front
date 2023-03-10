import { apiSlice } from "../apiSlice";

const ocorrenciaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOcorrencias: builder.mutation({
      query: () => "/ocorrencias/v1",
    }),
    getOcorrencia: builder.mutation({
      query: ({ id }) => `/ocorrencias/v1/${id}`,
    }),
    addOcorrencia: builder.mutation({
      query: (rest) => ({
        url: "/ocorrencias/v1",
        method: "POST",
        body: rest,
      }),
    }),
    updateOcorrencia: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/ocorrencias/v1/${id}`,
        method: "PUT",
        body: { rest },
      }),
    }),

    deleteOcorrencia: builder.mutation({
      query: (id) => ({
        url: `/ocorrencias/v1/${id}`,
        method: "DELETE",
      }),
    }),

    getOcorrenciasDocumentos: builder.mutation({
      query: (id) => {
        return {
          url: `/ocorrencias/files/v1/${id}`,
        };
      },
    }),

    getDownloadOcorrenciasDocumentos: builder.mutation({
      query: ({id,filename}) => {
        return {
          url: `/ocorrencias/files/v1/download/${id}/${filename}`,
        };
      },
    }),

    deleteOcorrenciaDocumento: builder.mutation({
      query: (id) => ({
        url: `/ocorrencias/files/v1/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetOcorrenciasMutation,
  useGetOcorrenciaMutation,
  useAddOcorrenciaMutation,
  useUpdateOcorrenciaMutation,
  useDeleteOcorrenciaMutation,
  useDeleteOcorrenciaDocumentoMutation,
  useGetOcorrenciasDocumentosMutation,
  useGetDownloadOcorrenciasDocumentosMutation
} = ocorrenciaApiSlice;
