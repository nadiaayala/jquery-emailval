$(function () {



    var $submitBtn = $('#submitBtn');
    var $email = $('#email');
    var $phone = $('#phone');
    var $password = $('#password');
    var $passwordConfirm = $('#passwordConfirm');
    var $errorMessage = $('#errorMessage');
    var $successMessage = $('#sucessMessage');

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    function getEmptyFields() {
        var fields = $('.form-input');
        var emptyFields = 'The following fields must be filled: ';
        // $(fields).each(function(index){
        //     console.log(index.name);
        //     if ($(this).val() == ''){
        //         emptyFields += $(this.name);
        //     }
        // }); 
        if ($email.val() == '') {
            emptyFields += 'Email ';
        }
        if ($phone.val() == '') {
            emptyFields += 'Phone ';
        }
        if ($password.val() == '') {
            emptyFields += 'Password ';
        }
        if ($passwordConfirm.val() == '') {
            emptyFields += 'Password confirmation';
        }
        return emptyFields;
    }

    $($submitBtn).on('click', function (e) {
        e.preventDefault();
        var emptyFields = getEmptyFields();
        $errorMessage.html(emptyFields);
        var errorMsg = '';
        if (!isEmail($($email).val())) {
            errorMsg += 'Your email is not valid. ';
        }
        if (!$.isNumeric($($phone).val())) {
            errorMsg += 'Your phone must have only numbers. ';
        }
        if ($($password).val() == '') {
            errorMsg += "Password field can't be empty! ";
        }
        else {
            if ($($password).val() !== $($passwordConfirm).val()) {
                errorMsg += 'Password confirmation must match with the password. ';
            }
        };
        // console.log(errorMsg);
        $errorMessage.val(errorMsg);
        // $errorMessage.show();
    });

})