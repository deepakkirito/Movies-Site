import classes from './Search.module.css';
import React, { useState, useEffect } from 'react';


function Search(props) {

  // console.log(props.moviesData)

  // const [value, setValue] = useState('')
  let searching = ((e) => {
    // console.log(e.target.value.toLowerCase())
    // setValue(e.target)
    props.result(e.target.value.toLowerCase())
  })

  return (
    <div className={classes.Search}>
      <nav>
      <input onKeyUp={searching} className={classes.input} type={'search'} placeholder={'Search Movies'}></input>
      </nav>
    </div>
  );
}

export default Search;
