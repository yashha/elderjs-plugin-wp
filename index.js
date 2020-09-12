const plugin = {
  name: "elderjs-plugin-wp",
  description: `This plugin provides an easy wordpress integration for Elder.js using the WP-API npm package.`,
  init: (plugin) => {
    const { config } = plugin;
    if (!config.endpoint) {
      console.log("elderjs-plugin-wp: No endpoint provided in config.");
    }
    let wp = new WPApi({
      endpoint: config.endpoint,
    });
    plugin.wp = wp;
    return plugin;
  },
  hooks: [
    {
      hook: "bootstrap",
      name: "addWPToDataObject",
      description: `Addes the intialized wordpress api object to the data object.`,
      priority: 50,
      run: async ({ data, plugin }) => {
        return {
          data,
          wp: plugin.wp,
        };
      },
    },
  ],
  config: {
    endpoint: null,
  },
};

module.exports = plugin;
