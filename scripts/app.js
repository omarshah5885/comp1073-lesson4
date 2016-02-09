"use strict";

//iify or immediately invoked function expression or an anonymous function= a function within a function
(function () {
	/*inside curly braces is the code block
	when called upon, this gets ran
	*/
	/* console.log("App Started...");
	
	//declare a named function way
	function replaceFirstParagraph () {

		console.log("inside named function called");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");
		
		firstParagraph.innerHTML = "My new paragraph on JS";

	} */
	//declare an anonymous function with a named variable alias
	var replaceFirstParagraph = function () {
		console.log("inside anonymous function called");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My new paragraph on JS";

	};
	//calling function
	replaceFirstParagraph();

})();
