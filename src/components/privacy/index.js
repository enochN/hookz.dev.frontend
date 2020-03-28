import React from "react";
import "./styles.css";

function Privacy() {
    return (
        <div className="privacy-content">
            <h3>Privacy Policy for hookz.dev</h3>

            <h4>1. Who We Are</h4>
            <p>
                https://hookz.dev is owned by Mandeeya at https://mandeeya.io.
                Contact: hello@mandeeya.io
            </p>

            <h4>2. Data collection</h4>
            <p>
                By using the services provided to you at hookz.dev, you accept
                that the following data is stored: <br />
                Your IP address, for rate limiting
                <br />
                Any data that you submit to hookz.dev to be delivered back to
                the user. <br />
                The data provided by the user will be permanently deleted after
                30 days and cannot be recovered.
            </p>

            <h4>3. Analytics</h4>
            <p>Google Analytics is used to collect and gather statistics.</p>

            <h4>4. Data Retention</h4>
            <p>
                Without user action, all data submitted to hookz.dev for each
                webhook will be automatically deleted after 30 days.
            </p>

            <h4>5. Your Rights</h4>
            <p>
                If you have used the service and want to delete the data before
                30 days, there's a delete button which can be used, else, you
                can send an email to hookz.dev@mandeeya.io
            </p>

            <h4>6. Where we send your data</h4>
            <p>
                We do not share any data provided to hookz.dev with any third
                party providers. We only save and restore your data to you.
            </p>
        </div>
    );
}

export default Privacy;
