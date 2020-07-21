import React, {useState} from 'react';

const NotaListItem = ({id="teste", nota})=>{
    const [isModalVisible, setIsModalVisible] = useState()
    const tired = ()=> setIsModalVisible(!isModalVisible)

    const testeOne = ()=>{
        return(
            <div id={nota.id || id}>
                {nota.id}) {nota.title} - {nota.done ? "true" : "false"}
                <button onClick={tired}>Open</button>
            </div>
        );
    }

    const testeTwo = ()=>{
        return(
            <>
                <form id={nota.id || id} >
                <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={nota.title}
                />
                <button onClick={tired}>close</button>
            </form>

            </>
        );
    }

    return(
        <>
            {isModalVisible ? (testeTwo()) : (testeOne())}
        </>
    );
}


export default NotaListItem;