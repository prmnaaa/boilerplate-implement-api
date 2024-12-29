import { getTodos } from "./api.js";
import { generateElement } from "./utils/index.js";

const todoWrapper = document.getElementById("todo_wrapper");

document.addEventListener("DOMContentLoaded", () => {
	// function untuk mengeksekusi pengambilan data
	async function handleAllTodos() {
		try {
			const todos = await getTodos();
			console.log(todos);
		} catch (error) {
			console.log("Error: ", error);
		}
	}
  handleAllTodos();
});
