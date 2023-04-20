const { SlashCommandBuilder } = require('discord.js');
///StAuth10222: I ALexei Ougriniouk, 000776331 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else
module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Select a member and kick them (but not really).')
		.addUserOption(option => option.setName('target').setDescription('The member to kick')),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		return interaction.reply({ content: `You wanted to kick: ${member.user.username}`, ephemeral: true });
	},
};
