import Image from "next/image";

let ChiSiamo = () => {
    return (
        <div className="container text-center" id="ChiSiamo">
            <div className="card rounded-5 p-5 bg-light border-light shadow">
                <div className="row row-cols-1 row-cols-lg-2 g-1 d-flex align-items-center">
                    <div className="col">
                        <h2>Chi Siamo</h2>
                        <div className="card-body">
                            La Falegnameria Artigiana Squizzato, di Vasco Squizzato, è presente sul territorio da 50 anni. Si occupa della produzione e installazione di serramenti in legno e legno alluminio, che comprendono alzanti scorrevoli, finestre, porte finestre e portoncini, certificati dalla normativa CE (garanzia di un′elevata tenuta termica e acustica).
                            I serramenti sono prodotti a partire da diversi tipi di legno quali abete, rovere, larice, etc., naturalmente trattati con cicli di verniciatura differenti per il tipo di esigenza del cliente: vernice Adler, spazzolati o meno, laccati o tinta legno.
                            I vetri installati vanno dalla monocamera alla doppia camera e garantiscono l′isolamento termico dall′interno all′esterno della casa. La falegnameria, oltre ai serramenti da esterni, propone anche porte interne rigorosamente di produzione propria in varie essenze, scuri in legno massiccio e in multistrato e, occasionalmente, mobili d′arredo, scale e tanto altro. L′installazione viene effettuata dai dipendenti della falegnameria stessa.
                        </div>
                    </div>
                    <div className="col">
                        <Image src="/images/home/chi_siamo.jpg" className="rounded-5" alt="..." width={450} height={550} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChiSiamo;