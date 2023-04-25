import formater from "./formater";

const getAll = async <T>(path: string, formatToEntity: (object: any) => T) => {
    const response = await fetch(path);
    const data = await response.json();
    return formater(data, formatToEntity);
}
const get = async <T>(path: string, formatToEntity: (object: any, id?: number) => T, id: number) => {
    const response = await fetch(path.replace("{id}", id.toString()));
    const data = await response.json();
    return formatToEntity(data, id);
}
export default { getAll, get };