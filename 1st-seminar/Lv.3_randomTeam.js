// 일단 와비 오비를 나누고 거기서 각 배열에 조를 할당하도록
// 하려고 했으나 실패.. 아래 코드는 와비 오비 비율 반영x

const members = [
    { name: "강한희", part: "Server", group: "OB" },
    { name: "고성용", part: "Server", group: "OB" },
    { name: "구건모", part: "Server", group: "YB" },
    { name: "권세훈", part: "Server", group: "YB" },
    { name: "김영권", part: "Server", group: "YB" },
    { name: "김은지", part: "Server", group: "YB" },
    { name: "김진욱", part: "Server", group: "YB" },
    { name: "김희빈", part: "Server", group: "OB" },
    { name: "남지윤", part: "Server", group: "YB" },
    { name: "문규원", part: "Server", group: "YB" },
    { name: "박나희", part: "Server", group: "OB" },
    { name: "박정현", part: "Server", group: "YB" },
    { name: "박현지", part: "Server", group: "OB" },
    { name: "변주현", part: "Server", group: "OB" },
    { name: "서호영", part: "Server", group: "OB" },
    { name: "설지원", part: "Server", group: "YB" },
    { name: "손시형", part: "Server", group: "YB" },
    { name: "안준영", part: "Server", group: "OB" },
    { name: "장서현", part: "Server", group: "OB" },
    { name: "오예원", part: "Server", group: "OB" },
    { name: "이다은", part: "Server", group: "OB" },
    { name: "이동근", part: "Server", group: "YB" },
    { name: "이솔", part: "Server", group: "OB" },
    { name: "이승헌", part: "Server", group: "YB" },
    { name: "이정은", part: "Server", group: "YB" },
    { name: "이제준", part: "Server", group: "YB" },
    { name: "정설희", part: "Server", group: "OB" },
    { name: "조윤서", part: "Server", group: "OB" },
    { name: "조재호", part: "Server", group: "YB" },
    { name: "조찬우", part: "Server", group: "YB" },
    { name: "주어진사랑", part: "Server", group: "YB" },
    { name: "주효식", part: "Server", group: "YB" },
    { name: "채정아", part: "Server", group: "OB" },
    { name: "최영재", part: "Server", group: "OB" },
    { name: "최유림", part: "Server", group: "YB" },
    { name: "최진영", part: "Server", group: "YB" },
    { name: "허유정", part: "Server", group: "YB" },
  ];

//   let YB = new Array(21)
//   let OB = new Array(16)

//   let dataset = members;
//   $.each(dataset, function (idx,row) {
//     if(dataset[idx].group == "YB"){
//         YB = dataset[idx];
//     }
//     else{
//         OB = dataset[idx];
//     }
// })
// console.log(YB);
// console.log(OB);

  let random = [];

  while(members.length > 0){
	let randonTeam = members.splice(Math.floor(Math.random() * members.length),1)[0]
	random.push(randonTeam)
}

let team1 = new Array(4);
let team2 = new Array(4);
let team3 = new Array(4);
let team4 = new Array(4);
let team5 = new Array(4);
let team6 = new Array(4);
let team7 = new Array(4);
let team8 = new Array(4);
let team9 = new Array(5);

for(var j=0; j<4; j++) {
    team1[j] = random[j];
}
for(var j=4; j<8; j++) {
    team2[j] = random[j];
}
for(var j=8; j<12; j++) {
    team3[j] = random[j];
}
for(var j=12; j<16; j++) {
    team4[j] = random[j];
}
for(var j=16; j<20; j++) {
    team5[j] = random[j];
}
for(var j=20; j<24; j++) {
    team6[j] = random[j];
}
for(var j=24; j<28; j++) {
    team7[j] = random[j];
}
for(var j=28; j<32; j++) {
    team8[j] = random[j];
}
for(var j=32; j<37; j++) {
    team9[j] = random[j];
}

console.log("team1 : ",team1)
console.log("team2 : ",team2)
console.log("team3 : ",team3)
console.log("team4 : ",team4)
console.log("team5 : ",team5)
console.log("team6 : ",team6)
console.log("team7 : ",team7)
console.log("team8 : ",team8)
console.log("team9 : ",team9)