/*
    FGutil.js
    FGReviewA2

    Revision History
    Francis Gerald H. Garlejo
        2022.11.10: Created,
        2022.12.10: Revised,
        2022.13.10: Revised,
        2022.15.10: Finalized
*/


function doValidate_fromAdd(){
    let formAdd = $("#frmAdd");
    formAdd.validate({
        rules:{
            nameAdd:{
                required: true,
                rangelength: [2,20]
            },
            businessAdd:{
                required: true,
                rangelength: [2,5]
            },
            emailAdd:{
                required: true,
                emailcheck: true
            },
            foodQualityRating:{
                required: true,
                min: 0,
                max: 5
            },
            serviceRating:{
                required: true,
                min: 0,
                max: 5
            },
            valueRating:{
                required: true,
                min: 0,
                max: 5
            }
        },

        messages:{
            nameAdd:{
                required: "Please enter restaurant name",
                rangelength: "Length must be 2 to 20 characters long"
            },
            businessAdd:{
                required: "Please enter business id",
                rangelength: "Length must be 2 to 5 characters long"
            },
            emailAdd:{
                required: "You must enter an email",
                emailcheck: "Email address must be valid"
            },
            foodQualityRating:{
                required: "You must enter a quality rating",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            serviceRating:{
                required: "You must enter a service rating",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            valueRating:{
                required: "You must enter value rating",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            }
        }
    });
    return formAdd.valid();
}

function doValidate_fromMod(){
    let formMod = $("#frmModifyReview");
    formMod.validate({
        rules:{
            nameMod:{
                required: true,
                rangelength: [2,20]
            },
            businessMod:{
                required: true,
                rangelength: [2,5]
            },
            emailMod:{
                required: true,
                emailcheck: true
            },
            foodQualityRatingMod:{
                required: true,
                min: 0,
                max: 5,
            },
            serviceRatingMod:{
                required: true,
                min: 0,
                max: 5,
            },
            valueRatingMod:{
                required: true,
                min: 0,
                max: 5,
            }
        },

        messages:{
            nameMod:{
                required: "Please enter restaurant name",
                rangelength: "Length must be 2 to 20 characters long"
            },
            businessMod:{
                required: "Please enter business id",
                rangelength: "Length must be 2 to 5 characters long"
            },
            emailMod:{
                required: "You must enter an email",
                emailcheck: "Email address must be valid"
            },
            foodQualityRatingMod:{
                required: "You must enter a quality rating",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            serviceRatingMod:{
                required: "You must enter a service rating",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            valueRatingMod:{
                required: "You must enter value rating",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            }
        }
    });
    return formMod.valid();
}

jQuery.validator.addMethod("emailcheck",
    function(value, element){
        let regexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/;
        return this.optional(element) || regexp.test(value);
    });


