import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    // height: 1000px;
    background: #FFF2F1;
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 5px;
    padding: 20px;
    flex-wrap: wrap;
`

export const ContainerInfos = styled.div`
    width: 85%;
    // height: 350px;
    background: #FFC6C2;
    margin: 0 auto;
    border-radius: 5px;
    text-align: center;
    padding: 20px;
`

export const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    margin: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0 0 20px 0;
`

export const ContainerStats = styled.div`
    width: 70%;
    height: 50px;
    background: #FFF2F1;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    padding: 15px;
    margin: 0 auto;
    border-radius: 5px;
`

export const Photo = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 3px solid #000;
    margin: 10px
`
