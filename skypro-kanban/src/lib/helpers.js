export function inputHandler(value, defaultValue) {
    return value === "" ? defaultValue : value;
}

export function saveUserToLocalStorage(user) {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage() {
    try {
        return JSON.parse(window.localStorage.getItem("user"));
    } catch (error) {
        return error.message;
    }
}

export function removeUserFromLocalStorage() {
    window.localStorage.removeItem("user");
}

export function savesTasksToLocalStorage(tasks) {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTasksFromLocalStorage() {
    try {
        return JSON.parse(window.localStorage.getItem("tasks"));
    } catch (error) {
        return error.message;
    }
}

export function removeTasksFromLocalStorage() {
    window.localStorage.removeItem("tasks");
}