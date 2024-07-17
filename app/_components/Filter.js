"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selected = searchParams.get("capacity") ?? "all";

    function onClickHandler(filter) {
        const params = new URLSearchParams(searchParams);
        params.set("capacity", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    return (
        <div className="flex justify-end ">
            <Button selected={selected} filter="small" onClick={onClickHandler}>
                1-2 people
            </Button>
            <Button
                selected={selected}
                filter="medium"
                onClick={onClickHandler}
            >
                3-5 people
            </Button>
            <Button selected={selected} filter="large" onClick={onClickHandler}>
                7-9 people
            </Button>
            <Button
                filter="bunglow"
                selected={selected}
                onClick={onClickHandler}
            >
                more than 10 people
            </Button>
        </div>
    );
};
const Button = ({ children, onClick, selected, filter }) => {
    return (
        <div
            className={`${
                filter === selected ? "bg-gray-950" : ""
            } cursor-pointer border border-2 border-gray-400 p-2 mb-4 hover:bg-slate-700`}
            onClick={() => onClick(filter)}
        >
            {children}
        </div>
    );
};
export default Filter;
