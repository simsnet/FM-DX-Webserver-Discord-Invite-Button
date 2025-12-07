// Paste Discord invite link in the quotes
const discordInviteURL = 'https://discord.gg/abcd1234';

// Button name (always shown)
const discordButtonTitle = 'Discord';

// Button description (shown on hover)
const discordButtonDesc = 'Join the Discord!';
	
$(document).ready(function() {
    setTimeout(function() {
        addIconToPluginPanel("gdx-discord-button", discordButtonTitle, "brands", "discord", discordButtonDesc);

        const discordButton = $('#gdx-discord-button');
        discordButton.on('click', function() {
			if (confirm('You are about to visit the following link:\n\n' + discordInviteURL + '\n\nOnly proceed if this invite is safe! Do you wish to continue?')) {
				window.open(discordInviteURL);
			} else {
				// Nothing
			}
        });
    }, 1100)
});
