import { CommonAPI } from "../CommonAPI/CommonAPI";
import { wesbiteDomainName } from '../../Glob_Functions/GlobalFunction'


export const ContinueWithEmailAPI = async (trimmedEmail) => {
    const domainname = wesbiteDomainName;


    let response

    try {
        const storeInit = JSON.parse(sessionStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;

        const combinedValue = JSON.stringify({
            userid: `${(trimmedEmail).toLocaleLowerCase()}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`,
            "domainname": domainname
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
            "con": "{\"id\":\"\",\"mode\":\"WEBVALDNEMAIL\"}",
            "f": "emilValid (handleEmail)",
            p: encodedCombinedValue,
            "dp": combinedValue,

        };
        response = await CommonAPI(body);
    } catch (error) {
        console.error('Error:', error);
    }

    return response;

}