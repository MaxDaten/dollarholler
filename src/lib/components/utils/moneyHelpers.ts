export const sumLineItems = (lineItems: LineItem[] = []): number => {
    return lineItems.reduce(
        (prev, current) => prev + current.amount,
        0
    )
}

export const centsToDollars = (cents: number): string => {
    const dollars = cents / 100
    const addDecimals = twoDecimals(dollars)
    return addThousandsSeperator(addDecimals)
}

export const twoDecimals = (myNum: number): string => {
    return myNum.toFixed(2);
}

export const addThousandsSeperator = (myNum: string): string => {
    return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const sumInvoices = (invoices: Invoice[] = []): number => {
    return invoices.reduce(
        (prev, cur) => {
            const invoiceSum = sumLineItems(cur.lineItems)
            return prev + invoiceSum
        },
        0
    )
}