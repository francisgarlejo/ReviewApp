/*
    FGfacade.js
    FGReviewA2

    Revision History
    Francis Gerald H. Garlejo
        2022.11.10: Created,
        2022.12.10: Revised,
        2022.13.10: Revised,
        2022.15.10: Finalized
*/


function addValidation() {
    if (doValidate_fromAdd()) {
        console.info("Add Form is valid");
    }
    else {
        console.info("Add Form is invalid");
    }
}

function modValidation() {
    if (doValidate_fromMod()) {
        console.info("Modify Form is valid");
    }
    else {
        console.info("Modify Form is invalid");
    }
}

function rating_click() {
    if ($('#chkRating').is(":checked")) {
        $("#ratingDiv").show();
        $("#foodQualityRating").val(0);
        $("#serviceRating").val(0);
        $("#valueRating").val(0);
    } else {
        $("#ratingDiv").hide();
    }
}

function rating_click_mod() {
    if ($('#chkRatingMod').is(":checked")) {
        $("#ratingDivMod").show();
        $("#foodQualityRatingMod").val(0);
        $("#serviceRatingMod").val(0);
        $("#valueRatingMod").val(0);
    } else {
        $("#ratingDivMod").hide();
    }
}

function calcOverallRating() {
    let foodVal = Number($("#foodQualityRating").val());
    let serviceVal = Number($("#serviceRating").val());
    let valueVal = Number($("#valueRating").val());
    let overallRating = ((foodVal + serviceVal + valueVal) * 100) / 15;

    $("#overallRating").val(Math.round(overallRating) + "%");
}

function calcOverallRatingMod() {

    let foodVal = Number($("#foodQualityRatingMod").val());
    let serviceVal = Number($("#serviceRatingMod").val());
    let valueVal = Number($("#valueRatingMod").val());
    let overallRating = ((foodVal + serviceVal + valueVal) * 100) / 15;

    $("#sldOverallRatingMod").val(Math.round(overallRating)).trigger('change');
}