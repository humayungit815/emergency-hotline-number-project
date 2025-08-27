// Reusable function for get ID
function getId(id) {
	const element = document.getElementById(id);
	return element;
}

// Reusable function for get Inner Text
function getInnerText(id) {
	const getId = document.getElementById(id).innerText;
	return getId;
}

// Reusable function for getNumbers
function getNumbers(id) {
	const getNumber = parseInt(document.getElementById(id).innerText);
	return getNumber;
}

// click event
// const callBtn = document.getElementsByClassName("call-btn");
// console.log(callBtn);

const heartBtn = document.getElementsByClassName("heart-icon");

for (let btn of heartBtn) {
	btn.addEventListener("click", function () {
		console.log("heart clicked");

		let count = getNumbers("heart-count");

		count = count + 1;

		getId("heart-count").innerText = count;
	});
}

const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns) {
	callBtn.addEventListener("click", function () {
		const cardTitle =
			callBtn.parentNode.parentNode.childNodes[3].childNodes[3].innerText;

		const cardNumber =
			callBtn.parentNode.parentNode.children[2].children[0].innerText;
		// console.log(cardNumber);

		// console.log(cardTitle);

		const cardName =
			callBtn.parentNode.parentNode.children[1].children[0].innerText;

		// console.log(cardName);

		const coinPrice = getNumbers("coin-price");
		const setCoinPrice = coinPrice - 20;
		if (setCoinPrice < 0) {
			alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
			return;
		}

		alert(`calling ${cardTitle} ${cardNumber}....`);
		getId("coin-price").innerText = setCoinPrice;

		const now = new Date();
		const time = now.toLocaleTimeString();

		const historyContainer = getId("history-container");

		const newContainer = document.createElement("div");
		newContainer.innerHTML = `
      
       <div class="bg-[#fafafa] w-[90%] mx-auto rounded-xl p-3 mb-3 flex justify-between items-center">
                            <div>
                            <h1>${cardName}</h1>
                            <p>${cardNumber}</p>
                            </div>
                            <div>${time}</div>
                        </div>
                        
      `;
		historyContainer.append(newContainer);
		// console.log(historyContainer);
	});
}

document.getElementById("clear-btn").addEventListener("click", function () {
	console.log("clear");

	const container = getId("history-container");
	container.innerHTML = "";
});

const now = new Date();
const time = now.toLocaleTimeString();
console.log(time);
