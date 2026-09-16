// Refinery: crude receiving and desalting, CDU/VDU, conversion (FCC, hydrocracker, coker),
// treating and hydrogen, reforming and alkylation, blending and tank farm, utilities.
(window.SITES=window.SITES||[]).push({
 id:'refinery',name:'Refinery',stage:'downstream',code:'05',icon:'refinery',
 short:'200,000 bpd conversion refinery: distillation, FCC, hydrocracker, coker, treating, reforming, blending.',
 world:'flat',hasSubsurface:false,
 home:{target:[2,8,-2],theta:.5,phi:1.02,radius:172},
 evidence:['S1 Refinery process flow diagrams, rev 7','S2 API 560 fired heater data sheets','S3 Unit operating manuals (CDU, FCC, HCU)','S4 API 650 tank farm register','S5 API 521 relief and flare study','S6 Plot plan R-0001'],
 systems:[
 {id:'CR',code:'01',name:'Crude Receiving & Desalting',icon:'tank',
  summary:'Crude tank farm, charge pumps, preheat train and two-stage desalters that prepare crude for distillation.',
  body:'Crude arrives by pipeline into floating-roof tanks where water settles. Charge pumps push it through a preheat train of exchangers against hot products, then into the desalters where wash water and an electrostatic field strip salt and solids. Desalted crude continues through the hot preheat train to the crude heater.',
  eng:'Desalter efficiency (>95% salt removal) protects the CDU overhead from chloride corrosion. Preheat recovery sets furnace duty; the train is the largest exchanger network on site and fouls continuously.',
  where:[['Area','West battery limit and crude unit inlet'],['Containing structure','Crude tank farm bunds and desalter piers'],['Placement','Tank farm at the west fence; desalters at the crude unit']],
  why:'Salt and water in the crude become acid and fouling everywhere downstream. What the desalters miss, every other unit pays for.',
  specs:[['Throughput','200,000 bpd'],['Crude tanks','3 x 500,000 bbl floating roof'],['Desalters','2 stage, 14 ft x 60 ft each'],['Preheat train','24 shells, crude to 260 C']],
  safety:['Floating-roof tank rim-seal fires and roof sinking.','Desalter effluent: oily water and benzene.','Preheat exchangers: hot hydrocarbon leaks during bundle pulls.','Crude tank overfill: independent high-high level trip.'],
  conns:['CD','UT'],
  children:[
   {id:'CR.tanks',name:'Crude Tank Farm',summary:'Three floating-roof tanks with mixers and water draw-off.',children:[
    {id:'CR.tanks.t1',name:'Crude Tank 101',summary:'500,000 bbl external floating roof tank.',specs:[['Capacity','500,000 bbl'],['Diameter','80 m'],['Roof','External floating, double seal']]},
    {id:'CR.tanks.t2',name:'Crude Tank 102',summary:'500,000 bbl external floating roof tank.'},
    {id:'CR.tanks.t3',name:'Crude Tank 103',summary:'500,000 bbl external floating roof tank.'}
   ]},
   {id:'CR.pumps',name:'Crude Charge Pumps',summary:'Three 50% turbine and motor-driven pumps feeding the preheat train.',specs:[['Flow','3 x 4,200 gpm'],['Head','600 psi'],['Drivers','2 motor, 1 steam turbine']]},
   {id:'CR.preheat',name:'Preheat Exchanger Train',summary:'Shell-and-tube exchangers heating crude against products and pumparounds.',specs:[['Shells','24'],['Outlet','260 C']]},
   {id:'CR.desalter',name:'Desalters',summary:'Two-stage electrostatic desalters with wash water injection and mud wash.',specs:[['Vessels','2 x 14 ft x 60 ft'],['Voltage','20 kV'],['Salt removal','> 95%']]},
   {id:'CR.meter',name:'Crude Metering',summary:'Custody metering on the crude receipt line.'}
  ]},
 {id:'CD',code:'02',name:'Crude & Vacuum Distillation',icon:'refinery',
  summary:'Atmospheric and vacuum columns with their fired heaters that split crude into straight-run fractions.',
  body:'Desalted crude is heated to 370 C in the crude heater and flashed into the atmospheric column. Naphtha goes overhead, kerosene, diesel and gas oil are drawn from side strippers, and the residue is reheated in the vacuum heater and flashed at 25 mmHg in the vacuum column to recover gas oils for the FCC and hydrocracker. Vacuum residue goes to the coker.',
  eng:'Column pressure and flash-zone temperature set the cut points. Overhead corrosion (HCl, H2S) is controlled by caustic, ammonia and filmer injection. Vacuum is made by steam ejectors and surface condensers.',
  where:[['Area','Crude unit, west of centre'],['Containing structure','Column structures and heater plot'],['Placement','CDU column 60 m tall on the crude unit; VDU beside it']],
  why:'Distillation is the first cut and sets the feed to every conversion unit. The crude heater is the refinery\'s largest fired duty.',
  specs:[['CDU column','7 m x 60 m, 48 trays'],['VDU column','12 m x 40 m, packed'],['Crude heater','180 MMBtu/h, 4 pass'],['Vacuum heater','80 MMBtu/h'],['Flash zone','370 C / 25 mmHg']],
  safety:['Fired heaters: tube rupture, BMS, flame failure.','Overhead corrosion and exchanger leaks.','Vacuum column air ingress and hot oil at 400 C.','Column relief to flare on loss of reflux.'],
  conns:['CR','CV','HT'],
  children:[
   {id:'CD.furnace',name:'Crude Heater',summary:'Four-pass box heater raising crude to 370 C.',specs:[['Duty','180 MMBtu/h'],['Passes','4'],['Fuel','Refinery fuel gas']]},
   {id:'CD.cdu',name:'Atmospheric Column',summary:'Main crude fractionator with 48 trays and three pumparounds.',specs:[['Size','7 m x 60 m'],['Trays','48'],['Pressure','20 psi']]},
   {id:'CD.strippers',name:'Side Strippers',summary:'Kerosene, diesel and AGO steam strippers beside the main column.',specs:[['Count','3'],['Size','2 m x 12 m']]},
   {id:'CD.overhead',name:'Overhead System',summary:'Fin-fan condensers, reflux drum and overhead pumps.'},
   {id:'CD.vfurnace',name:'Vacuum Heater',summary:'Reheats atmospheric residue to 400 C for the vacuum column.',specs:[['Duty','80 MMBtu/h']]},
   {id:'CD.vdu',name:'Vacuum Column',summary:'Wide packed column operating at 25 mmHg to recover vacuum gas oils.',specs:[['Size','12 m x 40 m'],['Pressure','25 mmHg'],['Packing','Structured, 4 beds']]},
   {id:'CD.ejectors',name:'Vacuum Ejectors',summary:'Three-stage steam ejectors and surface condensers making the vacuum.'}
  ]},
 {id:'CV',code:'03',name:'Conversion Units',icon:'rotate',
  summary:'FCC, hydrocracker and delayed coker that turn heavy gas oils and residue into gasoline, diesel and coke.',
  body:'The FCC cracks vacuum gas oil over a circulating zeolite catalyst: the riser reactor cracks, the regenerator burns off coke, and the main fractionator recovers gasoline and light olefins. The hydrocracker converts heavier gas oil to diesel and jet under 2,000 psi hydrogen. The delayed coker thermally cracks vacuum residue in drums, producing coke that is cut out with high-pressure water.',
  eng:'FCC heat balance couples the reactor and regenerator; catalyst circulation is the controlling variable. Hydrocracker reactor exotherms are quenched with hydrogen between beds. Coker drum cycle is 16-24 hours between switches.',
  where:[['Area','Plant centre'],['Containing structure','FCC structure, hydrocracker reactor bay, coker structure'],['Placement','Three units in a row east of the crude unit']],
  why:'Conversion units make the light products the market pays for. The refinery\'s margin is set here.',
  specs:[['FCC','50,000 bpd, riser reactor'],['Hydrocracker','40,000 bpd, 2,000 psi'],['Coker','30,000 bpd, 4 drums'],['Hydrogen demand','90 MMscfd']],
  safety:['FCC catalyst at 700 C and regenerator afterburn.','Hydrocracker high-pressure hydrogen: temperature runaway and hydrogen embrittlement.','Coker drum switching, cutting and hot coke handling.','Hydrogen sulphide in sour water and gas.'],
  conns:['CD','HT','RF','UT'],
  children:[
   {id:'CV.fcc',name:'FCC Reactor & Regenerator',summary:'Riser reactor, stripper and regenerator vessels on the FCC structure.',specs:[['Riser','1.5 m x 40 m'],['Regenerator','12 m x 20 m'],['Catalyst','300 t inventory']],children:[
    {id:'CV.fcc.riser',name:'Riser Reactor',summary:'Vertical riser where feed vaporises and cracks on hot catalyst.'},
    {id:'CV.fcc.regen',name:'Regenerator',summary:'Fluidised bed where coke is burned off the catalyst at 700 C.'},
    {id:'CV.fcc.stripper',name:'Stripper & Cyclones',summary:'Steam stripper and cyclones separating catalyst from product vapour.'}
   ]},
   {id:'CV.fcc_frac',name:'FCC Main Fractionator',summary:'Column separating FCC products into gas, gasoline, LCO and slurry.',specs:[['Size','6 m x 45 m']]},
   {id:'CV.hcu',name:'Hydrocracker Reactors',summary:'Two thick-walled reactors in series with interbed hydrogen quench.',specs:[['Reactors','2 x 4 m x 25 m'],['Pressure','2,000 psi'],['Wall','200 mm 2.25Cr-1Mo']]},
   {id:'CV.hcu_comp',name:'Recycle Gas Compressor',summary:'Centrifugal compressor recycling hydrogen around the reactors.',specs:[['Power','10,000 hp']]},
   {id:'CV.coker',name:'Coke Drums',summary:'Four coke drums in two pairs, each pair on a 24 h fill-and-cut cycle.',specs:[['Drums','4 x 8 m x 30 m'],['Cycle','24 h']]},
   {id:'CV.coker_frac',name:'Coker Fractionator',summary:'Column recovering coker gas oils and naphtha from drum vapours.'},
   {id:'CV.coker_furnace',name:'Coker Heater',summary:'Heater raising residue to 500 C ahead of the drums.',specs:[['Duty','120 MMBtu/h']]},
   {id:'CV.cokepit',name:'Coke Pit & Crusher',summary:'Cutting pit, crusher and conveyor for green coke handling.'}
  ]},
 {id:'HT',code:'04',name:'Treating & Hydrogen',icon:'shield',
  summary:'Hydrotreaters, amine unit, sulphur recovery and the hydrogen plant that make products clean.',
  body:'Naphtha and diesel hydrotreaters remove sulphur and nitrogen over catalyst in hydrogen. The amine unit scrubs H2S from fuel gas and hydrogen recycle; the sulphur recovery unit converts it to liquid sulphur by the Claus process. A steam-methane reformer makes the hydrogen the treating and cracking units consume.',
  eng:'Hydrotreater severity is set by product sulphur spec (10 ppm diesel). SRU recovery must exceed 99.9% to meet emission limits. The hydrogen plant reformer runs at 850 C and is the second largest fired duty.',
  where:[['Area','East of the conversion units'],['Containing structure','Reactor bays, SRU plot, reformer furnace'],['Placement','Hydrotreaters in a line; SRU and hydrogen plant at the north-east corner']],
  why:'Fuel specifications are sulphur limits. Treating is what makes the barrels sellable.',
  specs:[['Naphtha HT','60,000 bpd, 600 psi'],['Diesel HT','70,000 bpd, 1,200 psi'],['SRU','2 x 150 t/d Claus + tail gas'],['Hydrogen plant','90 MMscfd SMR']],
  safety:['H2S: sour gas, sour water and the SRU.','High-pressure hydrogen service.','Reformer furnace: tube failure at 900 C.','Molten sulphur handling.'],
  conns:['CD','CV','RF','UT'],
  children:[
   {id:'HT.nht',name:'Naphtha Hydrotreater',summary:'Reactor, furnace and separator treating naphtha for the reformer.',specs:[['Reactor','3 m x 15 m'],['Pressure','600 psi']]},
   {id:'HT.dht',name:'Diesel Hydrotreater',summary:'Two reactors and a high-pressure separator making 10 ppm diesel.',specs:[['Reactors','2 x 3.5 m x 20 m'],['Pressure','1,200 psi']]},
   {id:'HT.amine',name:'Amine Unit',summary:'Absorbers and a common regenerator removing H2S from refinery gases.',specs:[['Circulation','1,500 gpm MDEA']]},
   {id:'HT.sru',name:'Sulphur Recovery Unit',summary:'Claus reaction furnace, converters, condensers and sulphur pit.',specs:[['Capacity','2 x 150 t/d'],['Recovery','99.9% with TGTU']]},
   {id:'HT.h2',name:'Hydrogen Plant',summary:'Steam methane reformer, shift reactors and PSA.',specs:[['Capacity','90 MMscfd'],['Reformer','850 C, 300 tubes']]},
   {id:'HT.sws',name:'Sour Water Stripper',summary:'Column stripping H2S and ammonia from sour water for the SRU.'}
  ]},
 {id:'RF',code:'05',name:'Reforming & Alkylation',icon:'lab',
  summary:'Catalytic reformer, isomerisation and alkylation units that raise gasoline octane.',
  body:'The continuous catalytic reformer converts treated naphtha to high-octane reformate and hydrogen across four stacked reactors with a catalyst regenerator. Isomerisation upgrades light naphtha. Alkylation reacts FCC olefins with isobutane over sulphuric acid to make alkylate, the cleanest gasoline component.',
  eng:'Reformer severity trades octane against yield and hydrogen make. Alkylation acid strength and temperature control product quality; spent acid goes to regeneration.',
  where:[['Area','North-east'],['Containing structure','Reformer reactor stack, alkylation unit'],['Placement','Reformer beside the naphtha hydrotreater; alkylation next to the FCC gas plant']],
  why:'Octane is the gasoline pool\'s binding constraint. These units make it.',
  specs:[['CCR reformer','40,000 bpd, 4 reactors'],['Isomerisation','15,000 bpd'],['Alkylation','12,000 bpd, H2SO4'],['Reformate octane','100 RON']],
  safety:['Sulphuric acid inventory and spent acid handling.','Reformer furnace and hydrogen at 300 psi.','Catalyst regeneration chlorides.'],
  conns:['HT','BL','UT'],
  children:[
   {id:'RF.reactors',name:'CCR Reactor Stack',summary:'Four radial-flow reactors stacked with catalyst flowing down and a lift to the regenerator.',specs:[['Reactors','4 stacked, 40 m total'],['Catalyst','Pt-Sn on alumina']]},
   {id:'RF.regen',name:'Catalyst Regenerator',summary:'Tower burning coke off circulating catalyst.'},
   {id:'RF.furnaces',name:'Reformer Heaters',summary:'Interheaters between the reactors.',specs:[['Count','4 cells'],['Duty','150 MMBtu/h total']]},
   {id:'RF.stab',name:'Reformate Stabiliser',summary:'Column removing light ends from reformate.'},
   {id:'RF.isom',name:'Isomerisation Reactors',summary:'Two reactors converting light naphtha to isopentane and isohexane.'},
   {id:'RF.alky',name:'Alkylation Unit',summary:'Contactor reactors, acid settlers and deisobutaniser.',specs:[['Acid','98% H2SO4'],['Contactors','4']]}
  ]},
 {id:'BL',code:'06',name:'Blending & Tank Farm',icon:'tank',
  summary:'Product tanks, in-line blender, truck rack and pipeline pumps delivering finished fuels.',
  body:'Components are held in intermediate tanks and blended in-line to gasoline, diesel and jet specifications by the blender, which meters and analyses each stream. Finished products go to certified tanks, then to the pipeline pumps or the truck loading rack.',
  eng:'Blend optimisation is a linear program over octane, vapour pressure, sulphur and distillation; the blender\'s online analysers close the loop. Tank certification and mixing govern release.',
  where:[['Area','East battery limit'],['Containing structure','Product tank farm bunds, loading rack'],['Placement','Tank farm along the east fence; rack at the gate']],
  why:'Products are sold from here. A blend that fails certification is re-processed at full cost.',
  specs:[['Gasoline tanks','3 x 150,000 bbl floating roof'],['Diesel tanks','3 x 150,000 bbl cone roof'],['Jet tanks','2 x 100,000 bbl'],['Blender','6 streams, 6,000 gpm'],['Loading rack','8 bays, bottom loading']],
  safety:['Floating-roof tanks: rim-seal fire, vapour at the roof.','Truck loading: static, overfill, vapour recovery.','Product contamination between grades.'],
  conns:['RF','HT','UT'],
  children:[
   {id:'BL.gasoline',name:'Gasoline Tanks',summary:'Three floating-roof tanks for finished gasoline grades.',children:[
    {id:'BL.gasoline.t1',name:'Gasoline Tank 201',summary:'150,000 bbl floating roof.'},{id:'BL.gasoline.t2',name:'Gasoline Tank 202',summary:'150,000 bbl floating roof.'},{id:'BL.gasoline.t3',name:'Gasoline Tank 203',summary:'150,000 bbl floating roof.'}
   ]},
   {id:'BL.diesel',name:'Diesel Tanks',summary:'Three cone-roof tanks for diesel.',children:[
    {id:'BL.diesel.t1',name:'Diesel Tank 211',summary:'150,000 bbl cone roof.'},{id:'BL.diesel.t2',name:'Diesel Tank 212',summary:'150,000 bbl cone roof.'},{id:'BL.diesel.t3',name:'Diesel Tank 213',summary:'150,000 bbl cone roof.'}
   ]},
   {id:'BL.jet',name:'Jet Fuel Tanks',summary:'Two dedicated jet tanks with filtration and settling.',specs:[['Capacity','2 x 100,000 bbl']]},
   {id:'BL.blender',name:'In-line Blender',summary:'Metering and analyser skid blending components to spec.',specs:[['Streams','6'],['Analysers','RON, RVP, sulphur, density']]},
   {id:'BL.loading',name:'Truck Loading Rack',summary:'Eight-bay bottom-loading rack with vapour recovery.'},
   {id:'BL.pipeline',name:'Pipeline Pumps & Metering',summary:'Product pumps and custody meters to the products pipeline.'}
  ]},
 {id:'UT',code:'07',name:'Utilities',icon:'bolt',
  summary:'Steam, power, cooling water, flare, wastewater and control that every process unit depends on.',
  body:'The boiler house and gas turbine cogeneration plant supply steam and power. Cooling towers reject heat from the condensers. All reliefs go to the main flare through the KO drum. Oily water flows to the API separators and biological treatment. The control room runs the refinery.',
  eng:'Steam at three levels (600, 150 and 50 psi) balances turbine drivers and reboilers. Cooling water 30,000 gpm. Flare sized for the general power failure case at 2 million lb/h.',
  where:[['Area','South side'],['Containing structure','Utility plot, flare field, wastewater basins'],['Placement','Boilers and cooling towers south of the process units; flare in the south-west corner']],
  why:'Loss of steam, power or cooling water is a refinery-wide shutdown and a flare event the neighbours see.',
  specs:[['Steam','600 klb/h at 600 psi'],['Power','80 MW cogeneration'],['Cooling towers','4 cells, 30,000 gpm'],['Main flare','48 in x 100 m'],['Wastewater','2 x API separators, DAF, bio']],
  safety:['Flare radiation and smokeless operation.','Boiler and turbine high-pressure steam.','Cooling tower Legionella control.','Wastewater benzene emissions.'],
  conns:['CR','CD','CV','HT','RF','BL'],
  children:[
   {id:'UT.boilers',name:'Boiler House',summary:'Three gas-fired boilers with stacks and deaerator.',specs:[['Capacity','3 x 200 klb/h'],['Pressure','600 psi']]},
   {id:'UT.cogen',name:'Cogeneration Plant',summary:'Gas turbine with heat-recovery steam generator.',specs:[['Output','80 MW']]},
   {id:'UT.cooling',name:'Cooling Towers',summary:'Four-cell induced-draught tower.',specs:[['Flow','30,000 gpm'],['Cells','4']]},
   {id:'UT.flare',name:'Main Flare',summary:'Derrick-supported 100 m flare with KO drum and seal.',specs:[['Height','100 m'],['Tip','48 in']]},
   {id:'UT.substation',name:'Main Substation',summary:'138 kV intake and 13.8 kV distribution.'},
   {id:'UT.wwt',name:'Wastewater Treatment',summary:'API separators, DAF and biological basins.'},
   {id:'UT.control',name:'Central Control Room',summary:'Blast-resistant building housing the DCS for all units.'},
   {id:'UT.rack',name:'Main Pipe Rack',summary:'Multi-level rack running the length of the plant.'}
  ]}
 ],
 build(h){
  const {box,cyl,strut,pipe,sph,mat,C,KIT}=h;const T=Math.PI/2,ST={metalness:.45,roughness:.45},SH={metalness:.35,roughness:.5};
  const plot=box(140,.3,96,0x6a6d70,0,.15,0,'UT.rack',null,{roughness:.95});plot.receiveShadow=true;
  KIT.rack(-62,64,0,5,8,'UT.rack',.18);KIT.rack(-40,50,-16,3.8,5,'UT.rack',.14);KIT.rack(-30,50,16,3.8,5,'UT.rack',.14);
  // ---- crude receiving
  [['CR.tanks.t1',-58,-22],['CR.tanks.t2',-58,0],['CR.tanks.t3',-58,22]].forEach(([id,x,z])=>KIT.tankAPI(x,z,8.5,8,id,0xdcd6c4,{bund:true}));
  [0,1,2].forEach(i=>KIT.pumpSet(-44,-6+i*2.6,'CR.pumps',C.blue));[0,1,2,3].forEach(i=>KIT.exchanger(-40,1.6+Math.floor(i/2)*2.4,4+(i%2)*3,.6,5,'CR.preheat'));
  KIT.vesselH(-40,3.4,-12,1.6,9,'CR.desalter',C.steel,{platform:true,manway:false});KIT.vesselH(-40,3.4,-18,1.6,9,'CR.desalter',C.steel,{platform:true,manway:false});
  box(5,.3,2,C.dark,-46,.15,10,'CR.meter');[-.5,.5].forEach(dz=>cyl(.28,4.4,C.steel,-46,1,10+dz,'CR.meter',null,ST,.28,12).rotation.z=T);
  // ---- distillation
  KIT.heater(-28,-10,6,5,8,'CD.furnace');KIT.column(-22,4,2.2,34,'CD.cdu',C.steel,{platforms:5});[0,1,2].forEach(i=>KIT.column(-17.5,1+i*3,.6,8,'CD.strippers',C.steel,{platforms:0,base:6}));
  KIT.finFan(-24,14,9,4,'CD.overhead',3);KIT.vesselH(-18,2.4,12,.9,6,'CD.overhead',C.steel,{manway:false});KIT.pumpSet(-14,12,'CD.overhead',C.blue);
  KIT.heater(-28,-20,5,4,7,'CD.vfurnace');KIT.column(-12,-8,3.4,24,'CD.vdu',C.steel,{platforms:3});[0,1,2].forEach(i=>{cyl(.35,4,C.steel,-7.5,6+i*3,-8,'CD.ejectors',null,ST,.35,12).rotation.z=T;cyl(.8,1.6,C.steel,-9,6+i*3,-8,'CD.ejectors',null,ST,.8,14).rotation.z=T;});KIT.vesselH(-7,2,-4,.7,4,'CD.ejectors',C.steel,{manway:false});
  pipe([[-28,9.5,-10],[-24.5,9.5,-10],[-24.5,9.5,1]],.3,C.steel,'CD.furnace');pipe([[-28,8.5,-20],[-16,8.5,-20],[-16,8.5,-10]],.3,C.steel,'CD.vfurnace');
  // ---- conversion: FCC
  cyl(2.2,3.6,C.concrete,2,1.8,-8,'CV.fcc.regen',null,{roughness:.95},2.2,24);cyl(4,12,C.steel,2,10,-8,'CV.fcc.regen',null,SH,4,32);sph(4,C.steel,2,16,-8,'CV.fcc.regen',null,SH).scale.y=.4;cyl(.9,6,C.steel,2,20.5,-8,'CV.fcc.regen',null,ST,.9,16);KIT.ring(2,16.5,-8,4.1,'CV.fcc.regen');KIT.ladder(6.3,-8,3,17,'CV.fcc.regen',0);
  cyl(2,14,C.steel,9,17,-8,'CV.fcc.stripper',null,SH,2,28);sph(2,C.steel,9,24,-8,'CV.fcc.stripper',null,SH).scale.y=.4;[[0,0],[1,0]].forEach(([a])=>cyl(.7,2.6,C.steel,8+a*2,26,-8,'CV.fcc.stripper',null,ST,.7,14));KIT.ring(9,24.4,-8,2.1,'CV.fcc.stripper');
  cyl(.8,28,C.steel,9,14,-4.5,'CV.fcc.riser',null,ST,.8,16);pipe([[9,2,-4.5],[9,2,-6.5],[5.5,4,-8],[4,4,-8]],.6,C.steel,'CV.fcc.riser');pipe([[4.5,14,-8],[7,17,-8]],.6,C.steel,'CV.fcc.riser');
  [[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]].forEach(([a,b])=>strut([9+a*3,0,-8+b*3],[9+a*3,26,-8+b*3],.2,C.steel,'CV.fcc.stripper'));for(let y=6;y<26;y+=6)KIT.handrail(9,-8,6.4,6.4,y,'CV.fcc.stripper',C.steel);
  KIT.column(16,-6,1.8,28,'CV.fcc_frac',C.steel,{platforms:4});KIT.finFan(14,4,8,4,'CV.fcc_frac',2);
  // hydrocracker
  [0,1].forEach(i=>{cyl(1.6,2,C.concrete,24+i*5,1,-10,'CV.hcu',null,{roughness:.95},1.6,24);cyl(1.5,16,0x8a8f96,24+i*5,10,-10,'CV.hcu',null,{metalness:.5,roughness:.4},1.5,28);sph(1.5,0x8a8f96,24+i*5,18,-10,'CV.hcu',null,SH).scale.y=.5;sph(1.5,0x8a8f96,24+i*5,2,-10,'CV.hcu',null,SH).scale.y=.5;KIT.ring(24+i*5,18.6,-10,1.6,'CV.hcu');});
  [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b])=>strut([26.5+a*4,0,-10+b*2.6],[26.5+a*4,20,-10+b*2.6],.18,C.steel,'CV.hcu'));[6,12,18].forEach(y=>KIT.handrail(26.5,-10,8.4,5.6,y,'CV.hcu',C.steel));KIT.stairTower(31.5,-14,20,'CV.hcu');
  box(9,4.4,4,0x8d9aa8,26,2.2,-2,'CV.hcu_comp',{shell:true},{transparent:true,opacity:.8});box(9.3,.3,4.3,C.dark,26,4.5,-2,'CV.hcu_comp');cyl(1.1,2.8,0x5c6b8a,23.5,1.4,-2,'CV.hcu_comp',null,ST,1.1,20).rotation.z=T;cyl(.9,3,0x8a5a2b,27.5,1.4,-2,'CV.hcu_comp',null,ST,.9,20).rotation.z=T;
  // coker
  [[36,-14],[40,-14],[36,-6],[40,-6]].forEach(([x,z])=>{cyl(1.7,2,C.concrete,x,1,z,'CV.coker',null,{roughness:.95},1.7,24);cyl(1.6,18,C.steel,x,12,z,'CV.coker',null,SH,1.6,28);sph(1.6,C.steel,x,21,z,'CV.coker',null,SH).scale.y=.5;cyl(1,2.6,C.steel,x,2.3,z,'CV.coker',null,SH,1.6,20);});
  box(9,.5,12,C.steel,38,22.5,-10,'CV.coker',null,ST);KIT.handrail(38,-10,9,12,22.75,'CV.coker');[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b])=>strut([38+a*4.4,0,-10+b*5.9],[38+a*4.4,22.3,-10+b*5.9],.2,C.steel,'CV.coker'));box(1.6,10,1.6,C.steel,38,28,-10,'CV.coker');cyl(.25,8,C.steel,38,26,-10,'CV.coker',null,ST,.25,10);
  KIT.column(46,-10,1.4,22,'CV.coker_frac',C.steel,{platforms:3});KIT.heater(44,-20,5,4,6,'CV.coker_furnace');
  box(8,.4,6,0x3a3f47,36,.2,4,'CV.cokepit');box(8.4,1.2,.5,C.concrete,36,.6,7.2,'CV.cokepit');box(8.4,1.2,.5,C.concrete,36,.6,.8,'CV.cokepit');box(1.6,1.6,1.6,C.yellow,40.5,1,4,'CV.cokepit');strut([36,1,4],[36,5,14],.25,C.steel,'CV.cokepit');box(3,3,2,0x2b2f38,36,5.5,15,'CV.cokepit');
  // ---- treating & hydrogen
  KIT.column(54,-8,1.2,10,'HT.nht',C.steel,{platforms:1});KIT.heater(54,-15,3.5,3,4,'HT.nht');KIT.vesselH(58,2.2,-8,.8,5,'HT.nht',C.steel,{manway:false});
  [0,1].forEach(i=>KIT.column(54+i*3.5,3,1.3,13,'HT.dht',C.steel,{platforms:1}));KIT.vesselH(60,2.6,3,1,6,'HT.dht',C.steel,{manway:false});KIT.finFan(57,10,8,4,'HT.dht',2);
  [0,1].forEach(i=>KIT.column(20+i*3.5,10,.9,14,'HT.amine',C.steel,{platforms:1}));KIT.vesselH(26,2,10,.8,5,'HT.amine',C.steel,{manway:false});KIT.pumpSet(28,13,'HT.amine',C.blue);
  box(6,2.4,2.2,0xb9b5a6,32,1.6,20,'HT.sru',{shell:true});cyl(.4,6,C.steel,32,6,20,'HT.sru',null,ST,.4,12);[0,1,2].forEach(i=>KIT.vesselH(38+i*4,2,20,.8,3,'HT.sru',C.steel,{manway:false}));box(6,1.2,3,C.concrete,48,.6,20,'HT.sru');KIT.column(50,24,.6,5,'HT.sru',C.steel,{platforms:0});
  box(14,7,5,0xb9b5a6,10,4.1,24,'HT.h2',{shell:true},{roughness:.85});box(10,3.5,3.5,0xa39f91,10,9.4,24,'HT.h2',{shell:true});cyl(.9,14,C.steel,16,15,24,'HT.h2',null,ST,.9,20);for(let i=0;i<5;i++)cyl(.22,3,C.dark,5+i*2.5,1.5,27,'HT.h2',null,ST,.22,10);
  [0,1,2,3].forEach(i=>KIT.column(-2+i*2.4,24,.8,8,'HT.h2',C.steel,{platforms:0}));KIT.vesselH(2,2.4,29,1,6,'HT.h2',C.steel,{manway:false});KIT.column(22,24,.9,12,'HT.sws',C.steel,{platforms:1});
  // ---- reforming & alkylation
  cyl(1.6,2,C.concrete,66,1,-8,'RF.reactors',null,{roughness:.95},1.6,24);[0,1,2,3].forEach(i=>{cyl(1.4,6.5,C.steel,66,5+i*7,-8,'RF.reactors',null,SH,1.4,24);cyl(.8,.6,C.steel,66,8.6+i*7,-8,'RF.reactors',null,ST,.8,16);});sph(1.4,C.steel,66,32.5,-8,'RF.reactors',null,SH).scale.y=.4;
  [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b])=>strut([66+a*2.6,0,-8+b*2.6],[66+a*2.6,32,-8+b*2.6],.16,C.steel,'RF.reactors'));[8,15,22,29].forEach(y=>KIT.handrail(66,-8,5.6,5.6,y,'RF.reactors',C.steel));KIT.stairTower(70,-8,32,'RF.reactors');
  KIT.column(62,-14,.9,20,'RF.regen',C.steel,{platforms:2});[0,1,2,3].forEach(i=>KIT.heater(58+i*3.6,-1,3,2.5,4,'RF.furnaces'));KIT.column(64,6,.9,16,'RF.stab',C.steel,{platforms:2});
  [0,1].forEach(i=>KIT.column(58+i*2.6,12,.9,9,'RF.isom',C.steel,{platforms:0}));
  [0,1,2,3].forEach(i=>KIT.vesselH(60+(i%2)*5,2.2,20+Math.floor(i/2)*3.5,1,4,'RF.alky',C.steel,{manway:false}));KIT.column(68,22,1,14,'RF.alky',C.steel,{platforms:2});KIT.vesselH(66,2,28,.8,5,'RF.alky',C.steel,{manway:false});
  // ---- blending & tank farm
  [['BL.gasoline.t1',56,36],['BL.gasoline.t2',44,36],['BL.gasoline.t3',32,36]].forEach(([id,x,z])=>KIT.tankAPI(x,z,5,7,id,0xdcd6c4,{bund:true}));
  [['BL.diesel.t1',20,36],['BL.diesel.t2',8,36],['BL.diesel.t3',-4,36]].forEach(([id,x,z])=>KIT.tankAPI(x,z,5,7,id,0xd2cbb8,{roof:'cone',bund:true}));
  [[-18,36],[-30,36]].forEach(([x,z])=>KIT.tankAPI(x,z,4.4,6.5,'BL.jet',0xcfd3d6,{roof:'cone',bund:true}));
  box(8,.3,3,C.dark,-44,.15,34,'BL.blender');for(let i=0;i<6;i++)cyl(.22,7,C.steel,-44,.9+(i%3)*.5,32.8+Math.floor(i/3)*2.4,'BL.blender',null,ST,.22,10).rotation.z=T;box(1.4,1.6,1,0x8d9aa8,-40,1.1,36.5,'BL.blender');
  box(14,.4,4,C.steel,-56,4.6,36,'BL.loading',null,ST);box(14.4,.2,4.4,C.dark,-56,4.9,36,'BL.loading');for(let i=0;i<8;i++){const x=-62.5+i*1.85;cyl(.15,4.6,C.steel,x,2.3,36+(i%2?1.9:-1.9),'BL.loading',null,ST,.15,8);}[0,1,2].forEach(i=>strut([-61+i*4.5,4.4,36],[-61+i*4.5,2.8,38.6],.07,C.steel,'BL.loading'));box(4.6,1.6,2,0x9aa3ad,-58,.9,40,'BL.loading');cyl(1,3.4,0xe8ebee,-54.6,1.2,40,'BL.loading',null,ST,1,14).rotation.z=T;
  [0,1,2].forEach(i=>KIT.pumpSet(-48,42+i*2.4,'BL.pipeline',C.blue));box(4,.3,2,C.dark,-40,.15,44,'BL.pipeline');[-.5,.5].forEach(dz=>cyl(.25,3.6,C.steel,-40,.9,44+dz,'BL.pipeline',null,ST,.25,12).rotation.z=T);
  // ---- utilities
  KIT.building(20,-38,14,7,7,'UT.boilers',0xb9b5a6,{hvac:false});[0,1,2].forEach(i=>cyl(.6,16,C.steel,15+i*5,15,-40,'UT.boilers',null,ST,.6,14));KIT.vesselH(30,3,-38,1,6,'UT.boilers',C.steel,{manway:false});
  box(10,4.4,4.5,0x8d9aa8,40,2.2,-38,'UT.cogen',{shell:true},{transparent:true,opacity:.85});box(10.3,.3,4.8,C.dark,40,4.5,-38,'UT.cogen');box(6,7,4,0xb9b5a6,48,3.5,-38,'UT.cogen',{shell:true});cyl(.9,12,C.steel,48,13,-38,'UT.cogen',null,ST,.9,16);
  box(20,6,7,0x7c8a94,-2,3.5,-38,'UT.cooling',{shell:true},{roughness:.8});[0,1,2,3].forEach(i=>{KIT.torus(2,.2,-9.5+i*5,6.6,-38,0x2b2f38,'UT.cooling',T);cyl(.4,.6,C.dark,-9.5+i*5,6.6,-38,'UT.cooling',null,ST,.4,10);for(let k=0;k<4;k++){const a=k*T;strut([-9.5+i*5,6.6,-38],[-9.5+i*5+Math.cos(a)*1.9,6.6,-38+Math.sin(a)*1.9],.06,0x3a3f47,'UT.cooling');}});KIT.handrail(-2,-38,20,7,6.2,'UT.cooling');box(20,.5,7,0x5d6a75,-2,.4,-38,'UT.cooling');
  KIT.flare(-60,-40,44,'UT.flare',{ko:false});KIT.vesselH(-48,2.6,-40,1.6,10,'UT.flare',C.steel,{manway:false});pipe([[-48,4.2,-40],[-48,5.4,-40],[-48,5.4,-16]],.32,C.steel,'UT.flare');
  KIT.building(-30,-40,10,5,4,'UT.substation',0xd8cfae,{hvac:false});[0,1,2].forEach(i=>{box(2,2.2,1.4,0x5c6b8a,-38+i*2.6,1.1,-40,'UT.substation');cyl(.14,1.4,C.steel,-38+i*2.6,2.9,-40,'UT.substation',null,ST,.14,8);});
  [[52,-38],[52,-45]].forEach(([x,z])=>{box(14,1,6,C.concrete,x,.5,z,'UT.wwt');box(13,.3,5,0x3f5a66,x,1.05,z,'UT.wwt',null,{roughness:.3,metalness:.1});});cyl(3.5,4,C.steel,64,2,-42,'UT.wwt',null,ST,3.5,28);
  KIT.building(-14,-40,12,7,4.5,'UT.control',0xf1efe8,{hvac:true});
 }
});
