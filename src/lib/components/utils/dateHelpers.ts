import { isBefore } from "date-fns"

export const formatDate = (myDate: string): string => {
    return new Date(myDate).toLocaleDateString('en-us');
};

export const isLate = (myDate: string): boolean => {
    const dueDate = new Date(myDate)
    const today = new Date()
    return isBefore(dueDate, today)
}

