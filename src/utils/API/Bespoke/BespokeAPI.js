import { CommonFileAPI } from "../CommonAPI/CommonFileAPI";
import { wesbiteDomainName } from '../../Glob_Functions/GlobalFunction'

export const BespokeAPI = async (obj = {}, file) => {
    const domainname = wesbiteDomainName;
    const data = {
        "FullName": obj?.FullName || "",
        "InQuiryCompanyName": obj?.InQuiryCompanyName || '',
        "EmailId": obj?.EmailId || "",
        "mobileno": obj?.mobileno || "",
        "InQuirySubject": obj?.InQuirySubject || '',
        "WebSite": obj?.WebSite || 0,
        "Be_In_Message": obj?.Be_In_Message || "",
        "Themeno": obj?.Themeno || "",
        "domainname": domainname,
    }

    let stringify = JSON.stringify(data);

    let formData = new FormData();
    formData.append("con", "{\"id\":\"\",\"mode\":\"BESPOKE\"}");
    formData.append("mode", "BESPOKE");
    formData.append("f", "BESPOKE");
    formData.append("dp", stringify);
    formData.append("BeSpokeFile", file ?? "");

    try {
        const res = await CommonFileAPI(formData);
        return res?.Data?.rd?.[0];
    } catch (error) {
        console.error("BespokeErr", error);
        return null;
    }
}
