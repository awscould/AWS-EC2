// import React, { useState, useEffect } from 'react';
// import Dropdown from './components/Dropdown';
// import SubscriptionGrid from './components/SubscriptionGrid';
// import { fetchSubscriptions } from './services/subscriptionService';
// import { Subscription } from './types';

// const subscriptionTypes = ['monthly', 'yearly', 'lifetime'];

// const App: React.FC = () => {
//     const [selectedType, setSelectedType] = useState('monthly');
//     // const [subscriptions, setSubscriptions] = useState([]);
//     const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

//     useEffect(() => {
//         fetchSubscriptions(selectedType)
//             .then(setSubscriptions)
//             .catch(console.error);
//     }, [selectedType]);

//     return (
//         <div className="app-container">
//             <h1>Subscription Management</h1>
//             <Dropdown value={selectedType} onChange={setSelectedType} options={subscriptionTypes} />
//             <SubscriptionGrid subscriptions={subscriptions} />
//         </div>
//     );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown';
import SubscriptionGrid from './components/SubscriptionGrid';
import { fetchSubscriptions } from './services/subscriptionService';
import { Subscription } from './types';

const subscriptionTypes = ['monthly', 'yearly', 'lifetime'];

const App: React.FC = () => {
    const [selectedType, setSelectedType] = useState('');
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    useEffect(() => {
      if (selectedType) {
        fetchSubscriptions(selectedType)
            .then(setSubscriptions)
            .catch(error => console.error('Failed to fetch data:', error));
      }
      else {
        setSubscriptions([]);
      }
    }, [selectedType]);

    return (
        <div>
            <h1>Subscription Management</h1>
            <Dropdown value={selectedType} onChange={setSelectedType} options={subscriptionTypes} />
            {selectedType ? (<SubscriptionGrid subscriptions={subscriptions} />
                        ) : (
                          <p>No Data to show</p>
                      )}
        </div>
    );
}

export default App;

