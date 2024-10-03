import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/users'}),
    endpoints: (build) => ({
        getAllUsers: build.query({
            query: (archivedArray) => ({
                url: `?_limit=${6 + archivedArray.length}`,
                headers: {'content-type': 'application/json'},
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}: { id: number }) => ({type: 'Users', id})),
                        {type: 'Users', id: 'LIST'},
                    ]
                    : [{type: 'Users', id: 'LIST'}],
        }),
    }),
});

export const {
    useGetAllUsersQuery, useLazyGetAllUsersQuery
} = usersApi;
