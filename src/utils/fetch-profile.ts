import {apiUsersURL} from "../configs/constants.ts";

export async function fetchProfile(token: string) {
    const response = await fetch(`${apiUsersURL}/getInfo`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Не удалось получить данные профиля");
    }

    return await response.json();
}
