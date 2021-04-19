import styled from 'styled-components'

export const Container = styled.div`
    padding:80px 60px;
    background:#110c2c;
    @media screen and (max-width:1200px){
        width:1220px;
    }
    @media screen and (max-width:992px){
        width:1249px;
    }
    @media screen and (max-width:768px){
        width:1220px;
    }
    @media screen and (max-width:620px){
        width:1000px;
    }
    @media screen and (max-width:320px){
        width:936px;
    }
    

`

export const Wrapper = styled.div`
     display:flex;
     flex-direction:column;
     justify-contant:center;
     max-width:1000px;
     margin:0 auto;
`

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    margin-left:60px;

`

export const Row = styled.div`
     display:grid;
     grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
     grid-gap:20px;

     @media (max-width:1000px){
         grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
     }
`

export const Link = styled.a`
    color:#fff;
    margin-bottom:20px;
    font-size:18px;
    text-decoration:none;

    &:hover{
        color:skyblue;
        transition:200ms ease-in;
        text-decoration: none;
    }
    @media screen and (max-width:992px){
        margin-left:5px;
    }
    @media screen and (max-width:768px){
        margin-left:20px;
    }
`

export const Title = styled.p`
     font-size:24px;
     color:#fff;
     margin-bottom:40px;
     font-weight:bold;

`
