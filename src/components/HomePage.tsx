import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import img from '../assets/homePageDark.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 90%;
`;

/* ----------------------------------------------
 * Generated by Animista on 2022-12-7 22:58:31
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-pop-up-top
 * ----------------------------------------
 */
const popUp = keyframes`
    {
        0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
        text-shadow: none;
        }
        100% {
        -webkit-transform: translateY(-50px);
                transform: translateY(-50px);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
        }
    }
`;

const Start = styled(Link)`
    width: 150px;
    margin-top: 32px;
    text-align: center;
    font-size: 76px;
    animation: ${popUp} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;
  

const HomePage: React.FC = () => {
    return (
        <Wrapper>
            <Img src={img} />
            <Start to={'Quiz'}>Start</Start>
        </Wrapper>
    )
}

export default HomePage;