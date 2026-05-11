//Please credit EvanBenjamin27 on Github

//double check that the JELLYFIN_URL is what you have actually setup.
const JELLYFIN_URL = "http://localhost:8096";

async function checkJellyfin() {
    const dot = document.getElementById("jellyfin-dot");
    const text = document.getElementById("jellyfin-text");

    try {
        const res = await fetch(JELLYFIN_URL + "/System/Ping", {
            method: "GET",
            cache: "no-store"
        });

        if (res.ok) {
            dot.classList.remove("offline");
            dot.classList.add("online");
            text.textContent = "Online";
        } else {
            throw new Error("offline");
        }
    } catch (e) {
        dot.classList.remove("online");
        dot.classList.add("offline");
        text.textContent = "Offline";
    }
}

checkJellyfin();
setInterval(checkJellyfin, 10000);
