$(document).ready(function () {
    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    $("#shareThisTopic").text($("#currentTopicName").text())
    $("#deleteThisTopic").text($("#currentTopicName").text())


    // $("#editCardButton").click(function (e) {
    //     $("#newTopicName").attr('placeholder', $("#currentTopicName").text())
    //     $("#currentTopicName").hide();
    //     $("#newTopicName").show();
    //     $("editCardFooter").

    // });


}); 
