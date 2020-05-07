(function ($) {
    $('#deniro').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "Year" },
            { "data": "Score" },
            { "data": "Title" }

        ]
    } );

})(jQuery);