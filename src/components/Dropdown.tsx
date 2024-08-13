// import React from 'react';

// interface Props {
//     value: string;
//     onChange: (value: string) => void;
//     options: string[];
// }

// const Dropdown: React.FC<Props> = ({ value, onChange, options }) => {
//     return (
//         <select className="dropdown" value={value} onChange={e => onChange(e.target.value)}>
//             {options.map(option => (
//                 <option key={option} value={option}>{option}</option>
//             ))}
//         </select>
//     );
// }



// export default Dropdown;

import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
    options: string[];
}

const Dropdown: React.FC<Props> = ({ value, onChange, options }) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option value="" disabled>Select Subscription Type (React)</option>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
}

export default Dropdown;

