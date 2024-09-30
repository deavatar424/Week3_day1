
function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; 

            if (success) {
                resolve({ data: "Network request successful!" });
            } else {
                reject("Network error: Failed to fetch data.");
            }
        }, 2000);
    });
}


simulateNetworkRequest()
    .then((response) => {
        console.log("Success:", response.data);
    })
    .catch((error) => {
        console.error(error);
    });
