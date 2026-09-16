"""Generate demo telemetry, health, anomaly and maintenance CSVs per site, plus data/bundle.js
(the same CSVs inlined so the app also works from file://). Deterministic per node.
Run: node tools/dump_nodes.js && python tools/gen_data.py"""
import json, random, math, os, io, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
nodes = json.load(io.open(os.path.join(ROOT, 'data', 'nodes.json'), encoding='utf-8'))
NOW = datetime.datetime(2026, 9, 16, 14, 30)
N = 60  # one sample per minute, ending now

# keyword -> tags: (tag, label, unit, lo, hi, warn, base, noise)
LIB = [
 (('pump', 'lact', 'charge'), [('flow', 'Flow', 'm3/h', 0, 400, 360, 240, 6), ('disch_p', 'Discharge pressure', 'bar', 0, 60, 52, 38, 1.2), ('vib', 'Vibration', 'mm/s', 0, 12, 7.1, 2.4, .5), ('brg_t', 'Bearing temp', 'C', 20, 110, 85, 58, 1.5)]),
 (('compressor', 'compressors', 'expander', 'vru', 'residue'), [('suction_p', 'Suction pressure', 'bar', 0, 80, 10, 42, 1.4), ('disch_p', 'Discharge pressure', 'bar', 0, 120, 105, 78, 2), ('vib', 'Vibration', 'mm/s', 0, 15, 9, 3.1, .6), ('disch_t', 'Discharge temp', 'C', 20, 160, 140, 112, 2)]),
 (('tank', 'bullet', 'sphere', 'storage', 'battery'), [('level', 'Level', '%', 0, 100, 90, 62, .6), ('temp', 'Temperature', 'C', -170, 80, None, 24, .3), ('press', 'Pressure', 'kPa', -2, 30, 25, 8, .4)]),
 (('column', 'absorber', 'regenerator', 'demethaniser', 'de-', 'fractionator', 'stripper', 'contactor', 'scrub', 'atmospheric', 'vacuum', 'stabiliser', 'stack', 'reactor'), [('top_p', 'Top pressure', 'bar', 0, 50, 45, 26, .5), ('btm_t', 'Bottom temp', 'C', 0, 420, 400, 318, 2.5), ('dp', 'Differential pressure', 'kPa', 0, 80, 60, 34, 1.2), ('reflux', 'Reflux flow', 'm3/h', 0, 300, None, 142, 4)]),
 (('separator', 'drum', 'flash', 'knockout', 'slug', 'vessel', 'desalter', 'treater', 'recondenser', 'catcher'), [('level', 'Interface level', '%', 0, 100, 85, 48, 1), ('press', 'Pressure', 'bar', 0, 30, 25, 8.6, .3), ('temp', 'Temperature', 'C', 0, 120, 100, 54, 1), ('gas_out', 'Gas outlet', 'MMscfd', 0, 60, None, 22, .8)]),
 (('heater', 'furnace', 'boiler', 'reboiler', 'burner', 'hot oil', 'reformer', 'cogeneration'), [('out_t', 'Outlet temp', 'C', 100, 480, 450, 372, 3), ('fuel', 'Fuel gas', 'MMBtu/h', 0, 200, None, 118, 2.5), ('stack_t', 'Stack temp', 'C', 100, 500, 420, 296, 3), ('o2', 'Excess O2', '%', 0, 8, 6, 2.4, .15)]),
 (('exchanger', 'cooler', 'chiller', 'condenser', 'fin-fan', 'cold box', 'cryogenic', 'cooling', 'preheat'), [('in_t', 'Inlet temp', 'C', -170, 300, None, 88, 1.5), ('out_t', 'Outlet temp', 'C', -170, 300, None, 46, 1.2), ('dp', 'Pressure drop', 'kPa', 0, 150, 120, 42, 1.5), ('fan', 'Fan load', '%', 0, 100, 95, 66, 2)]),
 (('valve', 'esd', 'choke', 'manifold', 'wing', 'tree', 'wellhead', 'head'), [('pos', 'Valve position', '%', 0, 100, None, 72, .3), ('up_p', 'Upstream pressure', 'bar', 0, 350, 320, 186, 2.5), ('dn_p', 'Downstream pressure', 'bar', 0, 350, None, 94, 1.5), ('temp', 'Body temp', 'C', 0, 120, 100, 41, .6)]),
 (('motor', 'drive', 'vsd', 'generator', 'turbine', 'substation', 'power', 'mcc', 'prime mover'), [('current', 'Current', 'A', 0, 900, 800, 412, 8), ('winding_t', 'Winding temp', 'C', 20, 160, 140, 88, 1.5), ('vib', 'Vibration', 'mm/s', 0, 12, 7.1, 2.1, .4), ('load', 'Load', '%', 0, 100, 95, 71, 2)]),
 (('drawworks', 'crown', 'block', 'hook', 'drilling line', 'elevator', 'mast', 'derrick', 'pumping unit', 'walking beam', 'horsehead', 'crank', 'reducer', 'samson'), [('hook_load', 'Hook load', 't', 0, 500, 450, 186, 4), ('speed', 'Drum speed', 'rpm', 0, 120, 100, 62, 2), ('brake_t', 'Brake disc temp', 'C', 20, 220, 180, 148, 3), ('ton_mi', 'Line ton-miles', 't-mi', 0, 1500, 1400, 1240, .8)]),
 (('top drive', 'rotary', 'swivel', 'kelly', 'rod'), [('torque', 'Torque', 'kNm', 0, 80, 72, 41, 1.5), ('rpm', 'Rotation', 'rpm', 0, 220, 200, 118, 2), ('vib', 'Vibration', 'mm/s', 0, 15, 9, 3.6, .5), ('temp', 'Gearbox temp', 'C', 20, 120, 100, 72, 1)]),
 (('pipe', 'flowline', 'header', 'rack', 'pipeline', 'trestle', 'arm', 'loading', 'pig', 'meter', 'metering'), [('flow', 'Flow', 'm3/h', 0, 800, 720, 318, 6), ('press', 'Pressure', 'bar', 0, 120, 100, 64, 1), ('temp', 'Temperature', 'C', -170, 150, None, 38, .8), ('wall', 'Wall loss', '%', 0, 30, 20, 6.4, .02)]),
 (('flare', 'relief', 'ffg', 'vent'), [('flow', 'Relief flow', 'kg/h', 0, 20000, 15000, 420, 40), ('pilot', 'Pilot temp', 'C', 100, 900, None, 612, 6), ('press', 'Header pressure', 'kPa', 0, 300, 250, 22, 1), ('wind', 'Wind speed', 'm/s', 0, 30, 20, 6.2, .5)]),
 (('control', 'room', 'scada', 'instrument', 'air', 'building', 'cabin', 'junction', 'panel', 'site', 'fence', 'light', 'pad', 'cellar', 'bund'), [('air_p', 'Instrument air', 'bar', 0, 10, 6.5, 7.6, .05), ('temp', 'Ambient temp', 'C', 10, 45, 40, 31.4, .2), ('alarms', 'Active alarms', '', 0, 50, 20, 3, .4), ('comms', 'Link uptime', '%', 90, 100, 98, 99.7, .02)]),
]
GENERIC = [('temp', 'Temperature', 'C', 0, 120, 100, 46, 1), ('vib', 'Vibration', 'mm/s', 0, 12, 7.1, 2.2, .4), ('load', 'Load', '%', 0, 100, 95, 58, 2)]

