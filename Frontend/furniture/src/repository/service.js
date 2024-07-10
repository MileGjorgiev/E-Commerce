import axios from '../axios/axios'

const Service = {
    fetchFurniture: () => {
        return axios.get("/furniture");
    },

    getFurniture: (id) => {
        return axios.get(`/furniture/${id}`);
    }


}


export default Service;
