import { useState } from 'react';
import { Container, Fields, FormBox, InputLabel, SmallText, SubmitButton } from '../Components/RegisterComponents';
import { FormContainer, Section } from '../Components/LogInComponents';

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
    <>
        <Section>
            <Container>
                <FormContainer>
                    <h1>Create an account</h1>
                    <FormBox onSubmit={registerUser}>
                        <InputLabel>Name</InputLabel>
                        <Fields type="text" placeholder='Enter name...' value={data.name} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, name: e.currentTarget.value})}/>
                        <InputLabel>Email</InputLabel>
                        <Fields type="text" placeholder='Enter email...' value={data.email} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, email: e.currentTarget.value})}/>
                        <InputLabel>Password</InputLabel>
                        <Fields type="text" placeholder='Enter password...' value={data.password} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, password: e.currentTarget.value})}/>
                        <InputLabel>Confirm Password</InputLabel>

                        <Fields type="text" placeholder='Enter password...' value={data.password} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, password: e.currentTarget.value})}/>
                        
                        <SubmitButton type='submit'><span>Sign Up</span></SubmitButton>
                    </FormBox>
                </FormContainer>
                
            </Container>
            <SmallText>Already have an account? <a href="login">Sign in here</a></SmallText>

        </Section>
    </>
)
}
