import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function useUserContext() {
    const user = useContext(UserContext);

    // if (!user) {
    //     throw new Error("Пользователь не найден");
    // }

    return user;
}