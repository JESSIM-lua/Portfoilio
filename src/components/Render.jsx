import React from 'react';
// import '../App.css'; 
import CV_Jessim from './CV_Jessim.pdf';
import Cvhead from './Cvhead';

function Render() {
    return(
       <div>
        <Cvhead />

           <embed src={CV_Jessim} type="application/pdf" width="100%" height="1200px" />
       </div>
    );
}

export default Render;