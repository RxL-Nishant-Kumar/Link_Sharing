$(document).ready(function () {

    function checkPasswordMatch() {
        var password = $("#updatePassword").val();
        var confirmPassword = $("#updatePasswordConfirm").val();
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
        $("#updatePasswordConfirm").keyup(checkPasswordMatch);
    });

    $("#editTopicName").click(function () {
        $("#noEditTopic").removeClass("active");
        $("#noEditTopic").css('display', 'none');
        $("#editTopicForm").addClass("active");
        $("#editTopicForm").css('display', 'block');
    });

    $("#cancelEditTopic").click(function () {
        $("#noEditTopic").addClass("active");
        $("#noEditTopic").css('display', 'block');
        $("#editTopicForm").removeClass("active");
        $("#editTopicForm").css('display', 'none');
    }); 

    $('#modifyTopicName').click(function () {
        $("#currentTopicName").text($("#newTopicName").val())
    });

});