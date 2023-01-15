export const sumLineItems = (lineItems: LineItem[] = []): number => {
    return lineItems.reduce(
        (prev, current) => prev + current.amount,
        0
    )
}
export const invoiceTotal = (lineItems: LineItem[] = [], discount: number = 0): number => {
    const lineItemSum = sumLineItems(lineItems)
    const invoiceItemDiscount = lineItemSum * (0 / 100)
    return lineItemSum - invoiceItemDiscount
}

export const centsToDollars = (cents: number): string => {
    const dollars = cents / 100
    const addDecimals = twoDecimals(dollars)
    return addThousandsSeperator(addDecimals)
}


export const dollarsToCents = (dollars: number): number => {
    const cents = dollars * 100
    return cents
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