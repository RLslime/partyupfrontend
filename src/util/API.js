import axios from "axios";

export default {
    getAllGames: function() {
        return axios.get("/api/consoles");
    },
    createGame: function(gameData) {
        return axios.post("/api/consoles", gameData);
    }
}