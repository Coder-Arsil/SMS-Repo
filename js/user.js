$(document).ready(function() {
    var add = localStorage.getItem("n1");
    $("#add").html(add);
    if (sessionStorage.getItem("active_user") == null) {
        location.href = "not.html";
    }
    $("#logout").click(function() {
        sessionStorage.clear()
        location.href = "index.html ";
    });
    $("#user-submit").click(function(e) {
        var name = $("#name").val();
        var no = $("#number").val();
        var dob = $("#db").val();
        var country = $("#country").val();
        var gen = $("#r1").val();
        var data = {
            "name": name,
            "no": no,
            "dob": dob,
            "country": country,
            "gen": "Male"
        }
        localStorage.setItem("data", JSON.stringify(data));
    })
    var all_data = localStorage.getItem("data");
    var afterParse = JSON.parse(all_data);
    $("#o_name").html(afterParse.name);
    $("#o_no").html(afterParse.no);
    $("#o_dob").html(afterParse.dob);
    $("#o_cnt").html(afterParse.country);
    $("#o_gen").html(afterParse.gen);

    $("#delete-user").click(function() {
        localStorage.removeItem("data");
        location.href = location.href;
    })
    $("#edit-user").click(function() {
        $("#name").val(afterParse.name);
        $("#number").val(afterParse.no);
        $("#db").val(afterParse.dob);
        $("#country").val(afterParse.country);
        $("#r1").val(afterParse.gen);

    })
    $("#rc").click(function() {
        $("#my-form").addClass("d-none");
        $("#op").removeClass("d-none");
    })
})