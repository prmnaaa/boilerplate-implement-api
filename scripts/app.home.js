import { getTodos, createTodo, updateTodo, deleteTodo } from "./api.js";
import { generateElement, Icon } from "./utils/index.js";

const todoWrapper = document.getElementById("todo_wrapper");

const todoInput = document.getElementById("add_todo");
const todoId = document.getElementById("todo_id");
const submitBtn = document.getElementById("submit_todo");

document.addEventListener("DOMContentLoaded", () => {
	// function untuk mengeksekusi pengambilan data
	async function handleAllTodos() {
		try {
			const todos = await getTodos();
			console.log(todos);
			renderTodos(todos);
		} catch (error) {
			console.log("Error: ", error);
		}
	}
  handleAllTodos();

	// function renderTodos(data) {
	// 	data.forEach((data, index) => {
	// 		const todoCard = generateElement({
	// 			tag: "div",
	// 			className: "flex items-center bg-green-300 w-4/5 px-4 py-2 rounded-md",
	// 		});

	// 		const todoNumber = generateElement({
	// 			tag: "h4",
	// 			className: "w-[10%]",
	// 			innerText: (index + 1).toString(),
	// 		});

	// 		const todoName = generateElement({
	// 			tag: "p",
	// 			className: "w-1/2",
	// 			innerText: data.todo_name,
	// 		});

	// 		const todoStatus = generateElement({
	// 			tag: "p",
	// 			className: "w-[20%]",
	// 			innerText: data.todo_status,
	// 		});

	// 		const todoAction = generateElement({
	// 			tag: "div",
	// 			className: "w-[20%] flex items-center justify-center gap-4",
	// 		});

	// 		const todoEdit = generateElement({
	// 			tag: "button",
	// 			className: "bg-yellow-500 text-white",
	// 			innerHTML: Icon.edit,
	// 			id: "todo_edit",
	// 		});

	// 		todoEdit.addEventListener("click", () => {
	// 			console.log("click edit");
	// 		});

	// 		const todoDelete = generateElement({
	// 			tag: "button",
	// 			className: "bg-red-600 text-white",
	// 			innerHTML: Icon.delete,
	// 			id: "todo_delete",
	// 		});

	// 		todoDelete.addEventListener("click", () => {
	// 			console.log("click delete");
	// 		});

	// 		todoAction.append(...[todoEdit, todoDelete]);
	// 		todoCard.append(...[todoNumber, todoName, todoStatus, todoAction]);

	// 		todoWrapper.append(todoCard);
	// 	});
	// }

	function renderTodos(data) {
		data.forEach((data, index) => {
			const todoCard = generateElement({
				tag: "div",
				className: "flex items-center bg-green-300/50 w-4/5 px-4 py-2 rounded-md"
			});

			const todoCardElement = `
				<h4 class="w-[10%]" id="todo_number">${index + 1}</h4>
				<p class="w-1/2" id="todo_name">${data.todo_name}</p>
				<p class="w-[20%]" id="todo_status">${data.todo_status}</p>

				<div class="w-[20%] flex items-center justify-center gap-4" id="todo_action">
					<button class="bg-yellow-500 text-white" id="todo_edit">
						${Icon.edit}
					</button>
					<button class="bg-red-600 text-white" id="todo_delete">
						${Icon.delete}
					</button>
				</div>
			`

			todoCard.innerHTML = todoCardElement;

			todoCard.querySelector("#todo_edit").addEventListener("click", () => {
				console.log("click edit");
			});

			todoCard.querySelector("#todo_delete").addEventListener("click", () => {
				console.log("click delete");
			});

			todoWrapper.appendChild(todoCard);
		});
	}

	async function handleCreateTodo(payload) {
		try {
			const result = await createTodo({ payload });

			if (result?.code === 200) {
				alert("Data berhasil ditambahkan");
			}

			todoInput.value = "";
			window.location.reload();

		} catch (error) {
			console.log("Error: ", error);
		}
	}

	async function handleUpdateTodo(id, payload) {
		try {
			const result = await updateTodo({ id, payload });

			if (result?.code === 200) {
				alert("Data berhasil diupdate");
			}
			
			todoInput.value = "";
			todoId.value = "";
			window.location.reload();
		} catch (error) {
			console.log("Error: ", error);
		}
	}

	submitBtn.addEventListener("click", (e) => {
		try {
			e.preventDefault();

			const payload = {
				todo_name: todoInput.value,
				todo_status: "Not Completed"
			}

			if (todoId.value === "") {
				handleCreateTodo(payload);
			} else {
				handleUpdateTodo(todoId.value, payload);
			}
		} catch (error) {
			console.log("Error: ", error);
		}
	});
});
