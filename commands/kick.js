const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('select member and kick them (JK)')
        .addUserOption(option => option.setName('target').setDescription('The member to kick')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        return interaction.reply({ content: `You wanted to kick: ${user.username}`, ephemeral: true });
	},
};