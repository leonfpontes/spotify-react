import React from "react";

const Footer = () =>{
    return(
        <div class="disclaimer-premium">
            <div class="text">
                <p className="disclaimer-premium__title">Testar o Premium de graça</p>
                <p className="disclaimer-premium__subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <div className="button">
                <button type="button">Inscreva-se grátis</button>
            </div>
        </div> 
    )
}

export default Footer;