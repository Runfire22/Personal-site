export default function ContactForm() {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <div>
                <label htmlfor="name">Navn:</label><br/>
                <input  type="text" name="navn" id="name" placeholder="Dit navn" required />
            </div><br/>

            <div>
                <label htmlfor="email">E-mail:</label><br/>
                <input type="email" name="email" id="email" placeholder="Din e-mail" required />
            </div><br/>
            
            <div>
                <label htmlfor="subject">Emne:</label><br/>
                <input type="text" name="subject" id="subject" placeholder="Emne" required />
            </div><br/>
            
            <div>
                <label htmlfor="message">Besked:</label> <br/>
                <textarea type="text" name="message" id="message" placeholder="Din besked" required />
            </div>

            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}