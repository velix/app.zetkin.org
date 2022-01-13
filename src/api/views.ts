/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CreateNewViewReqBody } from 'pages/api/views/createNew';
import { ZetkinView } from 'types/views';
import { createPrefetch, createUseMutation, createUseMutationDelete, createUseQuery } from './utils/resourceHookFactories';

export const viewsResource = (orgId: string) => {
    const key = ['views', orgId];
    const url = `/orgs/${orgId}/people/views`;

    return {
        prefetch: createPrefetch<ZetkinView[]>(key, url),
        useCreate: createUseMutation<CreateNewViewReqBody, ZetkinView>(key, `/views/createNew?orgId=${orgId}`),
        useQuery: createUseQuery<ZetkinView[]>(key, url),
    };
};


export const viewResource = (orgId: string) => {

    return {
        useDelete: createUseMutationDelete(['views', orgId], `/orgs/${orgId}/people/views`),
    };
};