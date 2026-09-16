// Production facility: two wells (beam pump + ESP), manifold, separation, heater-treater,
// tank battery with LACT and VRU, flare, utilities. All content carries the Proposed status.
(window.SITES=window.SITES||[]).push({
 id:'production',name:'Production Facility',stage:'upstream',code:'03',icon:'tank',
 short:'Wellhead, artificial lift, separation, tank battery, flare and utilities on a two-well pad.',
 world:'desert',hasSubsurface:true,
 home:{target:[6,5,0],theta:.62,phi:1.2,radius:96},
 evidence:['S1 Facility P&ID set, revision B','S2 API 12J separator specification','S3 API 650 / 12F tank data sheets','S4 API RP 11L pumping unit selection','S5 API RP 14C safety analysis','S6 Site layout drawing P-2001'],
 systems:[
 {id:'WH',code:'01',name:'Wellhead & Tree',icon:'hoist',
  summary:'Pressure-containing stack on each well: casing head, tubing head and the valve tree that controls flow to the flowline.',
  body:'The wellhead carries the weight of every casing string and seals the annuli. The tubing hanger lands in the tubing head and the Christmas tree bolts on top. Master valves are the well barrier; the wing valve routes flow to the choke and flowline; the swab valve gives vertical access for wireline. On the beam-pumped well a stuffing box seals the reciprocating polished rod; on the ESP well a power penetrator brings the cable through the hanger.',
  eng:'Rated to the shut-in tubing pressure with margin: 3,000 psi trees on this pad. Valve sequence for opening is master, wing, then choke; closing is the reverse. Annulus pressures are monitored as a barrier check.',
  where:[['Area','Well cellars, west side of pad'],['Containing structure','Cellar and wellhead skid'],['Placement','Two wells 16 m apart on the pad centreline']],
  why:'The tree is the last mechanical barrier between reservoir pressure and the surface facility. Everything downstream is designed for pressures the choke lets through.',
  specs:[['Tree rating','3,000 psi, API 6A PSL 2'],['Casing head','13 3/8 in x 9 5/8 in'],['Tubing','2 7/8 in EUE'],['Master valves','2 x 3 1/8 in gate']],
  safety:['Annulus pressure monitoring as a barrier check.','Valve sequencing: never open the wing valve before the master.','Stuffing box leaks: polished rod scoring and packing wear.','Cellar atmosphere: H2S and hydrocarbon accumulation.'],
  conns:['AL','FL'],
  children:[
   {id:'WH.a',name:'Well A Wellhead (beam pump)',summary:'Casing head, tubing head and tree on the beam-pumped well, with the stuffing box on top.',children:[
    {id:'WH.a.casinghead',name:'Casing Head & Spools',summary:'Lowest wellhead section, welded to surface casing; hangs the production casing.',specs:[['Bottom connection','13 3/8 in slip-on weld'],['Top flange','11 in 3,000 psi']]},
    {id:'WH.a.tubinghead',name:'Tubing Head & Hanger',summary:'Lands and seals the tubing string; side outlets give access to the casing annulus.',specs:[['Hanger','2 7/8 in, with polished rod bushing'],['Outlets','2 x 2 in flanged']]},
    {id:'WH.a.tree',name:'Tree & Wing Valve',summary:'Master and wing gate valves with the flowline tee; the rod passes through the tree bore.',specs:[['Valves','Gate, 3 1/8 in 3,000 psi'],['Actuation','Manual']]},
    {id:'WH.a.stuffing',name:'Stuffing Box',summary:'Packing gland that seals around the reciprocating polished rod.',specs:[['Packing','Cone type, 1 1/4 in rod'],['Leak detection','Drip pan with level switch']]},
    {id:'WH.a.cellar',name:'Well Cellar',summary:'Lined pit around the wellhead that gives access to the casing head and catches spills.'}
   ]},
   {id:'WH.b',name:'Well B Wellhead (ESP)',summary:'Wellhead on the ESP well with the cable penetrator and a conventional flowing tree.',children:[
    {id:'WH.b.head',name:'Casing & Tubing Heads',summary:'Casing head and tubing head with the ESP hanger and cable penetrator.',specs:[['Penetrator','3-phase, 5 kV'],['Hanger','2 7/8 in']]},
    {id:'WH.b.tree',name:'Christmas Tree',summary:'Lower master, upper master, wing and swab valves with a positive choke.',specs:[['Rating','3,000 psi'],['Choke','Positive, 24/64 in bean']]},
    {id:'WH.b.cellar',name:'Well Cellar',summary:'Lined pit around the ESP wellhead.'}
   ]},
   {id:'WH.casing',name:'Casing & Tubing Strings',summary:'Cemented surface and production casing plus the production tubing, shown below ground.',children:[
    {id:'WH.casing.surface',name:'Surface Casing',summary:'Protects fresh-water aquifers and carries the wellhead.',specs:[['Size','13 3/8 in, 54.5 lb/ft'],['Set depth','450 m'],['Cement','To surface']]},
    {id:'WH.casing.prod',name:'Production Casing',summary:'Isolates the reservoir from all shallower formations.',specs:[['Size','9 5/8 in, 40 lb/ft'],['Set depth','1,900 m'],['Cement','Top of cement 600 m']]},
    {id:'WH.casing.tubing',name:'Production Tubing',summary:'Flow conduit from the perforations to the tree.',specs:[['Size','2 7/8 in EUE, L-80'],['Packer','None (pumped well)']]}
   ]}
  ]},
 {id:'AL',code:'02',name:'Artificial Lift',icon:'rotate',
  summary:'Beam pumping unit on Well A and an electric submersible pump on Well B lift fluid the reservoir can no longer push to surface.',
  body:'The pumping unit converts the prime mover\'s rotation into the reciprocating motion of the polished rod through the gear reducer, cranks, pitmans and walking beam. Counterweights balance the rod and fluid load. The ESP well uses a downhole multistage centrifugal pump driven by a motor on the tubing string, fed by a variable-speed drive at surface.',
  eng:'Pumping unit sizing follows API RP 11L: peak torque, structural load and stroke length are chosen from the dynamometer card. The ESP runs on frequency: the VSD sets rate and protects against underload when the pump gasses off.',
  where:[['Area','Wellheads'],['Containing structure','Pumping unit foundation; ESP skid'],['Placement','Unit centred on Well A; VSD 6 m from Well B']],
  why:'Without lift these wells would not flow. Lift efficiency and run life dominate operating cost.',
  specs:[['Pumping unit','C-456D-256-120 conventional'],['Prime mover','75 hp electric'],['ESP','400 stage, 1,200 bfpd, 5 kV'],['VSD','150 kVA, 30-70 Hz']],
  safety:['Rotating cranks and counterweights: guarding and lockout before entering the unit.','Brake and clamp before rod work.','ESP cable at 5 kV: authorised electrical access only.','Rod string parts: dropped-load risk on the polished rod clamp.'],
  conns:['WH','UT','FL'],
  children:[
   {id:'AL.pj',name:'Pumping Unit',summary:'Conventional crank-balanced beam pumping unit on Well A.',body:'Prime mover drives the gear reducer through V-belts; the cranks and pitmans rock the walking beam on the samson post; the horsehead keeps the polished rod vertical through the stroke.',specs:[['Structure','456,000 in-lb torque'],['Stroke','120 in'],['Speed','8 spm']],children:[
    {id:'AL.pj.base',name:'Base & Samson Post',summary:'Skid base on a concrete foundation carrying the samson post and the reducer.'},
    {id:'AL.pj.beam',name:'Walking Beam',summary:'Pivots on the samson post centre bearing; horsehead at one end, equaliser at the other.'},
    {id:'AL.pj.horsehead',name:'Horsehead & Bridle',summary:'Curved head that keeps the wireline bridle tangent so the polished rod moves vertically.'},
    {id:'AL.pj.crank',name:'Cranks & Counterweights',summary:'Twin cranks on the reducer slow-speed shaft with adjustable counterweights.',specs:[['Counterbalance','Adjustable, 2 x 1,400 lb']]},
    {id:'AL.pj.reducer',name:'Gear Reducer',summary:'Double-reduction gearbox that turns motor speed into 8 spm at high torque.',specs:[['Ratio','30:1'],['Rating','456,000 in-lb']]},
    {id:'AL.pj.motor',name:'Prime Mover',summary:'Electric motor on a slide base with V-belt drive and guard.',specs:[['Power','75 hp, 460 V'],['Type','NEMA D, high slip']]}
   ]},
   {id:'AL.rods',name:'Sucker Rod String & Pump',summary:'Rods from the polished rod down to the subsurface pump at 1,850 m.',specs:[['Rods','7/8 in and 3/4 in taper, grade D'],['Pump','25-175-RHBC'],['Pump depth','1,850 m']]},
   {id:'AL.esp',name:'ESP System (Well B)',summary:'Electric submersible pump on Well B with its surface drive.',children:[
    {id:'AL.esp.vsd',name:'Variable Speed Drive',summary:'Outdoor-rated VSD cabinet that sets pump frequency and protects the motor.',specs:[['Rating','150 kVA'],['Frequency','30-70 Hz'],['Protection','Underload, overload, phase imbalance']]},
    {id:'AL.esp.jbox',name:'Junction Box',summary:'Vented box where the downhole cable meets the surface cable; vents gas that migrates up the cable.'},
    {id:'AL.esp.cable',name:'Surface Cable & Tray',summary:'Armoured 5 kV cable from the VSD to the wellhead on a raised tray.'},
    {id:'AL.esp.pump',name:'Downhole Pump & Motor',summary:'Multistage pump, seal section and motor hung on the tubing at 1,800 m.',specs:[['Stages','400'],['Motor','150 hp, 2,300 V'],['Setting depth','1,800 m']]}
   ]}
  ]},
 {id:'FL',code:'03',name:'Flowlines & Manifold',icon:'drop',
  summary:'Piping that routes each well to the production or test header, with pig launching, chemical injection and emergency shutdown valves.',
  body:'Each well has a flowline with a check valve, ESD valve and a tee to the manifold. The manifold has a production header and a test header so any single well can be diverted to the test separator for a well test. A pig launcher clears the gathering line; the chemical skid injects demulsifier and corrosion inhibitor at the wellheads.',
  eng:'Flowlines are sized for erosional velocity with a slug-tolerant layout. ESD valves fail closed on loss of instrument air or a high/low pressure trip in line with API RP 14C.',
  where:[['Area','Between the wellheads and the separator row'],['Containing structure','Pipe rack and manifold skid'],['Placement','Manifold at pad centre, 3 m east of the well row']],
  why:'The manifold is where individual wells become a pad rate, and where a single well can be isolated for testing or shut-in without stopping the pad.',
  specs:[['Flowline size','3 in Sch 80'],['Design pressure','1,440 psi (ANSI 600)'],['Headers','4 in production, 3 in test'],['ESD valves','Fail-closed ball, pneumatic']],
  safety:['ESD valve stroke tests: quarterly, fail-closed.','Pig launcher: verify zero pressure before opening the door.','Chemical skid: demulsifier and inhibitor handling.','Check valves on each flowline prevent backflow between wells.'],
  conns:['WH','SP','UT'],
  children:[
   {id:'FL.line_a',name:'Well A Flowline',summary:'3 in line from the Well A tree to the manifold with check and ESD valves.'},
   {id:'FL.line_b',name:'Well B Flowline',summary:'3 in line from the Well B tree to the manifold with check and ESD valves.'},
   {id:'FL.manifold',name:'Production & Test Manifold',summary:'Header skid with production and test headers and per-well diverter valves.',specs:[['Headers','4 in production, 3 in test'],['Valves','Ball, manual, 8 total']]},
   {id:'FL.esd',name:'ESD Valves',summary:'Pneumatic fail-closed ball valves on each flowline, tripped by the pad shutdown logic.',specs:[['Type','Ball, spring-return actuator'],['Trip','PSH/PSL on flowline, manual ESD']]},
   {id:'FL.pig',name:'Pig Launcher',summary:'Barrel with quick-opening closure for launching cleaning pigs into the gathering line.',specs:[['Size','4 in x 6 in barrel'],['Closure','Quick-opening, 600 ANSI']]},
   {id:'FL.chem',name:'Chemical Injection Skid',summary:'Tote-fed metering pumps that dose demulsifier and corrosion inhibitor at the wellheads.',specs:[['Pumps','2 x diaphragm, 0-20 L/h'],['Chemicals','Demulsifier, corrosion inhibitor']]},
   {id:'FL.rack',name:'Pipe Rack',summary:'Elevated steel rack carrying flowlines, gas and utility lines across the pad.'}
  ]},
 {id:'SP',code:'04',name:'Separation & Treating',icon:'shield',
  summary:'Vessels that split well fluid into gas, oil and water and heat the oil to break the emulsion before it goes to tanks.',
  body:'Well fluid enters the HP three-phase separator at 120 psi. Gas leaves the top through a mist extractor; water is drawn from the boot; oil flows to the heater-treater. The treater is a fired vessel: a firetube heats the emulsion, the demulsifier lets the water drop out, and clean oil spills over a weir to the tanks. A test separator takes one well at a time for rate measurement.',
  eng:'Separator retention time (3 min gas-liquid, 10 min oil-water) sets the vessel size. Treater temperature is a balance between water knockout and light-end loss to vapour. Level and pressure control loops are the operating heart of the pad.',
  where:[['Area','Process area, centre of pad'],['Containing structure','Vessel saddles on concrete piers'],['Placement','Separator row east of the manifold; treater at the north end']],
  why:'Sales-quality oil and pipeline-spec gas are made here. Off-spec water in oil or liquid carry-over in gas costs money and shuts in the pad.',
  specs:[['HP separator','48 in x 15 ft, 3-phase, 285 psi MAWP'],['LP separator','36 in x 12 ft, 125 psi MAWP'],['Test separator','30 in x 10 ft, 3-phase'],['Heater-treater','8 ft x 20 ft, 1.5 MMBtu/h']],
  safety:['Fired vessel: burner management with flame safeguard and low-level shutdown.','PSVs to flare on every vessel; relief header sizing per API 521.','Level loss on the oil-water interface sends water to tanks.','Hot surfaces on the treater firetube and stack.'],
  conns:['FL','ST','FR'],
  children:[
   {id:'SP.hp',name:'HP Separator',summary:'Three-phase horizontal separator taking the production header at 120 psi.',specs:[['Size','48 in x 15 ft s/s'],['MAWP','285 psi'],['Internals','Inlet diverter, weir, mist extractor']]},
   {id:'SP.lp',name:'LP Separator',summary:'Second-stage separator flashing oil from the HP vessel at 30 psi to recover gas before tanks.',specs:[['Size','36 in x 12 ft'],['MAWP','125 psi']]},
   {id:'SP.test',name:'Test Separator',summary:'Smaller three-phase separator with metering on each outlet for individual well tests.',specs:[['Size','30 in x 10 ft'],['Metering','Turbine (oil), orifice (gas), Coriolis (water)']]},
   {id:'SP.ht',name:'Heater-Treater',summary:'Vertical fired treater that heats the emulsion and separates water from oil.',body:'Emulsion enters above the firetube, is heated to 60 C and rises through the coalescing section; water falls to the bottom and oil overflows the weir to the tank line.',specs:[['Size','8 ft x 20 ft vertical'],['Duty','1.5 MMBtu/h'],['Operating temp','60 C']],children:[
    {id:'SP.ht.shell',name:'Treater Vessel',summary:'Vertical shell with coalescing section, weir and firetube nozzle.'},
    {id:'SP.ht.burner',name:'Burner & Firetube',summary:'Natural-draft burner with flame arrestor firing a U-tube in the water leg.',specs:[['Fuel','Produced gas, 10 psi'],['Safeguard','UV flame scanner, BMS']]},
    {id:'SP.ht.stack',name:'Stack',summary:'Flue stack with rain cap and temperature indication.'}
   ]},
   {id:'SP.scrub',name:'Gas Scrubber',summary:'Vertical scrubber on the separator gas outlet that catches liquid before the gas meter and gathering line.',specs:[['Size','24 in x 8 ft'],['MAWP','285 psi']]},
   {id:'SP.pumps',name:'Transfer Pumps',summary:'Oil and water transfer pumps from the LP separator and treater to the tank battery.',specs:[['Oil pump','Centrifugal, 15 hp'],['Water pump','Centrifugal, 10 hp']]}
  ]},
 {id:'ST',code:'05',name:'Storage & LACT',icon:'tank',
  summary:'Tank battery for oil and produced water, the LACT custody-transfer unit, vapour recovery and truck loading.',
  body:'Four 500 bbl oil tanks and two water tanks sit inside an earthen bund. Oil gravity-settles further in the tanks; the LACT unit meters, samples and proves oil into the sales line when it is on spec. Tank vapours go to the VRU compressor rather than a vent. A truck loading arm handles water haul-off and oil when the pipeline is down.',
  eng:'Tanks are API 12F atmospheric vessels with pressure-vacuum vents. The LACT meter is proven monthly; BS&W and density decide whether the divert valve sends oil to sales or back to the treater.',
  where:[['Area','Tank battery, east side of pad'],['Containing structure','Bunded tank pad'],['Placement','Tanks in a row 12 m from the treater; LACT at the south end']],
  why:'Custody transfer happens here. The LACT meter reading is the invoice.',
  specs:[['Oil tanks','4 x 500 bbl, API 12F'],['Water tanks','2 x 400 bbl'],['LACT','3 in Coriolis, prover loop'],['VRU','Rotary screw, 50 Mscfd']],
  safety:['Thief hatches: hydrocarbon vapour and H2S at the hatch.','Bund capacity 110% of the largest tank.','VRU trips: tank pressure high-high vents to flare.','Static bonding at the loading arm.'],
  conns:['SP','FR','UT'],
  children:[
   {id:'ST.oil',name:'Oil Tank Battery',summary:'Four 500 bbl cone-roof oil tanks with a common vapour header.',children:[
    {id:'ST.oil.t1',name:'Oil Tank 1',summary:'500 bbl API 12F tank, first in the series.',specs:[['Capacity','500 bbl'],['Roof','Cone, PV vent']]},
    {id:'ST.oil.t2',name:'Oil Tank 2',summary:'500 bbl API 12F tank.'},
    {id:'ST.oil.t3',name:'Oil Tank 3',summary:'500 bbl API 12F tank.'},
    {id:'ST.oil.t4',name:'Oil Tank 4',summary:'500 bbl API 12F tank, sales tank feeding the LACT.'}
   ]},
   {id:'ST.water',name:'Produced Water Tanks',summary:'Two 400 bbl fibreglass tanks holding water for haul-off or injection.',specs:[['Capacity','2 x 400 bbl'],['Material','Fibreglass']]},
   {id:'ST.lact',name:'LACT Unit',summary:'Lease automatic custody transfer skid: strainer, pump, BS&W probe, sampler, Coriolis meter and divert valve.',specs:[['Meter','3 in Coriolis'],['Prover','Bi-directional loop'],['Divert','On BS&W > 1%']]},
   {id:'ST.vru',name:'Vapour Recovery Unit',summary:'Rotary screw compressor that recovers tank vapours to the gas line.',specs:[['Capacity','50 Mscfd'],['Suction','2 oz'],['Discharge','60 psi']]},
   {id:'ST.loading',name:'Truck Loading',summary:'Loading arm and grounding point for water and oil haul-off.'},
   {id:'ST.bund',name:'Bund & Tank Pad',summary:'Earthen containment with liner sized for 110% of the largest tank.'}
  ]},
 {id:'FR',code:'06',name:'Flare & Relief',icon:'meter',
  summary:'Relief header, knockout drum and flare stack that dispose of gas safely on upset or shutdown.',
  body:'Every PSV and blowdown valve discharges into the relief header. The knockout drum removes liquid so only gas reaches the flare tip, where a continuous pilot keeps it lit. On a pad shutdown the separators depressure to flare.',
  eng:'Header and drum sized per API 521 for the governing case (blocked outlet on the HP separator). Tip velocity and radiation set the stack height and the sterile radius around it.',
  where:[['Area','North-east corner of the pad'],['Containing structure','Flare base with guy wires'],['Placement','30 m from the nearest vessel, downwind']],
  why:'The flare is the last line of overpressure protection. If it cannot take the relief load, a vessel fails first.',
  specs:[['Stack','12 in x 30 m guyed'],['KO drum','36 in x 10 ft'],['Pilot','Continuous, FFG ignition'],['Design case','HP separator blocked outlet, 8 MMscfd']],
  safety:['Sterile area: radiation limit 1,500 Btu/h/ft2 at the fence.','Pilot flame monitoring and auto re-ignition.','KO drum level high-high: liquid to the tip is a fire hazard.','Guy wire tension checks.'],
  conns:['SP','ST'],
  children:[
   {id:'FR.stack',name:'Flare Stack',summary:'Guyed 30 m stack with pilot, flame front generator and tip.',specs:[['Height','30 m'],['Tip','12 in, unassisted']]},
   {id:'FR.ko',name:'Knockout Drum',summary:'Horizontal drum on the relief header that separates liquid before the stack.',specs:[['Size','36 in x 10 ft'],['Pump-out','Auto on high level']]},
   {id:'FR.header',name:'Relief Header',summary:'Sloped 6 in header collecting every PSV and blowdown outlet.'},
   {id:'FR.ffg',name:'Pilot & FFG Panel',summary:'Flame-front generator and pilot gas panel at the stack base.'}
  ]},
 {id:'UT',code:'07',name:'Utilities & Control',icon:'bolt',
  summary:'Power, instrument air, chemicals, control building and the site works that keep the pad running.',
  body:'A gas-fired generator carries the pad load with a utility feed as backup. Instrument air drives the ESD and control valves. The control building houses the MCC, PLC and SCADA radio. Methanol and chemical totes sit on a bunded skid. The pad, road, fence and lighting are the site works.',
  eng:'Pad load is about 200 kW, dominated by the pumping unit motor and ESP. Instrument air is dried to -40 C dew point so ESD valves do not freeze in winter. SCADA reports rates, levels and alarms to the field office every minute.',
  where:[['Area','South-west corner of the pad'],['Containing structure','Utility skids and control building'],['Placement','Generator and MCC 25 m from the wells']],
  why:'Loss of power or instrument air is a pad shutdown. Utilities are the reliability floor.',
  specs:[['Generator','250 kW gas engine'],['Instrument air','2 x 30 scfm, dryer'],['Control','PLC with radio SCADA'],['Lighting','LED, 6 masts']],
  safety:['Generator exhaust and hot surfaces.','Arc flash at the MCC.','Methanol handling: flammable and toxic.','Site fence and gate control for public access.'],
  conns:['AL','FL','ST'],
  children:[
   {id:'UT.gen',name:'Generator Set',summary:'Gas-engine generator in an acoustic enclosure with radiator and exhaust stack.',specs:[['Rating','250 kW, 480 V'],['Fuel','Produced gas, 15 psi']]},
   {id:'UT.mcc',name:'Control Building & MCC',summary:'Pre-fabricated building with the motor control centre, PLC panel and SCADA radio.',specs:[['MCC','480 V, 800 A'],['PLC','Redundant CPU'],['Radio','900 MHz to field office']]},
   {id:'UT.air',name:'Instrument Air Package',summary:'Duplex compressors, receiver and desiccant dryer feeding the pneumatic valves.',specs:[['Capacity','2 x 30 scfm'],['Dew point','-40 C']]},
   {id:'UT.chem',name:'Chemical & Methanol Skid',summary:'Bunded skid with methanol tank and chemical totes.',specs:[['Methanol','2,000 L'],['Totes','2 x 1,000 L']]},
   {id:'UT.site',name:'Site Works',summary:'Gravel pad, access road, fence, gate and lighting masts.',children:[
    {id:'UT.site.pad',name:'Gravel Pad',summary:'Compacted gravel pad with drainage to the bund sump.'},
    {id:'UT.site.fence',name:'Fence & Gate',summary:'Chain-link fence with a locked gate at the access road.'},
    {id:'UT.site.lights',name:'Lighting Masts',summary:'Six LED masts on the pad perimeter.'}
   ]}
  ]}
 ],
 build(h){
  const {box,cyl,strut,pipe,sph,mat,C,KIT,sub}=h;const T=Math.PI/2;
  const ST={metalness:.45,roughness:.45};
  // ---- site works
  const pad=box(70,.3,48,C.concrete,4,.15,0,'UT.site.pad',null,{roughness:.95});pad.receiveShadow=true;
  [[-31,0,.2,48],[39,0,.2,48],[4,-24,70,.2],[4,24,70,.2]].forEach(([x,z,w,d])=>{box(w,.1,d,C.yellow,x,.32,z,'UT.site.pad');});
  for(let i=0;i<=14;i++){[[-32,-25+i*3.6],[40,-25+i*3.6]].forEach(([x,z])=>cyl(.06,2.2,C.steel,x,1.1,z,'UT.site.fence'));}
  for(let i=0;i<=20;i++){[[-32+i*3.6,-25],[-32+i*3.6,25]].forEach(([x,z])=>cyl(.06,2.2,C.steel,x,1.1,z,'UT.site.fence'));}
  [[-32,40,-25],[-32,40,25]].forEach(([x0,x1,z])=>{strut([x0,2.1,z],[x1,2.1,z],.02,C.steel,'UT.site.fence');strut([x0,1.1,z],[x1,1.1,z],.02,C.steel,'UT.site.fence');});
  [[-32,-25,25],[40,-25,25]].forEach(([x,z0,z1])=>{strut([x,2.1,z0],[x,2.1,z1],.02,C.steel,'UT.site.fence');strut([x,1.1,z0],[x,1.1,z1],.02,C.steel,'UT.site.fence');});
  box(4,2.2,.1,0x8d9aa8,40,1.1,-16,'UT.site.fence');
  [[-28,-20],[-28,20],[36,-20],[36,20],[4,-22],[4,22]].forEach(([x,z])=>{cyl(.14,9,C.steel,x,4.5,z,'UT.site.lights',null,ST,.1,10);box(.8,.3,.4,0x2b2f38,x,9.1,z,'UT.site.lights');});

  // ---- wells: cellars, heads, trees
  const wellA=[-18,-8],wellB=[-18,8];
  [[...wellA,'WH.a.cellar'],[...wellB,'WH.b.cellar']].forEach(([x,z,id])=>{cyl(2.2,.6,0x5a5a5a,x,.3,z,id,null,{roughness:1},2.2,24);KIT.handrail(x,z,4.6,4.6,.6,id);});
  // Well A: casing head, tubing head, tree with stuffing box
  cyl(.55,1.2,C.dark,wellA[0],.6,wellA[1],'WH.a.casinghead',null,ST,.55,20);KIT.torus(.62,.08,wellA[0],1.15,wellA[1],C.dark,'WH.a.casinghead',T);KIT.nozzle(wellA[0]+.55,.9,wellA[1],.12,.6,C.dark,'WH.a.casinghead','x');
  cyl(.42,.9,C.dark,wellA[0],1.65,wellA[1],'WH.a.tubinghead',null,ST,.42,20);KIT.torus(.5,.07,wellA[0],2.05,wellA[1],C.dark,'WH.a.tubinghead',T);KIT.nozzle(wellA[0]-.42,1.7,wellA[1],.1,-.5,C.dark,'WH.a.tubinghead','x');
  cyl(.28,1.4,C.red,wellA[0],2.8,wellA[1],'WH.a.tree',null,ST,.28,16);KIT.valve(wellA[0],2.5,wellA[1],'WH.a.tree','y',.3);KIT.valve(wellA[0]+.7,3.1,wellA[1],'WH.a.tree','x',.24);cyl(.1,1.2,C.red,wellA[0]+1.1,3.1,wellA[1],'WH.a.tree',null,ST,.1,10).rotation.z=T;
  cyl(.18,.6,C.dark,wellA[0],3.8,wellA[1],'WH.a.stuffing',null,ST,.18,12);cyl(.06,4.5,C.steel,wellA[0],6.2,wellA[1],'WH.a.stuffing',null,{metalness:.8,roughness:.2},.06,8);
  // Well B: heads, tree with 4 valves and choke
  cyl(.55,1.2,C.dark,wellB[0],.6,wellB[1],'WH.b.head',null,ST,.55,20);KIT.torus(.62,.08,wellB[0],1.15,wellB[1],C.dark,'WH.b.head',T);cyl(.42,.9,C.dark,wellB[0],1.65,wellB[1],'WH.b.head',null,ST,.42,20);KIT.nozzle(wellB[0]-.42,1.5,wellB[1],.1,-.5,C.dark,'WH.b.head','x');
  cyl(.26,2.6,C.red,wellB[0],3.4,wellB[1],'WH.b.tree',null,ST,.26,16);KIT.valve(wellB[0],2.4,wellB[1],'WH.b.tree','y',.3);KIT.valve(wellB[0],3.3,wellB[1],'WH.b.tree','y',.3);KIT.valve(wellB[0]+.7,4,wellB[1],'WH.b.tree','x',.24);
  cyl(.1,1.4,C.red,wellB[0]+1.2,4,wellB[1],'WH.b.tree',null,ST,.1,10).rotation.z=T;KIT.valve(wellB[0],4.6,wellB[1],'WH.b.tree','y',.22);cyl(.14,.4,C.dark,wellB[0]+1.7,4,wellB[1],'WH.b.tree',null,ST,.14,10);
  // subsurface strings (Well A and B)
  [wellA,wellB].forEach(([x,z])=>{cyl(.62,45,0xd8d2c0,x,-22.5,z,'WH.casing.surface',null,{roughness:1,transparent:true,opacity:.45},.62,20);cyl(.42,76,C.steel,x,-38,z,'WH.casing.prod',null,{metalness:.5,roughness:.4,transparent:true,opacity:.7},.42,20);cyl(.14,78,0x9aa3ad,x,-39,z,'WH.casing.tubing',null,{metalness:.6,roughness:.3},.14,12);});
  cyl(.06,72,C.steel,wellA[0],-36,wellA[1],'AL.rods',null,{metalness:.8,roughness:.2},.06,8);cyl(.2,4,0x2b2f38,wellA[0],-72,wellA[1],'AL.rods',null,ST,.2,12);
  cyl(.2,6,0x5c6b8a,wellB[0],-70,wellB[1],'AL.esp.pump',null,ST,.2,12);cyl(.2,4,C.dark,wellB[0],-75,wellB[1],'AL.esp.pump',null,ST,.2,12);
  [[0,-6,0x9c7f58],[-6,-26,0xb89a6a],[-26,-46,0x6c6a6a],[-46,-60,0xbdb5a0],[-60,-78,0xa88a5c]].forEach(([top,bot,col])=>{const m=new THREE.Mesh(new THREE.BoxGeometry(110,top-bot,80),mat(col,{transparent:true,opacity:.28,roughness:1,depthWrite:false}));m.position.set(4,(top+bot)/2,0);sub.add(m);const e=new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.25}));e.position.copy(m.position);sub.add(e);});

  // ---- pumping unit on Well A
  const px=wellA[0]+3.6,pz=wellA[1];
  box(7.5,.5,2.8,C.concrete,px,.25,pz,'AL.pj.base',null,{roughness:.95});box(6.8,.35,2.2,C.dark,px,.67,pz,'AL.pj.base');
  strut([px+.4,.85,pz-.9],[px+1.2,5.6,pz-.35],.2,C.red,'AL.pj.base');strut([px+.4,.85,pz+.9],[px+1.2,5.6,pz+.35],.2,C.red,'AL.pj.base');strut([px+2.4,.85,pz],[px+1.2,5.6,pz],.16,C.red,'AL.pj.base');cyl(.3,.9,C.dark,px+1.2,5.7,pz,'AL.pj.base',null,ST,.3,12).rotation.x=T;
  box(7.4,.45,.7,C.red,px+.3,5.95,pz,'AL.pj.beam');box(1,.9,1,C.dark,px+3.6,5.95,pz,'AL.pj.beam');box(1.2,.5,1.4,C.red,px-3.1,5.95,pz,'AL.pj.beam');
  cyl(1.3,.8,C.red,px-3.6,5.9,pz,'AL.pj.horsehead',null,ST,1.3,20).rotation.x=T;box(1,1.6,.9,C.red,px-3.9,5.4,pz,'AL.pj.horsehead');strut([px-4.5,5.2,pz-.15],[px-4.5,4,pz-.15],.03,C.cable,'AL.pj.horsehead');strut([px-4.5,5.2,pz+.15],[px-4.5,4,pz+.15],.03,C.cable,'AL.pj.horsehead');box(.5,.3,.5,C.dark,px-4.5,3.9,pz,'AL.pj.horsehead');
  [-1,1].forEach(s=>{box(2.4,.5,.3,C.dark,px+3.6,2.3,pz+s*1.25,'AL.pj.crank');box(.9,.9,.35,C.dark,px+4.6,2.3,pz+s*1.25,'AL.pj.crank');strut([px+2.7,2.3,pz+s*1.15],[px+3.6,5.7,pz+s*.5],.08,C.steel,'AL.pj.crank');});
  box(1.8,1.6,2.2,0x5c6b8a,px+3.6,1.7,pz,'AL.pj.reducer');cyl(.12,3,C.steel,px+3.6,2.3,pz,'AL.pj.reducer',null,ST,.12,10).rotation.x=T;cyl(.9,.3,C.dark,px+3.6,1.7,pz-1.3,'AL.pj.reducer',null,ST,.9,20).rotation.x=T;
  box(1.2,.25,1.2,C.dark,px+3.6,.98,pz+2.6,'AL.pj.motor');cyl(.4,1.2,0x5c6b8a,px+3.6,1.5,pz+2.6,'AL.pj.motor',null,ST,.4,16).rotation.z=T;cyl(.3,.2,C.dark,px+3.6,1.5,pz+1.9,'AL.pj.motor',null,ST,.3,12).rotation.x=T;box(1.6,1.2,.9,0x8d9aa8,px+3.6,1.5,pz+1.3,'AL.pj.motor',{shell:true},{transparent:true,opacity:.7});
  // ---- ESP surface equipment on Well B
  box(1.6,2.2,1,0x8d9aa8,wellB[0]-6,1.25,wellB[1]+3,'AL.esp.vsd');box(.4,.6,.05,0x1a2a4a,wellB[0]-6,1.6,wellB[1]+3.52,'AL.esp.vsd');cyl(.15,2.2,C.steel,wellB[0]-6,1.1,wellB[1]+3,'AL.esp.vsd',null,ST,.15,8);
  box(.7,.7,.5,0x8d9aa8,wellB[0]-2.5,1.8,wellB[1]+2,'AL.esp.jbox');cyl(.06,1.8,C.steel,wellB[0]-2.5,.9,wellB[1]+2,'AL.esp.jbox');
  strut([wellB[0]-6,1.9,wellB[1]+3],[wellB[0]-2.5,2.2,wellB[1]+2],.05,C.cable,'AL.esp.cable');strut([wellB[0]-2.5,2.2,wellB[1]+2],[wellB[0],2.2,wellB[1]],.05,C.cable,'AL.esp.cable');box(3.6,.06,.3,C.steel,wellB[0]-4.2,2.15,wellB[1]+2.5,'AL.esp.cable');

  // ---- flowlines, ESD, manifold, pig launcher, chemical skid, rack
  pipe([[wellA[0]+1.7,3.1,wellA[1]],[wellA[0]+2.6,3.1,wellA[1]],[wellA[0]+2.6,1,wellA[1]],[-8,1,wellA[1]],[-8,1,-2.4]],.12,C.steel,'FL.line_a');KIT.valve(-12,1,wellA[1],'FL.line_a','x',.2);
  pipe([[wellB[0]+1.9,4,wellB[1]],[wellB[0]+2.8,4,wellB[1]],[wellB[0]+2.8,1,wellB[1]],[-8,1,wellB[1]],[-8,1,2.4]],.12,C.steel,'FL.line_b');KIT.valve(-12,1,wellB[1],'FL.line_b','x',.2);
  [[-10.5,wellA[1]],[-10.5,wellB[1]]].forEach(([x,z])=>{sph(.28,0x3f4a5a,x,1,z,'FL.esd',null,ST);cyl(.16,.8,C.yellow,x,1.5,z,'FL.esd',null,ST,.16,10);box(.5,.4,.5,C.yellow,x,2,z,'FL.esd');});
  box(5,.3,7,C.dark,-6,.15,0,'FL.manifold');cyl(.22,6.4,C.steel,-7,1,0,'FL.manifold',null,ST,.22,14).rotation.x=T;cyl(.17,6.4,C.steel,-5,1.4,0,'FL.manifold',null,ST,.17,14).rotation.x=T;
  [-2.4,2.4].forEach(z=>{KIT.valve(-7,1,z,'FL.manifold','z',.22);KIT.valve(-5,1.4,z,'FL.manifold','z',.18);pipe([[-7,1,z],[-5,1,z],[-5,1.4,z]],.1,C.steel,'FL.manifold');});
  pipe([[-7,1,3.2],[-7,1,3.2]],.1,C.steel,'FL.manifold');pipe([[-7,1,-3.2],[-7,2.6,-3.2],[-7,2.6,-12],[2,2.6,-12]],.14,C.steel,'FL.manifold');pipe([[-5,1.4,3.2],[-5,2.4,3.2],[-5,2.4,12],[2,2.4,12]],.11,C.steel,'FL.manifold');
  cyl(.45,3.6,C.steel,-4,1.1,-18,'FL.pig',null,ST,.45,16).rotation.z=T;cyl(.55,.3,C.dark,-6,1.1,-18,'FL.pig',null,ST,.55,16).rotation.z=T;cyl(.25,2,C.steel,-1.6,1.1,-18,'FL.pig',null,ST,.25,12).rotation.z=T;KIT.valve(-1,1.1,-18,'FL.pig','x',.22);[[-4.8],[-3.2]].forEach(([x])=>box(.6,.9,.4,C.concrete,x,.45,-18,'FL.pig'));pipe([[0,1.1,-18],[0,.6,-18],[0,.6,-30]],.14,C.steel,'FL.pig');
  box(3.6,.25,2.4,C.dark,-24,.12,-2,'FL.chem');[-.9,.9].forEach(dz=>{cyl(.5,1.1,0xf1efe8,-24.8,.8,-2+dz,'FL.chem',null,{roughness:.6},.5,14);box(.5,.5,.4,C.blue,-23.2,.5,-2+dz,'FL.chem');});box(3.8,1.6,.05,0x8d9aa8,-24,1.6,-3.25,'FL.chem');
  KIT.rack(-8,20,-14,3.4,3,'FL.rack',.1);KIT.rack(-8,20,14,3.4,3,'FL.rack',.1);

  // ---- separation & treating
  KIT.vesselH(8,2.6,-10,1.25,7.6,'SP.hp',C.steel,{boot:true,platform:true});KIT.vesselH(8,2.3,-4,.95,6,'SP.lp',C.steel,{boot:true});KIT.vesselH(8,2.1,3,.8,5,'SP.test',C.steel,{boot:true});
  [[-10,-6],[-4,-6],[3,-6]].forEach(([z,y])=>{});[[12.5,-10,'SP.hp'],[11.8,-4,'SP.lp'],[11.2,3,'SP.test']].forEach(([x,z,id])=>{box(1,.9,.9,0x8d9aa8,x,3.4,z,id);});
  cyl(1.4,7,C.steel,20,3.5+1.2,-8,'SP.ht.shell',null,{metalness:.35,roughness:.5},1.4,28);cyl(1.5,1.2,C.concrete,20,.6,-8,'SP.ht.shell',null,{roughness:.95},1.5,28);sph(1.4,C.steel,20,11.7,-8,'SP.ht.shell',null,{metalness:.35,roughness:.5}).scale.y=.3;
  cyl(2.4,.12,C.steel,20,8.6,-8,'SP.ht.shell',null,ST,2.4,28);KIT.ring(20,8.66,-8,2.35,'SP.ht.shell');KIT.ladder(21.75,-8,1.2,11.2,'SP.ht.shell',0);KIT.nozzle(21.4,4,-8,.2,.8,C.steel,'SP.ht.shell','x');KIT.nozzle(21.4,9.6,-8,.16,.7,C.steel,'SP.ht.shell','x');
  box(1.6,1.4,1.4,0x2b2f38,20,2.6,-5.4,'SP.ht.burner');cyl(.35,1.2,C.dark,20,2.6,-4.4,'SP.ht.burner',null,ST,.35,12).rotation.x=T;cyl(.5,.6,C.dark,20,2.6,-6.5,'SP.ht.burner',null,ST,.5,12).rotation.x=T;
  cyl(.42,8,C.steel,20,12+4,-9.4,'SP.ht.stack',null,ST,.42,16);cyl(.7,.3,C.dark,20,20.2,-9.4,'SP.ht.stack',null,ST,.7,16);strut([20,13,-9.4],[21.9,11.7,-8],.06,C.steel,'SP.ht.stack');
  KIT.column(14,8,.6,5,'SP.scrub',C.steel,{platforms:0});KIT.pumpSet(14,-1,'SP.pumps',C.blue);KIT.pumpSet(14,1.4,'SP.pumps',C.blue);
  pipe([[8,3.9,-10],[8,4.4,-10],[14,4.4,-10],[14,4.4,8],[14,5.4,8]],.12,C.steel,'SP.hp');pipe([[8,3.3,-4],[8,4.1,-4],[8,4.1,-8.2]],.1,C.steel,'SP.lp');pipe([[11.8,2.3,-4],[18.6,2.3,-4],[18.6,4,-8]],.12,C.steel,'SP.ht.shell');

  // ---- tank battery, LACT, VRU, loading, bund
  box(24,.35,26,0xb89a6a,30,.17,0,'ST.bund',null,{roughness:1});[[30,-13.4,24,.8],[30,13.4,24,.8]].forEach(([x,z,w,d])=>box(w,1,d,0xa0895f,x,.5,z,'ST.bund',null,{roughness:1}));[[18,0,.8,27.6],[42,0,.8,27.6]].forEach(([x,z,w,d])=>box(w,1,d,0xa0895f,x,.5,z,'ST.bund',null,{roughness:1}));
  [['ST.oil.t1',-9],['ST.oil.t2',-3],['ST.oil.t3',3],['ST.oil.t4',9]].forEach(([id,z])=>KIT.tankAPI(24,z,2.2,4.6,id,0xd9d2bf,{roof:'cone'}));
  [[-4.5],[4.5]].forEach(([z])=>KIT.tankAPI(36,z,2,4,'ST.water',0x9bb7a0,{roof:'cone'}));
  pipe([[24,4.3,-9],[24,5.2,-9],[24,5.2,9]],.09,C.steel,'ST.oil');pipe([[24,5.2,9],[30,5.2,9],[30,2.2,16]],.09,C.steel,'ST.vru');
  box(4.4,.3,2.4,C.dark,26,.15,16.5,'ST.lact');cyl(.35,1.6,C.steel,24.6,1,16.5,'ST.lact',null,ST,.35,12).rotation.z=T;box(.9,.9,.7,0x5c6b8a,26.4,.85,16.5,'ST.lact');KIT.valve(27.6,1,16.5,'ST.lact','x',.2);box(.6,1.2,.4,0x8d9aa8,25.2,1.1,17.4,'ST.lact');cyl(.25,2.6,C.steel,26,1.5,15.4,'ST.lact',null,ST,.25,10).rotation.z=T;
  box(3.6,.3,2,C.dark,32,.15,17,'ST.vru');cyl(.4,1.6,0x5c6b8a,31.2,.9,17,'ST.vru',null,ST,.4,14).rotation.z=T;box(1,.9,.9,0x8d9aa8,32.8,.75,17,'ST.vru');cyl(.35,1.2,C.steel,33.2,.9,16,'ST.vru',null,ST,.35,12);
  cyl(.12,4,C.steel,38,2,18,'ST.loading',null,ST,.1,8);strut([38,4,18],[38,4,15],.08,C.steel,'ST.loading');strut([38,4,15],[38,2,15],.06,C.steel,'ST.loading');box(.5,.5,.5,C.yellow,38,1.2,19.2,'ST.loading');

  // ---- flare & relief
  KIT.flare(30,-22,24,'FR.stack',{ko:false});KIT.vesselH(22,1.8,-20,.75,4,'FR.ko',C.steel,{manway:false});box(1,1.2,.8,0x8d9aa8,31.5,.6,-19.5,'FR.ffg');cyl(.1,1.5,C.steel,31.5,1.9,-19.5,'FR.ffg');
  pipe([[8,3.9,-10],[8,4.8,-10],[8,4.8,-16],[22,4.8,-16],[22,2.6,-20]],.12,C.steel,'FR.header');pipe([[24,1.8,-20],[27,1.8,-20],[27,1.8,-22],[29.5,1.8,-22]],.12,C.steel,'FR.header');

  // ---- utilities
  box(5,2.4,2,0x8d9aa8,-24,1.2,14,'UT.gen',{shell:true});box(5.2,.2,2.2,C.dark,-24,2.5,14,'UT.gen');cyl(.2,2,C.steel,-25.5,3.6,14,'UT.gen',null,ST,.2,10);box(.9,1.8,1.6,0x2b2f38,-21.4,1.2,14,'UT.gen');
  KIT.building(-24,20,7,4,3,'UT.mcc',0xf1efe8,{hvac:true});
  box(3,.25,1.8,C.dark,-14,.12,18,'UT.air');[-.8,.8].forEach(dx=>box(.8,.8,.8,0x5c6b8a,-14+dx,.65,18.4,'UT.air'));cyl(.45,1.8,C.steel,-14.6,1.15,17.2,'UT.air',null,ST,.45,14).rotation.z=T;cyl(.25,1.4,C.steel,-12.8,.95,17.2,'UT.air',null,ST,.25,12);
  box(4,.3,3,C.concrete,-8,.15,19,'UT.chem',null,{roughness:.95});cyl(.8,2,0xf1efe8,-9,1.3,19,'UT.chem',null,{roughness:.6},.8,16);[[-7.2,18.2],[-7.2,19.8]].forEach(([x,z])=>box(.9,1,.9,0xe8ebee,x,.8,z,'UT.chem',{shell:true},{transparent:true,opacity:.8}));
 }
});
