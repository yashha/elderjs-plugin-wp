![npm](https://img.shields.io/npm/v/elderjs-plugin-wp)

# Elder.js Plugin: Wordpress Plugin

This plugin provides an easy wordpress integration for Elder.js using the [WP-API](https://github.com/WP-API/node-wpapi) npm package.

## Install

```bash
npm i -s elderjs-plugin-wp
yarn add elderjs-plugin-wp
```

## Config

Once installed, open your `elder.config.js` and configure the plugin by adding 'elder-plugin-wp' to your plugin object.

```javascript
plugins: {

  'elderjs-plugin-wp': {
    ... your plugin options
  },

}
```
