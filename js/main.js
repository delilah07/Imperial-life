$(function(){

    // inputs in the table
    $('.table-calculate__input').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
           return false;
        }
     });

     /*Smooth Scroll*/
	$("[data-scroll]").on("click", function(event) {
		event. preventDefault();

		let $this = $(this),
			blockID = $(this).data('scroll'),
			blockOffset = $(blockID).offset().top - 80;

		$("html, body").animate({
			scrollTop:blockOffset
		}, 500);
    });
    
    // Calculation Section
    let turnoverValue = 300000;
    let marginProcentValue = 25;
    let marginProcentPlus = 5;
    let leasingValue = 7917;

    let turnoverAfter = (turnoverValue * 0.3 + turnoverValue);
    $('.turnover__after').html(turnoverAfter.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));
    let turnoverPlus = turnoverAfter - turnoverValue;
    $('.turnover__plus').html(turnoverPlus.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));
    let marginProcentAfter = marginProcentPlus + marginProcentValue;
    $('.margin-pr__after').html(marginProcentAfter + " %");

    let marginUahValue = turnoverValue * marginProcentValue/100;
    $('.margin-uah').html(marginUahValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));

    let marginUahAfter = turnoverAfter * 30/100;
    $('.margin-uah__after').html(marginUahAfter.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));

    let marginUahPlus = marginUahAfter - marginUahValue ;
    $('.margin-uah__plus').html(marginUahPlus.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));

    let commissionValue =  marginUahPlus * 0.3;
    $('.commission').html(commissionValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));

    let advertisementValue =  marginUahPlus * 0.02;
    $('.advertisement').html(advertisementValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));

    let incomeValue =  marginUahAfter - (commissionValue + advertisementValue + leasingValue);
    $('.income').html(incomeValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ' грн');
    //-------------
    $(".table-calculate__input.turnover").change(function(){
        let turnoverValue = parseInt($('.turnover').val());
        turnoverValue = turnoverValue ? turnoverValue : 300000;

        let turnoverAfter = (turnoverValue * 0.3 + turnoverValue);
        $('.turnover__after').html(turnoverAfter.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));
        let turnoverPlus = turnoverAfter - turnoverValue;
        $('.turnover__plus').html(turnoverPlus.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));

        let marginUahValue = turnoverValue * marginProcentValue/100;
        $('.margin-uah').html(marginUahValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));

        let marginUahAfter = turnoverAfter * 30/100;
        $('.margin-uah__after').html(marginUahAfter.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));

        let marginUahPlus = marginUahAfter - marginUahValue ;
        $('.margin-uah__plus').html(marginUahPlus.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));

        let commissionValue =  marginUahPlus * 0.3;
        $('.commission').html(commissionValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));

        let advertisementValue =  marginUahPlus * 0.02;
        $('.advertisement').html(advertisementValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));

        let incomeValue =  marginUahAfter - (commissionValue + advertisementValue + leasingValue);
        $('.income').html(incomeValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + ' грн');

        $(".margin-pr").change(function(){  
            let marginProcentValue = parseInt($('.margin-pr').val()); 

            if (marginProcentValue != marginProcentValue || marginProcentValue > 25){
                marginProcentValue = 25;
            }

            $(this).val(function(index, old) { return marginProcentValue + ' %'; });

            let marginProcentAfter = marginProcentPlus + marginProcentValue;
            $('.margin-pr__after').html(marginProcentAfter + " %");
    
            let marginUahValue = turnoverValue * marginProcentValue/100;
            $('.margin-uah').html(marginUahValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));
    
            let marginUahAfter = turnoverAfter * 30/100;
            $('.margin-uah__after').html(marginUahAfter.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));
    
            let marginUahPlus = marginUahAfter - marginUahValue ;
            $('.margin-uah__plus').html(marginUahPlus.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));
    
            let commissionValue =  marginUahPlus * 0.3;
            $('.commission').html(commissionValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));
    
            let advertisementValue =  marginUahPlus * 0.02;
            $('.advertisement').html(advertisementValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));
    
            let incomeValue =  marginUahAfter - (commissionValue + advertisementValue + leasingValue);
            $('.income').html(incomeValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + ' грн');
        });
    });
    

    // Form Section Animation
                    
    let positionStart = $('#form__section').offset().top - 150;
    let positionEnd = $('#form__section').height() + positionStart;
    console.log(positionStart)
    console.log(positionEnd)
    console.log($(window).scrollTop())

    $(window).scroll(function (event) {
        ($(window).scrollTop() > positionStart )?
            $('#form__section').addClass('animate'):
            $('#form__section').removeClass('animate');
        });


    // Close pop-up
    $('.pop-up__close').click(function(){
        $('.pop-up__gratitude').css('display', 'none');
    })
});



// mask for phone input

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.form__tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+38 (0__) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
    
    });

});