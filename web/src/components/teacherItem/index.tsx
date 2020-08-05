import React from 'react'

import whatsappIcon from'../../assets/images/icons/whatsapp.svg';
import './styles.css'

const TeacherItem = ()=>{
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/31930712?s=460&u=d6ae3ac403224f4adbccd0541a9e6e030bcd7d93&v=4" alt="Gm3"/>
                <div>
                    <strong>Gm3</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed eu nulla viverra, iaculis augue ac, feugiat libero.
            <br/> <br/>
            Nullam sit amet odio auctor, hendrerit velit nec, convallis augue.
            Aliquam faucibus nibh et feugiat posuere.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                
            </footer>
        </article>
    );
}

export default TeacherItem