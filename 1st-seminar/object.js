/* Object 생성자 함수 */
const person = new Object();

//프로퍼티 추가
person.name = '이름';   //점표기법 접근
person.part = 'Servor';
person['group'] = 'YB'; //브라켓 접근
person.sayHello = function() {
    console.log('안녕하세요 $(this.name) 입니다.');
}

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("=====================");

const emptyObject = {};
console.log(typeof emptyObject);

const animal = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: function () {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function() {
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구 ${this.friend}`);
        });
    },
}

//이렇게 해야함
/** 
const animal = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: () => {
        console.log(`${this.animalName} : 멍멍 `);
    },
    thisFriends: (animalFriends) => {
        animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};
**/

//객체 내에 있는 프로퍼티들에 대해 화살표함수 쓰려면 파라미터로 받아오면 되겠군요
//넵 그리고 안에 this.animalName도 바꾸셔야함!

//console.log(animal);
//animal.bark();
//animal.thisFriends(animal.animalFriends);