def tags_for(name):
    n = name.lower()
    for keys, tags in LIB:
        if any(k in n for k in keys):
            return tags
    return GENERIC

def series(rng, base, noise, lo, hi, ramp_from=None):
    v = base + rng.uniform(-noise * 2, noise * 2)
    drift = rng.uniform(-noise * .05, noise * .05)
    out = []
    for i in range(N):
        v += drift + rng.gauss(0, noise * .35)
        if ramp_from is not None and i >= ramp_from:
            v += noise * .55          # anomaly: steady climb over the last ~20 min
        v = max(lo, min(hi, v))
        out.append(v)
    return out

def fmt(x):
    return ('%.4g' % x) if abs(x) < 1000 else str(int(round(x)))

ANOM = [('hi', 'Vibration 2.1x baseline', 'Drive-end bearing envelope energy rising; pattern matches 3 prior failures in fleet history'),
        ('md', 'Temperature excursion', 'Outlet exceeded the warning band for 11 min; cooling duty short'),
        ('md', 'Pressure drift', 'Differential pressure trending up 8% per day; fouling suspected'),
        ('lo', 'Sensor dropout', 'Tag lost 4 samples; instrument comms flagged'),
        ('lo', 'Level oscillation', 'Interface level cycling +/-6%; controller tuning')]
