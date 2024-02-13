import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import List from '../json/MatchList.json'
const Container=styled.div`
    min-width:100%;
    min-height:100%;
    background-color:rgb(253, 252, 252);
    display:flex;
    flex-direction: column;
    //justify-content:center;
    align-items:center;
`
const GrayBox=styled.div`
    width: 55vw;
    height: 30vw;
    background-color:#D9D9D9;
    box-sizing: border-box;
    padding: 2vw;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    //border-radius: 3px;
`

const Title=styled.div`
    margin: 5%;
    font-size: 2vw;
    font-weight:bold;
`

const FieldBtn=styled.button`
    background-color:rgba(148, 182, 239, 0.8);
    border-radius:6px;
    border-style:none;
    font-weight:bold;
    width: auto;
    height:3vw;
    font-size: 1.2vw;
    margin: 0px 3px;
`
const BtnBox=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`

const Btn=styled.button`
    margin: 1vw;
    width: 10vw;
    height: 4vw;
    background-color:#F0F4FF; 
    border-radius: 6px;
    border-style:none;
    font-size:1.3vw;
`
const Detail=()=>{
    //url 파라미터에서 id값 가져오기
    const {id}=useParams();
    //id값과 일치하는 List 가져오기
    //url에서 가져오는 params는 string 타입이므로, 타입변환 필요.
    const item=List.find(item=>String(item.id)===id);
    return (
        <Container>
            <NavBar />
            <Title>{item.title}</Title>
            <GrayBox>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>프로젝트 분야</b> 
                {item.field.map((f, index) => (
                    <FieldBtn key={index}>{f}</FieldBtn> // 고유 key 추가
                ))}
                </div>
                <div style={{lineHeight:"4vw", fontSize:"1.5vw"}}><b>모집 파트 </b> {item.recruit}</div>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>모집자 프로필 </b> {item.profile}</div>
                <div style={{lineHeight:"4vw",  fontSize:"1.5vw"}}><b>연락 보내기  </b>{item.contact}</div>
                <div style={{lineHeight:"3vw",  fontSize:"1.5vw"}}><b>프로젝트 설명글 </b>{item.content}</div>
                <BtnBox>
                    <Btn>찜하기</Btn>
                    <Btn>지원하기</Btn>
                </BtnBox>
            </GrayBox>
            
        </Container>
    )

}

export default Detail;