import React from 'react';

const Home = () => {

  return(
    <div>
      <h3>Would you like to...</h3><br/>
      <a className="btn btn-primary" href="/employees" role="button">get a job?</a><br/><br/>
      <a className="btn btn-primary" href="/employers" role="button">hire someone?</a>
    </div>
  )

}

export default Home;
