import PocketBase from "pocketbase";

import { writable } from "svelte/store";

export const pb = new PocketBase('http://23.239.22.25:443/')

export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth)
    currentUser.set(pb.authStore.model)
})