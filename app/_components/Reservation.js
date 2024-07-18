import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

const Reservation = async ({ cabin }) => {
    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id),
    ]);
    const session = await auth();
    const {
        id,
        name,
        maxCapacity,
        regularPrice,
        discount,
        image,
        description,
    } = cabin;
    const { minBookingLength, maxBookingLength } = settings;
    return (
        <div className="flex">
            <DateSelector
                regularPrice={regularPrice}
                discount={discount}
                minBookingLength={minBookingLength}
                maxBookingLength={maxBookingLength}
            />
            {session?.user ? (
                <ReservationForm cabin={cabin} user={session.user} />
            ) : (
                <LoginMessage />
            )}
        </div>
    );
};

export default Reservation;
