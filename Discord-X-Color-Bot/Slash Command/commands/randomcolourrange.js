'use strict';

const {SlashCommandBuilder} = require('discord.js');
const axios = require('axios');

///StAuth10222: I ALexei Ougriniouk, 000776331 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else
module.exports = {
        data: new SlashCommandBuilder()
        
        .setName('randomcolourviarange')
        .setDescription('random colour via number range')
        .addNumberOption(option => option.setName('range')
                                          .setRequired(true)
                                          .setDescription('Random Colour via ranges 0-359')),
        async execute(interaction){
          const colournum = interaction.options.getNumber("colournum");
          const result = await axios.get(`https://x-colors.herokuapp.com/api/random/${colournum}`);
          console.log(result.data);
          console.log(result.data.hex);
          console.log(result.data.rgb);
          console.log(result.data.hsl);
          return interaction.reply("Here is your Colour[Hex-RGB-HSL] " + result.data.hex + " | " + result.data.rgb + " | " + result.data.hsl );
        }

};