import { Task } from "../interfaces/Task";
import Api from "./api";

export const findAll = async () => {
    try {
        const { data } = await Api.get('/');
        return data;
    } catch (error) {
        return error;
    }
}

export const create = async (task: Task) => {
    try {
        const { data } = await Api.post('/tasks/' + task);
        return data;
    } catch (error) {
        return error;
    }
}
