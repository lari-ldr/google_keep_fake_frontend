import React, {useState, createContext} from 'react'; 

export const NotaContext = createContext(); //ele é exportado e sera utilizado nos outros componentes da aaplicação
// com ele a gente consegue acessar a função NotaProvider

// a proxima função é que irá gerenciar (usar) esse contexto, ela que provem
const NotaProvider = ({children})=>{
    const [notas, setNotas] = useState([
        {id: 1, title: "ir ao supermercado", done: false},
        {id: 2, title: "ir a academia", done: true},
        {id: 3, title: "passear com o dog", done: false}
      ]); // esse estado agora esta disponivel de uma forma global
    const [isModalVisible, setIsModalVisible] = useState(false)
// essa função irá salvar novas notas que vierem da form
    const saveNota = (nota)=>{
        const newNota = {
            id: notas.length + 1,
            title: nota.title,
            done: false,
        } //isso forma um objeto...
        setNotas([
            ...notas,
            newNota
        ]) //... que vai ficar dentro de uma array de objetos. Aqui a gente esta atualizando o nosso estado
    }

    const modalOnClick = ()=>{
        setIsModalVisible(!isModalVisible)
        return isModalVisible
    }

    // children aqui diz respeito ao nosso App component.
    // E Tudo que vier dele vai ser renderizado aqui, então a gente tem acesso
    // No value a gente expõe tudo que a gente quiser que os outros componentes tenham acesso (q nosso app tenha acesso)
    return(
        <NotaContext.Provider value={{notas, saveNota, isModalVisible, modalOnClick}}>
            {children}
        </NotaContext.Provider>
    );
}

export default NotaProvider;