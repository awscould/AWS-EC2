import React from 'react';
import { Subscription } from '../types';

interface Props {
    subscriptions: Subscription[];
}

const SubscriptionGrid: React.FC<Props> = ({ subscriptions }) => {
    if (!subscriptions.length) return <p>No subscriptions found.</p>;

    return (
        <table className="subscription-grid">
            <thead>
                <tr>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {subscriptions.map(sub => (
                    <tr key={sub._id}>
                        <td>{sub.plan}</td>
                        <td>{sub.status}</td>
                        <td>${sub.price.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SubscriptionGrid;
