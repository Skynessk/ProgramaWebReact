function Contenido(props){
    if(props.seccion==="Index"){
       return <main> 
            <h3>Contenido</h3>
            {Index}
         </main>;
    
    }
    else{}
        return <main> 
        <h3>Contenido</h3>
        {Catalogo}
    </main>;
  
}

function Index(){
    return <p>Este es el contenido de la pagina principal</p>;
}

function Catalogo(){
    return <p>Este es el contenido del Catálogo</p>;
}

export default Contenido;