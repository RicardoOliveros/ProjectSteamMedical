// Crear el archivo del contexto de la aplicacion este caso (AppContext.jsx)
import { createContext, useState } from 'react';
import useCounter from '../hook/useCounter';

// Crear el contexto
export const MyContext = createContext();

// Crear el proveedor del contexto en este caso MyContextProvider
export const MyContextProvider = ({ children }) => {
    const [myState, setMyState] = useState('Valor final');
    const contadorGlobal = useCounter()
    const { counter, Increase, Decrease } = contadorGlobal
    return (
        <MyContext.Provider value={{ myState, counter, Increase, Decrease }}>
            {children}
        </MyContext.Provider>
    );
};
