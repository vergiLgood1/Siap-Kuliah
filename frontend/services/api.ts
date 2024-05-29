import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/'

export const getUser = async () => {
    const response = await axios.get(`${API_URL}api/users/`)
    return response.data
};

export const getUserDetail = async () => {
    const response = await axios.get(`${API_URL}api/users/${name}/`)
    return response.data
};

export const createUser = async (user: any) => {
    const response = await axios.post(`${API_URL}/users/`, user);
    return response.data;
};

export const updateUser = async (name: string, user: any) => {
    const response = await axios.put(`${API_URL}/users/${name}/`, user);
    return response.data;
};

export const deleteUser = async (name: string) => {
    await axios.delete(`${API_URL}/users/${name}/`);
};