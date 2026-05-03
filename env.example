const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('team')
    .setDescription('Show team member status'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xCE3720)
      .setTitle('👥 Team Status')
      .setDescription('⚠️ Rust+ connection not configured yet.')
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
