import React from "react";
import { TrashIcon } from "@heroicons/react/solid";

export const RemoveCategories = ( { removeCategories } ) => {
    return (
        <>
        <div className=" flex justify-between w-80  border-b-2 border-indigo-500/75 mb-2">
            <h3 className="text-indigo-500/75 text-xl mb-2 justify-center uppercase ">
            busquedas recientes
            </h3>
            <span>
                <button>
                    <TrashIcon 
                        className="text-indigo-500/75 w-6" 
                        onClick={( ) =>  removeCategories()}
                    />
                </button>
            </span>
        </div>
        </>
    );
};
