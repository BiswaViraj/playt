# playt

Stream or download youtube songs from terminal

# Description

-   Playt is a CLI app written in Node.js
-   It allows to stream or download audio from YouTube with in the Terminal by simple command

**!! Note**: VLC is required to stream

# Commands

\$ playt search "Song name"

Searches for the song and returns a list of 10 matching songs.
Choose the one from the list by entering the number corresponding to it and it will stream as well as download the song into a folder named "playtSongs" in the Home directory.

If the song selected is already present in the "playtSongs" folder then it plays the offline/local file and doesn't download it again.

\$ playt download "song name"

This command only downloads the selected song and doesn't plays it through the terminal.
