// Value-chain overview: a three-row serpentine diorama of the oil and gas chain.
// Stations that have a full site carry `site:'<id>'`; planned ones carry `roadmap:true`.
(window.SITES=window.SITES||[]).push({
 id:'chain',name:'Value Chain',stage:'overview',code:'00',icon:'meter',
 short:'Reservoir to retail: every stage of the oil and gas chain on one map.',
 world:'flat',hasSubsurface:false,
 home:{target:[0,0,-2],theta:.2,phi:.94,radius:222},
 evidence:['S1 Value-chain overview, industry training module','S2 API/ISO stage definitions','S3 Typical facility block-flow diagrams','S4 Public operator asset descriptions'],
 systems:[
 {id:'UP',code:'01',name:'Upstream',icon:'hoist',
  summary:'Finding and producing hydrocarbons: exploration, drilling, completion and first-stage processing at the wellsite.',
  body:'Upstream begins with seismic surveys that image the subsurface, continues through exploration and development drilling, and ends at the gathering system that moves separated oil, gas and water off the pad. Everything here is about the reservoir: how much is there, how to reach it safely and how to lift it to surface at a controlled rate.',
  eng:'The defining constraints are pressure and uncertainty. Wells are designed against expected pore and fracture pressures; facilities are sized on production forecasts that carry wide error bars. Capital is front-loaded and the decline curve sets the economics.',
  where:[['Area','Field, onshore or offshore'],['Containing structure','Licence block'],['Placement','From the seismic grid to the gathering-system outlet']],
  why:'Nothing downstream exists without a producing well. Upstream sets the volume, composition and pressure that every later stage must handle.',
  specs:[['Typical horizon','20-40 years field life'],['Key output','Crude oil, raw gas, produced water'],['Pressure range','Wellhead 500-10,000 psi']],
  safety:['Well control is the primary barrier: kick detection, BOP function and shut-in procedures.','H2S and hydrocarbon release at the wellsite.','Simultaneous operations between drilling, completion and production crews.','Ground and environmental disturbance from pads and access roads.'],
  conns:['MID'],
  children:[
   {id:'UP.explore',name:'Exploration & Seismic',roadmap:true,summary:'Seismic acquisition and interpretation that locate and size a prospect before any well is drilled.',body:'Vibroseis trucks or explosive sources send energy into the ground; arrays of geophones record the reflections. Processing turns the traces into a 3D image of rock layers, and interpreters map traps, seals and likely fluid contacts.',eng:'Resolution is limited by wavelength: seismic sees layers tens of metres thick, not the pore-scale detail that governs flow. Exploration wells convert a geological probability into a measured result.',where:[['Area','Licence block, before drilling'],['Containing structure','Survey grid'],['Placement','Surface lines or streamers over the prospect']],why:'A dry hole costs as much as a discovery. Seismic is how the industry reduces that risk before committing a rig.',specs:[['Survey type','3D land or marine'],['Line spacing','25-50 m'],['Depth of interest','1-5 km']],safety:['Explosive source handling and exclusion zones.','Vehicle and terrain hazards across the survey area.'],conns:['UP.rig']},
   {id:'UP.rig',name:'Drilling Rig',site:'rig',summary:'Land rig that drills, cases and cements the well from surface to the reservoir.',body:'The rig hoists and rotates the drill string, circulates mud to carry cuttings and hold back formation pressure, and runs casing strings that are cemented in place. Well control equipment on the wellhead keeps a kick from becoming a blowout.',eng:'A 1,500 hp AC land rig with 500 t hook load, 75 kNm top drive and three 2,200 hp mud pumps. Its full engineering hierarchy is modelled as its own site.',where:[['Area','Wellsite'],['Containing structure','Drilling pad'],['Placement','Centred on well centre; moves off once the well is completed']],why:'Every barrel and cubic foot in the chain passes through a hole this machine made. Its well control system is the last barrier between the reservoir and the atmosphere.',specs:[['Rating','1,500 hp, 500 t hook load'],['Depth capacity','~6,000 m'],['Crew','~45 on a two-crew rotation']],safety:['Well control: kick detection and BOP function.','Dropped objects from the mast and drill floor.','Pipe handling and rotating equipment.','High-pressure mud system.'],conns:['UP.explore','UP.prod']},
   {id:'UP.prod',name:'Production Facility',site:'production',summary:'Wellhead, artificial lift, separation and tank battery that turn raw well fluid into sales-quality oil and gas.',body:'Once the rig leaves, the well is completed and tied into a production pad. A pumpjack or ESP lifts fluid when reservoir pressure will not; separators split oil, gas and water; a heater-treater breaks emulsions; a tank battery stores oil for LACT custody transfer; gas goes to a compressor or the gathering line.',eng:'The facility is sized on the production forecast and turned down as the well declines. Separator retention time, treater temperature and tank vapour handling are the daily operating variables.',where:[['Area','Wellsite'],['Containing structure','Production pad'],['Placement','Adjacent to the wellhead; gathering line leaves the pad boundary']],why:'This is where reservoir fluid becomes a saleable product. Measurement here sets the revenue for everyone upstream of the sales meter.',specs:[['Throughput','500-5,000 bopd per pad'],['Separation','3-phase, 50-150 psi'],['Storage','4 x 500 bbl tanks typical']],safety:['Tank vapour and VRU: hydrocarbon atmospheres at thief hatches.','Heater-treater fired vessel: flame safeguard and burner management.','Pumpjack rotating and reciprocating parts.','H2S where sour.'],conns:['UP.rig','UP.gather']},
   {id:'UP.gather',name:'Gathering & Pump Station',roadmap:true,summary:'Flowlines and a pump or compressor station that move pad production to the processing plant.',body:'Small-diameter flowlines from many pads join at a header; a booster pump or field compressor raises pressure for the trunk to the plant. Pig launchers and receivers keep the lines clear of wax, scale and liquids.',eng:'Line sizing is a balance between velocity (erosion, slugging) and pressure drop. Multiphase lines slug; a slug catcher at the plant inlet absorbs the surges.',where:[['Area','Field'],['Containing structure','Right-of-way'],['Placement','Pad boundary to plant inlet']],why:'Gathering is where field production is aggregated and metered. A bottleneck here shuts in wells regardless of how well they could produce.',specs:[['Line size','4-12 in'],['Operating pressure','200-1,400 psi'],['Length','1-40 km']],safety:['Pipeline integrity: corrosion, third-party strikes.','Pigging operations: trapped pressure at launchers and receivers.'],conns:['UP.prod','MID.gas']}
  ]},
 {id:'MID',code:'02',name:'Midstream',icon:'compressor',
  summary:'Processing, transport and storage between the field and the refinery: gas plants, LNG, pipelines and terminals.',
  body:'Midstream takes raw production and makes it transportable. Gas plants strip water, acid gas and NGLs to pipeline specification; LNG plants chill gas to a liquid for shipping; trunk pipelines and terminals move and hold crude and products in bulk.',
  eng:'Midstream economics are throughput and utilisation. Assets are sized on contracted volumes and run for decades; the engineering priorities are reliability, integrity and metering accuracy.',
  where:[['Area','Between field and market'],['Containing structure','Pipeline corridors, plant sites, ports'],['Placement','Plant inlet to refinery gate or export jetty']],
  why:'Without processing and transport, a producing field has nowhere to send its product. Midstream capacity is the usual constraint on field development.',
  specs:[['Gas plant size','50-1,000 MMscfd'],['LNG train','1-8 Mtpa'],['Trunk line','20-48 in']],
  safety:['Large hydrocarbon inventories under pressure.','Cryogenic hazards at LNG facilities.','Pipeline integrity along public rights-of-way.','Simultaneous marine and process operations at jetties.'],
  conns:['UP','DOWN'],
  children:[
   {id:'MID.gas',name:'Gas Processing Plant',site:'gasplant',summary:'Removes water, acid gas and heavier hydrocarbons so residue gas meets pipeline specification and NGLs are recovered as product.',body:'Inlet separation and a slug catcher take out free liquids. Amine treating removes H2S and CO2; glycol dehydration removes water; a turboexpander cold box drops the temperature to condense NGLs, which are fractionated into ethane, propane, butanes and natural gasoline. Residue gas is compressed to sales pressure.',eng:'The plant is a chain of phase separations, each set by a temperature and pressure. Hydrate formation, amine foaming and expander surge are the classic upsets.',where:[['Area','Field or hub'],['Containing structure','Plant site'],['Placement','Inlet from gathering, outlets to sales gas line and NGL pipeline or trucks']],why:'Pipelines and burners are designed for a narrow gas specification. The plant is what makes field gas acceptable to them, and NGLs are often the higher-value product.',specs:[['Capacity','200 MMscfd typical'],['NGL recovery','Ethane 80-95%'],['Residue pressure','800-1,200 psi']],safety:['H2S in the inlet and acid gas streams.','Cryogenic temperatures in the cold box.','Flare and relief system capacity.','Amine and glycol chemical handling.'],conns:['UP.gather','MID.lng','MID.pipe']},
   {id:'MID.lng',name:'LNG Terminal',site:'lng',summary:'Liquefies treated gas at -162 C for storage and ship export.',body:'Pretreatment removes the last traces of CO2, water and mercury. Refrigeration trains, driven by gas turbines, chill the gas through a cold box until it condenses. LNG is held in full-containment tanks and loaded through articulated arms into carriers at the jetty; boil-off gas is recompressed or used as fuel.',eng:'Liquefaction is a refrigeration problem at industrial scale: the cycle choice (propane pre-cooled mixed refrigerant, cascade, or dual mixed refrigerant) sets efficiency and train size.',where:[['Area','Coast'],['Containing structure','Export terminal'],['Placement','Plant on shore, jetty into deep water']],why:'LNG is how stranded gas reaches a global market. It is also the most capital-intensive single asset in the chain.',specs:[['Train size','4-5 Mtpa typical'],['Storage tank','160,000-200,000 m3'],['Loading rate','10,000-12,000 m3/h']],safety:['Cryogenic burns and material embrittlement.','Rapid phase transition and vapour cloud from spills.','Rollover in storage tanks.','Marine operations and ship-shore interface.'],conns:['MID.gas']},
   {id:'MID.pipe',name:'Trunk Pipeline',roadmap:true,summary:'Large-diameter transmission line that moves crude, products or sales gas hundreds of kilometres.',body:'Compressor or pump stations every 80-150 km keep the product moving; block valves isolate sections; inline inspection pigs survey wall thickness. SCADA supervises the whole line from a control centre.',eng:'Hydraulics set the station spacing; integrity management sets the inspection interval. Leak detection relies on mass-balance and pressure-wave methods.',where:[['Area','Cross-country corridor'],['Containing structure','Right-of-way'],['Placement','Plant outlet to terminal or refinery']],why:'The cheapest way to move large volumes over land, and the asset whose failure the public sees.',specs:[['Diameter','24-42 in'],['MAOP','1,000-1,480 psi'],['Station spacing','80-150 km']],safety:['Third-party damage and geohazards.','Corrosion and cracking under insulation.','Public safety along the route.'],conns:['MID.gas','MID.term']},
   {id:'MID.term',name:'Storage Terminal',roadmap:true,summary:'Tank farm and loading racks that buffer supply between pipeline, rail, truck and ship.',body:'Floating-roof tanks hold crude and light products; cone-roof tanks hold heavier ones. Manifolds route batches between tanks and carriers; truck and rail racks load with metered arms and vapour recovery.',eng:'Terminals are logistics assets: tank turnover, batch scheduling and custody metering matter more than process complexity.',where:[['Area','Port or inland hub'],['Containing structure','Tank farm'],['Placement','Pipeline terminus, before the refinery gate']],why:'Storage decouples steady production from batchy transport and lets the chain absorb upsets on either side.',specs:[['Tank size','50,000-500,000 bbl'],['Loading rack','4-12 bays'],['Vapour recovery','Carbon bed or refrigeration']],safety:['Tank overfill and bund integrity.','Static and vapour hazards at loading racks.','Floating-roof sinking and rim-seal fires.'],conns:['MID.pipe','DOWN.ref']}
  ]},
 {id:'DOWN',code:'03',name:'Downstream',icon:'refinery',
  summary:'Turning crude and NGLs into fuels, chemicals and consumer products, and delivering them to market.',
  body:'The refinery separates crude by boiling range, converts heavy fractions into lighter ones and treats them to specification. Petrochemical plants crack feedstocks into olefins and aromatics for plastics. Distribution terminals and retail sites put the finished product in the customer\'s tank.',
  eng:'Downstream margins are thin and volatile; the engineering is about yield, energy efficiency and running the plant for years between turnarounds.',
  where:[['Area','Market centres and ports'],['Containing structure','Refinery, petrochemical complex, retail network'],['Placement','Crude receipt to the retail nozzle']],
  why:'This is where value is realised. Everything upstream is an input cost until a refined product is sold.',
  specs:[['Refinery size','50,000-600,000 bpd'],['Cracker','1-1.5 Mtpa ethylene'],['Retail','Thousands of sites per network']],
  safety:['Large inventories of flammable liquids and gases.','Process safety: fired heaters, high-pressure hydrogen, hot oil.','Occupational exposure to benzene and H2S.','Public interface at retail sites.'],
  conns:['MID'],
  children:[
   {id:'DOWN.ref',name:'Refinery',site:'refinery',summary:'Distils crude into fractions, converts heavy ends and treats products to fuel specifications.',body:'Desalted crude is heated and flashed in the atmospheric column; the bottoms go to vacuum distillation. Gas oils are cracked in the FCC or hydrocracker; residue is coked. Naphtha is reformed for octane; every stream is hydrotreated to remove sulphur before blending into gasoline, jet and diesel.',eng:'A refinery is a network of columns, reactors and heat exchangers tuned to a crude slate. The conversion units set the product mix; the utilities set the energy bill.',where:[['Area','Port or pipeline hub'],['Containing structure','Refinery site'],['Placement','Crude tank farm in, product tank farm out']],why:'The refinery decides what the crude is worth. Its configuration determines which crudes it can run and which products it can make.',specs:[['Capacity','200,000 bpd typical'],['Conversion','FCC + hydrocracker'],['Nelson complexity','8-12']],safety:['Fired heaters and hot hydrocarbon service.','High-pressure hydrogen units.','Sulphur recovery and H2S.','Turnaround and hot-work management.'],conns:['MID.term','DOWN.petchem','DOWN.retail']},
   {id:'DOWN.petchem',name:'Petrochemicals',roadmap:true,summary:'Steam crackers and derivative units that turn ethane, naphtha and gas oil into olefins, aromatics and polymers.',body:'Feed is cracked at 800-850 C in tubular furnaces, quenched, compressed and separated cryogenically into ethylene, propylene and by-products. Downstream units polymerise them or make intermediates such as ethylene oxide and styrene.',eng:'Cracker furnaces and the cold train dominate energy use; furnace run length and decoking cycles set availability.',where:[['Area','Integrated complex'],['Containing structure','Petrochemical site'],['Placement','Adjacent to or fed by the refinery and gas plant']],why:'Chemicals are the growth market for hydrocarbons and often the highest-margin outlet for NGLs.',specs:[['Ethylene capacity','1-1.5 Mtpa'],['Furnace outlet','800-850 C'],['Cold train','-100 C and below']],safety:['Furnace tube rupture and decoking.','Cryogenic and high-pressure separation.','Polymer dust and reactor runaway.'],conns:['DOWN.ref']},
   {id:'DOWN.retail',name:'Distribution & Retail',roadmap:true,summary:'Product terminals, tanker trucks and service stations that deliver fuel to the end customer.',body:'Products move by pipeline to regional terminals, are additised and loaded onto trucks, and delivered to underground tanks at retail sites. Dispensers meter fuel to vehicles under vapour recovery.',eng:'The last mile is a logistics and compliance problem: inventory reconciliation, leak detection on underground tanks and vapour emissions.',where:[['Area','Cities and highways'],['Containing structure','Retail network'],['Placement','Terminal gate to vehicle tank']],why:'The customer-facing end of the chain; brand, price and reliability are decided here.',specs:[['Site storage','2-4 x 40,000 L USTs'],['Dispensers','4-12 per site'],['Delivery','Truck, 30-40,000 L']],safety:['Underground tank leaks and groundwater.','Vapour and static at dispensers.','Truck unloading and drive-away incidents.'],conns:['DOWN.ref']}
  ]}
 ],
 build(h){
  const {box,cyl,strut,pipe,sph,mat,C,KIT}=h;
  const T=Math.PI/2;
  const G={a:0x9a9da1,b:0x74777c,c:0xb9bcc0};              // roadmap greys
  // local-coordinate helpers: every station is drawn around (0,0) and placed with at()
  const at=(ox,oz)=>({
    box:(w,hh,d,c,x,y,z,...r)=>box(w,hh,d,c,x+ox,y,z+oz,...r),
    cyl:(r,hh,c,x,y,z,...q)=>cyl(r,hh,c,x+ox,y,z+oz,...q),
    sph:(r,c,x,y,z,...q)=>sph(r,c,x+ox,y,z+oz,...q),
    strut:(a,b,...q)=>strut([a[0]+ox,a[1],a[2]+oz],[b[0]+ox,b[1],b[2]+oz],...q),
    pipe:(pts,...q)=>pipe(pts.map(p=>[p[0]+ox,p[1],p[2]+oz]),...q),
    K:{vesselH:(x,y,z,...q)=>KIT.vesselH(x+ox,y,z+oz,...q),column:(x,z,...q)=>KIT.column(x+ox,z+oz,...q),exchanger:(x,y,z,...q)=>KIT.exchanger(x+ox,y,z+oz,...q),
       pumpSet:(x,z,...q)=>KIT.pumpSet(x+ox,z+oz,...q),finFan:(x,z,...q)=>KIT.finFan(x+ox,z+oz,...q),valve:(x,y,z,...q)=>KIT.valve(x+ox,y,z+oz,...q),
       rack:(x0,x1,z,...q)=>KIT.rack(x0+ox,x1+ox,z+oz,...q),heater:(x,z,...q)=>KIT.heater(x+ox,z+oz,...q),tankAPI:(x,z,...q)=>KIT.tankAPI(x+ox,z+oz,...q),
       sphereTank:(x,z,...q)=>KIT.sphereTank(x+ox,z+oz,...q),flare:(x,z,...q)=>KIT.flare(x+ox,z+oz,...q),compressor:(x,z,...q)=>KIT.compressor(x+ox,z+oz,...q),
       building:(x,z,...q)=>KIT.building(x+ox,z+oz,...q),stairTower:(x,z,...q)=>KIT.stairTower(x+ox,z+oz,...q),ladder:(x,z,...q)=>KIT.ladder(x+ox,z+oz,...q),handrail:(x,z,...q)=>KIT.handrail(x+ox,z+oz,...q),ring:(x,y,z,...q)=>KIT.ring(x+ox,y,z+oz,...q)}
  });
  const pad=(L,w,d,id,col)=>{L.box(w,.25,d,col||C.concrete,0,.12,0,id,null,{roughness:.95});L.box(w+1,.1,.5,C.yellow,0,.05,-d/2-.3,id);L.box(w+1,.1,.5,C.yellow,0,.05,d/2+.3,id);};
  const derrick=(L,x,z,ht,id,col)=>{const b=3.2,t=1.1;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([sx,sz])=>L.strut([x+sx*b,3.6,z+sz*b],[x+sx*t,3.6+ht,z+sz*t],.12,col,id));
    for(let k=1;k<=5;k++){const f=k/6,y=3.6+ht*f,w=b+(t-b)*f;[[-1,-1,1,-1],[1,-1,1,1],[1,1,-1,1],[-1,1,-1,-1]].forEach(([a,c,d,e])=>L.strut([x+a*w,y,z+c*w],[x+d*w,y,z+e*w],.07,col,id));
      const w2=b+(t-b)*(k-1)/6;[[-1,-1,1,-1],[1,1,-1,1]].forEach(([a,c,d,e])=>L.strut([x+a*w2,3.6+ht*(k-1)/6,z+c*w2],[x+d*w,y,z+e*w],.05,col,id));}
    L.box(2*t+.8,.5,2*t+.8,C.dark,x,3.6+ht+.25,z,id);L.box(1.3,1.6,1.3,C.steel,x,3.6+ht*.5,z,id);L.strut([x,3.6+ht*.5+.8,z],[x,3.6+ht,z],.06,C.cable,id);};
  const pumpjack=(L,x,z,id,col)=>{L.box(6.4,.5,2.6,C.concrete,x,.25,z,id);L.box(1.7,1.7,1.5,col,x-2.1,1.35,z,id);L.cyl(.65,1.7,C.dark,x-2.1,.85,z+1.3,id,null,null,.65,16).rotation.x=T;
    L.strut([x,.5,z-.75],[x+.6,4.8,z-.4],.17,col,id);L.strut([x,.5,z+.75],[x+.6,4.8,z+.4],.17,col,id);L.strut([x,.5,z-.75],[x,.5,z+.75],.1,col,id);
    L.box(6,.38,.65,col,x+.5,5,z,id);L.box(1.2,1.5,1,col,x+3.5,4.7,z,id);L.cyl(.14,3.6,C.steel,x+3.5,2.3,z,id);L.cyl(.4,.6,C.steel,x+3.5,.5,z,id);
    L.strut([x-2.1,2.4,z],[x-1.9,4.9,z],.13,C.steel,id);L.cyl(.9,.3,C.dark,x-2.1,2.4,z+1.05,id,null,null,.9,20).rotation.x=T;};
  const tankerShip=(L,x,z,id,col)=>{L.box(24,2.4,6.4,col,x,1.2,z,id);L.box(20,1.3,5.6,col,x-1,3.05,z,id);L.box(4,3.2,4.8,0xe8ebee,x+8,5.3,z,id);L.box(3,1.2,3.6,0xe8ebee,x+8,7.5,z,id);L.cyl(.4,3.2,C.dark,x+9.2,8.4,z,id);
    for(let i=0;i<4;i++)L.cyl(1.3,.8,0xd9d2bf,x-9+i*4.6,4.1,z,id,null,null,1.3,20);L.strut([x-12,3.7,z-2.8],[x+6,3.7,z-2.8],.05,C.steel,id);L.strut([x-12,3.7,z+2.8],[x+6,3.7,z+2.8],.05,C.steel,id);};
  const geophones=(L,id)=>{for(let i=0;i<7;i++)for(let j=0;j<3;j++)L.cyl(.09,.9,G.b,-9+i*3,.45,-3+j*3,id,null,null,.02,6);for(let j=0;j<3;j++)L.strut([-9.5,.85,-3+j*3],[9.5,.85,-3+j*3],.03,G.b,id);};

  // ---- stage bands (rows): upstream z=+44, midstream z=0, downstream z=-44
  const band=(z,col)=>{const m=box(190,.06,40,col,0,.03,z,null);m.receiveShadow=true;};
  band(44,0x5d6166);band(0,0x585c60);band(-44,0x53575b);
  // roads between rows
  [22,-22].forEach(z=>{const r=box(190,.04,3,0x43464a,0,.05,z,null);r.receiveShadow=true;});

  // ================= ROW 1 · UPSTREAM (left → right) =================
  { const L=at(-66,44),id='UP.explore';                     // exploration (roadmap)
    L.box(5.2,1.5,2.3,G.a,-2,1.25,-9,id);L.box(2.3,1.7,2.3,G.c,0,2.45,-9,id);[[-1.7,-1],[1.7,-1],[-1.7,1],[1.7,1]].forEach(([dx,dz])=>L.cyl(.55,.5,C.dark,-2+dx,.55,-9+dz,id,null,null,.55,12).rotation.x=T);
    L.box(1.8,.5,1.8,G.b,-2,.28,-9,id);L.cyl(.6,1.2,G.b,-2,1.1,-9,id,null,null,.6,12);geophones(L,id);L.box(3,2.2,2,G.c,8,1.1,-8,id,{shell:true});L.cyl(.12,4,G.b,10,2,-8,id); }
  { const L=at(-22,44),id='UP.rig';                         // drilling rig (site)
    pad(L,22,18,id);[[-4,-4],[4,-4],[-4,4],[4,4]].forEach(([dx,dz])=>L.box(.8,3.4,.8,C.blue,dx,1.7,dz,id));L.box(10,.5,10,0x2a3550,0,3.6,0,id);L.K.handrail(0,0,10,10,3.85,id);
    derrick(L,0,0,24,id,C.white);L.K.stairTower(-7.5,0,3.6,id);
    L.box(6,2.2,2.6,C.yellow,-6,1.1,-6,id);[0,1,2].forEach(i=>L.cyl(1.2,3.6,C.steel,3+i*3,1.8,-6.5,id,null,null,1.2,16));L.box(7,.8,1.4,C.steel,0,.6,7,id);for(let i=0;i<6;i++)L.cyl(.12,7,C.steel,-3+i*1.2,1.3,7,id,null,null,.12,8).rotation.z=T;
    L.K.building(8,6,5,3,2.6,id,0xf1efe8);L.K.building(-8,6,4,3,2.6,id,0xd8cfae); }
  { const L=at(22,44),id='UP.prod';                         // production facility (site)
    pad(L,30,18,id);pumpjack(L,-10,-4,id,C.red);L.cyl(.55,1.4,C.steel,-9.6,.7,-4,id);
    L.K.vesselH(-1,2,-5,1.1,6,id,C.steel,{boot:true});L.K.vesselH(-1,2,-1,1.1,6,id,C.steel);L.K.vesselH(6,1.8,-5,.9,4.5,id,0xb9b5a6);
    [[4,4],[7.5,4],[11,4],[4,-1],[7.5,-1]].forEach(([x,z])=>L.K.tankAPI(x,z,1.5,3,id,0xd9d2bf,{roof:'cone'}));
    L.K.flare(12,-6,10,id,{ko:false});L.K.building(-11,4,4,3,2.6,id,0xf1efe8,{hvac:false});L.K.pumpSet(9,-6,id,C.blue);L.pipe([[-8.8,.5,-4],[-4.5,.5,-4],[-4.5,1.2,-5]],.14,C.steel,id); }
  { const L=at(66,44),id='UP.gather';                       // gathering & pump station (roadmap)
    pad(L,18,12,id,0x6d6f72);L.K.building(-3,-2,6,4,3.2,id,G.c,{stack:true});[0,1].forEach(i=>L.K.pumpSet(3+i*.2,2-i*2.4,id,G.a));
    L.cyl(.55,6,G.a,-3,.7,4,id,null,null,.55,14).rotation.z=T;L.K.valve(0,.7,4,id);L.cyl(.3,2.5,G.b,6,1.25,-4,id);
    L.pipe([[-30,.5,0],[-9,.5,0]],.22,G.a,id);L.pipe([[9,.5,0],[18,.5,0],[18,.5,-14]],.22,G.a,id); }

  // ================= ROW 2 · MIDSTREAM (right → left) =================
  { const L=at(66,0),id='MID.gas';                          // gas processing plant (site)
    pad(L,34,22,id);L.K.column(-12,-6,1.2,15,id);L.K.column(-8,-6,1,11,id,C.steel,{platforms:1});L.K.column(-3,-6,1.4,19,id);
    L.K.vesselH(6,2.2,-6,1.2,7,id);L.K.exchanger(6,1.4,-2,.7,5,id);L.K.finFan(12,-5,7,4,id,2);
    L.K.compressor(8,5,id);L.K.building(-10,5,8,5,4,id,0xd8cfae);L.K.rack(-16,14,1,3.2,4,id);L.K.flare(15,-9,14,id);
    L.pipe([[18,.5,8],[18,.5,30]],.22,G.a,id); }
  { const L=at(18,0),id='MID.lng';                          // LNG terminal (site)
    L.box(44,.18,20,0x2c6a86,4,.09,-12,id,null,{roughness:.25,metalness:.15});pad(L,40,16,id);
    [[-14,-2],[-4,-2]].forEach(([x,z])=>{L.cyl(4.2,7,0xe4e6ea,x,3.5,z,id,null,{roughness:.55},4.2,32);L.sph(4.2,0xe4e6ea,x,7,z,id,null,{roughness:.55}).scale.y=.35;L.K.ring(x,7.9,z,4.2,id);L.K.ladder(x+4.5,z,0,7.5,id,0);});
    [0,1].forEach(i=>L.K.column(6+i*3.6,-3,.9,11,id,C.steel,{platforms:1}));L.K.compressor(14,3,id);L.K.finFan(6,4,6,3.5,id,2);L.K.building(-14,5,5,3,3,id,0xd8cfae);
    L.box(2.4,.6,16,C.concrete,-2,1.3,-12,id);[0,1,2].forEach(i=>L.cyl(.32,1.8,C.concrete,-2,.6,-6-i*5,id));[0,1].forEach(i=>{L.strut([-2,1.6,-14+i*3],[1,4.8,-14+i*3],.12,C.yellow,id);L.strut([1,4.8,-14+i*3],[3.6,3.2,-14+i*3],.1,C.yellow,id);});
    tankerShip(L,12,-15,id,0x8a2f2a); }
  { const L=at(-22,0),id='MID.pipe';                        // trunk pipeline (roadmap)
    L.pipe([[-14,.6,0],[-4,.6,0],[4,.6,0],[14,.6,0]],.3,G.a,id);[-8,8].forEach(x=>[-1,1].forEach(dz=>L.box(.7,.7,.7,G.b,x,.35,dz*.9,id)));
    L.cyl(.7,3.5,G.c,0,.9,3,id,null,null,.7,14).rotation.z=T;L.K.valve(0,.6,0,id,'x',.4);L.K.building(0,-5,5,3,2.6,id,G.c,{hvac:false});L.cyl(.1,5,G.b,3,2.5,-5,id); }
  { const L=at(-66,0),id='MID.term';                        // storage terminal (roadmap)
    pad(L,30,20,id,0x6d6f72);[[-9,-5],[-1,-5],[7,-5],[-9,4],[-1,4]].forEach(([x,z])=>L.K.tankAPI(x,z,3,4.4,id,G.c));
    L.box(10,.4,3,G.b,9,2.8,4,id);[0,1,2].forEach(i=>L.cyl(.15,2.8,G.b,5+i*4,1.4,4,id));L.box(4.6,1.6,2,G.a,12,.8,7,id);L.K.rack(-14,14,-10,2.4,3,id);
    L.pipe([[-18,.5,0],[-18,.5,-30]],.28,G.a,id); }

  // ================= ROW 3 · DOWNSTREAM (left → right) =================
  { const L=at(-50,-44),id='DOWN.ref';                      // refinery (site)
    pad(L,46,26,id);L.K.column(-18,-7,1.6,24,id);L.K.column(-13,-7,1.3,17,id);L.K.column(-9,-7,1.1,14,id,C.steel,{platforms:1});L.K.column(-3,-7,1.8,22,id);L.K.column(2,-7,1,11,id,C.steel,{platforms:1});
    L.K.heater(9,-7,4,3,5,id);L.K.heater(15,-7,4,3,5,id);L.K.finFan(-12,1,9,4,id,3);L.K.exchanger(-2,1.3,1,.7,5,id);L.K.exchanger(-2,1.3,4,.7,5,id);L.K.vesselH(6,2,2,1.1,6,id);
    L.K.rack(-20,20,-2,3.2,5,id);[[-18,9],[-11,9],[-4,9],[3,9],[10,9]].forEach(([x,z])=>L.K.tankAPI(x,z,2.6,3.6,id));L.K.flare(20,-10,18,id);L.K.building(16,4,8,4,4,id,0xd8cfae);L.K.stairTower(-6,-7,20,id);
    L.pipe([[-24,.5,0],[-38,.5,0],[-38,.5,-2]],.28,C.steel,id); }
  { const L=at(0,-44),id='DOWN.petchem';                    // petrochemicals (roadmap)
    pad(L,26,20,id,0x6d6f72);[0,1,2].forEach(i=>L.box(3.6,6,4,G.c,-9+i*4.4,3,-5,id));[0,1,2].forEach(i=>L.cyl(.4,5,G.b,-9+i*4.4,8.5,-5,id));L.K.column(6,-5,1,15,id,G.a,{platforms:2});L.K.column(10,-5,1.2,12,id,G.a,{platforms:1});
    [[-7,5],[-1,5]].forEach(([x,z])=>L.K.sphereTank(x,z,2.4,id,G.c));L.K.compressor(8,5,id);L.K.rack(-12,12,0,2.8,4,id); }
  { const L=at(50,-44),id='DOWN.retail';                    // distribution & retail (roadmap)
    pad(L,22,16,id,0x6d6f72);L.box(12,.35,6,G.c,0,4.4,-2,id);L.box(12.4,.3,6.4,G.b,0,4.7,-2,id);[[-4.5,-2],[4.5,-2],[-4.5,2],[4.5,2]].forEach(([dx,dz])=>L.cyl(.22,4.3,G.b,dx,2.15,-2+dz,id));
    [0,1,2].forEach(i=>{L.box(.8,1.6,.5,G.a,-4+i*4,.8,-2,id);L.box(.9,.05,.6,G.b,-4+i*4,1.63,-2,id);});L.K.building(0,4,8,3.5,3,id,G.c);L.box(4.6,1.6,2,G.a,-7,.8,-7,id);L.cyl(1,3.6,G.c,-3.5,1.1,-7,id,null,null,1,14).rotation.z=T;
    [[6,-6],[8.5,-6]].forEach(([x,z])=>L.cyl(.6,.4,G.b,x,.2,z,id,null,null,.6,14)); }

  // ---- flow lines between stations (registered to the receiving station)
  pipe([[-55,.5,44],[-34,.5,44]],.18,G.a,'UP.rig');pipe([[-11,.5,44],[6,.5,44]],.18,C.steel,'UP.prod');pipe([[38,.5,44],[56,.5,44]],.2,G.a,'UP.gather');
  pipe([[84,.5,30],[84,.5,8]],.22,C.steel,'MID.gas');pipe([[48,.5,0],[40,.5,0]],.22,C.steel,'MID.lng');pipe([[-4,.5,0],[-8,.5,0]],.22,G.a,'MID.pipe');pipe([[-36,.5,0],[-48,.5,0]],.24,G.a,'MID.term');
  pipe([[-84,.5,-30],[-84,.5,-44],[-74,.5,-44]],.28,C.steel,'DOWN.ref');pipe([[-27,.5,-44],[-14,.5,-44]],.2,G.a,'DOWN.petchem');pipe([[14,.5,-44],[38,.5,-44]],.2,G.a,'DOWN.retail');
 }
});
