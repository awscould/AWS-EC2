export interface Subscription {
    _id: string;
    userId: string;
    plan: string;
    status: 'active' | 'expired';
    subscriptionType: string;
    price: number;
    autoRenew: boolean;
    paymentMethod: 'credit card' | 'debit card';
}
