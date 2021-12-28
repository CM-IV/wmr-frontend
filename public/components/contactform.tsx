import { Fragment } from "preact"


const ContactForm = () => {

    return (

        <Fragment>
            <section class="section">
                <h1 class="title">Contact Me</h1>
                <p>Send me an email <a href="mailto:cmathIV@protonmail.com">here</a>, 
                or sign up to receive updates with your email so that
                I can get back to you.</p>
            </section>

            <section class="section">
                <div class="box">
                    <form name="contact" method="POST" data-netlify-recaptcha="true"  data-netlify="true">
                        <div class="field">
                            <div class="control">
                                <label class="label">
                                    Email
                                    <input required class="input" type="email" name="email" placeholder="email here" />
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <label class="label">
                                    Message
                                    <textarea class="textarea" type="text" name="message" placeholder="message here"></textarea>
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <div data-netlify-recaptcha="true"></div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button class="button is-link" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>

    )

}

export { ContactForm };