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
* Creating, managing and sharing sync rooms
* Room accessibility - public, private, ? password-protected
* Creating, editing, loading and saving user playlists
* Supporting different content providers: YouTube, Vimeo, Dailymotion, Vbox7, Spotify, SoundCloud, etc.
* ? Chat, system notifications
* ? Multiple playlists per room (see: watch2gether)
* ? Search for videos directly in the system
* ? Watch history - in case of more than one playlist per room, it is useful to show what are the latest synced videos and help choose some of them to watch again

## Architecture:
* Rooms provide peer-to-peer access to their videos (i. e., everyone can start/pause, etc.)
* In the future, rooms will provide both peer-to-peer and presenter-clients access (i. e., only the person who has created the room may control what's playing)
* User roles:
	* **Guest**:
		* Create rooms (including password-protected)
		* Add videos to rooms
		* View rooms (including password-protected)
		* Create, view and edit current room playlists (if he / she has sufficient permissions)
		* Play / pause / stop / replay current video and make other room members sync
		* Shuffle / autoplay videos
		* If he / she is the room creator, can kick / ban users regardless of the room mode
		* => Can do everything to create a room but cannot save anything for later use (should consider timeouts for "temporary" rooms -> e. g. right after the last user has left; 1-2 hours after the last user has left; etc.)
	* **User**:
		* All guest functionality
		* Save rooms and / or playlists for later use
		* Edit profile, add picture, etc.
		* Custom settings
	* **Administrator**:
		* All user functionality
		* Kick / ban users from all rooms excluding admins
		* Grant access to banned users to rooms again
		* ? Ban certain videos (by links or link masks, or titles)
		* Full access to all rooms (editing and deleting)
	* **Site owner**:
		* Can promote / demote users to administrators
