import { writable } from "svelte/store";
import data from "../../seed.json"

export const invoices = writable<Invoice[]>([])

export const loadInvoices = () => {
    invoices.set(data.invoices)
    // invoices.set([])
}

export const deleteInvoice = (invoiceToDelete: Invoice): Invoice => {
    invoices.update((prev: Invoice[]) => {
        return prev.filter((cur: Invoice) => cur.id !== invoiceToDelete.id)
    })
    return invoiceToDelete
}