WO = [('Replace drum encoder', 'open'), ('Inspect DE bearing', 'due'), ('Calibrate level transmitter', 'open'),
      ('Change lube oil', 'due'), ('PSV bench test', 'done'), ('Thermographic survey', 'done')]
COMPS = ['bearing', 'seal', 'impeller', 'gasket', 'coupling', 'brake pads', 'filter element', 'catalyst', 'packing', 'refractory']

bundle = {}
for site, info in nodes.items():
    if site == 'chain':
        continue
    d = os.path.join(ROOT, 'data', site)
    os.makedirs(d, exist_ok=True)
    tel = ['node,tag,label,unit,lo,hi,warn,' + ','.join('v%d' % i for i in range(N))]
    hea = ['node,score,trend,rul_component,rul_days,rul_p10,rul_p90']
    ano = ['ts,node,severity,title,detail,status']
    mai = ['node,kind,ref,title,due,status']
    for n in info['nodes']:
        if n['level'] == 0:
            continue
        rng = random.Random(site + '|' + n['id'])
        tags = tags_for(n['name'])
        hot = rng.random() < .12
        score = int(rng.gauss(64, 8)) if hot else int(rng.gauss(88, 6))
        score = max(35, min(99, score))
        for ti, (tag, label, unit, lo, hi, warn, base, noise) in enumerate(tags):
            vals = series(rng, base, noise, lo, hi, 38 if (hot and ti == 0) else None)
            tel.append(','.join([n['id'], tag, label, unit, fmt(lo), fmt(hi), '' if warn is None else fmt(warn)] + [fmt(v) for v in vals]))
        comp = COMPS[rng.randrange(len(COMPS))]
        rul = int(rng.uniform(20, 60)) if hot else int(rng.uniform(90, 400))
        hea.append(','.join([n['id'], str(score), 'declining' if hot else ['stable', 'improving'][rng.randrange(2)], comp, str(rul), str(int(rul * .65)), str(int(rul * 1.5))]))
        if hot:
            a = ANOM[0] if rng.random() < .5 else ANOM[rng.randrange(1, 3)]
            ts = (NOW - datetime.timedelta(minutes=rng.randrange(8, 120))).strftime('%Y-%m-%dT%H:%M')
            ano.append(','.join([ts, n['id'], a[0], a[1], a[2], 'open' if rng.random() < .7 else 'investigating']))
        if rng.random() < .25:
            a = ANOM[rng.randrange(3, 5)]
            ts = (NOW - datetime.timedelta(hours=rng.randrange(3, 72))).strftime('%Y-%m-%dT%H:%M')
            ano.append(','.join([ts, n['id'], a[0], a[1], a[2], 'cleared']))
        last = (NOW - datetime.timedelta(days=rng.randrange(10, 120))).date()
        nxt = (NOW + datetime.timedelta(days=rng.randrange(2, 9) if hot else rng.randrange(3, 90))).date()
        mai.append(','.join([n['id'], 'last', 'PM-%04d' % rng.randrange(1000, 9999), 'Planned maintenance - ' + comp + ' inspection', str(last), 'done']))
        mai.append(','.join([n['id'], 'next', 'PM-%04d' % rng.randrange(1000, 9999), 'Planned maintenance - ' + ['lube', 'inspection', 'calibration', 'clean'][rng.randrange(4)], str(nxt), 'due' if hot else 'scheduled']))
        if hot or rng.random() < .2:
            w = WO[rng.randrange(len(WO))]
            mai.append(','.join([n['id'], 'wo', 'WO-%04d' % rng.randrange(1000, 9999), w[0], str((NOW + datetime.timedelta(days=rng.randrange(1, 20))).date()), w[1]]))
    for fn, rows in [('telemetry.csv', tel), ('health.csv', hea), ('anomalies.csv', ano), ('maintenance.csv', mai)]:
        txt = '\n'.join(rows) + '\n'
        io.open(os.path.join(d, fn), 'w', encoding='utf-8', newline='\n').write(txt)
        bundle[site + '/' + fn] = txt

io.open(os.path.join(ROOT, 'data', 'bundle.js'), 'w', encoding='utf-8', newline='\n').write(
    '// generated by tools/gen_data.py - the CSVs inlined so the app also runs from file://\nwindow.RIGSIGHT_DATA=' + json.dumps(bundle) + ';\n')
print('sites:', [k for k in nodes if k != 'chain'], '| bundle.js', os.path.getsize(os.path.join(ROOT, 'data', 'bundle.js')), 'bytes')
