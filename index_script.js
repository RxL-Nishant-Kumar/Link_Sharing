$(document).ready(function () {

    // LOGIN AND REGISTER FORM SWITCHING FUNCTION
    $(function () {

        $('#login-form-link').click(function (e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function (e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

        // CHECK PASSWORD MATHCING
        function checkPasswordMatch() {
            var password = $("#regPassword").val();
            var confirmPassword = $("#regPasswordConfirm").val();
            if (password.length == 0 || confirmPassword.length == 0) {
                $("#CheckPasswordMatch").hide();
            }
            else if (password != confirmPassword) {
                $("#CheckPasswordMatch").show().html("Passwords do not match!").css("color", "red");
            }
            else {
                $("#CheckPasswordMatch").show().html("Passwords match.").css("color", "green");
            }
        }
        $(document).ready(function () {
            $("#regPasswordConfirm").keyup(checkPasswordMatch);
        });

    });

    // DROPDOWN EVENT UPDATION
    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    // FILE SIZE RESTRICTION
    var MAX_FILE_SIZE = 2 * 1024; // 2KB ( * 1024 to be 2MB)

    $(document).ready(function () {

        $("#photoUpload").change(function () {

            var ext = $(this).val().split('.').pop().toLowerCase();
            if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
                this.setCustomValidity("Invalid File Extension!");
                this.reportValidity();
            }
            else {
                fileSize = this.files[0].size;
                if (fileSize > MAX_FILE_SIZE) {
                    this.setCustomValidity("File exceeds 2 KB!");
                    this.reportValidity();
                } else {
                    this.setCustomValidity("");
                }
            }
        });
    });
});