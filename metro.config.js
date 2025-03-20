const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const tailwindConfig = require("./tailwind.config");

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })

// module.exports = withNativeWind(config, { input,inlineRem,configPath: browserslist,browserslistEnv,typescriptEnvPath,disableTypeScriptGeneration, ...options},{input: '/app/global.css' });
