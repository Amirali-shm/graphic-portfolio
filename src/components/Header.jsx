import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
    const [burgerStatus, setburgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (

        <Container>
            <a href="#">
                <h2>Ethernights</h2>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}



            </Menu>
            <RightMenu>
                <a href="#">shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setburgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWraper>
                    <CustomClose onClick={() => setburgerStatus(false)} />
                </CloseWraper>
                {cars && cars.map((car, index) => (
                    <li><a key={index} href="#">{car}</a></li>
                ))}

                <li><a href="#">some item 2</a></li>
                <li><a href="#">some item 3</a></li>
                <li><a href="#">some item 4</a></li>
                <li><a href="#">some item 5</a></li>
            </BurgerNav>
        </Container>

    )
}

export default Header;

const Container = styled.div`
                min-height :60px;
                position: fixed;
                display: flex;
                padding: 0 20px;
                align-items: center;
                justify-content: space-between;
                top: 0;
                left: 0 ;
                right: 0;
                z-index: 1;
                background-color: white;
                h2 {
                    color: black;
                 }
               
                `
const Menu = styled.div`
                display: flex;
                alin-items : center;
                flex: 1;
                justify-content: center;
                color: red;
                a {
                    color:black;
                    font-weight : 600;
                text-transform: uppercase;
                padding: 0 10px;
                flex-wrap: no-wrap;

    }

                @media(max-width: 768px) {
                    display: none;
    }

                `
const RightMenu = styled.div`
                display:flex;
                align-items: center;
                cursor: pointer;

                a {
                    color:black;
                    font - weight : 600;
                    text-transform: uppercase;
                    margin-right: 10px;
                    flex-wrap: no-wrap;

    }

                `
const CustomMenu = styled(MenuIcon)`

                `
const BurgerNav = styled.div`
                position : fixed;
                top: 0;
                bottom: 0;
                right: 0;
                background: white;
                width : 300px;
                z-index: 16;
                list-style: none;
                padding: 20px;
                display: flex;
                flex-direction: column;
                text-align: start;
                transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
                transition : transform 0.2s ;
                li{
                    padding: 15px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.2);
                }
                a{
                    font-weight : 600;
           
                }
  

                `
const CustomClose = styled(CloseIcon)`
                cursor: pointer;

                `
const CloseWraper = styled.div`
            display : flex;
            justify-content : flex-end;

                `