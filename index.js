const submitBtn = document.querySelector("#submitBtn");
const code = document.querySelector("#componentCode");

window.addEventListener("copy", function (e) {
	const data = JSON.parse(document.getElementById("componentCode").value);
	e.clipboardData &&
		e.clipboardData.setData("application/json", JSON.stringify(data));
	e.preventDefault();
	console.log("Copied suuccesfully...");
});

submitBtn.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("Copied..........");
	document.execCommand("copy");
});
// submitBtn.onClick = function (e) {
// 	e.preventDefault();
// 	console.log("Copied..........");
// 	// document.execCommand("copy");
// };
