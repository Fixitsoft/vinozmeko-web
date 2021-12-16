import './App.css';
import emailjs from 'emailjs-com';

function App() {
    const onHnaniceReservation = (e) => {
        e.preventDefault();
        let name, date, phone, email, note, count;
        name = document.getElementById('hnaniceName').value
        date = document.getElementById('hnaniceDate').value;
        count = document.getElementById('hnaniceCount').value;
        email = document.getElementById('hnaniceEmail').value;
        phone = document.getElementById('hnanicePhone').value;
        note = document.getElementById('hnaniceNote').value;

        const templateParams = {
            name,
            subject: "Rezervace - HNANICE",
            date: date ? 'Datum: ' + date : null,
            phone: phone ? 'Telefon: ' + phone: null,
            email: email ? 'Email: ' + email : null,
            count: count? 'Počet osob: ' + count: null,
            note: note ? 'Poznámka: ' + note : null,
        };

        if (name && (email || phone)) {
            emailjs.send('service_wgqaz3k', 'template_n9xis7z', templateParams, 'user_P3NlbEgxs3PlLOoZ4vkSt')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Rezervace byla úspěšně odeslána.');
                }, (err) => {
                    console.log('FAILED...', err);
                });
        } else {
            alert('Vyplňte prosím Jméno a příjmení a alespoň jeden kontakt.');
        }
    }

    const onModrakReservation = (e) => {
        e.preventDefault();
        let name, date, phone, email, note, count;
        name = document.getElementById('modrakName').value
        date = document.getElementById('modrakDate').value;
        count = document.getElementById('modrakCount').value;
        email = document.getElementById('modrakEmail').value;
        phone = document.getElementById('modrakPhone').value;
        note = document.getElementById('modrakNote').value;

        const templateParams = {
            name,
            subject: "Rezervace - U Modráka",
            date: date ? 'Datum: ' + date : null,
            phone: phone ? 'Telefon: ' + phone: null,
            email: email ? 'Email: ' + email : null,
            count: count? 'Počet osob: ' + count: null,
            note: note ? 'Poznámka: ' + note : null,
        };

        if (name && (email || phone)) {
            emailjs.send('service_wgqaz3k', 'template_n9xis7z', templateParams, 'user_P3NlbEgxs3PlLOoZ4vkSt')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Rezervace byla úspěšně odeslána.');
                }, (err) => {
                    console.log('FAILED...', err);
                });
        } else {
            alert('Vyplňte prosím Jméno a příjmení a alespoň jeden kontakt.');
        }
    }

    const onVinoVanReservation = (e) => {
        e.preventDefault();
        let name, date, phone, email, note, count;
        name = document.getElementById('vinoVanName').value
        date = document.getElementById('vinoVanDate').value;
        count = document.getElementById('vinoVanCount').value;
        email = document.getElementById('vinoVanEmail').value;
        phone = document.getElementById('vinoVanPhone').value;
        note = document.getElementById('vinoVanNote').value;

        const templateParams = {
            name,
            subject: "Rezervace - Víno van",
            date: date ? 'Datum: ' + date : null,
            phone: phone ? 'Telefon: ' + phone: null,
            email: email ? 'Email: ' + email : null,
            count: count? 'Počet osob: ' + count: null,
            note: note ? 'Poznámka: ' + note : null,
        };

        if (name && (email || phone)) {
            emailjs.send('service_wgqaz3k', 'template_n9xis7z', templateParams, 'user_P3NlbEgxs3PlLOoZ4vkSt')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Rezervace byla úspěšně odeslána.');
                }, (err) => {
                    console.log('FAILED...', err);
                });
        } else {
            alert('Vyplňte prosím Jméno a příjmení a alespoň jeden kontakt.');
        }
    }

    return (
        <div className="App">
            <div id="loader">
                <div className="loader-wrapper">
                    <div className="main-circle">
                        <div className="middle-circle">
                            <div className="small-circle"/>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <nav className="navbar navbar-inverse navbar-fixed-top light-navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#myNavbar">
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <span className="logo">VÍNO ZMEKO</span>
                        </div>
                        <div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><a href="#home">vinařství</a></li>
                                    <li><a href="#wines">vína</a></li>
                                    <li><a href="#degustations">degustace a oslavy</a></li>
                                    <li><a href="#contact">kontakt</a></li>
                                    <li><a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">kupuj
                                        ></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="bgimg-1 bg-container" id="home">
                <div className="bg-container-title" style={{whiteSpace: 'nowrap'}}>
                    <h1>Vinařství</h1>
                </div>

            </div>


            <div className="content" id="about">
                <div className="about-text">
                    <p>
                        Vinařství navazuje na rodinnou tradici pěstování vinné révy a výrobu vína již čtvrtou generací.
                        Výroba vína
                        probíhá ve sklepě ve vrbovecké vinařské uličce na dohled od vinohradu. Ruční šetrný sběr a
                        krátká vzdálenost
                        mezi vinohradem a sklepem jsou základem pro rychlé zpracování hroznů, které se pozitivně
                        projevuje ve
                        výsledné kvalitě vína. Vína vznikají při řízeném kvašení a z velké většiny zrají na jemných
                        kalech v
                        dřevěných sudech. Výroba probíhá tradičně za přispění moderních technologií při současných
                        vysokých
                        hygienických standardech.
                    </p>

                    <p>
                        Na rozloze téměř 1,3 hektaru pěstujeme osm bílých odrůd.
                    </p>
                    <p>
                        Ve staré vinici ve Vrbovci na viniční trati U sv. Urbana na dohled od sklepa pěstujeme odrůdy
                        veltlínské
                        zelené, ryzlink rýnský, ryzlink vlašský a rulandské šedé.
                    </p>
                    <p>
                        V roce 2015 vysadili vinohrad na vinařské trati Šác, odrůdy Chardonnay, Sauvignon, Müller
                        Thurgau a Pálava.
                    </p>

                    <p>Keře nepřetěžujeme a celoročně se staráme o jejich správné zdraví a výživu.</p>


                    <p>
                        Přechod mezi českým masivem a Karpaty, tvoří hřejivé hlinité spraše a štěrkopísky. Mikroklima
                        našich vinic u
                        svatého Urbana a vinné trati “Šác”, vytváří stepní terroir, výrazně se projevující v chutích i
                        vůních našich
                        vín. A to od mladých, lehkých vín se svěží kyselinkou až po vyzrálá, plná a minerální vína.
                    </p>
                </div>

                <div className="horizontal-divider"/>

                <div className="motto">
                    "Kdo chce slopat, <br/> musí kopat!"
                    <p className="name">Ján Zmeko nejst.<br/> zakladatel vinařství</p>
                </div>
            </div>


            <div className="bgimg-2 bg-container" id="wines">
                <div className="bg-container-title">
                    <h2>Typy a druhy vín</h2>
                </div>
            </div>

            <div className="content padded">

                <div id="myCarousel" className="carousel slide">

                    <div className="carousel-inner">
                        <div className="item active">
                            <h3 className="wines-title">2018</h3>

                            <div className="wines-preview">
                                <div>
                                    <img src={`/assets/images/wines/chardonnay.jpg`} loading="lazy" alt="chardonnay"/>
                                </div>
                                <div>
                                    <img src={`/assets/images/wines/mueller_thurgau.jpg`} loading="lazy"
                                         alt="mueller_thurgau"/>
                                </div>
                                <div>
                                    <img src={`/assets/images/wines/frizzante18.jpg`} loading="lazy" alt="frizzante18"/>
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Chardonnay 2018 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,5%</li>
                                            <li>Zbytkový cukr 3,6 g/l</li>
                                            <li>Kyseliny 6,4 g/l</li>
                                            <li>Pozdní sběr</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Sauvignon 2018 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,0%</li>
                                            <li>Zbytkový cukr 3,6 g/l</li>
                                            <li>Kyseliny 6,4 g/l</li>
                                            <li>Pozdní sběr</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Müller Thurgau</h4>
                                        <ul>
                                            <li>Alkohol 11,5%</li>
                                            <li>Zbytkový cukr 0,0 g/l</li>
                                            <li>Kyseliny 5,1 g/l</li>
                                            <li>Kabinetní (c.při s. 19°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Frizzante 2018</h4>
                                        <ul>
                                            <li>Alkohol 12,0%</li>
                                            <li>Zbytkový cukr 15,0 g/l</li>
                                            <li>MT+SG</li>
                                            <li>Polosladké</li>
                                            <li>&nbsp;</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Veltlínské Zelené 2018 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,5%</li>
                                            <li>Zbytkový cukr 3,6 g/l</li>
                                            <li>Kyseliny 6,4 g/l</li>
                                            <li>Pozdní sběr</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Veltlínské Zelené 2018 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,0%</li>
                                            <li>Zbytkový cukr 3,0 g/l</li>
                                            <li>Kyseliny 6,7 g/l</li>
                                            <li>Kabinetní (c.při s. 19°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Pálava 2018 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 13,0%</li>
                                            <li>Zbytkový cukr 20,0 g/l</li>
                                            <li>Kyseliny 6,1 g/l</li>
                                            <li>Výběr z hroznů (c.při s. 24°NM)</li>
                                            <li>Polosladké</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="wines-title">2019</h3>

                            <div className="wines-preview">
                                <div>
                                    <img src={`/assets/images/wines/sauvignon19.jpg`} loading="lazy" alt="sauvignon19"/>
                                </div>
                                <div>
                                    <img src={`/assets/images/wines/chardonnay.jpg`} loading="lazy" alt="chardonnay"/>
                                </div>
                                <div>
                                    <img src={`/assets/images/wines/most.jpg`} loading="lazy" alt="most"/>
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Sauvignon 2019 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,0%</li>
                                            <li>Zbytkový cukr 4,4 g/l</li>
                                            <li>Kyseliny 6,6 g/l</li>
                                            <li>Pozdní sběr (c.při s. 21°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Chardonnay 2019 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,0%</li>
                                            <li>Zbytkový cukr 4,0 g/l</li>
                                            <li>Kyseliny 6,9 g/l</li>
                                            <li>Pozdní sběr (c.při s. 22°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Müller Thurgau 2019 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 11,5%</li>
                                            <li>Zbytkový cukr 1,7 g/l</li>
                                            <li>Kyseliny 5,4 g/l</li>
                                            <li>Kabinetní (c.při s. 20°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Mošt Müller Thurgau 2019</h4>
                                        <ul>
                                            <li>100 % ovocná šťáva</li>
                                            <li>Lisována z čerstvých hroznů</li>
                                            <li>Pasterováno</li>
                                            <li>Bez přidání barviv, chemie a cukru</li>
                                            <li>Polosuché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Veltlínské Zelené 2019 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,0%</li>
                                            <li>Zbytkový cukr 6,9 g/l</li>
                                            <li>Kyseliny 6,2 g/l</li>
                                            <li>Pozdní sběr (c.při s. 21°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Rýnský Ryzlink 2019 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 13,5%</li>
                                            <li>Zbytkový cukr 5,6 g/l</li>
                                            <li>Kyseliny 6,6 g/l</li>
                                            <li>Výběr z hroznů (c.při s. 23°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Pálava 2019 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,5%</li>
                                            <li>Zbytkový cukr 12,3 g/l</li>
                                            <li>Kyseliny 6,9 g/l</li>
                                            <li>Výběru z hroznů (c.při s. 23°NM)</li>
                                            <li>&nbsp;</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 wine-detail">
                                        <h4>Blauburger 2019 0,75 l</h4>
                                        <ul>
                                            <li>Alkohol 12,0%</li>
                                            <li>Zbytkový cukr 0,0 g/l</li>
                                            <li>Kyseliny 4,7 g/l</li>
                                            <li>Pozdní sběr (c.při s. 22°NM)</li>
                                            <li>Suché</li>
                                        </ul>
                                        <div className="buy">
                                            <a href="https://eshop.vinozmeko.cz" target="_blank" rel="noreferrer">koupit
                                                ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span>{'<'}</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span>></span>
                        </a>
                    </div>

                </div>
            </div>

            <div className="bgimg-6 bg-container" id="wine-varieties">
                <div className="bg-container-title">
                    <h2>Odrůdy</h2>
                </div>
            </div>

            <div className="content padded">
                <div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 wine-variety">
                            <p>Ryzlink Rýnský</p>
                            <ul>
                                <li>Poloha a orientace: Jižní svahy v údolí vinic svatého Urbana</li>
                                <li>Rok výsadby – 1997-2010</li>
                                <li>Půda – hlinito-písčitá, černozem, spraše a váté písky, jíly karpatské předhlubně,
                                    zvětralé granity
                                </li>
                                <li>Typický projev vína - minerální, lipový květ, meruňkové, citronová kůra, pikantní
                                    kyselina, svěží
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 wine-variety">
                            <p>Veltlínské Zelené</p>
                            <ul>
                                <li>
                                    Poloha a orientace: Jižní svahy v údolí vinic svatého Urbana
                                </li>
                                <li>Rok výsadby – 1985</li>
                                <li>Půda – hlinito-písčitá, černozem, spraše a váté písky, jíly karpatské předhlubně,
                                    zvětralé granity
                                </li>
                                <li>Typický projev vína - minerální, pepřové, angrešt a liči, šťavnaté, svěží, traviny
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 wine-variety">
                            <p>Müller Thurgau</p>
                            <ul>
                                <li>
                                    Poloha a orientace:
                                    Severní svah vinného vrchu 294 m.n.m. ve vinicích „Šác“
                                </li>
                                <li>Rok výsadby – 2015</li>
                                <li>Půda – hlinito-písčitá, černozem, spraše a váté písky, terasové štěrkopísky</li>
                                <li>Typický projev vína - vůně peckovina sladkého ovoce, kořenité, traviny</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 wine-variety">
                            <p>Sauvignon</p>
                            <ul>
                                <li>Poloha a orientace: Severní svah vinného vrchu 294 m.n.m. ve vinicích „Šác“</li>
                                <li>Rok výsadby – 2015</li>
                                <li>Půda – hlinito-písčitá, černozem, spraše a váté písky, jíly karpatské předhlubně,
                                    zvětralé granity
                                </li>
                                <li>Typický projev vína - minerální, lipový květ, meruňkové, citronová kůra, pikantní
                                    kyselina, svěží
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 wine-variety">
                            <p>Chardonnay</p>
                            <ul>
                                <li>Poloha a orientace: Severní svah vinného vrchu 294 m.n.m. ve vinicích „Šác“</li>
                                <li>Rok výsadby – 2015</li>
                                <li>Půda – hlinito-písčitá, černozem, spraše a váté písky, jíly karpatské předhlubně,
                                    zvětralé granity
                                </li>
                                <li>Typický projev vína - lesní med, luční kvítí, živá kyselost žlutého melounu, chuť
                                    špendlíků,
                                    broskví, černého rybízu
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 wine-variety">
                            <p>Pálava</p>
                            <ul>
                                <li>Poloha a orientace: Severní svah vinného vrchu 294 m.n.m. ve vinicích „Šác“</li>
                                <li>Jižní svahy v údolí vinic svatého Urbana</li>
                                <li>Rok výsadby – 2015</li>
                                <li>Půda – hlinito-písčitá, černozem, spraše a váté písky, jíly karpatské předhlubně,
                                    zvětralé granity
                                </li>
                                <li>Typický projev vína - extraktivní, harmonické, šťavnaté, růže, šeřík, kořenitost ,
                                    ovoce
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center" style={{marginTop: '8rem'}}>
                        <p>Další odrůdy: Rulandské Šedé, Ryzlink Vlašský</p>
                    </div>
                </div>

            </div>


            <div className="bgimg-3 bg-container" id="degustations">
                <div className="bg-container-title">
                    <h2>Degustace a oslavy</h2>
                </div>
            </div>

            <div className="content">
                <div className="about-text" style={{marginBottom: '4rem'}}>
                    <p>
                        Přijďte naše vína ochutnat přímo k nám do vinařství nebo do degustačních sklepů,
                        kde budete mít možnost vyzkoušet vína mladá, ročníková, ale i archivní, která již
                        nelze koupit a jsou připravena pouze pro degustace. Během Vaší ochutnávky můžete
                        navštívit výrobní část nebo si vychutnat občerstvení z naší kuchyně. Následně Vámi
                        nejoblíbenější vína, s radostí dopravíme až k Vám domů v dohodnutém čase. Abychom mohli
                        naplnit Vaše očekávání, kontaktujte nás a dohodneme detaily.
                    </p>
                </div>

                <div className="container">
                    <div className="row spot-row">
                        <div className="col-xs-12 col-sm-6 spot-detail">
                            <div className="image-container">
                                <img src={`/assets/images/modrak1.jpg`} loading="lazy" alt="U Modráka"/>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 spot-detail">
                            <div className="text-container">
                                <h3 className="spot-detail-title">U Modráka</h3>
                                <p className="spot-detail-description">
                                    Vinný sklep „U Modráka“, je designový sklep s nezaměnitelnou atmosférou. Sklep
                                    samotný je jeden
                                    z nejstarších ve Vrbovci. Má dochovanou klenutou lisovnou a dostal taktéž čestné
                                    ocenění
                                    Grand Prix obce architektů. Degustace na míru, Vám zde připraví náš vinař až do 15
                                    osob.
                                </p>
                                <div>
                                    <div className="default-button" data-toggle="modal"
                                         data-target="#modrakReservationModal">Rezervovat
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row spot-row">
                        <div className="col-xs-12 col-sm-6 spot-detail mobile-show">
                            <div className="image-container">
                                <img src={`/assets/images/hnanice.jpg`} loading="lazy" alt="Hnanice"/>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 spot-detail">
                            <div className="text-container">
                                <h3 className="spot-detail-title">Hnanice</h3>
                                <p className="spot-detail-description">
                                    Vinný sklep Hnanice, je ukázkou krásného řemesla. Nejen díky své dominantní lisovně
                                    s pavlačí
                                    a krbem, ale spíše svými sklepními chodbami, dlouhými až 300 metrů. Kapacita sklepa
                                    je až 50 osob.
                                </p>
                                <div>
                                    <div className="default-button" data-toggle="modal"
                                         data-target="#hnaniceReservationModal">Rezervovat
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 spot-detail mobile-hide">
                            <div className="image-container">
                                <img src={`/assets/images/hnanice.jpg`} loading="lazy" alt="Hnanice"/>
                            </div>
                        </div>
                    </div>

                    <div className="row spot-row">
                        <div className="col-xs-12 col-sm-6 spot-detail mobile-show">
                            <div className="image-container">
                                <img src={`/assets/images/vino_van.jpg`} loading="lazy" alt="Víno van"/>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 spot-detail mobile-hide">
                            <div className="image-container">
                                <img src={`/assets/images/vino_van.jpg`} loading="lazy" alt="Víno van"/>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 spot-detail">
                            <div className="text-container">
                                <h3 className="spot-detail-title">Víno van</h3>
                                <p className="spot-detail-description">
                                    Víno Van je mobilní košt, jak se patří. Je nezávislý, což je ideální například při
                                    venkovní svatbě či
                                    oslavě,
                                    kde samotné místo nemá vlastní zázemí. Vinař se svým personálem přijede se vším, co
                                    potřebují a na Vás
                                    je jen
                                    začít ochutnávat. Přijedeme na pár hodin s celou škálou našich produktů nebo na celý
                                    den i s
                                    prosecco-barmanem,
                                    ledem a jeho vlastním sklem.
                                </p>
                                <div>
                                    <div className="default-button" data-toggle="modal"
                                         data-target="#vinoVanReservationModal">Rezervovat
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="modal fade" id="modrakReservationModal" tabIndex="-1" role="dialog"
                 aria-labelledby="modrakReservationModal" aria-hidden="true">
                <div className="modal-dialog reservation-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>


                            <h3>VÍNO ZMEKO - U Modráka</h3>

                            <div>
                                <label htmlFor="modrakName">Jméno a příjmení:</label>
                                <input type="text" id="modrakName" name="modrakName"/>
                                <label htmlFor="modrakCount">Počet degustujícich:</label>
                                <input type="number" id="modrakCount" name="modrakCount"/>
                                <label htmlFor="modrakDate">Datum a čas:</label>
                                <input type="text" id="modrakDate" name="modrakDate"/>
                                <label htmlFor="modrakEmail">E-mail:</label>
                                <input type="email" id="modrakEmail" name="modrakEmail"/>
                                <label htmlFor="modrakPhone">Telefonní číslo:</label>
                                <input type="text" id="modrakPhone" name="modrakPhone"/>
                                <label htmlFor="modrakNote">Poznámka:</label>
                                <textarea id="modrakNote" name="modrakNote" rows={4} cols="50"/>

                                <p id="modrakErrorText"/>

                                <div className="order">
                                    <div className="default-button" onClick={onModrakReservation}
                                         data-dismiss="modal"
                                         aria-label="Close">Objednat degustaci
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="hnaniceReservationModal" tabIndex="-1" role="dialog"
                 aria-labelledby="hnaniceReservationModal" aria-hidden="true">
                <div className="modal-dialog reservation-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <h3>VÍNO ZMEKO - Hnanice</h3>

                            <div>
                                <label htmlFor="hnaniceName">Jméno a příjmení:</label>
                                <input type="text" id="hnaniceName" name="hnaniceName"/>
                                <label htmlFor="hnaniceCount">Počet degustujícich:</label>
                                <input type="number" id="hnaniceCount" name="hnaniceCount"/>
                                <label htmlFor="hnaniceDate">Datum a čas:</label>
                                <input type="text" id="hnaniceDate" name="hnaniceDate"/>
                                <label htmlFor="hnaniceEmail">E-mail:</label>
                                <input type="email" id="hnaniceEmail" name="hnaniceEmail"/>
                                <label htmlFor="hnanicePhone">Telefonní číslo:</label>
                                <input type="text" id="hnanicePhone" name="hnanicePhone"/>
                                <label htmlFor="hnaniceNote">Poznámka:</label>
                                <textarea id="hnaniceNote" name="hnaniceNote" rows={4}
                                          cols="50"/>

                                <div className="order">
                                    <div className="default-button" onClick={onHnaniceReservation}
                                        data-dismiss="modal"
                                        aria-label="Close">Objednat degustaci
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="vinoVanReservationModal" tabIndex="-1" role="dialog"
                 aria-labelledby="vinoVanReservationModal" aria-hidden="true">
                <div className="modal-dialog reservation-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <h3>VÍNO ZMEKO - Víno van</h3>

                            <div>
                                <label htmlFor="vinoVanName">Jméno a příjmení:</label>
                                <input type="text" id="vinoVanName" name="vinoVanName"/>
                                <label htmlFor="vinoVanCount">Počet osob:</label>
                                <input type="number" id="vinoVanCount" name="vinoVanCount"/>
                                <label htmlFor="vinoVanDate">Datum a čas:</label>
                                <input type="text" id="vinoVanDate" name="vinoVanDate"/>
                                <label htmlFor="vinoVanPlace">Místo:</label>
                                <input type="text" id="vinoVanPlace" name="vinoVanPlace"/>
                                <label htmlFor="vinoVanEmail">E-mail:</label>
                                <input type="email" id="vinoVanEmail" name="vinoVanEmail"/>
                                <label htmlFor="vinoVanPhone">Telefonní číslo:</label>
                                <input type="text" id="vinoVanPhone" name="vinoVanPhone"/>
                                <label htmlFor="vinoVanNote">Poznámka:</label>
                                <textarea id="vinoVanNote" name="vinoVanNote" rows={4}
                                          cols="50"/>

                                <div className="order">
                                    <div className="default-button" onClick={onVinoVanReservation}
                                         data-dismiss="modal"
                                         aria-label="Close">Rezervovat
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="agreementModal" tabIndex="-1" role="dialog" aria-labelledby="agreementModal"
                 aria-hidden="true">
                <div className="modal-dialog agreement-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="default-button" data-dismiss="modal" aria-label="Close">Je mi více než 18
                                let
                            </div>

                            <p>Stránky používají cookies</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="toast fade show">
                <div className="toast-header">
                    <strong className="mr-auto"><i className="fa fa-check-circle" style={{color: 'green'}}/> Požadavek
                        byl odeslán</strong>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                </div>
                <div className="toast-body">
                    Váš požadavek byl úspěšně odeslán, co nejdříve se Vám ozveme.
                </div>
            </div>


            <footer className="border-top footer">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-3 col-xs-6 wine-detail">
                            <p>Prodejny</p>
                            <ul>
                                <li>ITVV s.r.o</li>
                                <li>
                                    Chvalovice Hatě 200
                                </li>
                                <li>
                                    669 02
                                </li>
                                <li>&nbsp;</li>
                                <li>
                                    Kocanda Kravsko
                                </li>
                                <li>
                                    Kravsko 45
                                </li>
                                <li>671 51</li>
                                <li>&nbsp;</li>
                                <li>Café Atlas</li>
                                <li>Brno</li>
                                <li>
                                    Žerotínovo náměstí 533/6
                                </li>
                                <li>602 00</li>
                            </ul>
                        </div>
                        <div id="contact" className="col-3 col-xs-6 wine-detail">
                            <p>Kontakt</p>
                            <ul className="footer-contact">
                                <li>
                                    <a href="tel:+420724318517">+420 724 318 517</a>
                                </li>
                                <li>
                                    <a href="mailto:info@vinozmeko.cz">info@vinozmeko.cz</a>
                                </li>
                            </ul>

                            <p>Adresa</p>
                            <ul>
                                <li>Vrbovec</li>
                                <li>
                                    Sklepní ulička, zastávka MHD
                                </li>
                            </ul>
                        </div>

                        <div className="col-3 col-xs-6 wine-detail">
                            <ul>
                                <li>Provozovatel: ITVV spol. s r.o.</li>
                                <li>
                                    Chvalovice 200, Hatě 669 02
                                </li>
                                <li>
                                    IČ: 44012951
                                </li>
                                <li>
                                    DIČ: CZ44012951
                                </li>
                            </ul>
                            <div className="socials">
                                <a href="https://www.facebook.com/vinozmeko" target="_blank" rel="noreferrer">
                                    <img src={`/assets/images/fb_icon.png`} alt="Facebook icon"/>
                                </a>
                                <a href="https://www.instagram.com/vinozmeko" target="_blank" rel="noreferrer">
                                    <img src={`/assets/images/instagram_icon.png`} alt="Instagram icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    &copy; 2021 - VÍNO ZMEKO
                </div>
            </footer>

            <div className="scroll-top" data-scroll="up">
                <span>{'<'}</span>
            </div>

            {/*<div className="banner">
                <h4>Novinka</h4>
                <p>Objednejte si na našem eshopu <span>Adventní kalendář</span> pro rok 2021</p>
                <div className="buy">
                    <a href="http://eshop.vinozmeko.cz/adventni-kalendar" target="_blank" rel="noreferrer">koupit ></a>
                </div>
            </div>*/}
        </div>
    );
}

export default App;
