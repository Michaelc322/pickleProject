import { useState } from 'react';

export default function Register() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })


    const registerUser = (e: React.FormEvent) => {
        e.preventDefault();
    }


return (
    <div>
            <form onSubmit={registerUser}>
                    <label>Name</label>
                    <input type="text" placeholder='Enter name...' value={data.name} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, name: e.currentTarget.value})}/>
                    <label>Email</label>
                    <input type="text" placeholder='Enter email...' value={data.email} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, email: e.currentTarget.value})}/>
                    <label>Password</label>
                    <input type="text" placeholder='Enter password...' value={data.password} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, password: e.currentTarget.value})}/>
                    <button type='submit'>Submit</button>
            </form>
    </div>
)
}
