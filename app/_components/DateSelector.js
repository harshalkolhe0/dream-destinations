"use client";
import { isWithinInterval } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
    return (
        range.from &&
        range.to &&
        datesArr.some((date) =>
            isWithinInterval(date, { start: range.from, end: range.to })
        )
    );
}
const initialRange = { from: null, to: null };
function DateSelector({
    regularPrice,
    discount,
    minBookingLength,
    maxBookingLength,
}) {
    // CHANGE
    // const regularPrice = 23;
    // const discount = 23;
    // console.log("minBookingLength", minBookingLength);
    // console.log("maxBookingLength", maxBookingLength);
    //const [range, setRange] = useState(initialRange);
    const { range, setRange, reset } = useReservation();
    const numNights = 0; //(range.to ?? 0) - (range.from ?? 0);
    const cabinPrice = 0; //(regularPrice - discount) * numNights;
    // SETTINGS
    // const minBookingLength = 1;
    // const maxBookingLength = 15;
    const resetRange = () => {
        reset();
    };
    return (
        <div className="flex flex-col justify-between">
            <DayPicker
                className="pt-12 place-self-center"
                mode="range"
                onSelect={(range) => setRange(range)}
                selected={range}
                min={minBookingLength + 1}
                max={maxBookingLength}
                fromMonth={new Date()}
                fromDate={new Date()}
                toYear={new Date().getFullYear() + 5}
                captionLayout="dropdown"
                numberOfMonths={2}
            />

            <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
                <div className="flex items-baseline gap-6">
                    <p className="flex gap-2 items-baseline">
                        {discount > 0 ? (
                            <>
                                <span className="text-2xl">
                                    ${regularPrice - discount}
                                </span>
                                <span className="line-through font-semibold text-primary-700">
                                    ${regularPrice}
                                </span>
                            </>
                        ) : (
                            <span className="text-2xl">${regularPrice}</span>
                        )}
                        <span className="">/night</span>
                    </p>
                    {numNights ? (
                        <>
                            <p className="bg-accent-600 px-3 py-2 text-2xl">
                                <span>&times;</span> <span>{numNights}</span>
                            </p>
                            <p>
                                <span className="text-lg font-bold uppercase">
                                    Total
                                </span>{" "}
                                <span className="text-2xl font-semibold">
                                    ${cabinPrice}
                                </span>
                            </p>
                        </>
                    ) : null}
                </div>

                {range.from || range.to ? (
                    <button
                        className="border border-primary-800 py-2 px-4 text-sm font-semibold"
                        onClick={() => resetRange()}
                    >
                        Clear
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default DateSelector;
