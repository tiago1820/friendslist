import { BASE_URL } from "../main";

export const searchFriend = () => {
    const id = $('#input').val();
    $.get(`${BASE_URL}/character/${id}`, (data) => {
        $('#amigo').text(data.name);
    })
}