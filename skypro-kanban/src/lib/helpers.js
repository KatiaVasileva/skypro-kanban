export function inputHandler(value, defaultValue) {
    return value.trim() === "" ? defaultValue : value;
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

export function sanitize(text) {
    return text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}