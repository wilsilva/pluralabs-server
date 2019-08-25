export default interface User {
    _id: string;
    name: string;
    email: string;
    profile_photo?: string;
    dateOfBirthday: string;
    password: string;
    created_at: string;
    updated_at: string;
}
