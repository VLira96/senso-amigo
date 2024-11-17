"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem(email) || '{}');

        if (!storedUser.email) {
            setError('Email não cadastrado. Redirecionando para cadastro...');
            setTimeout(() => {
                router.push('/cadastro');
            }, 3000);
        } else if (storedUser.password !== password) {
            setError('Senha incorreta. Tente novamente.');
        } else {
            setError('');
            router.push('/pages/home');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <img src="/logo.png" alt="Logo" className="mx-auto h-12 w-auto" />
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Entrar</button>
                </form>
            </div>
        </div>
    );
}