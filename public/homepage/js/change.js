$(document).ready(function(e) {

    $("#login-txtlg").click(function() {
        var tk = $("#login-taikhoan").val();
        var pass = $("#login-matkhau").val();

        $.ajax({
            url: "/userpage/login",
            type: "POST",
            data: {
                username: tk,
                password: pass,
            },
            success: function(data) {
                if (data.errors) {
                    $('#login-errors').removeClass('hide-div');
                    $('#login-errors').html(data.errors)
                }

            },
            error: function(e) {

            }
        })
    });

    $("#txtlg").click(function() {
        var tk = $("#taikhoan").val();
        var pass = $("#matkhau").val();
        var email = $("#email").val();
        var img = $("#imageUser").val();
        $.ajax({
            url: "/userpage/register",
            type: "POST",
            data: {
                email: email,
                username: tk,
                img: img,
                password: pass
            },
            success: function(data) {
                if (data.errors) {
                    $('#login-errorss').removeClass('hide-div');
                    $('#login-errorss').html(data.errors)
                }
                $("#myModal1").modal('hide');
                $("#myModal").modal('show')
                $('#login-errors').removeClass('hide-div');
                $('#login-errors').html(data.success)
            },
            error: function(e) {
                alert(e);
            }
        })
    });
});