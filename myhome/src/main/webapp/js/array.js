/*
* array.js
*/
const ary = []; // new Array(); 갹체생성
ary.push('apple');
ary.push(['banana','cherry']);
ary.push({name:"홍길동",age:20});

//console.log(ary);

const fruits = []; // 배열선언
fruits.push({name:"사과",price:1000});
fruits.push({name:"수박",price:2000});
fruits.pop();
fruits.unshift({name:"수박",price:2000});
fruits.shift();
fruits.push({name:"수박",price:2000});
//fruits.splice(값이 들어갈곳, 변경될값의 갯수, 변경될 값); <-특정 위치에 추가,수정,삭제가능한 메소드
fruits.splice(1, 0, {name:"참외",price:3000}); // 추가
fruits.splice(1, 1, {name:"참외",price:5000}); // 수정
fruits.splice(1, 1 ); //삭제(여러개 삭제가능)

//console.log(fruits);

