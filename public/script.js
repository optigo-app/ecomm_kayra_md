// 🌐 Build the path to fetch init data
function storInitDataPath() {
    let hostName = (window.location.hostname === 'localhost' || window.location.hostname === 'zen')
        ? 'fgstore.web'
        : window.location.hostname;

    if (hostName.startsWith('www.')) {
        hostName = hostName.substring(4);
    }

    return `${window.location.protocol}//${hostName}/Website_Store/WebSiteStaticImage/${hostName}`;
}

// ✅ Migrate data from localStorage to sessionStorage (and delete from localStorage)
function migrateFromLocalToSessionStorage(key) {
    const localValue = localStorage.getItem(key);
    if (localValue) {
        try {
            sessionStorage.setItem(key, localValue);
            localStorage.removeItem(key);
            console.log(`🔁 Migrated "${key}" from localStorage to sessionStorage`);
        } catch (e) {
            console.error(`❌ Migration error for "${key}":`, e);
        }
    }
}

// ✅ Save JSON data into sessionStorage with validation
async function storeInSessionStorage(key, value) {
    try {
        const jsonString = JSON.stringify(value);
        sessionStorage.setItem(key, jsonString);

        const storedValue = sessionStorage.getItem(key);
        if (storedValue === null || storedValue !== jsonString) {
            throw new Error(`Value not saved correctly for key: ${key}`);
        }

        console.log(`✅ sessionStorage set: ${key}`);
        return true;
    } catch (error) {
        console.error(`❌ sessionStorage error [${key}]:`, error);
        return false;
    }
}

let callCount = 0;
const maxRetries = 3;
const path = `${storInitDataPath()}/StoreInit.json`;

// 📦 Fetch init data & store it in sessionStorage
const fetchStoreInit = async (attempt = 1) => {
    const start = performance.now();
    let success = false;

    if (callCount >= maxRetries) {
        console.warn("🚫 Maximum retry attempts reached.");
        return false;
    }

    callCount++;

    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const json = await response.json();

        if (!json?.rd || !Array.isArray(json.rd) || json.rd.length === 0) {
            throw new Error("Invalid JSON structure");
        }

        const [rd0] = json.rd;

        // 🔁 Migrate from localStorage (if any old data exists)
        migrateFromLocalToSessionStorage("storeInit");
        migrateFromLocalToSessionStorage("myAccountFlags");
        migrateFromLocalToSessionStorage("CompanyInfoData");

        // ✅ Store fresh data
        success = await storeInSessionStorage("storeInit", rd0);
        success = success && await storeInSessionStorage("myAccountFlags", json.rd1);
        success = success && await storeInSessionStorage("CompanyInfoData", json.rd2?.[0] || {});

        if (success) {
            console.log("✅ StoreInit saved to sessionStorage");
        }

    } catch (error) {
        console.error(`❌ Attempt ${attempt}: StoreInit fetch failed`, error);
    } finally {
        const duration = performance.now() - start;
        console.log(`⏱ Execution time: ${(duration / 1000).toFixed(2)}s`);

        if (!success && callCount < maxRetries) {
            console.log(`🔁 Retrying... (${callCount + 1}/${maxRetries})`);
            setTimeout(() => fetchStoreInit(attempt + 1), 2000);
        }
    }

    return success;
};

// 🚀 Run after DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
    const isDataFetched = await fetchStoreInit();

    if (!isDataFetched) {
        console.warn("❌ StoreInit data fetch failed. UI will not be shown.");
        document.body.innerHTML = "<h1>Error loading data, please try again later.</h1>";
        return;
    }
});

// 💡 Load assets & block right click after page fully loads
window.onload = async function () {
    // Inject Razorpay script and fonts only if online
    if (navigator.onLine) {
        setTimeout(function () {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.type = "text/javascript";
            document.body.appendChild(script);
        }, 6000);

        setTimeout(function () {
            const head = document.head;

            const link1 = document.createElement("link");
            link1.href = "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rosarivo:ital@0;1&family=Arizonia&family=Lato:wght@300;400&family=Montserrat:wght@400;500&family=Playfair+Display&family=Tenor+Sans&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Nunito:wght@200..1000&family=Cedarville+Cursive&display=swap";
            link1.rel = "stylesheet";
            head.appendChild(link1);

            const link2 = document.createElement("link");
            link2.href = "https://db.onlinewebfonts.com/c/8c6cc8824a468b33768701915664b3e9?family=FreightDisp+Pro+Medium";
            link2.rel = "stylesheet";
            head.appendChild(link2);
        }, 10000);
    } else {
        console.log("⚠️ No internet connection. External scripts will not be loaded.");
    }

    // ❌ Disable right-click
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
};
