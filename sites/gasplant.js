// Gas processing plant: inlet, compression, sweetening, dehydration, NGL recovery,
// fractionation, residue compression, flare and utilities. All content carries the Proposed status.
(window.SITES=window.SITES||[]).push({
 id:'gasplant',name:'Gas Processing Plant',stage:'midstream',code:'04',icon:'compressor',
 short:'200 MMscfd cryogenic gas plant: sweetening, dehydration, turboexpander NGL recovery and fractionation.',
 world:'flat',hasSubsurface:false,
 home:{target:[2,6,0],theta:.55,phi:1.04,radius:124},
 evidence:['S1 Plant process flow diagrams, rev 3','S2 GPSA Engineering Data Book','S3 API 618 / 617 compressor data sheets','S4 Amine and glycol unit operating manuals','S5 API 521 flare study','S6 Plot plan G-1001'],
 systems:[
 {id:'IN',code:'01',name:'Inlet & Slug Catcher',icon:'drop',
  summary:'Receives gathering-system gas, absorbs liquid slugs, separates free liquids and meters the inlet stream.',
  body:'The gathering trunk lands in a finger-type slug catcher: parallel sloped pipes that give the volume to hold a liquid slug while gas continues to the plant. The inlet separator and filter coalescer remove remaining liquid and solids. A pig receiver takes pigs from the trunk; the inlet ESD valve isolates the plant on a trip.',
  eng:'Slug catcher volume is set by the largest predicted slug from pigging or ramp-up. Inlet pressure is held by the compressor suction controller; the plant is designed for 600-900 psi at the inlet.',
  where:[['Area','West battery limit'],['Containing structure','Slug catcher pipe bed and inlet skid'],['Placement','Gathering trunk enters from the west fence']],
  why:'Everything in the plant is protected by what the inlet lets through. Liquid carry-over past the inlet floods the amine unit and trips the expander.',
  specs:[['Design flow','200 MMscfd'],['Inlet pressure','600-900 psi'],['Slug catcher','6 fingers x 36 in x 60 m, 800 bbl'],['Inlet separator','72 in x 20 ft']],
  safety:['Inlet ESD closes on plant trip, fire or gas detection.','Slug catcher liquid level high-high trips the inlet.','Pig receiver: verify zero pressure before opening.','H2S in inlet gas: gas detection and breathing air at the receiver.'],
  conns:['CP','SW','UT'],
  children:[
   {id:'IN.slug',name:'Slug Catcher',summary:'Six parallel 36 in fingers on a slope with a gas header at the top and liquid header at the bottom.',specs:[['Fingers','6 x 36 in x 60 m'],['Liquid volume','800 bbl'],['Slope','1%']]},
   {id:'IN.sep',name:'Inlet Separator',summary:'Horizontal two-phase separator with inlet cyclones and a mist extractor.',specs:[['Size','72 in x 20 ft'],['MAWP','1,440 psi']]},
   {id:'IN.filter',name:'Filter Coalescer',summary:'Vertical filter that removes aerosols and solids before the amine absorber.',specs:[['Size','36 in x 10 ft'],['Elements','12 x coalescing cartridges']]},
   {id:'IN.meter',name:'Inlet Metering',summary:'Ultrasonic meter run with chromatograph sample point for allocation.',specs:[['Meter','12 in ultrasonic'],['Analyser','Online GC']]},
   {id:'IN.esd',name:'Inlet ESD Valve',summary:'Fail-closed 16 in ball valve on the inlet line.',specs:[['Size','16 in ANSI 600'],['Actuator','Gas-over-oil, fail closed']]},
   {id:'IN.pig',name:'Pig Receiver',summary:'Barrel and closure for receiving pigs from the gathering trunk.',specs:[['Size','16 in x 20 in barrel']]}
  ]},
 {id:'CP',code:'02',name:'Inlet Compression',icon:'compressor',
  summary:'Two reciprocating compressor packages raise inlet gas to the treating pressure when the field cannot.',
  body:'Each package is a gas-engine-driven reciprocating compressor on a skid with suction scrubber, interstage and discharge coolers and its own control panel. One runs, one is spare, with a shared discharge air cooler bank.',
  eng:'Compression ratio is limited to about 3 per stage by discharge temperature. Suction pressure control is the plant\'s inlet pressure control. Pulsation bottles and vibration studies are mandatory for reciprocating machines.',
  where:[['Area','Compressor area, west of the treating units'],['Containing structure','Open-sided compressor shelters'],['Placement','Two skids in parallel, 12 m apart']],
  why:'When field pressure declines the plant only runs if the compressors do. They are the largest rotating equipment on site.',
  specs:[['Units','2 x 2,500 hp reciprocating'],['Driver','Gas engine, 1,000 rpm'],['Stages','2'],['Discharge','950 psi']],
  safety:['Gas engine exhaust and hot surfaces.','High-pressure pulsating gas: vibration-induced small-bore failures.','Compressor building gas detection and ventilation.','Blowdown to flare on trip.'],
  conns:['IN','SW','UT'],
  children:[
   {id:'CP.k1',name:'Compressor A',summary:'Reciprocating compressor package with gas engine driver, scrubbers and pulsation bottles.',specs:[['Frame','4-throw, 2,500 hp'],['Flow','100 MMscfd']]},
   {id:'CP.k2',name:'Compressor B',summary:'Duplicate package, normally on standby.'},
   {id:'CP.cooler',name:'Discharge Air Cooler',summary:'Forced-draught fin-fan bank cooling both compressor discharges to 50 C.',specs:[['Duty','12 MMBtu/h'],['Fans','4 x 4 m, 30 hp']]},
   {id:'CP.scrub',name:'Suction Scrubber',summary:'Vertical scrubber protecting the first stage from liquid.',specs:[['Size','42 in x 10 ft']]}
  ]},
 {id:'SW',code:'03',name:'Sweetening (Amine)',icon:'lab',
  summary:'MDEA absorber and regenerator that remove H2S and CO2 to pipeline specification.',
  body:'Sour gas rises through the absorber counter-current to lean amine flowing down the trays. Rich amine flashes in a drum, exchanges heat with lean amine and is stripped in the regenerator, whose reboiler drives the acid gas overhead. Lean amine is cooled and pumped back to the top of the absorber. Acid gas goes to the sulphur unit or injection well.',
  eng:'Amine circulation rate is set by acid-gas loading (0.4-0.5 mol/mol rich). Foaming, corrosion in the hot rich section and heat-stable salts are the operating problems. Absorber operates at inlet pressure; regenerator at 10-15 psi.',
  where:[['Area','Treating area, centre-west'],['Containing structure','Column structures and amine skid'],['Placement','Absorber and regenerator side by side on the main rack']],
  why:'H2S is lethal and CO2 corrodes pipelines. The amine unit is what makes the gas legal to sell.',
  specs:[['Solvent','45 wt% MDEA'],['Circulation','800 gpm'],['Absorber','7 ft x 60 ft, 20 trays'],['Regenerator','8 ft x 55 ft, 24 trays'],['Outlet spec','< 4 ppm H2S, < 2% CO2']],
  safety:['H2S in the acid gas: highest-risk stream on site.','Amine burns and hot lean amine at 120 C.','Regenerator overpressure on reboiler runaway.','Flash gas to fuel: hydrocarbon in the amine loop.'],
  conns:['CP','DH','UT'],
  children:[
   {id:'SW.absorber',name:'Amine Absorber',summary:'Trayed column where lean amine absorbs H2S and CO2 from the gas.',specs:[['Size','7 ft x 60 ft'],['Trays','20 valve trays'],['Pressure','850 psi']]},
   {id:'SW.regen',name:'Amine Regenerator',summary:'Stripping column that boils acid gas out of the rich amine.',specs:[['Size','8 ft x 55 ft'],['Trays','24'],['Pressure','12 psi']]},
   {id:'SW.reboiler',name:'Reboiler',summary:'Kettle reboiler heated by hot oil at the regenerator bottom.',specs:[['Duty','25 MMBtu/h'],['Type','Kettle, hot oil']]},
   {id:'SW.flash',name:'Rich Amine Flash Drum',summary:'Three-phase drum where dissolved hydrocarbons flash off the rich amine.',specs:[['Size','60 in x 20 ft'],['Pressure','75 psi']]},
   {id:'SW.exch',name:'Lean/Rich Exchanger',summary:'Plate exchanger recovering heat from lean to rich amine.',specs:[['Type','Plate and frame'],['Duty','30 MMBtu/h']]},
   {id:'SW.cooler',name:'Lean Amine Cooler',summary:'Fin-fan cooler bringing lean amine to 45 C before the absorber.',specs:[['Duty','18 MMBtu/h']]},
   {id:'SW.pumps',name:'Amine Circulation Pumps',summary:'Two multistage pumps (one spare) delivering lean amine to absorber pressure.',specs:[['Flow','800 gpm'],['Head','900 psi'],['Driver','350 hp motor']]},
   {id:'SW.acidgas',name:'Acid Gas KO Drum',summary:'Overhead drum and reflux pumps on the regenerator; acid gas leaves to the SRU.'}
  ]},
 {id:'DH',code:'04',name:'Dehydration (TEG)',icon:'shield',
  summary:'Triethylene glycol contactor and regeneration skid that dry the gas before the cryogenic section.',
  body:'Sweet gas passes up the contactor against lean TEG. Rich glycol flashes, is filtered, exchanges heat and is regenerated in the reboiler at 200 C; stripping gas pushes the water dew point down to what the cold box needs. A molecular sieve is used downstream for the final drying.',
  eng:'Water content must be below 0.1 lb/MMscf for cryogenic service, so TEG here is a bulk step and mole sieve does the rest. Reboiler temperature is limited to 204 C to avoid glycol degradation.',
  where:[['Area','Treating area, east of the amine unit'],['Containing structure','Contactor structure and regeneration skid'],['Placement','Contactor beside the amine absorber; skid on the north side']],
  why:'Water freezes at cryogenic temperatures. A wet gas slug plugs the cold box within minutes.',
  specs:[['Contactor','5 ft x 35 ft, structured packing'],['TEG circulation','30 gpm'],['Reboiler','200 C, 1.2 MMBtu/h'],['Outlet water','< 4 lb/MMscf (TEG), < 0.1 with sieve']],
  safety:['Hot glycol at 200 C and BTEX emissions from the still.','Reboiler firetube: BMS and flame safeguard.','Flash gas to fuel or flare.'],
  conns:['SW','NG','UT'],
  children:[
   {id:'DH.contactor',name:'TEG Contactor',summary:'Packed column where gas contacts lean glycol.',specs:[['Size','5 ft x 35 ft'],['Packing','Structured, 3 beds']]},
   {id:'DH.regen',name:'Regenerator & Reboiler',summary:'Horizontal fired reboiler with the still column on top.',specs:[['Temp','200 C'],['Still','18 in x 10 ft packed']]},
   {id:'DH.flash',name:'Glycol Flash Tank',summary:'Drum releasing absorbed gas from rich glycol.',specs:[['Size','30 in x 8 ft'],['Pressure','60 psi']]},
   {id:'DH.filters',name:'Glycol Filters',summary:'Particulate and carbon filters on the rich glycol.'},
   {id:'DH.pumps',name:'Glycol Pumps',summary:'Duplex plunger pumps returning lean glycol to the contactor.',specs:[['Flow','30 gpm'],['Pressure','900 psi']]},
   {id:'DH.sieve',name:'Molecular Sieve Beds',summary:'Two adsorbent beds (one drying, one regenerating) for final dehydration.',specs:[['Beds','2 x 6 ft x 20 ft'],['Cycle','8 h']]}
  ]},
 {id:'NG',code:'05',name:'NGL Recovery',icon:'rotate',
  summary:'Turboexpander cryogenic section: cold box, expander-compressor and demethaniser that condense and separate ethane-plus.',
  body:'Dry gas is chilled in the brazed-aluminium cold box against cold residue gas and demethaniser side reboilers, then expanded through the turboexpander to about -95 C. The two-phase stream feeds the demethaniser, where methane goes overhead and ethane-plus leaves the bottom as NGL. The expander\'s work drives the booster compressor on the residue gas.',
  eng:'Expander inlet pressure and demethaniser pressure set ethane recovery. Surge protection, seal gas and speed control are the expander\'s critical loops. Any CO2 above spec freezes in the demethaniser.',
  where:[['Area','Cryogenic area, plant centre'],['Containing structure','Cold box enclosure and expander skid'],['Placement','Cold box adjacent to the demethaniser; expander between them']],
  why:'This is where the plant\'s NGL revenue is made. Recovery efficiency is the plant\'s key performance number.',
  specs:[['Expander','4,500 hp, 25,000 rpm'],['Cold box','Brazed aluminium, 6 streams'],['Demethaniser','6 ft x 70 ft'],['Ethane recovery','90%'],['Coldest temp','-95 C']],
  safety:['Cryogenic burns and brittle fracture of carbon steel on cold excursions.','Expander overspeed and seal gas failure.','Cold box mercury and CO2 freeze-out.','Depressuring cold equipment: auto-refrigeration.'],
  conns:['DH','FX','RC'],
  children:[
   {id:'NG.coldbox',name:'Cold Box',summary:'Insulated enclosure holding the brazed-aluminium plate-fin exchangers.',specs:[['Size','4 x 3 x 12 m'],['Exchangers','2 cores, 6 streams']]},
   {id:'NG.expander',name:'Turboexpander-Compressor',summary:'Radial expander driving a booster compressor on a common shaft.',specs:[['Power','4,500 hp'],['Speed','25,000 rpm'],['Bearings','Active magnetic']]},
   {id:'NG.demeth',name:'Demethaniser',summary:'Packed column separating methane overhead from NGL bottoms.',specs:[['Size','6 ft x 70 ft'],['Pressure','380 psi'],['Bottom temp','10 C']]},
   {id:'NG.reboilers',name:'Side & Bottom Reboilers',summary:'Reboilers heated by inlet gas that provide stripping in the demethaniser.'},
   {id:'NG.jt',name:'JT Valve Bypass',summary:'Joule-Thomson valve used when the expander is down.',specs:[['Size','8 in, cryogenic globe']]},
   {id:'NG.chiller',name:'Propane Chiller',summary:'Kettle chiller providing supplementary refrigeration to the inlet gas.',specs:[['Duty','15 MMBtu/h'],['Refrigerant','Propane, -30 C']]}
  ]},
 {id:'FX',code:'06',name:'Fractionation & Storage',icon:'tank',
  summary:'De-ethaniser, de-propaniser and de-butaniser columns that split NGL into products, with bullet and sphere storage.',
  body:'NGL from the demethaniser is heated and fed to the de-ethaniser, which takes ethane overhead. The bottoms go to the de-propaniser (propane overhead) and de-butaniser (butanes overhead, natural gasoline bottoms). Each column has a hot-oil reboiler and air-cooled condenser. Products go to pressurised bullets and spheres and are loaded to trucks and rail.',
  eng:'Product specifications (propane 95%, C4 vapour pressure) set the reflux ratios; reboiler duty is the largest hot-oil user. Columns run at 400, 250 and 90 psi respectively.',
  where:[['Area','Fractionation area, east'],['Containing structure','Column structures and product storage'],['Placement','Three columns in a row; storage on the south-east corner']],
  why:'Separated products sell for more than raw NGL. Fractionation adds the margin that justifies the cryogenic plant.',
  specs:[['De-ethaniser','5 ft x 80 ft, 40 trays'],['De-propaniser','5 ft x 75 ft, 45 trays'],['De-butaniser','4 ft x 60 ft, 35 trays'],['Storage','3 x 90,000 gal bullets, 2 x 30,000 bbl spheres']],
  safety:['Pressurised LPG storage: BLEVE risk, water deluge on spheres.','Column relief to flare sized for reflux failure.','Truck loading: static, overfill, drive-away.','Hot oil at 300 C in reboilers.'],
  conns:['NG','UT'],
  children:[
   {id:'FX.deeth',name:'De-ethaniser',summary:'Column taking ethane overhead to the residue gas or ethane pipeline.',specs:[['Size','5 ft x 80 ft'],['Pressure','400 psi']]},
   {id:'FX.deprop',name:'De-propaniser',summary:'Column producing propane overhead.',specs:[['Size','5 ft x 75 ft'],['Pressure','250 psi']]},
   {id:'FX.debut',name:'De-butaniser',summary:'Column producing butanes overhead and natural gasoline bottoms.',specs:[['Size','4 ft x 60 ft'],['Pressure','90 psi']]},
   {id:'FX.reboilers',name:'Column Reboilers',summary:'Hot-oil kettle reboilers at the base of each column.',specs:[['Total duty','45 MMBtu/h']]},
   {id:'FX.condensers',name:'Overhead Condensers',summary:'Fin-fan condensers and reflux drums for each column.'},
   {id:'FX.bullets',name:'NGL Bullet Tanks',summary:'Three horizontal pressure vessels for ethane-propane mix and butane.',specs:[['Size','3 x 90,000 gal'],['MAWP','250 psi']]},
   {id:'FX.spheres',name:'Propane Spheres',summary:'Two spheres for propane product storage with deluge systems.',specs:[['Size','2 x 30,000 bbl'],['MAWP','250 psi']]},
   {id:'FX.loading',name:'Truck & Rail Loading',summary:'Loading rack with metering, vapour return and grounding.',specs:[['Bays','4 truck, 2 rail']]}
  ]},
 {id:'RC',code:'07',name:'Residue Compression & Sales',icon:'meter',
  summary:'Residue gas is recompressed to pipeline pressure, cooled, metered and delivered to the sales line.',
  body:'Residue gas from the demethaniser overhead is warmed in the cold box, boosted by the expander-driven compressor and then raised to sales pressure by a turbine-driven centrifugal compressor. After cooling it passes through the sales metering skid with chromatograph and ESD valve into the pipeline.',
  eng:'The residue compressor is a centrifugal machine with anti-surge control; its turbine is the plant\'s biggest fuel user. Custody metering follows AGA 9 with online GC for energy content.',
  where:[['Area','East battery limit'],['Containing structure','Compressor shelter and metering skid'],['Placement','Sales line leaves the east fence']],
  why:'Pipeline pressure and quality specification are met here. The sales meter is the plant\'s invoice.',
  specs:[['Compressor','Centrifugal, 12,000 hp gas turbine'],['Discharge','1,100 psi'],['Metering','2 x 12 in ultrasonic, AGA 9'],['Sales gas','< 4 ppm H2S, 1,050 Btu/scf']],
  safety:['Gas turbine enclosure: fire and gas detection, CO2 suppression.','Anti-surge trip and blowdown.','Pipeline ESD and check valve.'],
  conns:['NG','UT'],
  children:[
   {id:'RC.k',name:'Residue Compressor',summary:'Gas-turbine-driven centrifugal compressor in an acoustic enclosure.',specs:[['Power','12,000 hp'],['Speed','8,000 rpm'],['Stages','6']]},
   {id:'RC.cooler',name:'Discharge Cooler',summary:'Fin-fan cooler on the sales gas.',specs:[['Duty','20 MMBtu/h']]},
   {id:'RC.meter',name:'Sales Metering Skid',summary:'Dual ultrasonic meter runs with GC and flow computers.',specs:[['Meters','2 x 12 in ultrasonic'],['Standard','AGA 9, API 21.1']]},
   {id:'RC.esd',name:'Sales ESD & Check Valve',summary:'Fail-closed ESD and non-return valve at the pipeline tie-in.'}
  ]},
 {id:'UT',code:'08',name:'Flare & Utilities',icon:'bolt',
  summary:'Flare system, hot oil, instrument air, power, fire water and the control room.',
  body:'All reliefs and blowdowns go to the flare via the KO drum. A fired hot-oil heater supplies reboiler duty. Instrument air, nitrogen, fire water and the substation feed the process units. The control room houses the DCS and safety system.',
  eng:'Flare sized for the plant blowdown case; hot oil at 300 C circulated at 4,000 gpm. Power is 8 MW from the grid with a black-start generator.',
  where:[['Area','South side of the plant'],['Containing structure','Utility area and flare stack base'],['Placement','Flare 60 m from the nearest process unit']],
  why:'Utilities are the availability floor: lose hot oil, air or power and every unit trips.',
  specs:[['Flare','24 in x 60 m, derrick-supported'],['Hot oil heater','60 MMBtu/h'],['Instrument air','2 x 800 scfm'],['Fire water','2 x 3,000 gpm pumps, 5,000 m3 tank'],['Power','8 MW, 13.8 kV']],
  safety:['Flare radiation and sterile zone.','Hot oil heater: fired equipment BMS.','Fire water system testing and freeze protection.','High voltage substation access.'],
  conns:['IN','CP','SW','DH','FX','RC'],
  children:[
   {id:'UT.flare',name:'Flare Stack',summary:'Derrick-supported 60 m stack with pilots and KO drum.',specs:[['Height','60 m'],['Tip','24 in, steam-assisted']]},
   {id:'UT.ko',name:'Flare KO Drum',summary:'Horizontal drum on the flare header with pump-out.',specs:[['Size','10 ft x 30 ft']]},
   {id:'UT.hotoil',name:'Hot Oil Heater',summary:'Fired heater circulating thermal oil to all reboilers.',specs:[['Duty','60 MMBtu/h'],['Oil temp','300 C']]},
   {id:'UT.air',name:'Instrument Air & Nitrogen',summary:'Air compressors, dryers and a nitrogen generator.',specs:[['Air','2 x 800 scfm'],['N2','200 scfm PSA']]},
   {id:'UT.power',name:'Substation',summary:'13.8 kV switchgear, transformers and MCC building.',specs:[['Load','8 MW'],['Backup','2 MW black-start generator']]},
   {id:'UT.fire',name:'Fire Water',summary:'Storage tank and diesel/electric pump house.',specs:[['Tank','5,000 m3'],['Pumps','2 x 3,000 gpm']]},
   {id:'UT.control',name:'Control Room',summary:'Blast-resistant building with DCS, SIS and operator stations.'},
   {id:'UT.rack',name:'Main Pipe Rack',summary:'Two-level rack carrying process, hot oil and utility lines across the plant.'}
  ]}
 ],
 build(h){
  const {box,cyl,strut,pipe,sph,mat,C,KIT}=h;const T=Math.PI/2,ST={metalness:.45,roughness:.45};
  // ---- plot
  const pad=box(100,.3,64,0x6a6d70,0,.15,0,'UT.rack',null,{roughness:.95});pad.receiveShadow=true;
  KIT.rack(-46,46,0,4.2,6,'UT.rack',.16);KIT.rack(-30,40,-13,3.4,4,'UT.rack',.12);
  // ---- inlet & slug catcher
  for(let i=0;i<6;i++){const z=-16+i*2.2;cyl(.6,26,C.steel,-42,1.2+i*.05,z,'IN.slug',null,ST,.6,16).rotation.x=T;[-11,0,11].forEach(dz=>box(1.4,1,.6,C.concrete,-42,.5,z+dz,'IN.slug'));}
  cyl(.7,13,C.steel,-42,2.4,-3,'IN.slug',null,ST,.7,16).rotation.x=0;cyl(.7,13,C.steel,-42,.9,-29.5,'IN.slug',null,ST,.7,16).rotation.z=T;
  KIT.vesselH(-34,2.8,-8,1.5,7.5,'IN.sep',C.steel,{boot:true,platform:true});KIT.column(-34,-2,.75,4.5,'IN.filter',C.steel,{platforms:0});
  box(6,.3,2,C.dark,-34,.15,4,'IN.meter');[-2,0].forEach(dx=>cyl(.32,5,C.steel,-34+dx,1,4,'IN.meter',null,ST,.32,14).rotation.z=T);box(.6,.6,.5,0x8d9aa8,-33,1.6,4,'IN.meter');
  KIT.valve(-40,1.2,8,'IN.esd','x',.5);box(1,1.2,.8,C.yellow,-40,2.3,8,'IN.esd');
  cyl(.55,4,C.steel,-44,1.1,8,'IN.pig',null,ST,.55,16).rotation.z=T;cyl(.65,.3,C.dark,-46.2,1.1,8,'IN.pig',null,ST,.65,16).rotation.z=T;[[-45],[-43]].forEach(([x])=>box(.6,.9,.5,C.concrete,x,.45,8,'IN.pig'));
  pipe([[-48,1.2,8],[-40.6,1.2,8]],.32,C.steel,'IN.esd');pipe([[-39.4,1.2,8],[-34,1.2,8],[-34,1.2,7]],.32,C.steel,'IN.meter');
  // ---- inlet compression
  KIT.compressor(-24,-9,'CP.k1');KIT.compressor(-24,3,'CP.k2');KIT.finFan(-24,12,9,4,'CP.cooler',3);KIT.column(-31,10,.7,4.5,'CP.scrub',C.steel,{platforms:0});
  pipe([[-34,4.3,-8],[-34,4.3,10],[-31,4.3,10]],.2,C.steel,'CP.scrub');
  // ---- sweetening (amine)
  KIT.column(-10,-8,1.1,20,'SW.absorber');KIT.column(-4,-8,1.2,18,'SW.regen');KIT.exchanger(-4,1.6,-3,.9,5,'SW.reboiler');KIT.vesselH(-11,2.2,4,.9,6,'SW.flash',C.steel,{boot:true});
  box(3,2.2,1.4,0x5c6b8a,-6,1.4,6,'SW.exch');for(let i=0;i<7;i++)box(.06,2.2,1.4,C.dark,-7.3+i*.45,1.4,6,'SW.exch');
  KIT.finFan(-7,12,7,4,'SW.cooler',2);KIT.pumpSet(-13,8,'SW.pumps',C.blue);KIT.pumpSet(-13,10.5,'SW.pumps',C.blue);KIT.vesselH(0,3,4,.7,4,'SW.acidgas',C.steel,{manway:false});KIT.pumpSet(2,7,'SW.acidgas',C.blue);
  pipe([[-10,18,-8],[-10,19,-8],[-10,19,-14]],.16,C.steel,'SW.absorber');pipe([[-4,18.5,-8],[-2,18.5,-8],[-2,4,-8],[0,4,-8],[0,3.7,4]],.14,C.steel,'SW.regen');
  // ---- dehydration
  KIT.column(6,-8,.8,12,'DH.contactor',C.steel,{platforms:1});cyl(.9,5,C.steel,10,2.4,-3,'DH.regen',null,ST,.9,20).rotation.z=T;cyl(.32,3.6,C.steel,10.5,5.2,-3,'DH.regen',null,ST,.32,14);cyl(.3,4,C.steel,12.6,3.6,-3,'DH.regen',null,ST,.3,12);[-1.5,1.5].forEach(dx=>box(1.6,1.4,.6,C.concrete,10+dx,.7,-3,'DH.regen'));
  KIT.vesselH(14,2,-8,.5,3,'DH.flash',C.steel,{manway:false});[0,1].forEach(i=>cyl(.28,1.6,C.steel,7+i*1,.9,3,'DH.filters',null,ST,.28,12));box(2.4,.25,1.6,C.dark,7.5,.12,3,'DH.filters');
  box(2.6,.25,1.4,C.dark,11,.12,3,'DH.pumps');[0,1].forEach(i=>{box(.9,.7,.7,0x5c6b8a,10.4+i*1.3,.6,3,'DH.pumps');cyl(.2,.9,C.steel,10.4+i*1.3,1.3,3,'DH.pumps',null,ST,.2,10);});
  [0,1].forEach(i=>KIT.column(14+i*3.2,6,.9,6,'DH.sieve',C.steel,{platforms:0}));pipe([[14,7,6],[17.2,7,6]],.2,C.steel,'DH.sieve');
  // ---- NGL recovery
  box(4,12,3,0xb9c3cc,22,6.15,-8,'NG.coldbox',{shell:true},{roughness:.7});box(4.4,.3,3.4,C.dark,22,12.3,-8,'NG.coldbox');KIT.ladder(24.3,-8,0,12,'NG.coldbox',0);KIT.handrail(22,-8,4.4,3.4,12.3,'NG.coldbox');[[-1.2,2.5],[1.2,2.5],[0,8]].forEach(([dx,y])=>KIT.nozzle(22+dx,y,-6.5,.25,1,C.steel,'NG.coldbox','z'));
  box(4,.4,2.2,C.dark,27,.2,-3,'NG.expander');cyl(.6,1.4,0x8a5a2b,26.2,1.2,-3,'NG.expander',null,ST,.6,20).rotation.z=T;cyl(.7,1.4,0x5c6b8a,28,1.2,-3,'NG.expander',null,ST,.7,20).rotation.z=T;cyl(.3,.6,C.steel,27.1,1.2,-3,'NG.expander',null,ST,.3,12).rotation.z=T;[-1,1].forEach(s=>cyl(.25,1.6,C.steel,27.1+s*.9,2.4,-3,'NG.expander',null,ST,.25,10));
  KIT.column(32,-8,.9,26,'NG.demeth',C.steel,{platforms:3});KIT.exchanger(32,1.4,-3,.6,4,'NG.reboilers');KIT.exchanger(35,1.4,-6,.6,4,'NG.reboilers');
  KIT.valve(27,4.2,-8,'NG.jt','x',.45);pipe([[24.2,4.2,-8],[26.4,4.2,-8]],.2,C.steel,'NG.jt');pipe([[27.6,4.2,-8],[31,4.2,-8]],.2,C.steel,'NG.jt');
  KIT.vesselH(22,2.4,3,1.1,5,'NG.chiller',C.steel,{platform:true});cyl(.6,1.2,C.steel,22,4.2,3,'NG.chiller',null,ST,.6,16);
  // ---- fractionation & storage
  KIT.column(40,-8,.85,24,'FX.deeth',C.steel,{platforms:3});KIT.column(44,-8,.85,22,'FX.deprop',C.steel,{platforms:3});KIT.column(48,-8,.75,18,'FX.debut',C.steel,{platforms:2});
  [40,44,48].forEach(x=>KIT.exchanger(x,1.3,-3,.55,3.6,'FX.reboilers'));KIT.finFan(44,4,12,4,'FX.condensers',3);[40,44,48].forEach(x=>KIT.vesselH(x,7.4,4,.5,2.8,'FX.condensers',C.steel,{manway:false}));
  [[30,20],[30,24],[30,28]].forEach(([x,z])=>KIT.vesselH(x,2.6,z,1.3,14,'FX.bullets',0xe4e6ea,{manway:false}));
  [[42,22],[42,29]].forEach(([x,z])=>KIT.sphereTank(x,z,3,'FX.spheres',0xe4e6ea));
  box(10,.4,3,C.steel,18,4.4,24,'FX.loading',null,ST);[0,1,2,3].forEach(i=>{cyl(.15,4.4,C.steel,14+i*2.7,2.2,24,'FX.loading',null,ST,.15,8);strut([14+i*2.7,4.2,24],[14+i*2.7,3,26.2],.07,C.steel,'FX.loading');});box(3,.3,8,0x55585b,18,.16,26,'FX.loading');
  // ---- residue compression & sales
  box(9,4.4,4,0x8d9aa8,42,2.2,8,'RC.k',{shell:true},{transparent:true,opacity:.8});box(9.3,.3,4.3,C.dark,42,4.5,8,'RC.k');cyl(.5,4,C.steel,45,6.5,8,'RC.k',null,ST,.5,14);cyl(1.2,2.6,0x5c6b8a,39.5,1.4,8,'RC.k',null,ST,1.2,20).rotation.z=T;cyl(.9,3,0x8a5a2b,43,1.4,8,'RC.k',null,ST,.9,20).rotation.z=T;
  KIT.finFan(42,14,8,4,'RC.cooler',2);box(7,.3,2.4,C.dark,48,.15,2,'RC.meter');[-.6,.6].forEach(dz=>cyl(.3,6,C.steel,48,1,2+dz,'RC.meter',null,ST,.3,14).rotation.z=T);box(.8,.8,.5,0x8d9aa8,46,1.7,2,'RC.meter');
  KIT.valve(52,1,2,'RC.esd','x',.4);box(.8,1,.7,C.yellow,52,2,2,'RC.esd');pipe([[51.5,1,2],[56,1,2]],.3,C.steel,'RC.esd');
  // ---- flare & utilities
  KIT.flare(-40,-26,34,'UT.flare',{ko:false});KIT.vesselH(-30,2,-26,1.2,7,'UT.ko',C.steel,{manway:false});pipe([[-30,3.2,-26],[-30,4,-26],[-30,4,-14]],.22,C.steel,'UT.ko');
  KIT.heater(6,-24,5,4,6,'UT.hotoil');box(4,.3,2.4,C.dark,16,.15,-24,'UT.air');[-1.2,0,1.2].forEach(dx=>box(.9,.9,.8,0x5c6b8a,16+dx,.7,-24,'UT.air'));cyl(.6,2.4,C.steel,18.6,1.4,-24,'UT.air',null,ST,.6,16);
  KIT.building(-8,-24,9,5,4,'UT.power',0xd8cfae,{hvac:false});[0,1].forEach(i=>{box(1.6,1.8,1.2,0x5c6b8a,-14+i*2.2,.9,-24,'UT.power');cyl(.12,1.2,C.steel,-14+i*2.2,2.4,-24,'UT.power',null,ST,.12,8);});
  KIT.tankAPI(26,-25,3.4,6,'UT.fire',0xc8332a);KIT.building(32,-25,5,3,3,'UT.fire',0xd8cfae,{hvac:false});KIT.pumpSet(36,-25,'UT.fire',C.red);
  KIT.building(-22,-24,10,6,4,'UT.control',0xf1efe8,{hvac:true});
 }
});
