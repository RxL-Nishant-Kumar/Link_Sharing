$(document).ready(function () {
    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    $("#shareThisTopic").text($("#currentTopicName").text())
    $("#deleteThisTopic").text($("#currentTopicName").text())


    $("#editCardButton").click(function () {
        $("#noEditTopic").removeClass("active");
        $("#noEditTopic").css('display', 'none');
        $(".editTopic").addClass("active");
        $(".editTopic").css('display', 'block');
    });

    $("#cancelEditTopic").click(function () {
        $("#noEditTopic").addClass("active");
        $("#noEditTopic").css('display', 'block');
        $(".editTopic").removeClass("active");
        $("#newTopicName").val("");
        $(".editTopic").css('display', 'none');
    });


}); 
