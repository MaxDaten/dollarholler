import { format, isBefore } from "date-fns"

export const today = format(new Date(), 'yyyy-MM-dd')

export const formatDate = (myDate: string): string => {
    return new Date(myDate).toLocaleDateString('en-us');
};

export const isLate = (myDate: string): boolean => {
    const dueDate = new Date(myDate)
    const today = new Date()
    return isBefore(dueDate, today)
}

