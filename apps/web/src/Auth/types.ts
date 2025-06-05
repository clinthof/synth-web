//#region Auth service
export type AuthUser = {
    id: string;
    email: string;
    name: string;
    roles: Array<string>;
}

export type LoginRequest = {
    email: string;
    password: string;
}

export type RegistrationRequest = {
    username: string;
    email: string;
    password: string;
}

export type AuthResponse = {
    token: string;
    refreshToken: string;
    user: AuthUser;
}
//#endregion