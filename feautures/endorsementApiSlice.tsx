/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EndorsementDataType } from "../interfaces/interfaces";

// Define a service using a base URL and expected endpoints
export const endorsementApi = createApi({
  reducerPath: "endorsementApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getEndorsements: builder.query<EndorsementDataType[], void>({
      query: () => "api/endorse-me",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEndorsementsQuery } = endorsementApi;
