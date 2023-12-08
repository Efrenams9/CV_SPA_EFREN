//*importaciones

import { useState } from 'react';
import cv from '../../docs/EFREN_MARIN_FULL_STACK CV.pdf';


const Curriculum =()=>{

    const [curriculum, setCurriculum]=useState();
    const handlerCurriculunm= useState(curriculum);
    return (
        <div>
            <h2>El curriculum a descargar</h2>
            <p>descargar Curriculum</p>
            <button>CURRICULUM</button> 
            <embed src={cv} type='application/pdf' width={420} height={600}></embed>
        </div>
    );
};

export default Curriculum;