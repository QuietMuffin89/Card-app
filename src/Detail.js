import React from 'react'
import { useNavigate } from 'react-router-dom';

const Detail = (props) =>{
  const navigate = useNavigate();
  return <div style={{paddingTop:20, textAlign:'center', color: 'white'}}>
    <div dangerouslySetInnerHTML={{ __html: props.content.videoFrame }}></div>
    <p>{props.content.value}</p>
    
    <button style={{color:"black", backgroundColor:"darkgray"}} onClick={() => navigate(-1)}>홈으로</button>
  </div>
}

export default Detail
