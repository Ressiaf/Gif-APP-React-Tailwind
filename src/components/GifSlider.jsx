import {
    ArrowRightIcon,
    ArrowLeftIcon,
    HeartIcon,
} from "@heroicons/react/solid";
import { nanoid } from "nanoid";
import React from "react";


export const GifSlider = ({ slides }) => {
    const [current, setCurrent] = React.useState(0);

    const length = slides.length;

    const [liked, setLiked] = React.useState(false);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
        {slides.map((slides, index) => {
            return (
            <div
                className={
                index === current
                    ? "flex  scale-100 w-96  h-80 justify-center  items-center max-w-fit over  "
                    : "hidden   "
                }
                key={nanoid(6)}
            >
                <button onClick={nextSlide}>
                    <ArrowRightIcon className="absolute top-1/2  inset-y-0 -right-4 h-10 w-10 bg-gradient-to-br from-purple-600 to-blue-500  rounded-md p-2 z-sm select-none cursor-pointer" />
                </button>
                <button onClick={prevSlide}>
                    <ArrowLeftIcon className="absolute top-1/2  inset-y-0 -left-4 h-10 w-10 bg-gradient-to-br from-purple-600 to-blue-500  rounded-md p-2  z-sm select-none cursor-pointer" />
                </button>
                {index === current && (
                <img
                        src={slides.url}
                        alt={slides.title}
                        className="h-auto w-96   max-w-auto max-h-80 object-cover "
                        key={slides.id}
                />
                )}
                <button
                    className="absolute -bottom-8 right-1 h-9 w-9  p-1 rounded-md  z-md select-none cursor-pointer "
                    onClick={() => setLiked(!liked)}
                >
                <HeartIcon className={liked ? " text-black " : "text-black/50"} />
                </button>
            </div>
            );
        })}
        </>
    );
};
