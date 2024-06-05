import { atom } from "recoil";

export const WalletBalance = atom({
    key : 'wallet_balance',
    default : 300000
})

export const TotalTransactions = atom({
    key : "total_transactions",
    default : 192000
})

export const Transactions = atom({
    key : "all_transactions",
    default : []
})