// Dumps every site's node list to data/nodes.json for tools/gen_data.py. Run: node tools/dump_nodes.js
global.window = {};
for (const f of ['rig', 'production', 'gasplant', 'refinery', 'lng', 'chain']) require('../sites/' + f + '.js');
const out = {};
for (const s of window.SITES) {
  const nodes = [];
  (function walk(list, level, parent) {
    list.forEach(n => {
      nodes.push({ id: n.id, name: n.name, level, parent, kids: !!n.children, site: n.site || null, roadmap: !!n.roadmap });
      if (n.children) walk(n.children, level + 1, n.id);
    });
  })(s.systems, 0, null);
  out[s.id] = { name: s.name, stage: s.stage, nodes };
}
require('fs').writeFileSync(require('path').join(__dirname, '..', 'data', 'nodes.json'), JSON.stringify(out));
console.log(Object.entries(out).map(([k, v]) => k + ':' + v.nodes.length).join('  '));
