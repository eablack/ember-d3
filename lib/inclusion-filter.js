module.exports = function inclusionFilter(packages) {
  return function(pkg) {
    if (packages.length === 0) { return true; }
    return packages.indexOf(pkg.name) > -1;
  };
};
