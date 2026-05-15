# Jellyfin Status Checker

This is something I made for my homelab server website.
It shows a dot that changes from red to green depending on the current running status of your Jellyfin server.
This wasn't originally made as a standalone project, it's the minimal bits and pieces copied and pasted from my homelab's server document. so it works, but its not fully packaged or complete.
You will need to setup your own HTML file as I just provide the div needed.

## How it works

Within your Jellyfin server under the system folder there is a json file ( http://localhost:8096/System/Ping ).
My script gets that json file and logs if it is accessible or not (indicating that the server is active)

<img width="774" height="168" alt="Screenshot 2026-05-14 203042" src="https://github.com/user-attachments/assets/6ad446f0-3863-497b-8121-4b838e920644" />

## Debug and Testing

check out test.js when initaly implementing and it should say online as it is reaching out for a test ping.json on this page in the folder System/Ping/ping.json
In order to make it work for the test I had to change line 8 from /System/Ping/ to /System/Ping/ping.json because of how it works.
Once you know it works go check out JellyfinChecker.js to get it working properly for your own server.
