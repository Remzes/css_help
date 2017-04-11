/**
 * Created by USALNVI on 12.03.2017.
 */
function openTab(e, tab){
    var i, tabcontent, tablinks;

    $(".tabcontent").css("display", "none");
    $(".tablinks").removeClass("active");

    $("." + tab).css("display", "flex").addClass("active");
}

$("#gen_style, #f_form, #t_form, #b_s, #t_s, #bord, #opac").on("click", function(e){
   openTab(e, $(this).attr("id"));
});