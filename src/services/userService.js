import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("api/login", { email, password });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserServices = (data) => {
  console.log("check data services", data);
  return axios.post("api/create-new-user", data);
};

const deleteUserServices = (userId) => {
  return axios.delete("api/delete-user", {
    data: {
      id: userId,
    },
  });
};
const editUserServices = (inputData) => {
  return axios.put("api/edit-user", 
    inputData
  );
};
const getAlllCodeServices = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
}
const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
}
const getAllDoctors = (limit) => {
  return axios.get(`/api/get-all-doctors`);
}
const saveDetailDoctorService = (data) => {
  return axios.post("/api/save-infor-doctors", data);
}
export {
  handleLoginApi,
  getAllUsers,
  createNewUserServices,
  deleteUserServices,
  editUserServices,
  getAlllCodeServices,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctorService
};
