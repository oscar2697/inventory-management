export interface Product {
    productId: string
    name: string
    price: number
    rating?: number
    stockQuantity: number
}

export interface NewProduct {
    name: string
    price: number
    rating?: number
    stockQuantity: number
}

export interface SalesSummary {
    salesSummaryId: string
    totalValue: number
    changePercentage?: number
    date: string
}

export interface PurchaseSummary {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage?: number
    date: string
}

export interface ExpenseSummary {
    expenseSummarId: string;
    totalExpenses: number;
    date: string;
}

export interface ExpenseByCategorySummary {
    expenseByCategorySummaryId: string
    category: string
    amount: string
    date: string
}