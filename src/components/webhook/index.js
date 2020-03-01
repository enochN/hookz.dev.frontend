import React, { useState, useEffect } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { getWebhooksData } from "../../services/webhookz";
import WebhookData from "../WebhookData";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en";
import JavascriptTimeAgo from "javascript-time-ago";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Typography } from "antd";

function Webhook() {
    const { Paragraph, Text } = Typography;
    const { webhook } = useParams();
    const webhookUrl = `${process.env.REACT_APP_BACKEND_URL}/a/${webhook}`;

    const [hooksData, setHooksData] = useState({});
    const [selectedWebhookData, setSelectedWebhookData] = useState({});
    const [selectedWebhookIndex, setSelectedWebhookIndex] = useState(1);

    useEffect(() => {
        JavascriptTimeAgo.locale(en);

        getWebhooksData(webhook)
            .json(response => {
                setHooksData(response);

                const selectedWebhookData = response.find(
                    data => data.id === response[0].id
                );
                setSelectedWebhookData(selectedWebhookData);
            })
            .catch(error => {
                console.log("error getting all data ", error);
            });
    }, []);

    const select = (id, index) => {
        const selectedWebhookData = hooksData.find(data => data.id === id);
        setSelectedWebhookData(selectedWebhookData);
        setSelectedWebhookIndex(index);
    };

    const isEmpty = obj => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    return (
        <div className="col-md-12">
            <div className="webhooks-nav">
                <p className="request-total">
                    <span>{hooksData.length}</span> Total Requests
                </p>
                <ul>
                    {hooksData.length > 0 &&
                        hooksData.map((data, index) => (
                            <WebhookItemListView
                                key={data.id}
                                select={select}
                                webhook={data}
                                index={index + 1}
                                active={index + 1 === selectedWebhookIndex}
                            />
                        ))}
                </ul>
            </div>
            <article className="webhooks_content">
                <p className="request-syntax">
                    Here's your unique webhook URL. You can now make any kind of
                    request.
                    <span>
                        <b>
                            <Paragraph copyable={{ text: webhookUrl }}>
                                <Text strong code>
                                    {webhookUrl}
                                </Text>
                            </Paragraph>
                        </b>
                    </span>
                </p>
                {/* <p className="request-syntax">
                    <Text type="warning">
                        curl -X POST -d 'Catch All Requests!' {webhookUrl}
                    </Text>
                </p> */}
                {isEmpty(selectedWebhookData) ? (
                    `No request data selected. You can now make any kind of request to ${webhookUrl}`
                ) : (
                    <WebhookData
                        details={selectedWebhookData}
                        selectedWebhookIndex={selectedWebhookIndex}
                    />
                )}
            </article>
        </div>
    );
}

const WebhookItemListView = ({ webhook, select, index, active }) => {
    const data = JSON.parse(webhook.data);

    return (
        <li
            key={webhook.id}
            style={{ cursor: "pointer" }}
            onClick={() => select(webhook.id, index)}
            className={active ? "selected" : ""}
        >
            <span className="counter">#{index}</span>{" "}
            <span
                className={`webhook-item-method webhook-item-method-${data.method.toLowerCase()}`}
            >
                {data.method}
            </span>{" "}
            <span className="webhook-item-date">
                <ReactTimeAgo date={webhook.created_at} />
            </span>
            <br />
            <span className="webhook-item-http-version">
                HTTP Version: {data.httpVersion}
            </span>
        </li>
    );
};

export default Webhook;
