/*
* data.js
*/
const members = [
	{ memberNo: 1001, memberName: '홍길동', memberPoint: 90 },
	{ memberNo: 1002, memberName: '김길동', memberPoint: 100 },
	{ memberNo: 1003, memberName: '박길동', memberPoint: 95 }
];

// 배열 for.
//for(let mem of members){}

members.forEach(function(item, idx, ary) {
	if(item.memberPoint >= 95)
	console.log(item, idx, ary)
})