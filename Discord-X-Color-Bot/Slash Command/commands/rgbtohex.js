'use strict';

const {SlashCommandBuilder} = require('discord.js');
const axios = require('axios');

///StAuth10222: I ALexei Ougriniouk, 000776331 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else
module.exports = {
        data: new SlashCommandBuilder()
        
        .setName('rgbtohex')
        .setDescription('Convert RGB Value to hex')
        .addNumberOption(option => option.setName('red').setRequired(true).setDescription('red 0-255'))
        .addNumberOption(option => option.setName('green').setRequired(true).setDescription('green 0-255'))
        .addNumberOption(option => option.setName('blue').setRequired(true).setDescription('blue 0-255')),
        async execute(interaction){
          const red = interaction.options.getNumber("red");
          const green = interaction.options.getNumber("green");
          const blue = interaction.options.getNumber("blue");
          const result = await axios.get(`https://x-colors.herokuapp.com/api/rgb2hex?value=${red}-${green}-${blue}`);
          console.log(result);
          return interaction.reply("Here is the colour in HEX Code: "+ result.data.hex);
        }

};