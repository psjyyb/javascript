/*
* calendar.js
*/
document.addEventListener("DOMContentLoaded", initForm);

function initForm() {
	let show = document.querySelector('#show');
	show.appendChild(svc.makeTable());
	document.querySelector('#show>table').appendChild(svc.makeHeader2());
	document.querySelector('#show>table').appendChild(svc.makeBody(5));

}

const svc = {
	makeTable: function() {
		let tbl = document.createElement('table');
		tbl.setAttribute('border', "2");
		return tbl;
	},
	makeHeader: function() {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
		let thd = document.createElement('thead');
		let tr = document.createElement('tr');
		days.forEach((day) => {
			let th = document.createElement('th');
			th.innerHTML = day;
			tr.appendChild(th);
		});
		thd.appendChild(tr);

		return thd;
	},
	makeHeader2: function() {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
		let tr = days.reduce((acc, cur) => {
			let th = document.createElement('th');
			th.innerHTML = cur;
			acc.appendChild(th)
			return acc;
		}, document.createElement('tr')); // <tr><th></th>*7</tr>
		let thd = document.createElement('thead');
		thd.appendChild(tr);
		return thd;
	},
	makeBody: function(month = 5) {
		let tbd = document.createElement('tbody');
		let tr = document.createElement('tr');
		let space = 1; //this.getFirstDate(month); // getFirstDate(month) => 1일의 위치 
		for (let j = 0; j < space; j++) {
			let td = document.createElement('td');
			td.innerText = '';
			tr.appendChild(td);
		}	
		let last = getLastDate(5);
		console.log(last);
		for (let i = 1; i <= last; i++) { // getLastDate(month)=> 월의 마지막날을 반환.
			if ((i + space) % 7 == 1) {
				tbd.appendChild(tr);
				tr = document.createElement('tr');
			}

			td = document.createElement('td');
			td.innerHTML = i;
			tr.appendChild(td);

		}
		tbd.appendChild(tr);
		return tbd;
	},
getFirstDate(month){
	let today = new Date(2024, month, 1);
	cosole.log(today);
},
getLastDate(month){
	if(month==2){
		return 28;
	}else if(month<=7&&month%2==1){
		return 31;
	}else if(month<=7&&month%2==0){
		return 30;
	}else if(month>7&&month%2==0){
		return 31;
	}else if(month>7&&month%2==1){
		return 30;
	}
	
}
}

// 달의 1일째 요일 계산


// 달의 마지막날 계산
