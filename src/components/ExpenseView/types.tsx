export type ExpenseViewProps = {
    id?: string;
    amount?: {
        value: string,
        currency: string
    };
    date?: string;
    merchant?: string;
    receipts?: any[];
    comment?: string;
    category?: string;
    user?: {
        first: string,
        last: string,
        email: string
    };
    postComment? : (id: string, comment: string) => void,
    setComment?: (any) => void
}

export type CommentType = {
    isEmpty?: boolean
}
export type OtherDataWrapperType = {
    fullWidth?: boolean
}