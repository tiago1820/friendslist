
const baseUrl = 'https://rickandmortyapi.com/api';

$('#boton').click(() => {
    const tableBody = $('#tabla tbody');
    tableBody.empty();

    $.get(`${baseUrl}/character`, (data) => {
        console.log(data.results);
        data.results.forEach(amigo => {
            tableBody.append(`
                <tr id="${amigo.id}">
                    <td>${amigo.id}</td>
                    <td>${amigo.name}</td>
                    <td>${amigo.status}</td>
                    <td>${amigo.species}</td>
                    <td><img class="thumbnail" src="${amigo.image}" alt="${amigo.name}"></td>
                </tr>
            `);
        });
    });
});


$('#search').click(() => {
    const id = $('#input').val();
    $.get(`${baseUrl}/character/${id}`, (data) => {
        $('#amigo').text(data.name);
    })
})

$('#delete').click(() => {
    const id = $('#inputDelete').val();
    $(`#${id}`).remove();
    $('#success').text(`Friend with id ${id} deleted successfully.`);

}); 