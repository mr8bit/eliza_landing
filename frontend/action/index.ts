export const URl_BACKEND = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}`

function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    // @ts-ignore
    error.response = response;
    throw error;
}

export const Action = {
    sendRequest: (data) => {
        return fetch(`${URl_BACKEND}/request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(data)

            }
        ).then(checkHttpStatus)
            .then((response) => response.json())
            .then((response) => {
                return response;
            })
    },
    sendQuestion: (data) => {
        return fetch(`${URl_BACKEND}/question`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(data)
            }
        ).then(checkHttpStatus)
            .then((response) => response.json())
            .then((response) => {
                return response;
            })
    }

}
