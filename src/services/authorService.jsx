import axios from 'axios';

// Esta es la URL base. Cuando Juanlu te pase la suya, solo la cambias aquí.
const API_URL = "http://localhost:8080/api/authors"; 

export const getAuthors = async () => {
  try {
    const response = await axios.get(API_URL);
    // Retornamos los datos (el JSON con name, lastname, etc.)
    return response.data; 
  } catch (error) {
    console.error("Error al obtener la lista de autores:", error);
    throw error;
  }
};