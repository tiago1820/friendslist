export const deleteFriend = () => {
    const id = $('#inputDelete').val();
    $(`#${id}`).remove();
    $('#success').text(`Friend with id ${id} deleted successfully.`);

}