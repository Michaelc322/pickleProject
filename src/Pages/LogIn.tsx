import { useState } from 'react';
import { Box, Container, Fields, FormBox, FormContainer, InputLabel, Section, SmallText, SubmitButton, TitleText } from '../Components/LogInComponents';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function LogIn() { 
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginUser = async(e: React.FormEvent) => {
        e.preventDefault();
        const {email, password} = data;
        try {
            const {data} = await axios.post('/login',{
                email, 
                password
            });

            if(data.error){
                toast.error(data.error)
            } else {
                setData({email: '', password: ''})
                toast.success('Logged in successfully!')
                navigate('/getstarted')
            }


        } catch (error) {
            
        }
    }


  return (
    <>
      <Helmet>
        <title>pickleBOT | Log In</title>
        <link rel="icon" type="image/png" href="./images/pickleball.png"/>
      </Helmet>
    <Section>
        <Container>
            <FormContainer>
                <h1>Log In</h1>
                <FormBox onSubmit={loginUser}>
                    <InputLabel>Email</InputLabel>
                    <Fields type="text" placeholder='Enter email...' value={data.email} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, email: e.currentTarget.value})}/>
                    <InputLabel>Password</InputLabel>
                    <Fields type="password" placeholder='Enter password...' value={data.password} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, password: e.currentTarget.value})}/>
                    <SubmitButton type='submit'><span>Log In</span></SubmitButton>
                </FormBox>
            </FormContainer>
        </Container>
        <SmallText>Don't have an account? <a href="register">Create new account</a></SmallText>
    </Section>
    </>
  )
}