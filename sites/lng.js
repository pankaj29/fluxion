// LNG export terminal: pretreatment, two liquefaction trains, full-containment storage,
// jetty with loading arms and a carrier, BOG handling, refrigerant storage, utilities.
(window.SITES=window.SITES||[]).push({
 id:'lng',name:'LNG Terminal',stage:'midstream',code:'06',icon:'ship',
 short:'Two-train 9 Mtpa liquefaction plant with full-containment storage and an export jetty.',
 world:'coast',hasSubsurface:false,
 home:{target:[4,8,22],theta:.3,phi:1.12,radius:200},
 evidence:['S1 Plant process description, rev 2','S2 NFPA 59A / EN 1473 siting study','S3 Liquefaction licensor process book','S4 API 620 tank design report','S5 OCIMF/SIGTTO jetty guidance','S6 Plot plan L-0001'],
 systems:[
 {id:'PT',code:'01',name:'Pretreatment',icon:'lab',
  summary:'Removes acid gas, water, mercury and heavy hydrocarbons so nothing freezes or corrodes in the cryogenic section.',
  body:'Feed gas passes through an inlet separator, an amine unit that takes CO2 below 50 ppm, molecular sieve dehydration to below 0.1 ppm water, a mercury guard bed and a scrub column that removes benzene and heavies that would freeze in the main exchanger.',
  eng:'CO2 freezes at -78 C and water at 0 C; both would plug the main cryogenic exchanger. Mercury attacks the aluminium exchanger by amalgamation. Specifications here are far tighter than a pipeline gas plant.',
  where:[['Area','Inlet area, west of the trains'],['Containing structure','Column structures and adsorber skids'],['Placement','Feed enters from the west; treated gas crosses the rack to the trains']],
  why:'The main cryogenic exchanger is the most expensive single item on site and cannot be cleaned. Pretreatment protects it.',
  specs:[['Feed','1,300 MMscfd'],['CO2 out','< 50 ppm'],['Water out','< 0.1 ppm'],['Mercury out','< 10 ng/Nm3'],['Amine','aMDEA, 2 absorbers']],
  safety:['CO2 vent and amine handling.','Mole sieve regeneration gas at 290 C.','Mercury-contaminated adsorbent disposal.','Benzene in the scrub column bottoms.'],
  conns:['LQ','UT'],
  children:[
   {id:'PT.inlet',name:'Inlet Separator & Metering',summary:'Slug catcher, inlet separator and fiscal metering on the feed.',specs:[['Separator','96 in x 30 ft'],['Metering','3 x 16 in ultrasonic']]},
   {id:'PT.amine',name:'Acid Gas Removal Unit',summary:'Two amine absorbers with a common regenerator taking CO2 to 50 ppm.',specs:[['Absorbers','2 x 4 m x 40 m'],['Regenerator','5 m x 35 m']]},
   {id:'PT.dehy',name:'Dehydration Beds',summary:'Three molecular sieve adsorbers (two adsorbing, one regenerating).',specs:[['Beds','3 x 4 m x 12 m'],['Regen gas','290 C']]},
   {id:'PT.hg',name:'Mercury Guard Bed',summary:'Sulphur-impregnated carbon bed removing mercury.',specs:[['Bed','4 m x 8 m']]},
   {id:'PT.scrub',name:'Scrub Column',summary:'Column removing benzene and C5+ before liquefaction; bottoms go to condensate.',specs:[['Size','4 m x 35 m']]}
  ]},
 {id:'LQ',code:'02',name:'Liquefaction Trains',icon:'compressor',
  summary:'Two propane-precooled mixed-refrigerant trains that chill treated gas to -162 C.',
  body:'Each train precools the gas with propane in kettle chillers, then liquefies and subcools it in the spool-wound main cryogenic heat exchanger against a mixed refrigerant of nitrogen, methane, ethane and propane. Gas-turbine-driven compressors circulate the refrigerants; large air-cooler banks reject the heat. LNG flashes in an end-flash drum to remove nitrogen and runs down to storage.',
  eng:'Train capacity is limited by compressor driver power (2 x 90 MW per train). The MCHE approach temperature and refrigerant composition are tuned daily against ambient temperature. Train trips depressure to the dry flare.',
  where:[['Area','Process area, plant centre'],['Containing structure','Train pipe racks, MCHE structures, compressor houses'],['Placement','Two identical trains side by side, 60 m apart']],
  why:'The trains are the plant. Every other system exists to feed, protect or drain them.',
  specs:[['Trains','2 x 4.5 Mtpa'],['Process','C3-MR'],['Drivers','2 x Frame 7 gas turbines per train'],['MCHE','Spool-wound, 5 m x 60 m'],['LNG temp','-162 C']],
  safety:['Large refrigerant inventories: propane and mixed refrigerant.','Cryogenic release: brittle fracture and vapour cloud.','Gas turbine enclosure fire and gas.','Aluminium exchanger: mercury and temperature shock.'],
  conns:['PT','SG','BG','RF','UT'],
  children:[
   {id:'LQ.t1',name:'Train 1',summary:'First liquefaction train.',children:[
    {id:'LQ.t1.c3',name:'Propane Compressor & Turbine',summary:'Four-stage propane compressor driven by a gas turbine with helper motor.',specs:[['Power','90 MW'],['Stages','4']]},
    {id:'LQ.t1.mr',name:'Mixed Refrigerant Compressor',summary:'Two-casing MR compressor driven by a gas turbine.',specs:[['Power','90 MW']]},
    {id:'LQ.t1.chillers',name:'Propane Chillers',summary:'Kettle chillers precooling feed and MR at four pressure levels.'},
    {id:'LQ.t1.mche',name:'Main Cryogenic Heat Exchanger',summary:'Spool-wound aluminium exchanger where the gas becomes LNG.',specs:[['Size','5 m x 60 m'],['Tubes','~10,000 km']]},
    {id:'LQ.t1.coolers',name:'Air Cooler Bank',summary:'Forced-draught fin-fan bank condensing refrigerants.',specs:[['Bays','24'],['Fans','48']]},
    {id:'LQ.t1.flash',name:'End Flash & Rundown',summary:'End flash drum, LNG pumps and rundown line to storage.'}
   ]},
   {id:'LQ.t2',name:'Train 2',summary:'Second, identical liquefaction train.',children:[
    {id:'LQ.t2.comp',name:'Refrigerant Compressors',summary:'Propane and MR compressors with gas-turbine drivers.'},
    {id:'LQ.t2.chillers',name:'Propane Chillers',summary:'Kettle chillers precooling feed and MR.'},
    {id:'LQ.t2.mche',name:'Main Cryogenic Heat Exchanger',summary:'Spool-wound aluminium exchanger.'},
    {id:'LQ.t2.coolers',name:'Air Cooler Bank',summary:'Fin-fan bank condensing refrigerants.'},
    {id:'LQ.t2.flash',name:'End Flash & Rundown',summary:'End flash drum and rundown to storage.'}
   ]}
  ]},
 {id:'SG',code:'03',name:'LNG Storage',icon:'tank',
  summary:'Two full-containment tanks holding LNG at -162 C, with in-tank pumps and boil-off collection.',
  body:'Each tank is a 9% nickel steel inner tank inside a post-tensioned concrete outer tank with insulation between. Submerged pumps in the inner tank send LNG to the jetty. Heat leak boils about 0.05% per day, collected as boil-off gas.',
  eng:'Tank rollover is prevented by managing density stratification: fill top or bottom according to LNG density. Pressure is held between 10 and 25 kPa by the BOG compressors.',
  where:[['Area','Storage area, east of the trains'],['Containing structure','Tank foundations on piles'],['Placement','Two tanks 100 m apart, 300 m from the process area']],
  why:'Storage decouples steady production from batch shipping. A tank is a decades-long, irreplaceable asset.',
  specs:[['Tanks','2 x 180,000 m3 full containment'],['Diameter','84 m'],['Height','50 m'],['Boil-off','0.05%/day'],['In-tank pumps','3 x 2,000 m3/h per tank']],
  safety:['Rollover: density monitoring and fill management.','Overpressure and vacuum: PSVs, vacuum breakers.','Cryogenic spill in the tank bund.','Pump column and top-of-tank access.'],
  conns:['LQ','JT','BG'],
  children:[
   {id:'SG.t1',name:'LNG Tank T-101',summary:'180,000 m3 full-containment tank.',specs:[['Capacity','180,000 m3'],['Inner','9% Ni steel'],['Outer','Pre-stressed concrete']]},
   {id:'SG.t2',name:'LNG Tank T-102',summary:'180,000 m3 full-containment tank.'},
   {id:'SG.pumps',name:'In-tank Pumps & Loading Line',summary:'Submerged pumps and the insulated loading line to the jetty.',specs:[['Pumps','3 per tank, 2,000 m3/h'],['Line','36 in, vacuum-insulated']]},
   {id:'SG.bog',name:'BOG Header',summary:'Vapour header connecting tanks, jetty return and BOG compressors.'}
  ]},
 {id:'JT',code:'04',name:'Jetty & Loading',icon:'ship',
  summary:'Trestle, loading platform, articulated arms and berth where LNG carriers load.',
  body:'The loading line runs along a 600 m trestle to the platform, where four articulated arms (three liquid, one vapour return) connect to the ship manifold. Mooring and breasting dolphins hold the carrier; emergency release couplings and the ship-shore link allow a rapid disconnect. Loading takes about 12 hours.',
  eng:'Arms are cooled down before connection to avoid thermal shock. Vapour return keeps ship tank pressure steady; excess BOG goes to the recondenser. Berth design follows OCIMF mooring analysis for the largest carrier.',
  where:[['Area','Marine terminal'],['Containing structure','Trestle and jetty head'],['Placement','Jetty head in 15 m water, 600 m offshore']],
  why:'Every cargo passes through four arms on this platform. Jetty availability is export availability.',
  specs:[['Arms','4 x 16 in (3 liquid, 1 vapour)'],['Loading rate','12,000 m3/h'],['Design vessel','Q-Flex, 210,000 m3'],['Trestle','600 m'],['ESD','Two-stage with ERC']],
  safety:['Ship-shore ESD and emergency release.','Cryogenic spill on the platform: water curtain and drainage.','Mooring line failure in weather.','Simultaneous marine and process operations.'],
  conns:['SG','BG','UT'],
  children:[
   {id:'JT.trestle',name:'Trestle',summary:'Piled approach carrying the loading line, BOG return and roadway.',specs:[['Length','600 m'],['Piles','120']]},
   {id:'JT.platform',name:'Loading Platform',summary:'Jetty head with the arm manifold, control building and access tower.'},
   {id:'JT.arms',name:'Loading Arms',summary:'Four articulated arms with ERC couplers.',specs:[['Count','4 x 16 in'],['Envelope','+/- 3 m surge, 2 m sway']]},
   {id:'JT.dolphins',name:'Mooring & Breasting Dolphins',summary:'Piled dolphins with quick-release hooks and fenders.',specs:[['Mooring','6'],['Breasting','4']]},
   {id:'JT.carrier',name:'LNG Carrier',summary:'Moss-type carrier alongside, cargo tanks visible as domes.',specs:[['Capacity','145,000 m3'],['Length','290 m']]},
   {id:'JT.control',name:'Jetty Control Room',summary:'Building at the jetty head with ship-shore link and ESD panel.'}
  ]},
 {id:'BG',code:'05',name:'Boil-off Gas Handling',icon:'rotate',
  summary:'Compressors and recondenser that recover tank and ship boil-off gas as fuel or send-out.',
  body:'Boil-off from the tanks, loading line and returning ship vapour is compressed and either burned as plant fuel or recondensed into subcooled LNG in the recondenser. During loading, ship displacement gas can reach several times the normal rate.',
  eng:'BOG compressors are reciprocating machines with cold suction at -140 C. Tank pressure control is the master loop; the recondenser stays flooded to avoid vapour to the send-out pumps.',
  where:[['Area','Between storage and the trains'],['Containing structure','Compressor shelter and recondenser structure'],['Placement','Adjacent to the tank BOG header']],
  why:'BOG that is not recovered is flared. Recovery is both an emissions and a fuel-cost matter.',
  specs:[['Compressors','3 x 30 t/h reciprocating'],['Suction','-140 C'],['Recondenser','3 m x 12 m'],['Fuel gas','60% of plant fuel']],
  safety:['Cryogenic suction piping and cold compressor casings.','Low-temperature excursions to carbon steel fuel gas piping.'],
  conns:['SG','JT','LQ','UT'],
  children:[
   {id:'BG.comp',name:'BOG Compressors',summary:'Three cryogenic reciprocating compressors.',specs:[['Count','3'],['Capacity','30 t/h each']]},
   {id:'BG.recond',name:'Recondenser',summary:'Packed vessel where BOG is condensed into subcooled LNG.'},
   {id:'BG.fuel',name:'Fuel Gas System',summary:'Heaters, KO drum and distribution to turbines and boilers.'}
  ]},
 {id:'RF',code:'06',name:'Refrigerant Storage',icon:'meter',
  summary:'Bullets and drums holding propane, ethylene and nitrogen make-up for the refrigerant loops.',
  body:'Refrigerant make-up is stored in pressurised bullets. Ethylene is imported; propane and methane are taken from the process. Nitrogen comes from an air separation unit or liquid storage.',
  eng:'Make-up rate is a measure of seal and valve leakage; a rising trend is an integrity indicator.',
  where:[['Area','North-west corner'],['Containing structure','Bunded bullet farm'],['Placement','Upwind of the trains, 100 m from the fence']],
  why:'A train cannot restart without refrigerant. Storage is the buffer.',
  specs:[['Propane','2 x 200 m3 bullets'],['Ethylene','2 x 100 m3 bullets'],['Nitrogen','1 x 50 m3 liquid']],
  safety:['LPG storage: BLEVE, deluge.','Ethylene at high pressure.','Cryogenic nitrogen: asphyxiation.'],
  conns:['LQ'],
  children:[
   {id:'RF.propane',name:'Propane Bullets',summary:'Two horizontal pressure vessels.',specs:[['Volume','2 x 200 m3']]},
   {id:'RF.ethylene',name:'Ethylene Bullets',summary:'Two horizontal pressure vessels.',specs:[['Volume','2 x 100 m3']]},
   {id:'RF.n2',name:'Nitrogen Storage',summary:'Vertical liquid nitrogen tank with vaporiser.'},
   {id:'RF.makeup',name:'Make-up Pumps',summary:'Pumps and metering for refrigerant top-up.'}
  ]},
 {id:'UT',code:'07',name:'Utilities & Fire Protection',icon:'bolt',
  summary:'Flares, power generation, fire and foam systems, seawater intake and the control building.',
  body:'Wet and dry flares handle warm and cryogenic reliefs separately. Gas turbine generators supply plant power. Fire water comes from a seawater intake with diesel pumps; high-expansion foam covers the tank bunds and jetty. The control building houses the DCS and marine control.',
  eng:'Dry flare is dedicated to cold, hydrocarbon-rich reliefs; wet flare takes warm and wet streams. Power demand is 60 MW with N+1 generation.',
  where:[['Area','South side and shoreline'],['Containing structure','Flare field, power plant, intake structure'],['Placement','Flares 250 m south-west; intake on the beach']],
  why:'Cryogenic fires are fought with foam and isolation, not water. The systems here are specific to LNG.',
  specs:[['Dry flare','36 in x 90 m'],['Wet flare','24 in x 70 m'],['Power','4 x 20 MW gas turbines'],['Fire water','3 x 4,000 m3/h seawater'],['Foam','High-expansion, bund and jetty']],
  safety:['Flare radiation.','Seawater intake marine growth and chlorination.','High-expansion foam system testing.','Turbine enclosure gas detection.'],
  conns:['PT','LQ','SG','JT','BG'],
  children:[
   {id:'UT.dryflare',name:'Dry Flare',summary:'Derrick-supported flare for cryogenic reliefs.',specs:[['Height','90 m']]},
   {id:'UT.wetflare',name:'Wet Flare',summary:'Flare for warm and wet reliefs.',specs:[['Height','70 m']]},
   {id:'UT.power',name:'Power Plant',summary:'Four gas turbine generators with HRSGs.',specs:[['Output','4 x 20 MW']]},
   {id:'UT.fire',name:'Fire Water & Foam',summary:'Seawater pump house, ring main and foam generators.',specs:[['Pumps','3 x 4,000 m3/h']]},
   {id:'UT.intake',name:'Seawater Intake',summary:'Screened intake structure on the shoreline.'},
   {id:'UT.control',name:'Control & Admin Building',summary:'DCS, marine control and administration.'},
   {id:'UT.rack',name:'Main Pipe Rack',summary:'Rack carrying feed, refrigerant, LNG rundown and utilities.'}
  ]}
 ],
 build(h){
  const {box,cyl,strut,pipe,sph,mat,C,KIT}=h;const T=Math.PI/2,ST={metalness:.45,roughness:.45},SH={metalness:.35,roughness:.5};
  const plot=box(130,.3,110,0x6a6d70,0,.15,10,'UT.rack',null,{roughness:.95});plot.receiveShadow=true;
  KIT.rack(-56,50,-4,5,8,'UT.rack',.18);KIT.rack(-40,50,20,4,6,'UT.rack',.14);
  // ---- pretreatment
  KIT.vesselH(-52,3.4,-14,1.8,10,'PT.inlet',C.steel,{platform:true,manway:false});box(6,.3,2.4,C.dark,-52,.15,-6,'PT.inlet');[-.7,0,.7].forEach(dz=>cyl(.32,5,C.steel,-52,1,-6+dz,'PT.inlet',null,ST,.32,12).rotation.z=T);
  [0,1].forEach(i=>KIT.column(-46+i*4,4,1.2,18,'PT.amine',C.steel,{platforms:2}));KIT.column(-38,4,1.4,16,'PT.amine',C.steel,{platforms:2});KIT.vesselH(-42,2.2,12,1,6,'PT.amine',C.steel,{boot:true});KIT.finFan(-46,16,8,4,'PT.amine',2);
  [0,1,2].forEach(i=>KIT.column(-32+i*3.4,-14,1.2,8,'PT.dehy',C.steel,{platforms:0}));pipe([[-32,9,-14],[-25.2,9,-14]],.24,C.steel,'PT.dehy');KIT.heater(-30,-22,4,3,4,'PT.dehy');
  KIT.column(-22,-14,1.2,6,'PT.hg',C.steel,{platforms:0});KIT.column(-22,4,1.1,16,'PT.scrub',C.steel,{platforms:2});KIT.vesselH(-18,2,10,.8,5,'PT.scrub',C.steel,{manway:false});
  // ---- liquefaction trains
  const train=(z,ids)=>{
    // compressor houses with GT drivers
    ids.comp.forEach(([x,id])=>{box(14,5,5,0x8d9aa8,x,2.5,z-14,id,{shell:true},{transparent:true,opacity:.85});box(14.4,.3,5.4,C.dark,x,5.15,z-14,id);cyl(.7,6,C.steel,x+5,8,z-14,id,null,ST,.7,14);box(4,3,3,0xb9b5a6,x-8.5,1.5,z-14,id,{shell:true});cyl(1.3,3,0x5c6b8a,x-3,1.6,z-14,id,null,ST,1.3,20).rotation.z=T;cyl(1.1,3.2,0x8a5a2b,x+2,1.6,z-14,id,null,ST,1.1,20).rotation.z=T;});
    // chillers
    [0,1,2,3].forEach(i=>KIT.vesselH(-6+i*7,2.6,z-6,1.3,5,ids.chillers,C.steel,{manway:false}));
    // MCHE: tall spool-wound exchanger in a structure
    cyl(2.4,2.5,C.concrete,22,1.25,z-6,ids.mche,null,{roughness:.95},2.4,28);cyl(2.2,30,0xcfd3d6,22,17.5,z-6,ids.mche,null,{metalness:.5,roughness:.35},2.2,32);sph(2.2,0xcfd3d6,22,32.5,z-6,ids.mche,null,SH).scale.y=.4;
    [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b])=>strut([22+a*3.6,0,z-6+b*3.6],[22+a*3.6,33,z-6+b*3.6],.2,C.steel,ids.mche));[8,16,24,32].forEach(y=>KIT.handrail(22,z-6,7.2,7.2,y,ids.mche,C.steel));KIT.stairTower(27.5,z-6,33,ids.mche);[6,14,22,29].forEach(y=>KIT.nozzle(24.2,y,z-6,.3,1.2,C.steel,ids.mche,'x'));
    // air cooler bank
    [0,1,2,3].forEach(i=>KIT.finFan(-8+i*12,z+4,11,5,ids.coolers,3));
    // end flash & rundown
    KIT.column(32,z-6,1,10,ids.flash,C.steel,{platforms:1});KIT.pumpSet(35,z-2,ids.flash,C.blue);KIT.pumpSet(35,z+.6,ids.flash,C.blue);pipe([[32,11,z-6],[32,12,z-6],[44,12,z-6],[44,12,z+2]],.3,0xcfd3d6,ids.flash);
  };
  train(-22,{comp:[[-4,'LQ.t1.c3'],[14,'LQ.t1.mr']],chillers:'LQ.t1.chillers',mche:'LQ.t1.mche',coolers:'LQ.t1.coolers',flash:'LQ.t1.flash'});
  train(18,{comp:[[-4,'LQ.t2.comp'],[14,'LQ.t2.comp']],chillers:'LQ.t2.chillers',mche:'LQ.t2.mche',coolers:'LQ.t2.coolers',flash:'LQ.t2.flash'});
  // ---- LNG storage
  [['SG.t1',54,-18],['SG.t2',54,12]].forEach(([id,x,z])=>{cyl(11.5,1.2,C.concrete,x,.6,z,id,null,{roughness:.95},11.5,48);cyl(11,14,0xe4e6ea,x,8.2,z,id,null,{roughness:.55},11,48);sph(11,0xe4e6ea,x,15.2,z,id,null,{roughness:.55}).scale.y=.32;
    KIT.ring(x,15.4,z,11,id);KIT.torus(11.1,.15,x,8,z,0xc9c3b1,id,T);KIT.torus(11.1,.15,x,3,z,0xc9c3b1,id,T);KIT.stairTower(x+12.5,z,15.3,id);box(2.4,1.2,2.4,C.steel,x,19,z,id);cyl(.35,3,C.steel,x-3,17,z,id,null,ST,.35,10);cyl(.35,3,C.steel,x+3,17,z,id,null,ST,.35,10);
    [[-1,0],[1,0],[0,-1],[0,1]].forEach(([a,b])=>KIT.nozzle(x+a*11,2.4,z+b*11,.3,1.2,C.steel,id,a?'x':'z'));});
  [0,1,2].forEach(i=>cyl(.5,4,C.steel,52+i*2,17.2,-18,'SG.pumps',null,ST,.5,12));pipe([[54,16,-18],[54,16,-30],[54,4,-30],[54,4,42]],.34,0xcfd3d6,'SG.pumps');pipe([[54,16,12],[54,16,-30]],.34,0xcfd3d6,'SG.pumps');
  pipe([[54,15.4,-18],[54,15.4,-6],[40,15.4,-6],[40,6,-6],[40,6,26]],.2,C.steel,'SG.bog');pipe([[54,15.4,12],[54,15.4,-6]],.2,C.steel,'SG.bog');
  // ---- jetty
  for(let z=44;z<=96;z+=6){[-1.6,1.6].forEach(dx=>cyl(.32,6,C.concrete,54+dx,3,z,'JT.trestle',null,{roughness:.9},.32,10));strut([52.4,5.6,z],[55.6,5.6,z],.14,C.steel,'JT.trestle');}
  box(4.4,.4,56,0x8a8d90,54,6.2,72,'JT.trestle',null,{roughness:.9});KIT.handrail(54,72,4.4,56,6.4,'JT.trestle',C.steel);pipe([[54,7.2,44],[54,7.2,100]],.34,0xcfd3d6,'JT.trestle');pipe([[52.8,7.2,44],[52.8,7.2,100]],.2,C.steel,'JT.trestle');
  box(16,.6,10,0x8a8d90,54,6.2,104,'JT.platform',null,{roughness:.9});[[-6,-3],[6,-3],[-6,3],[6,3],[0,-3],[0,3]].forEach(([a,b])=>cyl(.4,6.2,C.concrete,54+a,3.1,104+b,'JT.platform',null,{roughness:.9},.4,10));KIT.handrail(54,104,16,10,6.5,'JT.platform',C.steel);box(3,.3,3,C.steel,49,9.5,101,'JT.platform');KIT.stairTower(49,101,9.5,'JT.platform');
  [0,1,2,3].forEach(i=>{const x=49+i*3.2;cyl(.5,3.5,C.steel,x,8.2,108,'JT.arms',null,ST,.5,12);strut([x,10,108],[x,15,111],.22,i==3?C.yellow:0xcfd3d6,'JT.arms');strut([x,15,111],[x,10,116],.2,i==3?C.yellow:0xcfd3d6,'JT.arms');box(1.2,.6,1.2,C.dark,x,15,111,'JT.arms');cyl(.6,1.2,C.steel,x,9,109.4,'JT.arms',null,ST,.6,12);});
  [[38,100],[38,116],[70,100],[70,116],[46,120],[62,120]].forEach(([x,z])=>{cyl(1.8,7,C.concrete,x,3.5,z,'JT.dolphins',null,{roughness:.9},1.8,16);box(1.2,.6,1.2,C.yellow,x,7.3,z,'JT.dolphins');KIT.handrail(x,z,3.4,3.4,7,'JT.dolphins',C.steel);});
  strut([38,6.8,100],[46,6.8,110],.05,C.cable,'JT.dolphins');strut([70,6.8,100],[62,6.8,110],.05,C.cable,'JT.dolphins');
  // carrier alongside (Moss type)
  box(52,4,10,0x1f3550,54,2.6,116,'JT.carrier');box(46,1.6,9,0xe8ebee,52,5.4,116,'JT.carrier');box(5,4,8,0xe8ebee,74,8,116,'JT.carrier');box(4,1.4,6,0xe8ebee,74,10.7,116,'JT.carrier');cyl(.5,4,C.dark,77,12,116,'JT.carrier',null,ST,.5,12);
  [0,1,2,3].forEach(i=>{sph(4.4,0xdcdfe3,36+i*10.5,7,116,'JT.carrier',null,{roughness:.5,metalness:.2});cyl(4.4,1.6,0xdcdfe3,36+i*10.5,6.6,116,'JT.carrier',null,{roughness:.5},4.4,28);});
  box(6,2,1.6,0x2b2f38,50,7.2,111.4,'JT.carrier');[-2,0,2].forEach(dx=>cyl(.22,2,C.steel,50+dx,8.4,111.4,'JT.carrier',null,ST,.22,8));
  KIT.building(60,104,4,3,2.8,'JT.control',0xf1efe8,{hvac:false});
  // ---- BOG handling
  [0,1,2].forEach(i=>KIT.compressor(38,26+i*6,'BG.comp'));KIT.column(48,30,1.2,12,'BG.recond',C.steel,{platforms:1});KIT.vesselH(48,2.2,38,.9,5,'BG.fuel',C.steel,{manway:false});KIT.heater(52,42,3,2.5,3.5,'BG.fuel');
  // ---- refrigerant storage
  [[-50,32],[-50,36]].forEach(([x,z])=>KIT.vesselH(x,2.6,z,1.3,12,'RF.propane',0xe4e6ea,{manway:false}));[[-50,41],[-50,44.5]].forEach(([x,z])=>KIT.vesselH(x,2.2,z,1,10,'RF.ethylene',0xdcdfe3,{manway:false}));
  KIT.column(-38,34,1.4,9,'RF.n2',0xe4e6ea,{platforms:0});for(let i=0;i<4;i++)box(.2,3,2.4,0xb9c3cc,-34+i*.5,1.6,34,'RF.n2');KIT.pumpSet(-38,40,'RF.makeup',C.blue);KIT.pumpSet(-38,42.4,'RF.makeup',C.blue);
  box(30,.8,18,0xa0895f,-46,.4,38,'RF.propane',null,{roughness:1});
  // ---- utilities
  KIT.flare(-58,-42,50,'UT.dryflare',{ko:false});KIT.vesselH(-48,2.6,-42,1.5,9,'UT.dryflare',C.steel,{manway:false});KIT.flare(-36,-46,38,'UT.wetflare',{ko:false});KIT.vesselH(-28,2.4,-46,1.2,7,'UT.wetflare',C.steel,{manway:false});
  [0,1,2,3].forEach(i=>{box(10,4.4,4.5,0x8d9aa8,-14+i*12,2.2,-42,'UT.power',{shell:true},{transparent:true,opacity:.85});box(10.3,.3,4.8,C.dark,-14+i*12,4.5,-42,'UT.power');cyl(.8,10,C.steel,-9+i*12,10,-42,'UT.power',null,ST,.8,14);box(4,6,4,0xb9b5a6,-9+i*12,3,-46,'UT.power',{shell:true});});
  KIT.building(38,-42,8,5,4,'UT.fire',0xd8cfae,{hvac:false});[0,1,2].forEach(i=>KIT.pumpSet(34+i*3,-36,'UT.fire',C.red));KIT.tankAPI(48,-42,4,6,'UT.fire',0xc8332a);
  box(8,3,6,C.concrete,64,1.5,66,'UT.intake',null,{roughness:.9});box(8.4,.4,6.4,C.dark,64,3.2,66,'UT.intake');[0,1].forEach(i=>cyl(.4,3,C.steel,62+i*3,4.7,66,'UT.intake',null,ST,.4,10));pipe([[64,1.5,63],[64,1.5,-30],[48,1.5,-30]],.3,0x2f6f8f,'UT.intake');
  KIT.building(-4,-32,14,7,5,'UT.control',0xf1efe8,{hvac:true});
 }
});
