import { User } from "../../types/user"

export default (user: any, id?: number) => {
    const result: User = {
        id: user.id ?? id ?? 0,
        name: `${user.first_name} ${user.last_name}`,
        photo: user.avatar,
        skills: "Me gusta compartir lo que se y encontrar nuevas/mejores formas de hacer las cosas.",
        hobbies: user.hobbies,
        stack: "React",
        age: 24,
        occupation: user.employment.title,
    }
    return result;
}