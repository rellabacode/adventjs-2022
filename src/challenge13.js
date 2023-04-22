module.exports = function getFilesToBackup(lastBackup, changes) {
    let newChanges = changes.filter((change) => change[1] > lastBackup);
    let changesIds = newChanges.map((change) => change[0]);
    let sorted = changesIds.sort((a, b) => a - b);
    let unique = [...new Set(sorted)];
    return unique;
}