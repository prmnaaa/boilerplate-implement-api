const BASE_URL = "https://todolist-api-9hye.vercel.app";

// read data
export async function getTodos() {
	try {
		const response = await fetch(`${BASE_URL}/todos`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.log("Error: ", error);
	}
}

// create data
export async function createTodo({ payload = undefined }) {
	try {
		const response = await fetch(`${BASE_URL}/todos`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.log("Error: ", error);
	}
}

// update data
export async function updateTodo({id = undefined, payload = undefined}) {
	try {
		const response = await fetch(`${BASE_URL}/todos/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.log("Error: ", error);
	}
}

// delete data
export async function deleteTodo({id = undefined}) {
	try {
		const response = await fetch(`${BASE_URL}/todos/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			}
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.log("Error: ", error);
	}
}