const sopt = {  //json은 오브젝트의 일부가 아니라 자바스크립트에서 객체를 표현하는 형식
    name: "WE SOPT",
    slogan: "우리가 SOPT입니다",
    part: ["plan", "design", "android", "iOS", "server", "web"],
    number: 199,
    printName: function () {
        console.log("name : ", this.name);
    },
    printNum: function () {
        console.log("number : ", this.number);
    },
};

console.log("typeof sopt : " + typeof sopt);

//+ 와 , 의 차이 알아보기
console.log("sopt : " + sopt);
console.log("sopt : ", sopt);
console.log("sopt : " + JSON.stringify(sopt));

/**
더하기 ver
sopt : [object Object]

콤마 ver
sopt :  {
  name: 'WE SOPT',
  slogan: '우리가 SOPT입니다',
  part: [ 'plan', 'design', 'android', 'iOS', 'server', 'web' ],
  number: 199,
  printName: [Function: printName],
  printNum: [Function: printNum]
}

더하기 JSON.stringif ver 
sopt : {"name":"WE SOPT","slogan":"우리가 SOPT입니다","part":["plan","design","android","iOS","server","web"],"number":199} 
**/

/* -------------------- */
/*   2. JSON 배열 실습    */
/* -------------------- */

const dogs = [
    {name: "식빵", family : "웰시코기", age : 1, weight : 2.14},
    {name: "콩콩", family : "포메라이언", age : 3, weight : 2.5},
    {name: "두팔", family : "푸들", age : 7, weight : 3.1},
];

console.log("dogs : " + dogs);
console.log("dogs : ", dogs);
console.log("dogs :" + JSON.stringify(dogs));

dogs.forEach(dog =>
    console.log(
        dog.name + 
        "이는 종이" +
        dog.family +
        "이고, 나이가 " +
        dog.age +
        "세 입니다 ~"
    ),
)

/** 
더하기
dogs : [object Object],[object Object],[object Object]

콤마
dogs :  [
  { name: '삭빵', family: '웰시코기', age: 1, weight: 2.14 },
  { name: '콩콩', family: '포메라이언', age: 3, weight: 2.5 },
  { name: '두팔', family: '푸들', age: 7, weight: 3.1 }
]

+ JSON.stringify(dogs)
dogs :[{"name":"삭빵","family":"웰시코기","age":1,"weight":2.14},{"name":"콩콩","family":"포메라이언","age":3,"weight":2.5},{"name":"두팔","family":"푸들","age":7,"weight":3.1}]

forEach문
삭빵이는 종이웰시코기이고, 나이가 1세 입니다 ~
콩콩이는 종이포메라이언이고, 나이가 3세 입니다 ~
두팔이는 종이푸들이고, 나이가 7세 입니다 ~
 **/