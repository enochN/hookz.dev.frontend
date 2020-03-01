import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home";
import "./styles.css";
import Webhook from "../webhook";
import { create } from "../../services/webhookz";

function Layout() {
    const createWebhook = () => {
        create()
            .json(response => {
                if (response.id.name) {
                    window.location.replace(`/${response.id.name}`);
                }
            })
            .catch(() => {
                console.log("error making request");
            });
    };

    return (
        <Router>
            <div className="site-wrap">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <header className="site-navbar py-3" role="banner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-11 col-xl-2">
                                <h1 className="mb-0">
                                    <a href="/" className="text-white h2 mb-0">
                                        Webhooks
                                        <span className="text-primary">
                                            Tester
                                        </span>{" "}
                                    </a>
                                </h1>
                            </div>
                            <div className="col-12 col-md-10 d-none d-xl-block">
                                <nav
                                    className="site-navigation position-relative text-right"
                                    role="navigation"
                                >
                                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                        <li className="active">
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/">About</a>
                                        </li>
                                        <li>
                                            <a href="/">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="/">Github</a>
                                        </li>
                                        <li className="cta">
                                            <a href="#" onClick={createWebhook}>
                                                New Webhook
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3">
                                <a
                                    href="#"
                                    className="site-menu-toggle js-menu-toggle text-white"
                                >
                                    <span className="icon-menu h3"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <div className="site-section site-hero">
                <div className="container">
                    <div className="row align-items-center">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/:webhook" exact component={Webhook} />
                        </Switch>
                    </div>
                </div>
            </div>
            {/* <div className="footer">
                        <a href="https://mandeeya.io">mandeeya.io </a> |{" "}
                        {new Date().getFullYear()} |{" "}
                        <a className="active" href="#">
                            Privacy Terms
                        </a>
                    </div> */}
        </Router>
    );
}

export default Layout;
