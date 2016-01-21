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
* ? Statistics (top videos, frequently played together, etc.)

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
		
## Misc notes:
* On the home page, the latest N (for example, N = 12 or 15) rooms will be displayed. If the user scrolls far enough he / she will see N more rooms ('endless scrolling')
* TODO: Add screens for the user profile and admin panel (and possibly other screens)
* TODO: Figure out what videos to display in the Room page, when nothing has been written in the search bar. Some options include:
	* Leave the video panel empty
	* Display the most popular videos worldwide
	* Display popular videos according to some user information (for example, the user's country)
* TODO: Figure out whether a link pasted in the search bar will be placed at the end of the playlist directly or not 
	(preferrably the user will see a single result in the video panel and will be able to choose whether to play the video immediately or add it to the playlist)
* TODO: What will kick / ban do?
* TODO: Will we have a 'Leave room' functionality? What will it do? Some possibilities include:
	* Deleting the room from the user's rooms
	* Only redirecting the user to the home page, keeping the room in the user's rooms
	* What should 'Leave room' for the room owner do? It may select another owner (the first person who has joined after the room owner, or a random person), or leave the room without an owner. 
	If the presenter (using the presenter mode) leaves the room, it should close for everyone (possibly they may chat)
* TODO: How long should a room be kept alive? Some possibilities are: some time after the last visit, forever, after the owner has left