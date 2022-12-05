import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap backgroundImage={props.backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>
                        {props.title}
                    </h1>
                    <p>
                        {props.description}
                    </p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom >
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        
                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }

                    </ButtonGroup>
                </Fade>

                <DownArrow src="./images/down-arrow.svg">

                </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index:10;
    width:100vw;
    height:100vh;
    background-image : ${props => `url('/images/${props.backgroundImage}')`} ;
    background-size : cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction : column;
    justify-content: space-between;
    align-items:center;

`
const ItemText = styled.div`
    padding-top:15vh;
    text-align: center;

`
const Buttons = styled.div`
 
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`
const LeftButton = styled.div`
    background-color: white;
    height:40px;
    width:256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items : center;
    border-radius: 100px;
    opacity:0.7;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin : 8px;
    color: black

`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity:0.70;
   
`
const DownArrow = styled.img`
  
    height: 40px;
    overflow-x : hidden;
    animation: animateDown infinite 1.5s;
`