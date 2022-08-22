$(document).ready(function () {
    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    $("#shareThisTopic").text($("#currentTopicName").text())
    $("#deleteThisTopic").text($("#currentTopicName").text())


    $("#editCardButton").click(function () {
        $("#noEditCard").removeClass("active");
        $("#noEditCard").css('display', 'none');
        $("#editCardForm").addClass("active");
        $("#editCardForm").css('display', 'block');
    });

    $("#cancelEditCard").click(function () {
        $("#noEditCard").addClass("active");
        $("#noEditCard").css('display', 'block');
        $("#editCardForm").removeClass("active");
        $("#editCardForm").css('display', 'none');
    }); 


}); 
