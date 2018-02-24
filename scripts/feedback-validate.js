(function() {
    var feedBackForm = document.querySelector('.feedback-form');
    var inputName = document.querySelector('.feedback-form__input_name');
    var inputPhone = document.querySelector('.feedback-form__input_phone');
    var formButton = document.querySelector('.feedback-form__button');

    var errorInput = document.querySelector('.feedback-form__error');
    var notifivationInput = document.querySelector('.feedback-form__notification');

    var filterName = /^([a-zA-ZА-яЁё0-9 \-])+$/;

    var formData = {};

    feedBackForm.addEventListener('keydown', function(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });
    inputName.addEventListener("keydown", showPhoneInput, false);
    inputPhone.addEventListener("keydown", showButtonForm, false);
    formButton.addEventListener("click", sendData, false);


    function showPhoneInput(e) {
        if (e.keyCode) {
            inputPhone.style.visibility = "visible";
        }
    }
    function showButtonForm(e) {
        if (e.keyCode) {
            formButton.style.visibility = "visible";
        }
    }

    // function sendData() {
    //     formData.name = inputName.value;
    //     formData.phone = inputPhone.value;
    //     if (checkValidate()) {
    //         // feedBackForm.submit();
    //     }
    // }

    function sendData() {
        formData.name = inputName.value;
        formData.phone = inputPhone.value;
        if (checkValidate()) {
            $.ajax({
                url: "/ajax/callback.php",
                data: {
                    name: formData.name,
                    phone: formData.phone,
                },
                method: 'post',
                dataType: 'json',
                success: function (data) {
                    if(data.status == "ok"){
                        $(".feedback-form__notification").html(data.response_text);
                    } else {
                        alert(data.status);
                    }
                }
            });
        }
    }

    function checkValidate() {
        if (formData.name === "") {
            feedBackForm.onsubmit = function() {return false};
            showError('Введите имя');
            return false
        } else if (!filterName.test(formData.name)) {
            feedBackForm.onsubmit = function() {return false};
            showError('Введите имя корректно');
            return false
        } else if (!$(".feedback-form__input_phone").inputmask("isComplete")) {
            feedBackForm.onsubmit = function() {return false};
            showError('Введите номер телефона');
        } else {
            showNotifivation();
            return true
        }
    }

    function showError(text) {
        errorInput.innerHTML = text;
        errorInput.style.visibility = "visible";
    }
    function showNotifivation() {
        notifivationInput.style.visibility = "visible";
        errorInput.style.visibility = "hidden";
    }

    $('.feedback-form__input_phone').inputmask("+7 (999) 999-99-99");


}());


