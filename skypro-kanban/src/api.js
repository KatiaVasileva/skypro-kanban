const baseHost = "https://wedev-api.sky.pro/api";

export let token;

export const setToken = (newToken) => {
  token = newToken;
};

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
    throw new Error(
      "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
    );
  }

  return response.json();
}

// Зарегистрироваться
export async function register({ login, name, password }) {
  const response = await fetch(baseHost + "/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error(
      "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
    );
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

  if (response.status === 500) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
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
