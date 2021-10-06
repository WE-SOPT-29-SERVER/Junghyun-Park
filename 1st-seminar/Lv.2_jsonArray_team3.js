const team3 = [
    {name: "서호영", home: "석계", age: 26, hobby: "마술"},
    {name: "박정현", home: "수유", age: 23, hobby: "게임, 댄스"},
    {name: "안준영", home: "공릉", age: 25, hobby: "운동"},
    {name: "최유림", home: "길음", age: 21, hobby: "유튜브 보기"},
];

team3.forEach(member =>
    console.log(
        member.name +
        "은 " +
        member.home +
        "에 살고, " +
        member.age +
        "세이며, " +
        member.hobby +
        "이(가) 취미입니다."
    )
 );