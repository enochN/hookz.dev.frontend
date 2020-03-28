import React from "react";
import "./styles.css";

function About() {
    return (
        <div className="about-content">
            <p>
                hookz.dev is a free and open source web tool to help developers
                quickly test webhooks or catch and inspect all http requests.
            </p>
            <p>
                hookz.dev is built with nodejs (backend) and reactjs (frontend).
                View on <a href="https://github.com/rasheeda">github</a>.
                Backend and Frontend repositories are separate
            </p>
        </div>
    );
}

export default About;
