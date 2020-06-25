import { ExpenseViewProps } from "../ExpenseView/types"

export type UserType = {
    first: string,
    last: string,
    email: string
}
  
export type AmountType = {
    value: string,
    currency: string
}

export type ExpenseItemType = {
    id: string,
    user: UserType,
    amount: AmountType,
    date: string,
    comment: string,
    receipts: object[]
    merchant: string
}

export type ExpenseTableProps = {
    expenses: ExpenseViewProps[]
    itemClickHandler: (id: string) => void
}