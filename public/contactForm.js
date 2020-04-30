$(document).ready(function() {
    // alert("Hi")
    $("#submit").on("click", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        console.log(name, email, message);

        if (name === "" || email === "" || message === "") {
            console.log("no email, name, or message");
            return false;
        } else {
            console.log("all good");
            var newMessage = {
                name: name,
                email: email,
                message: message

            }
            $.ajax({
                type: "POST",
                url: "email.php",
                data: newMessage,
                success: function(){
                    alert("Submitted successfully")
                }
            });
            // $("$name").reset();
            // $("$email").reset();
            // $("$message").reset();

        };
    });
});
