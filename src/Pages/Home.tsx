import styled, { keyframes } from "styled-components"
import { FadeUp, SlideInFadeLeft, SlideInFadeRight } from "../Styles/AnimationComponents"

const Welcome = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    height: 100vh;
    flex-direction: column;
    
`

const UserSlide = keyframes`
    0% {
        opacity: 0%;
        transform: translateX(0) scale(1);
    }

    100% {
        opacity: 1;
        transform: translateX(-80) scale(1);
    }
`
const IntroBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    padding: 50px;
    position: relative;
`

const WelcomeMsg = styled.h1`
    text-align: center;
    font-family: Josefin Sans;
    color: white;
    font-size: 40px;
    animation: ${SlideInFadeLeft} 0.5s linear;

`

const SpecWords = styled.span`
    font-family: Josefin Sans;
    background-image: linear-gradient(90deg, #c2fd15, #70d8a9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${FadeUp} 0.5s linear;

`

const Testimonial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1150px;


`

const User = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    justify-content: center;
    padding: 0px 20px 0px 20px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2em;
    height: 20rem;
    width: 40rem;
    backdrop-filter: blur(20px);
    z-index: 11;
    transform: translate(-80px, 50px);

    animation: ${UserSlide} 1s linear;

`

const UserProfile = styled.div`
    display: flex;

`
const Name = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    p{
        color: #111111
    }
    h2{
        line-height: 24px;
    }
`
const TMessage = styled.div`

    position: relative;
    p{
        color: white;
    }
`
const ProfilePic = styled.div`
    position: relative;
    img{
        border-radius: 50%;
        height: 50px;
        margin-right: 12px;
    }
`
const PickleImage = styled.div`
    position: relative;
    width: 800px;
    height: 400px;
    overflow: hidden;
    animation: ${SlideInFadeRight} 1s linear;
    img{
        z-index: 8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`



function Home(){
    return(
        <>
            <Welcome>
                <IntroBox>
                    <WelcomeMsg><SpecWords data-text="pickleBOT">pickleBOT </SpecWords>is an innovative way to <SpecWords data-text="reserve">reserve</SpecWords> a pickleball court.</WelcomeMsg>
                </IntroBox>


                <Testimonial>
                    <PickleImage>
                        <img src="./images/peopleplayingl.jpg"/>
                    </PickleImage>
                    <User>
                        <UserProfile>
                        <ProfilePic>
                            <img src="./images/fsupbinstaprofile.png"/>
                        </ProfilePic>
                        <Name>
                            <h2>Florida State Pickleball</h2>
                            <p>@pickleballfsu</p>
                        </Name>
                        </UserProfile>
                        <TMessage><p>pickleBOT has dramatically improved the amount of courts 
                        we are able to reserve in Tallahassee. We are now able to hold full practices with over 80+ members
                        without worrying about not having enough space</p></TMessage>
                    </User>


                </Testimonial>
            </Welcome>
        </>
    )
}

export default Home