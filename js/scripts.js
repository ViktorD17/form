// Select style

$(document).ready(function () {
	$('select').select2({
		minimumResultsForSearch: -1
	});
});


// Shipping method

let radioBlock = document.querySelectorAll('.shipping-method__item')
let radio = document.querySelectorAll('.shipping-method__item input')

for (let i = 0; i < radioBlock.length; i++) {
	radioBlock[i].addEventListener('click', function () {
		for (let i = 0; i < radioBlock.length; i++) {
			radioBlock[i].classList.remove('active')
			radio[i].checked = false
		}

		radioBlock[i].classList.add('active')
		radio[i].checked = true
	})
}


// Phone mask

document.addEventListener("DOMContentLoaded", function () {

	var eventCalllback = function (e) {

		var el = e.target,
				clearVal = el.dataset.phoneClear,
				pattern = el.dataset.phonePattern,
				matrix_def = "+38(___) ___-__-__",
				matrix = pattern ? pattern : matrix_def,
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = e.target.value.replace(/\D/g, "");

		if (clearVal !== 'false' && e.type === 'blur') {
			if (val.length < matrix.match(/([\_\d])/g).length) {
				e.target.value = '';
				return;
			}
		}
		if (def.length >= val.length) val = def;
		e.target.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
		});
	}

	var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
	for (let elem of phone_inputs) {
		for (let ev of ['input', 'blur', 'focus']) {
			elem.addEventListener(ev, eventCalllback);
		}
	}
});


// Change steps

const tabs = document.querySelectorAll('.steps__item')

const btnNext = document.querySelector('.form__btn')
const btnPrev = document.querySelector('.form__step2')
const phone = document.querySelector('.phone-field')
const phoneMinLength = 18
const firstName = document.querySelector('.first-name')
const firstNameMinLength = 3

const step1 = document.querySelector('.customer')
const step2 = document.querySelector('.shipping')

function keyup(name, num) {
	name.addEventListener('keyup', function () {
		if (this.value.length < num) {
			this.classList.add('error')
			this.parentElement.classList.add('error')
		} else {
			this.classList.remove('error')
			this.parentElement.classList.remove('error')
		}
	})
}
keyup(firstName, firstNameMinLength)
keyup(phone, phoneMinLength)

document.addEventListener('keyup', function () {
	if (firstName.value.length >= firstNameMinLength && phone.value.length === phoneMinLength) {
		btnNext.classList.remove('disabled')
	} else {
		btnNext.classList.add('disabled')
	}
})

btnNext.addEventListener('click', function(e) {
	e.preventDefault()
	clearActiveClasses()
	tabs[1].classList.add('active')
	step1.style.display = 'none'
	step2.style.display = 'block'
})

btnPrev.addEventListener('click', function(e) {
	e.preventDefault()
	clearActiveClasses()
	tabs[0].classList.add('active')
	step2.style.display = 'none'
	step1.style.display = 'block'
})

function clearActiveClasses() {
  tabs.forEach((tab) => {
    tab.classList.remove('active')
  })
}