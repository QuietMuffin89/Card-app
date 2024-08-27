import { createStore } from 'redux';

const contents = [
  { 
    path:"/OP",
    imagePath: "./7.jpg",
    title: "오프닝",
    character: "제목: 지름길로 가고파 ",
    detail:{
        videoFrame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vaTZnfpBDEI?si=y7Pq_jxqGb3psKvu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        value:"아주 평화로운 느낌의 곡이다."
    }
  },{ 
    path:"/bonobono",
    imagePath: "./보노보노.jfif",
    title: "보노보노",
    character: "▶메인 주인공 캐릭터 ",
    detail: {videoFrame:`<iframe width="560" height="315" src="https://www.youtube.com/embed/4meurGv6-QU?si=gZ_J6W3IjzWr2FHm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    value:"애니메이션의 메인 주인공 캐릭터이다, 말이 상당히 느리다. 해달을 모티브로 제작된 캐릭터"}
        
  },
  { 
    path:"/porori",
    imagePath: "./porori.jfif",
    title: "포로리",
    character: "▶깐죽대마왕 ▶까불이",
    detail: {videoFrame:`<iframe width="560" height="315" src="https://www.youtube.com/embed/60F3pwwepIg?si=MQCfbho3FGCbLyPF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    value:"주인공의 친구이다, 다람쥐 캐릭터인데 상당히 까불까불한 성격이다. 너부리에게 자주 맞는다;;"}
    
  },{ 
    path:"/nuburi",
    imagePath: "./nuburi.jfif",
    title: "너부리",
    character: "▶분노조절장애 ",
    detail: {videoFrame:`<iframe width="560" height="315" src="https://www.youtube.com/embed/uNdAuiVuYYk?si=_qrUyYDyfK7BZZLq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    value:"주인공 보노보노의 친구, 너구리 캐릭터이며 화가 많고, 나머지 두친구를 답답하게 여긴다."}
    
  },
]

function reducer(state, action) {
  return { contents } ;
}

export const store = createStore(reducer);