import Image from "next/image";

let ChiSiamo = () => {
    return (
        <div className="container text-center" id="ChiSiamo">
            <div className="card mb-3 rounded-5 border-0">
                <div className="row g-0">
                <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Chi Siamo</h5>
                            <p className="card-text">La Falegnameria Artigiana Squizzato, di Vasco Squizzato, è presente sul territorio da 50 anni. Si occupa della produzione e installazione di serramenti in legno e legno alluminio, che comprendono alzanti scorrevoli, finestre, porte finestre e portoncini, certificati dalla normativa CE (garanzia di un′elevata tenuta termica e acustica).
                                I serramenti sono prodotti a partire da diversi tipi di legno quali abete, rovere, larice, etc., naturalmente trattati con cicli di verniciatura differenti per il tipo di esigenza del cliente: vernice Adler, spazzolati o meno, laccati o tinta legno.
                                I vetri installati vanno dalla monocamera alla doppia camera e garantiscono l′isolamento termico dall′interno all′esterno della casa. La falegnameria, oltre ai serramenti da esterni, propone anche porte interne rigorosamente di produzione propria in varie essenze, scuri in legno massiccio e in multistrato e, occasionalmente, mobili d′arredo, scale e tanto altro. L′installazione viene effettuata dai dipendenti della falegnameria stessa.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="/images/home/chi_siamo.jpg" className="img-fluid rounded-5" alt="..." />
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ChiSiamo;