import React ,{Fragment} from 'react'

const  Membre =({age,nom,children}) => {
   
    return(
        <Fragment>
        <h2 style={{
             backgroundColor: age < 10 ? 'red': 'blue', 
             color: age < 10 ? 'black' : 'white'}}>
             {nom.toUpperCase()} : {age}
        </h2>
        
        {children ? <p>{children}</p> : <Fragment/>}
        
        </Fragment>
    )    
}

export default Membre
