
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve({ data: "Here is your data!" });
            } else {
                reject("Error: Unable to fetch data.");
            }
        }, 2000);
    });
}


async function processData() {
    try {
        const result = await fetchData();
        console.log("Data fetched successfully:", result.data);
    } catch (error) {
        console.error(error);
    }
}


processData();
