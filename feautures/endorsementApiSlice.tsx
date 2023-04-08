/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EndorsementDataType } from "../interfaces/interfaces";

// Define a service using a base URL and expected endpoints
export const endorsementApi = createApi({
  reducerPath: "endorsementApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Endorsements"],
  endpoints: (builder) => ({
    getEndorsements: builder.query<EndorsementDataType[], void>({
      query: () => "api/endorse-me",
      // Provides a list of `Endorsements` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(
                ({ id }) => ({ type: "Endorsements", id } as const)
              ),
              { type: "Endorsements", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Endorsements", id: "LIST" }],
    }),
    addEndorsement: builder.mutation<
      EndorsementDataType,
      Partial<EndorsementDataType>
    >({
      query(body) {
        return {
          url: `api/endorse-me`,
          method: "POST",
          body,
        };
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: "Endorsements", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEndorsementsQuery, useAddEndorsementMutation } =
  endorsementApi;
