# Jellyfin Status Checker

This is something I made for my homelab server website.
It shows a dot that changes from red to green depending on the current running status of your Jellyfin server.
This wasn't originally made as a standalone project, it's the minimal bits and pieces copied and pasted from my homelab's server document. so it works, but its not fully packaged or complete.
You will need to setup your own HTML file as I just provide the div needed.

## How it works

Within your Jellyfin server under the system folder there is a json file ( http://localhost:8096/System/Ping ).
My script gets that json file and logs if it is accessible or not (indicating that the server is active)
