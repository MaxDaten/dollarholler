import { writable } from "svelte/store";
import data from "../../seed.json"

export const clients = writable<Client[]>([])

export const loadClients = () => {
    clients.set(data.clients)
    // invoices.set([])
}

export const addClient = (clientToAdd: Client): Client => {
    clients.update((prev: Client[]) => [...prev, clientToAdd])
    return clientToAdd
}