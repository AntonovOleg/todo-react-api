import axios from "axios";

export const axios_put = async (id, todo, isDone, getAll) => {
  try {
    await axios
      .put(`todo/id/${id}/modify`, { id, todo, isDone })
      .then((response) => {
        getAll();
      });
  } catch {
    console.log("Ошибка в services axios_put");
  }
};

export const axios_get_all = async (adress, data, setTodos) => {
  axios
    .get("/todo/getall", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      setTodos(response.data);
    });
};

export const axios_delete = async (id, getAll) => {
  await axios
    .delete(
      `todo/id/${id}/delete`,
      { id },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then(() => {});
  getAll();
};

export const axios_create = async (text, todos, setText, setTodos) => {
  await axios
    .post(
      "todo/create",
      { todo: text },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      setTodos([...todos, response.data]);
      setText("");
    });
};
