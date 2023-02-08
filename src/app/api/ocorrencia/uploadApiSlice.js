import { apiSlice } from "../apiSlice";

const uploadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation(FormData, {
      query: (data) => ({
        url: "/ocorrencias/files/upload",
        method: "POST",
        prepareHeaders: (headers) => {
          headers.set("Content-Type", "multipart/form-data");
          return headers;
        },
        body: data,
      }),
    }),

    getFiles: builder.mutation({
      query: () => "/ocorrencias/files",
    }),
  }),
});

export const { useGetOcorrenciasMutation } = uploadApiSlice;
