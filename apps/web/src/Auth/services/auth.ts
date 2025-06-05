import axios from "axios";
import type { AuthResponse, RegistrationRequest } from "../types";

class AuthService {
    async login(username: string, password: string): Promise<AuthResponse> {

    }

    async logout(): Promise<void> {

    }

    async register(registrationRequest: RegistrationRequest): Promise<AuthResponse> {

    }

    async getCurrentUser() {

    }

    async refreshToken() {

    }
}