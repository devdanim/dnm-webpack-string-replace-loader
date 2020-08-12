
function replace (source, options, config) {
  const { replace, strict } = options
  const search = options.search;

  if (strict && (search === null || replace === null)) {
    throw new Error('Replace failed (strict mode) : options.search and options.replace are required')
  }

  const newSource = source.replace(search, (...args) => typeof replace === 'string' ? replace : replace(config, ...args))

  if (strict && (newSource === source)) {
    throw new Error('Replace failed (strict mode) : ' + options.search + ' → ' + options.replace)
  }

  return newSource
}

module.exports = replace
