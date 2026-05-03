const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('switch')
    .setDescription('Toggle a Smart Switch')
    .addStringOption(opt =>
      opt.setName('name')
        .setDescription('Switch name')
        .setRequired(true))
    .addStringOption(opt =>
      opt.setName('state')
        .setDescription('Turn on or off')
        .setRequired(true)
        .addChoices(
          { name: '✅ On', value: 'on' },
          { name: '❌ Off', value: 'off' },
        )),
  async execute(interaction) {
    const name = interaction.options.getString('name');
    const state = interaction.options.getString('state');
    const embed = new EmbedBuilder()
      .setColor(state === 'on' ? 0x00FF00 : 0xFF0000)
      .setTitle('🔌 Smart Switch')
      .setDescription(`⚠️ Rust+ connection not configured yet.\n**Switch:** ${name}\n**State:** ${state === 'on' ? '✅ On' : '❌ Off'}`)
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
