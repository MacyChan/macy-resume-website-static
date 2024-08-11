/*
$('#myContact').hide();


$( "#btnReviewMyContact" ).on( "click", function(){

        var varPassword = prompt("Please enter your password", "");

        $.ajax({
                    url: 'getMyContact.php',
                    type: 'GET',
                    data: { password: varPassword },
                    success: function(msg) {
                        if(msg == 'Incorrect Password')
                            {
                                alert("Incorrect Password")
                            }
                        else{
                            $('#btnReviewMyContact').hide();
                            $( '#myContact ul' ).append( msg );
                            }
                    },
                    error: function(msg){
                                alert("msg")
                                alert("Incorrect Password");
                                 }
                });


        $('#myContact').show();
    });
*/

$('#formContactMe').submit(function () {
    event.preventDefault();

    $("#btnContactMeSendMessage").html('Sending...')

    var $form = $(this),
        varName = $form.find("input[name='name']").val();
    varEmail = $form.find("input[name='email']").val();
    varPhone = $form.find("input[name='phone']").val();
    varMessage = $('textarea#message').val();

    $.ajax({
        url: '/db/contactMe',
        type: 'POST',
        data: JSON.stringify({
            name: varName,
            email: varEmail,
            phone: varPhone,
            message: varMessage,
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            alert("Contact information submitted successfully!");
            $("#btnContactMeSendMessage").html('Send Message');
            $('#formContactMe').each(function () {
                this.reset();
            });
        },
        error: function (msg) {
            console.log(msg);
            $("#btnContactMeSendMessage").html('Send Message');
            $('#formContactMe').each(function () {
                this.reset();
            });
        }
    });
});

function openMusicAndMood() {

    var windowReference = window.open();
    windowReference.location = '/MusicAndMood.html';
    //window.location.href = '/MusicAndMood.html';
    /*
    $.ajax({
    type:'GET',
    url:'/loginMusicAndMood',
    success:function(MusicAndMoodUrl) {
                    console.log("Return success loginMusicAndMood");
                    windowReference.location = MusicAndMoodUrl;
         },
    error: function(xhr, status, error){
        console.log("Return error");
        console.log(xhr);
        console.log(JSON.parse(xhr.responseText).message);
         }
    });
    */
}


function openMMNotebook() {

    var windowReference = window.open();
    windowReference.location = 'https://macychan.github.io/spotify-user-behaviour-predictor/';
}

function openPyLyrics2() {

    var windowReference = window.open();
    windowReference.location = 'https://github.com/UBC-MDS/pylyrics';
}

//FAB
$(document).ready(function () {
    var links = [
        {
            "bgcolor": "#BAC964",
            "icon": "<i class='icon-github'></i>",
            "title": "Links"
        },
        {
            "url": "https://github.com/MacyChan",
            "bgcolor": "#BAC964",
            "color": "#ffffff",
            "icon": "<i class='icon-github'></i>",
            "target": "_blank",
            "title": "My Github"
        },
        {
            "url": "https://hk.linkedin.com/public-profile/in/macy-chan-1204",
            "bgcolor": "#28A745",
            "color": "#ffffff",
            "icon": "<i class='icon-linkedin2'></i>",
            "target": "_blank",
            "title": "My LinkedIn"
        }
    ]

    $('.kc_fab_wrapper').kc_fab(links);
});

