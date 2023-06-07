import axios from "axios";

const VICTIM_API_BASE_URL = "http://localhost:8080/Victim/saveVictimDetails"

class VictimService{
    saveVictim(victim){
        return axios.post(VICTIM_API_BASE_URL, victim)
    }



}

export default new VictimService();