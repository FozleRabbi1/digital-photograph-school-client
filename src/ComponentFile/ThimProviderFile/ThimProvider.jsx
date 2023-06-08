import { createContext, useEffect, useState } from "react";


export const ThimProviders = createContext(null)

const ThimProvider = ({ children }) => {
    const [bgThim, setBgThim] = useState('')

    useEffect(() => {
        const bgMood = localStorage.getItem("bg-thim");
        setBgThim(bgMood)
    }, [])

    const darkThim = (data) => {
        setBgThim(data);
        localStorage.setItem("bg-thim" , data)
    }
    const lightThim = (data) => {
        setBgThim(data)
        localStorage.setItem("bg-thim" , data)
    }

    const thimUser = {
        darkThim,
        lightThim,
        bgThim: bgThim,
    }


    return (
        <ThimProviders.Provider value={thimUser}>
            {children}
        </ThimProviders.Provider>
    );
};

export default ThimProvider;