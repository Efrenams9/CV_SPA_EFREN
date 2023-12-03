//*importaciones

import cv from '../../docs/EFREN_MARIN_FULL_STACK CV.pdf';


const Curriculum =()=>{
    return (
        <div>
            <h2>El curriculum a descargar</h2>
            <embed src={cv} type='application/pdf' width={420} height={600}></embed>
        </div>
    );
};

export default Curriculum;