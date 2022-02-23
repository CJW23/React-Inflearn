import React, {useEffect, useState} from 'react';

import useStateWithCallback from 'use-state-with-callback';

// Note: cannot be used on the server-side (e.g. Next.js)
// import { useStateWithCallbackInstant } from 'use-state-with-callback';

const App = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count);
    })
    const c = () => {
        setCount(1);
    }
    return (
        <div>
            <p>{count}</p>

            <button type="button" onClick={c}>
                Increase
            </button>
        </div>
    );
};
export default App;