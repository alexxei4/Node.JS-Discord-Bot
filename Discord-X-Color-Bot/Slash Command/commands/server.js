const { SlashCommandBuilder } = require('discord.js');
///StAuth10222: I ALexei Ougriniouk, 000776331 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else
module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
		return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
};
