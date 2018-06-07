import React from 'react';
import '../assets/css/rodape.css';
import trisoft from '../assets/img/trisoft.png';
import youtube from '../assets/img/social/youtube-64x64-color.png';
import facebook from '../assets/img/social/facebook-64x64-color.png';
import linkedin from '../assets/img/social/linkedin-64x64-color.png';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="row rodape">

                <div className="column column-3">
                    <p className="rodape-title">Telefone</p>
                    <p className="rodape-content">Planos</p>
                    <p className="rodape-content">Atendimento</p>
                    <p className="rodape-content">Serviços adicionais</p>
                </div>
                <div className="column column-3">
                    <p className="rodape-title">Internet</p>
                    <p className="rodape-content">Para sua casa</p>
                    <p className="rodape-content">Para levar</p>
                    <p className="rodape-content">Serviços adicionais</p>
                    <p className="rodape-content">Mais informações</p>
                </div>
                <div className="column column-3">
                    <p className="rodape-title">TV</p>
                    <p className="rodape-content">Planos</p>
                    <p className="rodape-content">Guia TV</p>
                    <p className="rodape-content">Recursos interativos</p>
                    <p className="rodape-content">Conteúdos opcionais</p>
                </div>
                <div className="column column-3">
                    <p className="rodape-title">Combos</p>
                    <p className="rodape-content">Para sua casa + Plano de celular</p>
                    <p className="rodape-content">Monte um combo para sua casa</p>
                </div>
                <div className="row">
                    <div className="column column-9 img-rodape">
                        <img src={trisoft} alt="Trisoft" />
                        <p>luiz.trisoft@gmail.com</p> 
                    </div>

                    <div className="row">
                        <div className="column column-1 img-rodape">
                            <a href="https://www.facebook.com/luiz.alberto.3954546">
                                <img src={facebook} alt="facebook" /> 
                                <p>FACEBOOK</p>
                            </a>
                        </div>
                        <div className="column column-1 img-rodape">
                            <a href="https://www.youtube.com/c/LuizAlbertoTiko">
                                <img src={youtube} alt="youtube" />
                                <p>YOUTUBE</p>
                            </a>
                        </div>
                        <div className="column column-1 img-rodape">
                            <a href="https://www.linkedin.com/in/luiz-alberto/">
                                <img src={linkedin} alt="linkedin" />
                                <p>LINKEDIN</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}   