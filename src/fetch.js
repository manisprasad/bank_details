const apiData = async (ifscCode) => {
    try {
        const apiUrl = `https://bank-apis.justinclicks.com/API/V1/IFSC/${ifscCode}/`;
        const response = await fetch(apiUrl); // Await the fetch call
        if (response.ok) {
            const data = await response.json(); // Await parsing the JSON response
            console.log(data);
            return data;
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }
}

export default apiData;
