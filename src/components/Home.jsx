import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import Header from './Header';
function Home() {
    return (
        <Container>
            <Header />

            <Section
                title="Nebula"
                description=""
                backgroundImage="nebula ill 1.jpg"
                leftBtnText="Custom order"
               />


            <Section
                title="Temple"
                description=""
                backgroundImage="temple 1.png"
                leftBtnText="Custom order"
                 />

            <Section
                title="cute ghost"
                description=""
                backgroundImage="cute ghost 1.png"
                leftBtnText="Custom order"
            />


            <Section
                title="Mushroom Jungle"
                description="welcome to our Ethernight"
                backgroundImage="mushroom jungle 1.png"
                leftBtnText="Custom order"
                
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`