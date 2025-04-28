var url = "http://localhost:3300/api/users"; // API correcta

function getUsers() {
    console.log(url);

    $.getJSON(url, function(json) {
        console.log(json);

        var arrUsers = json.users;
        var htmlTableUsers = '<table border="1">';
        
        // Encabezado de la tabla
        htmlTableUsers += '<tr>' +
                          '<th>ID</th>' +
                          '<th>Name</th>' +
                          '<th>Email</th>' +
                          '<th>Age</th>' +
                          '<th>Comments</th>' +
                          '</tr>';

        arrUsers.forEach(function(item) {
            console.log(item);
            htmlTableUsers += '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.email + '</td>' +
                '<td>' + item.age + '</td>' +
                '<td>' + item.comments + '</td>' +
                '</tr>';
        });

        htmlTableUsers += '</table>';

        $('#resultado').html(htmlTableUsers);
    });
}

function postUser() {
    var myUser = {
        name: $('#name').val(),
        email: $('#email').val(),
        age: $('#age').val(),
        comments: $('#comments').val()
    };

    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(myUser),
        success: function(response) {
            alert('Usuario creado exitosamente');
            console.log(response);
        },
        error: function(error) {
            alert('Error al crear usuario');
            console.error(error);
        }
    });
}

