export function inputHandler(value, defaultValue) {
    return value.trim() === "" ? defaultValue : value;
}