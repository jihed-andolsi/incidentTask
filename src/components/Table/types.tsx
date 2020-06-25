export type DataType = {
    id: string,
    fullname: string,
    amount: string,
    merchant: string,
    date: string,
    numberOfreceipts: number,
    comment: string
}

export type TableItemProps = {
    itemData: DataType,
    itemClickHandler: (id: string) => void
}