export const get = async (apiAddress) => {
    try {
        const responseJson = await fetch(apiAddress);
        return responseJson.json();
    } catch(e) {
        return e;
    }
}