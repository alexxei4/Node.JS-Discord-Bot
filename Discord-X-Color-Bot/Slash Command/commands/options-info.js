const { SlashCommandBuilder } = require('discord.js');
///StAuth10222: I ALexei Ougriniouk, 000776331 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else
module.exports = {
	data: new SlashCommandBuilder()
		.setName('options-info')
		.setDescription('Information about the options provided.')
		.addStringOption(option => option.setName('input').setDescription('The input to echo back')),
	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (value) return interaction.reply(`The options value is: \`${value}\``);
		return interaction.reply('No option was provided!');
	},
};
