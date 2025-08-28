import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import Image from "next/image";

const TermsPage = () => {
    return (
        <section className="mx-auto max-w-3xl py-16 px-4 text-gray-100">
            <RevealText
                field={[]}
                id="terms-heading"
                as="h1"
                className="font-display text-4xl md:text-5xl mb-8 text-center"
                align="center"
                staggerAmount={0.1}
                duration={0.5}
            />

            <FadeIn
                className="text-lg text-gray-300 space-y-6"
                vars={{ duration: 0.8, delay: 0.3 }}
            >
            <Image src="/icon.png" alt="KUD Ante Zaninovic" width={150} height={25}/>
                <h2>1. Uvod</h2>
                <p>
                    Dobrodošli na mrežne stranice Kulturno-umjetničkog društva
                    „Ante Zaninović“ (dalje: „KUD“). Naše djelovanje temelji se
                    na ljubavi prema folkloru, očuvanju kulturne baštine te
                    predstavljanju različitih regionalnih tradicija kroz ples,
                    pjesmu, glazbu i običaje. Korištenjem ove mrežne stranice
                    potvrđujete da ste upoznati s uvjetima i pravilima navedenima
                    u ovom dokumentu te da ih prihvaćate.
                </p>
                <p>
                    Ovaj tekst istodobno služi kao <strong>Uvjeti korištenja</strong> i{" "}
                    <strong>Pravila privatnosti</strong>. Njegova svrha jest
                    osigurati transparentnost u pogledu načina na koji objavljujemo
                    i dijelimo sadržaj, kako koristimo osobne podatke te koja prava
                    i odgovornosti imate Vi kao korisnici stranice i mi kao društvo.
                </p>

                <h2>2. Korištenje sadržaja na mrežnim stranicama</h2>
                <h3>2.1 Slobodno korištenje fotografija i materijala</h3>
                <p>
                    Sve fotografije, tekstovi i materijali objavljeni na našim
                    mrežnim stranicama mogu se slobodno koristiti u nekomercijalne
                    svrhe, uz navođenje izvora kada je to moguće. Vjerujemo da
                    kultura pripada svima te da je naša uloga dijeliti je, a ne
                    ograničavati.
                </p>
                <p>
                    Iako se u budućnosti pojedini sadržaji mogu učiniti dostupnima
                    samo putem prijave pomoću Google računa (npr. kako bi se
                    zaštitila privatnost članova), načelo otvorenosti ostaje isto:
                    ono što dijelimo danas i sutra, dijelimo s namjerom da bude
                    dostupno i korisno svima.
                </p>

                <h3>2.2 Odgovornost korisnika</h3>
                <p>
                    Korisnici mogu slobodno preuzimati i dijeliti sadržaje, no
                    pritom se obvezuju da iste neće koristiti u svrhe koje su
                    protuzakonite, diskriminatorne ili protivne osnovnim
                    vrijednostima društva.
                </p>

                <h3>2.3 Autorska prava</h3>
                <p>
                    Sadržaj objavljen na našim stranicama rezultat je rada naših
                    članova i suradnika. Slobodno korištenje materijala ne znači
                    odricanje od autorskih prava, nego namjerno pružanje mogućnosti
                    da se kulturni sadržaji šire i prenose bez prepreka.
                </p>

                <h2>3. Stav o kulturi i folkloru</h2>
                <p>
                    KUD „Ante Zaninović“ njeguje i predstavlja različite folklorne
                    tradicije. Iako prikazujemo i izvodimo pojedine plesne i
                    glazbene obrasce u obliku u kojem su nam preneseni, želimo jasno
                    naglasiti: <strong>ne smatramo da je naš način izvođenja jedini
                    ispravan način</strong>.
                </p>
                <p>
                    Kultura je živa, promjenjiva i zajednička. Folklor se mijenja
                    kroz generacije, a njegova vrijednost ne leži u strogom
                    pridržavanju jednog oblika, već u otvorenosti, dijeljenju i
                    međusobnom obogaćivanju.
                </p>
                <p>
                    Naša misija jest potaknuti ljude da cijene i istražuju tradiciju,
                    ali i da shvate kako ona postoji upravo zato da se prenosi i
                    razvija.
                </p>

                <h2>4. Privatnost korisnika</h2>
                <h3>4.1 Podaci koje prikupljamo</h3>
                <p>
                    Korištenjem naše stranice ne prikupljamo osobne podatke osim
                    onih koji su nužni za funkcioniranje stranice. Ako u budućnosti
                    omogućimo pristup određenim sadržajima putem prijave s Google
                    (Gmail) računom, ti podaci koristit će se isključivo za
                    autentifikaciju i omogućavanje pristupa sadržaju.
                </p>

                <h3>4.2 Kolačići</h3>
                <p>
                    Naša stranica može koristiti kolačiće radi poboljšanja
                    korisničkog iskustva i osnovne funkcionalnosti (npr. pamćenje
                    jezika stranice). Ne koristimo kolačiće za oglašavanje niti za
                    praćenje korisnika u komercijalne svrhe.
                </p>

                <h3>4.3 Dijeljenje podataka</h3>
                <p>
                    KUD ne prodaje niti dijeli osobne podatke korisnika trećim
                    stranama. Podaci se koriste isključivo u svrhe unutar društva,
                    kao što su administracija i komunikacija.
                </p>

                <h3>4.4 Sigurnost podataka</h3>
                <p>
                    Poduzimamo razumne tehničke i organizacijske mjere kako bismo
                    zaštitili osobne podatke korisnika. Ipak, korisnici su svjesni
                    da nijedan sustav prijenosa podataka putem interneta nije
                    potpuno siguran te korištenjem stranice prihvaćaju taj rizik.
                </p>

                <h2>5. Odgovorni članovi društva</h2>
                <p>
                    Za transparentnost i vjerodostojnost rada našeg društva navodimo
                    imena odgovornih osoba:
                </p>
                <ul className="list-disc ml-6">
                    <li>Predsjednica: Marica Tadin</li>
                    <li>Voditelj orkestra: Dubravko Radišić</li>
                    <li>Tajnik: Davor Budić</li>
                </ul>
                <p>
                    Svi navedeni članovi dostupni su za kontakt putem službenih
                    kanala društva u slučaju pitanja, prijedloga ili zahtjeva
                    vezanih za rad KUD-a i korištenje stranice.
                </p>

                <h2>6. Naša misija i vrijednosti</h2>
                <ul className="list-disc ml-6">
                    <li><strong>Otvorenost:</strong> Svi materijali koje objavljujemo dostupni su javnosti.</li>
                    <li><strong>Uvažavanje:</strong> Poštujemo različite tradicije i pristupe.</li>
                    <li><strong>Edukacija:</strong> Potičemo učenje o povijesti i razvoju folklora.</li>
                    <li><strong>Dijeljenje:</strong> Sve što radimo usmjereno je na dostupnost kulture svima.</li>
                </ul>

                <h2>7. Odricanje od odgovornosti</h2>
                <p>
                    Iako nastojimo pružiti točne i ažurirane informacije, ne možemo
                    jamčiti da će svi podaci na našoj stranici uvijek biti potpuno
                    točni ili potpuni. KUD se odriče odgovornosti za eventualne
                    štete koje bi mogle nastati korištenjem ili nemogućnošću
                    korištenja sadržaja.
                </p>

                <h2>8. Prava korisnika</h2>
                <ul className="list-disc ml-6">
                    <li>Zatražiti dodatne informacije o načinu korištenja podataka.</li>
                    <li>Zatražiti ispravak ili brisanje osobnih podataka.</li>
                    <li>Odbiti daljnju obradu osobnih podataka, ako bi se provodila.</li>
                </ul>

                <h2>9. Izmjene uvjeta i pravila</h2>
                <p>
                    KUD „Ante Zaninović“ zadržava pravo izmjene ovih Uvjeta i pravila
                    privatnosti u bilo kojem trenutku, uz objavu izmjena na stranici.
                    Preporučujemo korisnicima da povremeno provjere ovu stranicu
                    kako bi bili upoznati s aktualnim pravilima.
                </p>

                <h2>10. Zaključak</h2>
                <p>
                    Ovim dokumentom želimo postići ravnotežu između pravne jasnoće i
                    kulturne misije. Naša svrha nije ograničiti, nego omogućiti.
                </p>
                <p>
                    Fotografije i materijali neka slobodno kruže. Članci neka svjedoče
                    o događanjima, nastupima i putovanjima. Naše tradicije neka se
                    dijele, jer kultura ima vrijednost samo kada se prenosi i dijeli.
                </p>
                <p>
                    Zahvaljujemo Vam što ste dio naše priče.
                </p>
                <p className="mt-4">
                    Korištenjem ove stranice pristajete na sve navedene uvjete i
                    odredbe. Za dodatne informacije kontaktirajte nas putem
                    službenih kanala.
                </p>
            </FadeIn>
        </section>
    );
};

export default TermsPage;
