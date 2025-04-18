import { CommonFileAPI } from "../CommonAPI/CommonFileAPI";
import {wesbiteDomainName} from '../../Glob_Functions/GlobalFunction'

export const ContactUsAPI = async (obj = {}) => {
    const data = {
        "FullName": obj?.FullName || "",
        "InQuiryCompanyName": obj?.InQuiryCompanyName || '',
        "EmailId": obj?.EmailId || "",
        "mobileno": obj?.mobileno || "",
        "InQuirySubject": obj?.InQuirySubject || '',
        "WebSite": obj?.WebSite || "",
        "Be_In_Message": obj?.Be_In_Message || "",
        "Themeno": obj?.Themeno || "",
        "domainname": wesbiteDomainName ,
    }

    let stringify = JSON.stringify(data);

    let formData = new FormData();
    formData.append("con", "{\"id\":\"\",\"mode\":\"CONTACTUS\"}");
    formData.append("mode", "CONTACTUS");
    formData.append("f", "CONTACTUS");
    formData.append("dp", stringify);

    try {
        const res = await CommonFileAPI(formData);
        return res?.Data?.rd?.[0];
    } catch (error) {
        console.error("ContactusErr", error);
        return null;
    }
}
