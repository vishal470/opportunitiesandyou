const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?w=740&t=st=1692758337~exp=1692758937~hmac=e5a5354ccc84c3909a45f73f086ba1bb9d58de6bf8feba5217338f056ba06902")',
		name: "Neha",
		description:
			"Working with Opportunities And You was a game-changer for our business. Their team's expertise in influencer marketing led to a seamless and successful campaign that brought us increased visibility and customer engagement."
	},

	{
		photo:
			"url('https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1692758426~exp=1692759026~hmac=aac77e3308debf0e2f7cdbf55b36f50d935079efb0105fc7785a661710d2ee66')",
		name: "Abhishek",
		description:
			"ONU's free SEO name options gave our company the competitive edge we needed. Their expertise in influencer marketing turned our ordinary campaign into something extraordinary, and we couldn't be happier with the results!"
	},

	{
		photo:
			"url('https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=740&t=st=1692758497~exp=1692759097~hmac=07e7efc2964653de7331f32f75c069108b7e0d4e45e7a6f2c4a84330d07ebe55')",
		name: "Jyoti",
		description:
			"We were impressed with the personalized attention and care. ONU provided throughout the influencer marketing process. They understood our brand identity and tailored the campaign to perfectly align with our values."
	},

	{
		photo:
			"url('https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1692758578~exp=1692759178~hmac=c4292b6848e59f43cfae55d909b13a5d811a9f16bab67aca07a26aa3eb95e375')",
		name: "Md. Farhan",
		description:
			"Opportunities And You's team demonstrated exceptional professionalism and creativity. Their innovative ideas and ability to execute flawless influencer collaborations made them stand out from other marketing companies."
	},

	{
		photo:
			"url('https://img.freepik.com/premium-photo/3d-rendering-male-character-profile-avatar-happy-young-man-with-bucket-hat-blue-clothes-good_477250-60.jpg?w=740')",
		name: "Nitin Roy",
		description:
			"Our partnership with Opportunities And You exceeded our expectations in every way. Thanks to their expertise, our garment e-commerce company witnessed exponential growth and firmly established its position in the market."
	},

	{
		photo:
			"url('https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1692758426~exp=1692759026~hmac=aac77e3308debf0e2f7cdbf55b36f50d935079efb0105fc7785a661710d2ee66')",
		name: "Arvind",
		description:
			"The results speak for themselves! ONU's influencer marketing campaign delivered an impressive return on investment, proving their expertise in the industry and confirming that they are the go-to company for any e-commerce business."
	},

	{
		photo:
			"url('https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1692758426~exp=1692759026~hmac=aac77e3308debf0e2f7cdbf55b36f50d935079efb0105fc7785a661710d2ee66')",
		name: "Rohit",
		description:
			"Working with Opportunities And You felt like a true collaboration. They listened to our ideas and concerns and integrated them into the campaign seamlessly. Their willingness to adapt and improve continuously was commendable."
	},

	{
		photo:
			"url('https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=740&t=st=1692758536~exp=1692759136~hmac=56d1fdf0dd8dc29e5cd50a51649a22566246dd093eccbe33ffe798b5d5e7fcde')",
		name: "Renuka Rajalakshmi",
		description:
			"Working with Opportunities And You felt like having an extension of our in-house marketing team. They seamlessly integrated with our internal processes and brought fresh ideas to the table, elevating our marketing efforts to new heights."
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
// profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	// setTimeout(() => {
	// 	profession.innerText = people[personNumber].profession;
	// }, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 3) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 3;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
	if (chicken.style.opacity === "0") {
		chicken.style.opacity = "1";
		imgDiv.classList.add("move-head");
		surpriseMeBtn.innerText = "Remove the chicken";
		surpriseMeBtn.classList.remove("surprise-me-btn");
		surpriseMeBtn.classList.add("hide-chicken-btn");
		isChickenVisible = true;
	} else if (chicken.style.opacity === "1") {
		chicken.style.opacity = "0";
		imgDiv.classList.remove("move-head");
		surpriseMeBtn.innerText = "Surprise me";
		surpriseMeBtn.classList.add("surprise-me-btn");
		surpriseMeBtn.classList.remove("hide-chicken-btn");
		isChickenVisible = false;
	}
});

window.addEventListener("resize", () => {
	description.style.height = "100%";
});