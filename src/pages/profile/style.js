import styled from "styled-components";

export const Container = styled.div`
background:gray;
box-sizing:border-box;
width: 100vw;
height: 100vh;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
`
export const WrapProfile = styled.div`
width: 100%;
height: 34%;
`
export const WrapSideBar = styled.div`
width: 100%;
height: 62%;
`

export const ProfileBox = styled.div`
flex:1;
height: 100%;
display:flex;
justify-content:space-between;
align-items: space-between; 
flex-flow: column;
padding: 0 20px;
`
export const BoxInfos = styled.div`
flex:5;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`
export const Infos = styled.div`
background:white;
overflow-y: scroll;
width: 100%;
height: 100%;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-flow: wrap;
`
export const CardInfos = styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`