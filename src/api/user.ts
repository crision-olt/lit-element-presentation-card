import api from "./api"
import { EndpointPaths } from "./endpointPaths";
import formatUser from "./formaters/user";

export const getUsers = async () => {
    const users = await api.getAll(EndpointPaths.USERS, formatUser)
    return users
}

export const getUser = async (id: number) => {
    const user = await api.get(EndpointPaths.USER, formatUser, id)
    return user;
}