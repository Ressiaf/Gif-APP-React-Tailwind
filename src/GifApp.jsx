import { AddCategory, GifGrid, RemoveCategories} from "./components";
import React from "react";

const GifApp = () => {

const [ categories , setCategories ] = React.useState( [ 'cats' ] )

const handleAddCategory = (value) =>{
    setCategories([value , ...categories])
};

const handleDeleteCategory = (value) => {
    const categoriesFilter = categories.filter(category => category !== value);
    setCategories(categoriesFilter);
};

const handleRemoveCategories = ( )=>{
    setCategories([ ]);
};

    return (
        <>
        
        <div className=" flex flex-wrap flex-col items-center min-h-screen w-full bg-black font-robo ">
            <AddCategory addCategory={handleAddCategory}/>
            <RemoveCategories  removeCategories={handleRemoveCategories} />
                {categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category} 
                    DeleteCategory={handleDeleteCategory}
                />
                ))}
        </div>
        </>
    );
};

export default GifApp;
