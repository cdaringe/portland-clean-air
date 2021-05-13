function readPackage(pkg, context) {
  if (pkg.name.match(/postcss-loader/)) {
    const lastpostcss = pkg.dependencies.postcss;
    pkg.dependencies = {
      ...pkg.dependencies,
      postcss: "^8",
    };
    context.log(`postcss@${lastpostcss} => 8`);
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
