import wretch from "wretch";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/webhooks`;

export const create = () => {
    wretch(API_URL)
        .headers({
            "Access-Control-Allow-Origin": "*",
            crossDomain: true
        })
        .post();
};

export const getWebhooksData = webhook => {
    wretch(`${API_URL}/${webhook}/data`)
        .headers({
            "Access-Control-Allow-Origin": "*",
            crossDomain: true
        })
        .get();
};
