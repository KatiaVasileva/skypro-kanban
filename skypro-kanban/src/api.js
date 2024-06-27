const baseHost = "https://wedev-api.sky.pro/api/kanban";
const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getTasks() {
    const response = await fetch(baseHost, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (response.status === 401) {
        throw new Error("Нет авторизации");
    }

    return response.json();
}