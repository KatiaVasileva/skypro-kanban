const baseHost = "https://wedev-api.sky.pro/api";
const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

// Авторизоваться
export async function login({ login, password }) {
  const response = await fetch(baseHost + "/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Неправильный логин или пароль");
  }

  return response.json();
}

// Получить список задач
export async function getTasks() {
  const response = await fetch(baseHost + "/kanban", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    throw new Error("Нет авторизации");
  }

  return response.json();
}

// Добавить задачу в список
export async function addTask({ title, topic, status, description, date }) {
  const response = await fetch(baseHost + "/kanban", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (response.status === 400) {
    throw new Error("Введены неправильные данные");
  }
  if (response.status === 401) {
    throw new Error("Нет авторизации");
  }

  return response.json();
}

// Удалить задачу
export async function deleteTask(taskId) {
  const response = await fetch(baseHost + "/kanban/" + taskId, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    throw new Error("Нет авторизации");
  }
  return response.json();
}
