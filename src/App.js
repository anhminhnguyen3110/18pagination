import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const {loading, data} = useFetch();
  const [ind, setInd] = useState(1); 
  const check = (index) => {
    if(index>10){
      return 1;
    }
    if(index<1){
      return 10;
    }
    return index;
  }
  
  const prev = () => {
    setInd((ind) => check(ind-1));
  }
  const next = () => {
    setInd(ind => check(ind+1))
  }
  const num = (index) => {
    setInd(ind => index);
  }

  return <main>
    {loading?
    <div className='section-title'>
      <h1>Loading...</h1>
      <div className='underline'></div>
    </div> :<>
    <div className='section-title'>
      <h1>Pagination</h1>
      <div className='underline'></div>
    </div>
    <section className='followers'>
      <div className='container'>
        <>
          {
            data.slice(ind*10-10, ind*10).map((item, index) => {
              return <Follower key={index} {...item} />
            })
          }
        </>
      </div>
      <div className='btn-container'>
        <button className="prev-btn" onClick={prev}>prev</button>
        <>
        {
          data.slice(ind, ind+10).map((item, index) => {
            if(ind===index+1){
              return <button key={index} className="page-btn active-btn">{index+1}</button>
            }
            return <button key={index} onClick={() => num(index+1)} className="page-btn null">{index+1}</button>
          })
        }
        </>
        <button className="next-btn" onClick={next}>next</button>
      </div>
    </section>
    </>}
  </main>
}

export default App
 