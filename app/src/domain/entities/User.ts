export default interface User {
    _id: string;
    name: string;
    email: string;
    profile_photo?: string;
    dateOfBirthday: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}
