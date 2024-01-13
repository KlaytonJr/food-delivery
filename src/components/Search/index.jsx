import React, { useState } from 'react'
import { Search28Filled } from '@fluentui/react-icons';
import { useSearchParams } from 'react-router-dom';

function Search({ placeholder, className }) {
    const [search, setSearch] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        setSearchParams({search: search});
        setSearch("");
    };

    return (
        <div className={'my-8 flex items-center justify-center ' + className}>
            <input 
                value={search}
                placeholder={placeholder}
                type="text"
                className="w-3/5 h-10 border-2 border-amber-400 rounded-lg px-2 mt-1 box-border" 
                onChange={event => setSearch(event.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleClick()}
            />
            <div className='relative'>
                <Search28Filled className='absolute top-[-16px] right-2 px-4 py-1 box-content cursor-pointer' onClick={handleClick} />
            </div>
        </div>
    )
}

export default Search