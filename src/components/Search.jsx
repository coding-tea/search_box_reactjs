import { useEffect, useState } from 'react';

const Search = (props) => {

    const [keyword, setKeyword] = useState();
    const [values, setValues] = useState([]);
    useEffect(()=>{
        setValues(props.data.includes(keyword));
    }, [keyword]);

    return (
        <>
            <div className='search-box'>
                <label htmlFor="search"></label>
                <input type="text" id='search' value={keyword} onChange={e => setKeyword(e.target.value)} />
            </div>
            <div className="search_values">
            {
                (values)?
                    values.map(item => <div className='value'> { item } </div>)
                :''
            }
            </div>
        </>
    );
}

export default Search;
