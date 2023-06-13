import { useEffect, useState } from 'react';

const Search = (props) => {

    const [keyword, setKeyword] = useState();
    const [values, setValues] = useState([]);
    const data = props.data;
    useEffect(()=>{
        data.map((item, index) => {
            if(index >= 5) return;
            if(item.includes(keyword) && !values.includes(item))
                setValues([...values, item]);
            if(keyword === '')
                setValues('');
        });
    }, [keyword]);

    return (
        <>
            <div className='search-box'>
                <label htmlFor="search">search : </label>
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
