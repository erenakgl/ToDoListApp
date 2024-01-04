$(document).ready(function () {
    $('#todoCreateFrom').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: '/ToDoes/AJAXCreate',
            type: 'POST',
            data: $(this).serialize(),
            success: function (result) {
                if (result.success) {
                    // Redirect to the ToDoes page
                    window.location.replace('/ToDoes/Index');
                } else {
                    // Handle the case where the ToDo creation fails
                    console.error(result.message);
                    // Optionally display an error message to the user
                }
            },
            error: function (xhr, status, error) {
                console.error("Error creating ToDo:", error);
                // Optionally display an error message to the user
            }
        });
    });
});
