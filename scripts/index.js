const baseUrl = 'https://jsonplaceholder.typicode.com';

$('#boton').click(() => {
    const list = $('#lista');
    list.empty();

    $.get(`${baseUrl}/users`, (data) => {
        data.forEach(amigo => {
            list.append(`<li id=${amigo.id}>${`${amigo.id} - ${amigo.name}`}</li>`);
        });
    })
})

$('#search').click(() => {
    let id = $('#input').val();
    $.get(`${baseUrl}/users/${id}`, (data) => {
        $('#amigo').text(data.name);
    })
})

$('#delete').click(() => {
    let id = $('#inputDelete').val();
    $(`#${id}`).remove();
    $('#success').text(`Friend with id ${id} deleted successfully.`);

    // $.ajax({
    //     type: 'delete',
    //     url: `${baseUrl}/users/${id}`,
    //     success: (data) => {
    //         $('#success').text(`Friend with id ${id} deleted successfully.`);
    //         $('#boton').click();

    //     }
    // })
}); 