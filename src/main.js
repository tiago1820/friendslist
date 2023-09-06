import { showFriends } from "./functions/showFriends.js";
import { searchFriend } from "./functions/searchFriend.js";
import { deleteFriend } from "./functions/deleteFriend.js";

export const BASE_URL = 'https://rickandmortyapi.com/api';

$('#boton').click(showFriends);
$('#search').click(searchFriend);
$('#delete').click(deleteFriend);
