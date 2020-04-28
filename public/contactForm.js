$(document).ready(function() {
    alert("Hi")
    $("#submit").on("click", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var input = $("#inputForm").val();
        console.log(name, email, input);

        if (name === "" || email === "" || input === "") {
            console.log("no email, name, or message");
            return false;
        } else {
            console.log("all good");
            var newMessage = {
                name: name,
                email: email,
                input: input

            }
            $.post("/", newMessage).then(function(){
                window.location.href = "mailto:mdemonaco@gmail.com?" + "subject=" + name + "&body=" + input;
            });
        };
    });
});