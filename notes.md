# SiriusSyncr
## Technologies:
* Data persistence:
	* Microsoft SQL Server 2014
	* Entity Framework 6
* Server-side:
	* ASP.NET MVC 5
	* ASP.NET SignalR
* Client-side:
	* ASP.NET MVC 5
	* Bootstrap
	* (other front-end frameworks, such as icon packs, as needed)
	* ? TypeScript

## Features:
* Real-time syncronization of audio / video between two or more users
* Access to guests and logged in users
* Creating and managing sync rooms
* Room accessibility - public, private, ? password-protected
* Creating, editing, loading and saving user playlists
* Supporting different content providers: YouTube, Vimeo, Dailymotion, Vbox7, Spotify, SoundCloud, etc.
* ? Chat, system notifications
* ? Multiple playlists per room (see: watch2gether)

## Architecture:
* Rooms provide peer-to-peer access to their videos (i. e., everyone can start/pause, etc.)
* In the future, rooms will provide both peer-to-peer and presenter-clients access (i. e., only the person who has created the room may control what's playing)
