module.exports = async function (struct, config) {
  if (config.fvs === '3.x' || !config.fvs) {
    struct.dependencies = Object.assign({}, struct.dependencies, {
      'vue-router': config.lib ? undefined : '4.1.6'
    })
  } else {
    struct.dependencies = Object.assign({}, struct.dependencies, {
      'vue-router': config.lib ? undefined : '3.5.3'
    })
    struct.devDependencies = Object.assign({}, struct.devDependencies, {
      '@vue/cli-plugin-router': config.lib ? undefined : '5.0.8'
    })
  }

  return struct
}
