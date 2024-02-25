import { useState } from 'react';
import { Container, Fields, FormBox, InputLabel, NameCon, SmallText, SubmitButton } from '../Components/RegisterComponents';
import { FormContainer, Section } from '../Components/LogInComponents';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })


    const registerUser = async (e: React.FormEvent) => {
        e.preventDefault();
        const {firstName, lastName, email, password} = data;
        try {
            const {data} = await axios.post('/register', {
                firstName, lastName, email, password
            })
            if(data.error){
                toast.error(data.error);
            } else {
                setData({firstName: '', lastName : '', email: '', password: ''})
                toast.success('Account created successfully!')
                navigate('/getstarted')
            }
        }
        catch (error) {
            console.log(error);
        }
    }


return (
    <>
    <Helmet>
        <title>pickleBOT | Sign Up</title>
        <link rel="icon" type="image/png" href="./images/pickleball.png"/>
      </Helmet>
        <Section>
            <Container>
                <FormContainer>
                    <h1>Create an account</h1>
                    <FormBox onSubmit={registerUser}>
                        <NameCon>
                            <InputLabel>First Name</InputLabel>
                            <InputLabel>Last Name</InputLabel>

                            <Fields type="text" placeholder='Enter name...' value={data.firstName} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, firstName: e.currentTarget.value})}/>
                            <Fields type="text" placeholder='Enter name...' value={data.lastName} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, lastName: e.currentTarget.value})}/>
                        </NameCon>

                        
                        <InputLabel>Email</InputLabel>
                        <Fields type="text" placeholder='Enter email...' value={data.email} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, email: e.currentTarget.value})}/>
                        <InputLabel>Password</InputLabel>
                        <Fields type="password" placeholder='Enter password...' value={data.password} onChange={(e: React.FormEvent<HTMLInputElement>) => setData({...data, password: e.currentTarget.value})}/>
                        <SubmitButton type='submit'><span>Sign Up</span></SubmitButton>
                    </FormBox>
                </FormContainer>
                
            </Container>
            <SmallText>Already have an account? <a href="login">Sign in here</a></SmallText>

        </Section>
    </>
)
}
