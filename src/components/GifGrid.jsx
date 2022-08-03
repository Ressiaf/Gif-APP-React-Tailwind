import {
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { useFecht } from "../hooks/useFecht";
import { GifSlider } from "./GifSlider";
import { Spinner } from "./Spinner";
import React from "react";

export const GifGrid = ({ category , DeleteCategory  }) => {

  const { images, loading, close, setClose, nanGifs } = useFecht(category);

  

  return (
    <>
    
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 w-5/6 max-w-xs z-md my-2 rounded-md ">
        <div className="flex justify-between  items-center ">
          <h3 className="text-2xl font-semibold uppercase mx-4 ">{category}</h3>
          <div className="flex  items-center ">
            {close ? (
              <ChevronDownIcon
                className="h-11 w-11 z-sm  select-none cursor-pointer  mx-1"
                onClick={() => setClose(false)}
              />
            ) : (
              <ChevronUpIcon
                className="h-11 w-11   z-sm  select-none cursor-pointer  mx-1"
                onClick={() => setClose(true)}
              />
            )}
            <button onClick={() => DeleteCategory (category)}>
              <XIcon className="h-8  w-8  z-sm select-none cursor-pointer mx-1"/>
            </button>
          </div>
        </div>
        <div className={close ? "hidden" : " block max-w-sm bg-black  mb-8   "}>
          {loading ? (
            <Spinner className="flex  justify-center items-center" />
          ) : (
            <GifSlider key={images.id} slides={images} />
          )}
        </div>
        {nanGifs ? (
          <p className="text-lg font-semibold uppercase ml-4 text-black/50">
            404 - no se econtraron gifs
          </p>
        ) : null }
      </div>
    </>
  );
};
