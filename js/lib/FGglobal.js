/*
    FGglobal.js
    FGReviewA2

    Revision History
    Francis Gerald H. Garlejo
        2022.11.10: Created,
        2022.12.10: Revised,
        2022.13.10: Revised,
        2022.15.10: Finalized
*/



$(document).ready(function () {
    init();
});

function btnAddBusiness_click(){
    addValidation();
}

function btnModBusiness_click(){
    modValidation();
}

function init() {
    $("#chkRating").on("click", rating_click);
    $("#ratingDiv").on("change", calcOverallRating);
    $("#chkRatingMod").on("click", rating_click_mod);
    $("#ratingDivMod").on("change", calcOverallRatingMod);
    $("#btnSaveAdd").on("click", btnAddBusiness_click);
    $("#btnUpdateMod").on("click", btnModBusiness_click);
}