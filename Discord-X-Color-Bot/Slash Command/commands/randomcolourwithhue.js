'use strict';

const {SlashCommandBuilder} = require('discord.js');
const axios = require('axios');

///StAuth10222: I ALexei Ougriniouk, 000776331 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else
module.exports = {
        data: new SlashCommandBuilder()
        
        .setName('randomcolourviahue')
        .setDescription('get a random colour value via hue ')
        .addStringOption(option => option.setName('hue')
                                          .setRequired(true)
                                          .setDescription('Random Colour via Hue')),
        async execute(interaction){
          const hue = interaction.options.getString("hue");
          const result = await axios.get(`https://x-colors.herokuapp.com/api/random/${hue}`);
          console.log(result);
          return interaction.reply("Here is your Colour[Hex-RGB-HSL] " + result.data.hex + " | " + result.data.rgb + " | " + result.data.hsl );
        }

};