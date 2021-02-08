import Head from 'next/head'
import styles from '../styles/About.module.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'

export default function Contact() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Om mig</title>
            </Head>

            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Hello from About</h1>
                <div>
                <h1>Om mig</h1>
                    <p>
                        Hallp, jeg er Christian Wendelboe-Nielsen, og jeg er uddannet datamatiker med
                        erfaring inden for React, Java, Node.js, SQL, NoSQL og Android.
                    </p>
                    <p>
                        Jeg arbejder altid med andre folk i tanker, hvilket betyder at jeg gør
                        mit yderste for at imødekomme de forventninger folk har til mig og mit
                        arbejde.
                    </p>
                    <p>
                        Jeg er vedholdende og giver ikke op, uanset hvad, og jeg er ikke for
                        stolt til at sige til, når jeg har brug for hjælp eller har problemer
                        med mine opgaver.
                    </p>
                    <p>
                        Jeg lytter når folk har noget at sige til mig, og svarer først når jeg
                        har tænkt tingene igennem.
                    </p>
                    <p>Mine fritids aktiviteter indbefatter:</p>
                    <ul>
                        <li>Gåture for at nyde natturen</li>
                        <li>
                        Programmerer mine egne små projekter for at holde mine færdigheder ved
                        lige; som enten er mindre webapplikationer, telefon apps er spil lavet
                        i Unity.
                        </li>
                        <li>
                        Finder på historier, som jeg arbejder på at gøre til rigtige bøger,
                        dette er dog inden for feltet af skønlitteratur.
                        </li>
                        <li>Lære nye færdigheder og afprøve nye ting.</li>
                    </ul>
                    <p>
                        Jeg er meget hjælpsom og kommer gerne, når min familie eller naboer har
                        problemer med noget, som jeg kan hjælpe med. Om det er hjælp med deres
                        it eller noget andet, så vil jeg stille mig til rådighed for at hjælpe.
                    </p>

                    <h2>Kompetencer</h2>
                    <h4>Personlige</h4>
                    <ul>
                        <li>Opfindsom</li>
                        <li>Iderig</li>
                        <li>Har svært ved at sige nej, hvis man beder om min hjælp</li>
                        <li>Kan arbejde sammen med hvem som helst</li>
                        <li>Bliver sjældent sur og er meget forstående</li>
                    </ul>

                    <h4>Faglige</h4>
                    <ul>

                        <li>
                        Jeg har i mange år enten selv fundet det IT udstyr jeg skulle købe,
                        eller hjulpet andre med det. Dette har skaffet mig en erfaring med at
                        finde det rette udstyr til jobbet. IT udstyret omfatter bærbare med
                        Windows 10, stationære med Windows 10, tablets med Android, mobiler
                        med Android.
                        </li>

                        <li>
                        Og efter IT udstyret er blevet købt, er jeg også den der enten satte
                        det op, eller også konsulterede jeg om det.
                        </li>

                        <li>
                        Med undtagelse af at jeg i en ung alder fik installeret en virus eller
                        to på min computer er jeg meget erfaren med at løse IT problemer, både
                        mine egne og andres.
                        </li>

                        <li>Kan nemt finde ud af systemer</li>

                        <li>
                        Jeg har erhvervet mig en del Erfaring med MicroSoft Office 365,
                        særdeles med Power Point, som jeg har lavet præsentationer i, Excel,
                        som jeg bruger til mit regnskab og holde styr på frysers indhold, og
                        Word, som jeg har brugt til at skrive bøger i.
                        </li>

                        <li>Jeg har også lettere erfaring med Google Drive og dets systemer.</li>

                        <li>
                        Erfaring med Time Manager, jeg har lagt mine hverdage op med nogle
                        alarmer, med opgaver som jeg skal huske. Jeg har det også med at blive
                        absorberet i mit arbejde, og kan derfor miste mit forhold til tiden.
                        </li>

                        <li>
                        Jeg er lettere erfaren med online møde systemer; som Join.me, Skype,
                        TeamViewer og Zoom. Jeg har for det meste holdt møder med kun en
                        person, eller brugt dem til at hjælpe med folks IT problemer.
                        </li>

                        <li>Jeg har lært det basale inden for brug af Wordpress.</li>
                    </ul>
                </div>
            </main>
            
            <Footer />
            </div>
        
    )
}