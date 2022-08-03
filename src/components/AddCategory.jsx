import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

export const AddCategory = ({ addCategory }) => {

const [inputValue, setInputValue ] = React.useState(" ");

const handleInputChange = ({ target }) => {
    setInputValue(target.value)
} 

const handleSubmit = (e) => {
    e.preventDefault( );
    if (inputValue.trim( ).length < 2 || inputValue.trim( ).length > 12) return;
    addCategory( inputValue.trim( ) );
    setInputValue( " " );
};

    return (
        <>
            <div className="mt-12 mb-6  w-auto max-w-xs">
                <h3 className="text-indigo-500/75 text-md  flex mb-2 justify-center mr-12 ">
                    Tus Gifs favoritos en un solo lugar *
                </h3>
                <form onSubmit={handleSubmit} className="flex  justify-center mb-8" type="submit">
                    <div className="relative  items-center  ">
                        <div className=" absolute inset-y-4 left-0 items-center  pl-3 pointer-events-none">
                            <span className=" h-full flex justify-center items-center">
                                <SearchIcon className="h-6 w-6 text-indigo-500  mx-2 " />
                            </span>
                        </div>
                        <input
                            type="search"
                            placeholder="buscas gifs  ? "
                            value={inputValue}
                            onChange={handleInputChange}
                            className="bg-transparent   border-solid border-2 border-indigo-500 placeholder-indigo-500/50 text-indigo-500 text-2xl uppercase pl-14 p-2  outline-0  ring-inset focus:ring-2 ring-indigo-500/50 rounded-md max-w-xs w-68 "
                            required
                        />
                    </div>
                </form>
            </div>
        </> 
    );
};
