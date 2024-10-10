export interface Product {
    productId: string
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
    expenseSummaryId: string
    totalExpense: number
    date: string
}

export interface ExpenseByCategorySummary {
    expenseByCategorySummaryId: string
    category: string
    amount: number
    date: string
}