function startWithU(targ) {
	if ((targ.startsWith("u", 0) || targ.startsWith("U", 0)) == true) {
		return true;
	}
	else return false;

};

function startWithC(targ) {
	if ((targ.startsWith("c", 0) || targ.startsWith("C", 0)) == true) {
		return true;
	}
	else return false;

};

function validateform(form) {
	var temp = document.getElementById("user_id").value;
	if (temp.length < 8) {
		document.getElementById("user_val").innerHTML = "Error : Enter 8 character User ID.";
		document.getElementById("SignUP_form").reset();
		return false;

	}
	var sU = startWithU(temp);
	var sC = startWithC(temp);
	if ((sU || sC) == false) {
		document.getElementById("user_val").innerHTML = "Error : User ID must start with U or C.";
		document.getElementById("SignUP_form").reset();
		return false;
	}

};

document.addEventListener("DOMContentLoaded", function () {
	if (!RegExp.escape) {
		RegExp.escape = function (s) {
			return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
		};
	}


	var checkPassword = function (str) {
		var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
		return re.test(str);
	};

	var supports_input_validity = function () {
		var i = document.createElement("input");
		return "setCustomValidity" in i;
	}
	if (supports_input_validity()) {


		var pwd1Input = document.getElementById("myPwd1");
		pwd1Input.setCustomValidity(pwd1Input.title);

		var pwd2Input = document.getElementById("myPwd2");

		pwd1Input.addEventListener("keyup", function (e) {
			this.setCustomValidity(this.validity.patternMismatch ? pwd1Input.title : "");
			if (this.checkValidity()) {
				pwd2Input.pattern = RegExp.escape(this.value);
				pwd2Input.setCustomValidity(pwd2Input.title);
			} else {
				pwd2Input.pattern = this.pattern;
				pwd2Input.setCustomValidity("");
			}
		}, false);

		pwd2Input.addEventListener("keyup", function (e) {
			this.setCustomValidity(this.validity.patternMismatch ? pwd2Input.title : "");
		}, false);

	}

}, false);


