export interface User {
    email: string,
    password: number,
    returnSecureToken?: boolean
}

export interface Post {
    author: string,
    title: string,
    text: string,
    date: Date,
    id?: string
}