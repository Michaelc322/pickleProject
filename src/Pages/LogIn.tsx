import { useState } from 'react';
import { Box, Container, Fields, FormBox, FormContainer, InputLabel, Section, SubmitButton } from '../Components/LogInComponents';

export default function LogIn() { 

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginUser = (e: React.FormEvent) => {
        e.preventDefault();
    }


  return (
    <Section>
        <Container>
            <FormContainer>
                <h1>Log In</h1>
                <FormBox onSubmit={loginUser}>
                    <InputLabel>Email</InputLabel>
                    <Fields type="text" placeholder='Enter email...' value={data.email} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, email: e.currentTarget.value})}/>
                    <InputLabel>Password</InputLabel>
                    <Fields type="text" placeholder='Enter password...' value={data.password} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, password: e.currentTarget.value})}/>
                    <SubmitButton type='submit'><span>Submit</span></SubmitButton>
                </FormBox>
            </FormContainer>
        </Container>
    </Section>
  )
}