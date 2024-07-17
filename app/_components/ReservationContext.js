"use client";
import { createContext, useContext, useState } from "react";
const ReservationContext = createContext();
const initialRange = { from: undefined, to: undefined };
const ReservationProvider = ({ children }) => {
    const [range, setRange] = useState(initialRange);
    const reset = () => {
        setRange(initialRange);
    };
    return (
        <ReservationContext.Provider value={{ range, setRange, reset }}>
            {children}
        </ReservationContext.Provider>
    );
};
function useReservation() {
    const context = useContext(ReservationContext);
    if (context === undefined) {
        throw new Error("No reservation context");
    }
    return context;
}
export { useReservation, ReservationProvider };
