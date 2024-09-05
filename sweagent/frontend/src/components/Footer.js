import "../static/footer.css";
import React from "react";

const Footer = () => {
    return (
        <footer>
            <div>
                <p>
                    © 2024 SWE-crafter is proudly sponsored by <a href={"https://umans.tech"} target={"_blank"}>Umans
                    Tech</a>.
                </p>
                <p>
                    Authors: Wassel Alazhar and Naji Alazhar. Want to contribute? Check out our <a
                    href={"https://github.com/umans-tech/SWE-crafter"} target={"_blank"}>GitHub repository</a>.
                </p>
                <p style={{fontSize: "smaller"}}>
                    SWE-crafter is a fork of SWE-agent.
                </p>
                <p style={{fontSize: "smaller"}}>
                    SWE-crafter uses your LLM to automatically fix GitHub issues.
                </p>
                <p style={{fontSize: "smaller"}}>
                    Emphasizing a Test-First approach, it validates PRs with pre-written tests,
                    providing high-quality feedback and helping the agent correct hallucinations.
                </p>

                <p style={{fontSize: "smaller"}}>
                    Benchmarks for this method are ongoing, showing promising improvements in code quality
                    and bug resolution.
                </p>

                <p style={{fontSize: "smaller"}}>
                    Many thanks to the creators of SWE-agent for their ongoing contributions and
                    exceptional work, which has inspired and enabled the evolution of this project.
                </p>
                <p style={{fontSize: "smaller"}}>
                    John Yang, Carlos E. Jimenez, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan,
                    Ofir Press
                </p>

            </div>
        </footer>
    );
};

export default Footer;
