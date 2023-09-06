import { BASE_URL } from "../main";

export const showFriends = () => {
    const tableBody = $('#tabla tbody');
    tableBody.empty();

    $.get(`${BASE_URL}/character`, (data) => {
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
}

