import { useState } from 'react';

interface User {
    uid: string;
    userName: string;
}

export default function User() {
    const [user, setUser] = useState<object>();

    const handleUser = () => {
        setUser({
            uid: '123',
            userName: 'guille',
        })
    }
    return (
        <div>
            <h3>User:{JSON.stringify(user)}</h3>
            <button onClick={handleUser} className='p-2 bg-gray-950 hover:bg-gray-950/70 w-fit'>Update user</button>
        </div>
    )
}
