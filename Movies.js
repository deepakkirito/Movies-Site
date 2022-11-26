import classes from './Movies.module.css';

function Movies(props) {

  // console.log(props.searchResult)

  // props.moviesData.map( val => {

  //   let lower = val.Title.toLowerCase();
    
  //   // console.log(lower)
  //   console.log(props.searchResult == lower)
  //   if (props.searchResult == val.Title) {



  //   } else {
      
  //   }

  // })


  
  return (
    <div className={classes.Movies}>

    {
      props.moviesData.map((Data , i) => (props.searchResult == '') &&
      
      <div className={classes.Card}>
        {/* {console.log(Data)} */}

        <img src={Data.Poster} title={Data.Title}></img>
        <h5 title='Movie Title'>{Data.Title}</h5>
        <div className={classes.Info}>

          <span title='Year'>{Data.Year}</span>
          <span title='Type'>{Data.Type}</span>

        </div>
      </div>
    )

    }

    {/* {
      props.moviesData.map((Data , i) => (props.searchResult != '') &&
      // {console.log(Data)}
      <div className={classes.Card}>

        <img src={Data.Poster}></img>
        <h5>{Data.Title}</h5>
        <div className={classes.Info}>

          <span>{Data.Year}</span>
          <span>{Data.Type}</span>

        </div>
      </div>
    )

    } */}

    </div>
  );
}

export default Movies;

// moviesData.map((Data , i) => 
//         // {console.log(Data)}
//         <div className={classes.Card}>

//           <img src={Data.Poster}></img>
//           <h5>{Data.Title}</h5>
//           <div className={classes.Info}>

//             <span>{Data.Year}</span>
//             <span>{Data.Type}</span>

//           </div>
//         </div>
//       )

