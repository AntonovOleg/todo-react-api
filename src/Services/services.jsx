import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7000/todo",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiModify = async (id, todo, isDone) => {
  await instance
    .put(`id/${id}/modify`, { id, todo, isDone })
    .then((response) => response);
};

export const apiGetAll = async () => {
  return instance.get("/getall").then((response) => response.data);
};

export const apiDelete = async (id) => {
  await instance.delete(`id/${id}/delete`, { id });
};

export const apiCreate = async (text) => {
  await instance.post("create", { todo: text });
};
