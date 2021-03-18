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
                <div>
                    <h1>Om mig</h1>
                    <p>
                        Jeg blev færdiguddannet som datamatiker januar 2020. Og har erfaring med Java, Node.js, SQL, NoSQL og Android.
                    </p>
                    <p>
                        Jeg arbejder altid med andre folk i tankerne, hvilket for mig betyder at jeg gør mit yderste for at imødekomme forventningerne folk har til mig og mit arbejde. Og derfra prøver jeg at overgå dem.
                    </p>
                    <p>
                        Jeg er vedholdende og giver ikke op, uanset hvad. Men jeg er ikke for stolt til at sige til, når jeg har brug for hjælp eller har problemer med mit arbejde.
                    </p>
                    <p>
                        Jeg lytter når folk har noget at sige til mig, og svarer først når jeg har tænkt tingene igennem.
                    </p>
                    <p>Mine fritids aktiviteter indbefatter:</p>
                    <ul>
                        <li>Gåture for at nyde naturen</li>
                        <li>
                        Programmerer mine egne små projekter for at holde mine færdigheder ved lige.
                        </li>
                        <li>
                        Finde på historier, som jeg arbejder på at gøre til rigtige bøger.
                        </li>
                        <li>Lære nye færdigheder og afprøve nye ting.</li>
                    </ul>
                    <p>
                        Jeg er meget hjælpsom og kommer gerne, når min familie eller naboer beder om min hjælp. Om det er hjælp med it eller noget andet, så stiller jeg mig til rådighed for at hjælpe.
                    </p>

                    <h2>Kompetencer</h2>
                    <h4>Personlige</h4>
                    <ul>
                        <li>Jeg er meget opfindsom og iderig</li>
                        <li>Jeg har svært ved at sige nej, hvis man beder om min hjælp</li>
                        <li>Jeg kan stort set arbejde sammen med hvem som helst</li>
                        <li>Jeg bliver sjældent sur og er meget forstående</li>
                    </ul>

                    <h4>Faglige</h4>
                    <ul>
                        <li>
                        Jeg har i mange år enten selv fundet det IT udstyr jeg skulle købe, eller hjulpet andre med det. Dette har skaffet mig en erfaring med at finde det rette udstyr til jobbet.
                        </li>
                        <li>
                        Jeg har i mange tilfælde også sat det op, eller blevet konsulteret om det.
                        </li>
                        <li>
                        Jeg har en bred erfaring med at løse  IT problemer. Om det omhandler printere, browser, mobiler eller computere finder jeg altid en løsning
                        </li>
                        <li>
                        Jeg har en del Erfaring med MicroSoft Office 365, og de apps der følger med det.
                        </li>
                        <li>Jeg har også lettere erfaring med Google Drive og dets systemer.</li>
                        <li>
                        Jeg har længe brugt Time Manager principper, til at planlægge min hverdage og sætte med nogle påmindelser op, med opgaver som jeg skal huske.
                        </li>
                        <li>
                        Jeg er erfaren med online møde systemer; som Join.me, Skype, TeamViewer, Microsoft Teamsog Zoom. Jeg har for det meste holdt møder med kun en person, eller brugt dem til at hjælpe med folks IT problemer.
                        </li>
                        <li>Jeg har lært det basale inden for brug af Wordpress.</li>
                    </ul>
                </div>
            </main>
            
            <Footer />
            </div>
        
    )
}