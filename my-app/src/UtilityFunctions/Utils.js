import axios from "axios";

// ADMIN and USER utils
// register request
export const userRegisterRequest = (user) => {
  console.log("register data:", user);
  return axios({
    method: "post",
    url: "https://reqres.in/api/users",
    data: {
      email: user.email,
      password: user.password,
      token: Date.now(),
    },
  }).then((res) => res);
};

// User login request - sending token in response
export const userLoginRequest = (user) => {
  return axios({
    method: "get",
    url: "http://localhost:3000/users",
    data: {
      email: user.email,
      password: user.password,
    },
  }).then((res) => {
    for (let i = 0; i <= res.data.length - 1; i++) {
      if (res.data[i].email === user.email) {
        return { token: res.data[i].token };
      }
    }

    return new Error();
  });
};

// Admin login request - sending token in response
export const adminLoginRequest = (user) => {
  return axios({
    method: "get",
    url: "http://localhost:3000/admins",
    data: {
      email: user.email,
      password: user.password,
    },
  }).then((res) => {
    return user.email === res.data.email
      ? { token: res.data.token }
      : new Error();
  });
};

// ADMIN Utils
// get users
export const getUsers = () => {
  return axios.get("http://localhost:3000/users").then((res) => res);
};

// get admins
export const getAdmins = () => {
  return axios.get("http://localhost:3000/admins").then((res) => res);
};

// get gym products
export const getGymProducts = () => {
  return axios.get("http://localhost:3000/products").then((res) => res);
};

// post/add gym product
export const postGymProducts = (data) => {
  // console.log("post:", data);
  return axios({
    method: "post",
    url: "http://localhost:3000/products",
    data: {
      title: data.title,
      img: data.img,
      price: data.price,
      sold: data.sold,
    },
  }).then((res) => {
    // console.log("res:", res);
    return res;
  });
};

// delete gym product
export const deleteGymProducts = (id) => {
  return axios({
    method: "delete",
    url: `http://localhost:3000/products/${id}`,
  }).then((res) => {
    console.log("res:", res);
    return res;
  });
};

// update gym product
export const patchGymProducts = (id, data) => {
  console.log("id:", id, "data:", data);
  return axios({
    method: "patch",
    url: `http://localhost:3000/products/${id}`,
    data: {
      title: data.title,
      img: data.img,
      price: data.price,
    },
  }).then((res) => res);
};