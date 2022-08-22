$(document).ready(function () {

    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    $("#modalTopic1").text($("#thisTopicName").text())
    $("#modalTopic2").text($("#thisTopicName").text())
    $("#modalTopic3").text($("#thisTopicName").text())

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