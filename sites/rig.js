(window.SITES=window.SITES||[]).push({
 id:'rig',name:'Drilling Rig',stage:'upstream',code:'02',
 short:'1,500 hp AC land rig: hoisting, rotating, circulating, well control, power, tubulars and site layout.',
 world:'desert',hasSubsurface:true,
 home:{target:[0,16,0],theta:.55,phi:1.24,radius:118},
 evidence:['S1 Rig equipment manual, hoisting section','S2 API RP 4G derrick inspection','S3 IADC well control equipment checklist','S5 Rig acceptance test report','S7 Drawworks OEM data sheet','S8 Rig layout drawing D-1001 rev C'],
 systems:[
 {id:'HS',code:'01',name:'Hoisting',icon:'hoist',
  summary:'Raises, lowers and suspends drill string, casing and tools using drawworks, drilling line, crown and traveling blocks, hook.',
  body:'Block-and-tackle: the drilling line runs from the drawworks drum (fast line) over the crown block at the mast top, down and up through the traveling-block and crown-block sheaves, and its far end (deadline) is clamped in the deadline anchor at floor level. Reeling the drum in raises the traveling block; gravity lowers it while the drum pays out under motor control. The disc brake holds the drum when stopped and stops it in an emergency.',
  eng:'SYSTEM 01 of the baseline land rig. Rated hook load is set by the derrick, the traveling equipment and the number of lines strung. With 12 lines the mechanical advantage is 12 and the fast-line load is roughly hook load divided by 12 plus sheave friction. Drum torque, brake capacity and line ton-mile tracking are the operating limits that matter day to day.',
  where:[['Area','Whole rig, ground level to crown'],['Containing structure','Rig (mast, substructure, drill floor)'],['Placement','From the supply reel at ground level to the crown at about +43 m; well centre is the vertical through the hook']],
  why:'Everything that goes in or out of the hole hangs from this system. A failure here is a dropped-string event.',
  specs:[['Rated hook load','500 t (1,100 kip)'],['Drawworks input','1,500 hp (1,120 kW)'],['Drilling line','1 3/8 in, 6x19 IWRC'],['Lines strung','12'],['Mast clear height','43 m (142 ft)'],['Brake','Dual disc, hydraulic + spring-applied park']],
  safety:['Line slip-and-cut on ton-mile schedule','Crown-saver and floor-saver limits set before each trip','Dropped-object inspection of crown and traveling equipment','Brake test after any drawworks maintenance'],
  conns:['RS','DS','SS','PS'],
  children:[
   {id:'HS.crown',name:'Crown Block',summary:'Fixed sheave cluster at the mast top that turns the drilling line down to the traveling block.',specs:[['Sheaves','7 x 1.5 m'],['Rating','500 t'],['Bearings','Sealed roller']],
     children:[{id:'HS.crown.sheaves',name:'Sheave cluster'},{id:'HS.crown.frame',name:'Crown frame'},{id:'HS.crown.fastline',name:'Fast-line sheave'},{id:'HS.crown.bumper',name:'Bumper blocks'},{id:'HS.crown.platform',name:'Crown platform & rails'}]},
   {id:'HS.anchor',name:'Deadline Anchor',summary:'Clamps the dead end of the drilling line and carries the weight-indicator sensor.',specs:[['Type','Drum, 1 3/8 in'],['Rating','Sensor 100 t line pull']],
     children:[{id:'HS.anchor.drum',name:'Anchor drum'},{id:'HS.anchor.sensor',name:'Weight indicator sensor'},{id:'HS.anchor.reel',name:'Supply reel'}]},
   {id:'HS.dw',name:'Drawworks',summary:'Motor-driven drum that spools the fast line and sets hook speed and load.',body:'AC-driven single drum with two 800 hp motors through a gearbox. Disc brakes on the drum flanges; the drilling control system applies regenerative braking on trips out.',specs:[['Power','1,500 hp'],['Drum','Grooved, 1 3/8 in line'],['Motors','2 x 800 hp AC VFD'],['Brake','Dual disc 1.6 m']],
     children:[{id:'HS.dw.drum',name:'Drum & lebus grooving'},{id:'HS.dw.motors',name:'AC motors'},{id:'HS.dw.gearbox',name:'Gearbox'},{id:'HS.dw.brake',name:'Disc brake'},{id:'HS.dw.skid',name:'Skid & housing'},{id:'HS.dw.encoder',name:'Drum encoder'}]},
   {id:'HS.line',name:'Drilling Line',summary:'Wire rope reeved 12 times between crown and traveling block.',specs:[['Diameter','1 3/8 in'],['Construction','6x19 IWRC'],['Breaking strength','~87 t']],
     children:[{id:'HS.line.fast',name:'Fast line'},{id:'HS.line.reeved',name:'Reeved lines (12)'},{id:'HS.line.dead',name:'Deadline'}]},
   {id:'HS.elev',name:'Elevators & Links',summary:'Hinged latches on bails that grip the pipe tool joint below the hook.',specs:[['Links','350 t'],['Elevator','Side-door, 5 in']],
     children:[{id:'HS.elev.links',name:'Bails / links'},{id:'HS.elev.elevator',name:'Side-door elevator'}]},
   {id:'HS.hook',name:'Hook',summary:'Swivelling load hook under the traveling block.',specs:[['Rating','500 t'],['Spring','Snubbing spring, 0.3 m']],
     children:[{id:'HS.hook.body',name:'Hook body'},{id:'HS.hook.latch',name:'Safety latch'}]},
   {id:'HS.mast',name:'Mast',summary:'Cantilever-raised lattice mast carrying the crown and guiding the traveling equipment.',body:'Two-section bootstrap mast, 43 m clear height, raised by the drawworks. Racking board at 27 m for triples. Painted red and white for aviation visibility.',specs:[['Clear height','43 m'],['Static hook load','500 t'],['Wind rating','120 kn with full setback'],['Racking board','27 m, 180 stands']],
     children:[{id:'HS.mast.legs',name:'Legs'},{id:'HS.mast.girts',name:'Girts'},{id:'HS.mast.braces',name:'Diagonal braces'},{id:'HS.mast.racking',name:'Racking board'},{id:'HS.mast.ladder',name:'Ladder & climb assist'},{id:'HS.mast.raising',name:'Raising line & A-frame'}]},
   {id:'HS.tb',name:'Traveling Block',summary:'Moving sheave cluster that carries the hook and top drive.',specs:[['Sheaves','6 x 1.5 m'],['Rating','500 t']],
     children:[{id:'HS.tb.sheaves',name:'Sheave cluster'},{id:'HS.tb.shell',name:'Block shell'},{id:'HS.tb.becket',name:'Becket'}]}
  ]},
 {id:'RS',code:'02',name:'Rotating',icon:'rotate',
  summary:'Turns the drill string and bit, passes drilling fluid into the string, and carries the suspended string.',
  body:'SYSTEM 02 of the baseline land rig. It creates and controls bit rotation and torque, forms the top of the drilling-fluid path into the drill string, carries the suspended drill-string load between the hoisting system and the string, and provides the floor equipment on which the string is set on slips when it is not suspended.',
  eng:'Top-drive rig: rotation comes from an AC motor in the top drive rather than a kelly. The rotary table remains for slips, tubulars handling and as a backup. The washpipe and swivel packing separate the rotating quill from the static mud path.',
  where:[['Location','Mast and drill floor. Rig coordinate origin is the rotary table centre on the drill floor (~9.1 m above ground); the system occupies the vertical axis through well centre from the drill floor up to the travelling equipment.']],
  why:'Rotating machinery at and above the drill floor; the drill-string load path passes through this system.',
  specs:[['Top drive','1,150 hp AC, 500 t'],['Max continuous torque','75 kNm'],['Rotary table','37 1/2 in, 500 t'],['Swivel','500 t, 7,500 psi']],
  safety:['Torque limit and stall protection','Top drive derailment guards','Rotary table lockdown when using slips','Washpipe leak check each tour'],
  conns:['HS','CS','DS','PS','SS'],
  children:[
   {id:'RS.rt',name:'Rotary Table Assembly',summary:'Floor-mounted table with master bushing for slips and backup rotation.',specs:[['Opening','37 1/2 in'],['Static load','500 t'],['Drive','Independent 400 hp']],
     children:[{id:'RS.rt.table',name:'Table & master bushing'},{id:'RS.rt.slips',name:'Slips'},{id:'RS.rt.drive',name:'Rotary drive'},{id:'RS.rt.lock',name:'Table lock'}]},
   {id:'RS.td',name:'Top Drive',summary:'Motor, gearbox, quill and pipe handler suspended from the traveling block.',body:'Rotates the string, circulates through the quill, and makes up and breaks out connections with its own pipe handler. Guided by the mast dolly track.',specs:[['Power','1,150 hp AC'],['Torque','75 kNm continuous'],['Speed','0-220 rpm'],['Elevator links','350 t']],
     children:[{id:'RS.td.motor',name:'AC motor'},{id:'RS.td.gearbox',name:'Gearbox'},{id:'RS.td.quill',name:'Quill & saver sub'},{id:'RS.td.swivel',name:'Swivel & washpipe'},{id:'RS.td.handler',name:'Pipe handler'},{id:'RS.td.dolly',name:'Dolly & track'},{id:'RS.td.ibop',name:'IBOP valves'}]}
  ]},
 {id:'CS',code:'03',name:'Circulating',icon:'drop',
  summary:'Pumps drilling fluid down the string, returns it up the annulus, and cleans and conditions it for reuse.',
  body:'Mud pumps draw from the suction tank and push fluid up the standpipe, through the rotary hose and top drive, down the drill string and out the bit. Returns rise up the annulus, exit at the bell nipple, run down the flowline to the shale shakers, then through degasser, desander and desilter before returning to the active tanks.',
  eng:'SYSTEM 03. Flow rate and standpipe pressure set hole cleaning and bit hydraulics; the pumps are the largest continuous power consumers on the rig. Solids control efficiency drives mud cost and ECD.',
  where:[['Area','Ground level pump and tank area, standpipe on mast, flowline from floor'],['Containing structure','Pump skids and tank farm east of the substructure']],
  why:'Carries cuttings out of the hole and provides primary well control through hydrostatic pressure.',
  specs:[['Mud pumps','2 x 1,600 hp triplex'],['Max pressure','7,500 psi'],['Active volume','300 m3'],['Shakers','3 x linear motion'],['Standpipe','5 in, 7,500 psi']],
  safety:['Pop-off relief valves on pump discharge','Gas detection at shakers','Pit level alarms and trip tank tracking','Rotary hose safety slings'],
  conns:['RS','WC','PS','DS'],
  children:[
   {id:'CS.pumps',name:'Mud Pumps',summary:'Two triplex pumps supplying the standpipe.',specs:[['Type','Triplex single acting'],['Power','1,600 hp each'],['Max pressure','7,500 psi']],
     children:[{id:'CS.pumps.p1',name:'Mud pump 1'},{id:'CS.pumps.p2',name:'Mud pump 2'},{id:'CS.pumps.charge',name:'Charge pumps'},{id:'CS.pumps.dampener',name:'Pulsation dampeners'},{id:'CS.pumps.relief',name:'Relief valves'}]},
   {id:'CS.tanks',name:'Mud Tanks',summary:'Active, reserve and suction tanks with agitators.',specs:[['Volume','300 m3 active'],['Agitators','8 x 15 kW']],
     children:[{id:'CS.tanks.t1',name:'Shaker tank'},{id:'CS.tanks.t2',name:'Intermediate tank'},{id:'CS.tanks.t3',name:'Suction tank'},{id:'CS.tanks.trip',name:'Trip tank'},{id:'CS.tanks.agit',name:'Agitators'}]},
   {id:'CS.solids',name:'Solids Control',summary:'Shakers, degasser and hydrocyclones cleaning returned fluid.',specs:[['Shakers','3 x linear motion'],['Degasser','Vacuum, 1,000 gpm']],
     children:[{id:'CS.solids.shakers',name:'Shale shakers'},{id:'CS.solids.degasser',name:'Degasser'},{id:'CS.solids.desander',name:'Desander'},{id:'CS.solids.desilter',name:'Desilter'},{id:'CS.solids.centrifuge',name:'Centrifuge'}]},
   {id:'CS.standpipe',name:'Standpipe & Rotary Hose',summary:'High-pressure line up the mast and flexible hose to the top drive.',specs:[['Standpipe','5 in ID, 7,500 psi'],['Rotary hose','3 1/2 in, 22 m']],
     children:[{id:'CS.standpipe.pipe',name:'Standpipe'},{id:'CS.standpipe.manifold',name:'Standpipe manifold'},{id:'CS.standpipe.hose',name:'Rotary hose'},{id:'CS.standpipe.gooseneck',name:'Gooseneck'}]},
   {id:'CS.return',name:'Return Line',summary:'Bell nipple and flowline carrying returns to the shakers.',
     children:[{id:'CS.return.bell',name:'Bell nipple'},{id:'CS.return.flowline',name:'Flowline'},{id:'CS.return.possum',name:'Possum belly'}]},
   {id:'CS.mgs',name:'Mud Gas Separator',summary:'Vertical vessel separating gas from returns during well control.',specs:[['Vessel','1.2 m x 6 m'],['Vent','8 in to flare']],
     children:[{id:'CS.mgs.vessel',name:'Vessel'},{id:'CS.mgs.vent',name:'Vent line'},{id:'CS.mgs.seal',name:'U-tube seal'}]}
  ]},
 {id:'WC',code:'04',name:'Well Control',icon:'shield',
  summary:'Contains formation pressure at surface with the BOP stack, choke and kill lines, and the wellhead and casing strings.',
  body:'The blowout preventer stack sits on the wellhead under the drill floor: an annular preventer on top, pipe rams and blind/shear rams below. Hydraulic power comes from the accumulator unit; the choke manifold controls flow when circulating out a kick.',
  eng:'SYSTEM 04. The secondary barrier once hydrostatic control is lost. Ram sizes must match the pipe in the hole; accumulator volume must close all preventers with reserve pressure to spare.',
  where:[['Area','Under the drill floor and the cellar, choke manifold and accumulator at ground level'],['Containing structure','Substructure']],
  why:'Only barrier between a kick and a blowout once the mud column fails.',
  specs:[['Stack','13 5/8 in, 10,000 psi'],['Annular','13 5/8 in 5,000 psi'],['Rams','2 pipe, 1 blind/shear'],['Accumulator','3,000 psi, 20 bottles'],['Choke manifold','3 1/16 in, 10,000 psi']],
  safety:['Weekly function test, pressure test every 21 days','Accumulator drawdown test','Kick drills each crew','Ram-to-pipe size matrix posted at driller'],
  conns:['CS','SS','DS','PS'],
  children:[
   {id:'WC.bop',name:'BOP Stack',summary:'Annular preventer and ram preventers on the wellhead.',specs:[['Size','13 5/8 in'],['Pressure','10,000 psi'],['Rams','2 pipe, 1 blind/shear']],
     children:[{id:'WC.bop.annular',name:'Annular preventer'},{id:'WC.bop.pipe1',name:'Upper pipe rams'},{id:'WC.bop.shear',name:'Blind / shear rams'},{id:'WC.bop.pipe2',name:'Lower pipe rams'},{id:'WC.bop.spool',name:'Drilling spool'},{id:'WC.bop.hcr',name:'HCR valves'}]},
   {id:'WC.acc',name:'Accumulator Unit',summary:'Stored hydraulic energy and controls for the BOP.',specs:[['Bottles','20 x 40 L'],['Pressure','3,000 psi'],['Pumps','Electric + air backup']],
     children:[{id:'WC.acc.bottles',name:'Nitrogen bottles'},{id:'WC.acc.pumps',name:'Hydraulic pumps'},{id:'WC.acc.manifold',name:'Control manifold'},{id:'WC.acc.remote',name:'Driller remote panel'}]},
   {id:'WC.choke',name:'Choke Manifold',summary:'Valves and chokes to circulate a kick out under controlled back pressure.',specs:[['Size','3 1/16 in'],['Pressure','10,000 psi'],['Chokes','1 hydraulic, 1 manual']],
     children:[{id:'WC.choke.hydraulic',name:'Hydraulic choke'},{id:'WC.choke.manual',name:'Manual choke'},{id:'WC.choke.valves',name:'Gate valves'},{id:'WC.choke.panel',name:'Choke control panel'}]},
   {id:'WC.lines',name:'Choke & Kill Lines',summary:'High-pressure lines between the stack and the manifold.',
     children:[{id:'WC.lines.choke',name:'Choke line'},{id:'WC.lines.kill',name:'Kill line'}]},
   {id:'WC.wellhead',name:'Wellhead & Casing',summary:'Casing head, casing strings and cement forming the well itself.',body:'Conductor, surface and intermediate casing strings are cemented in place. The casing head is welded to the surface casing and carries the BOP stack.',specs:[['Conductor','20 in to 60 m'],['Surface casing','13 3/8 in to 800 m'],['Intermediate','9 5/8 in to 2,400 m'],['Open hole','8 1/2 in']],
     children:[{id:'WC.wellhead.head',name:'Casing head'},{id:'WC.wellhead.conductor',name:'Conductor casing'},{id:'WC.wellhead.surface',name:'Surface casing'},{id:'WC.wellhead.intermediate',name:'Intermediate casing'},{id:'WC.wellhead.cement',name:'Cement sheath'},{id:'WC.wellhead.openhole',name:'Open hole'}]}
  ]},
 {id:'PS',code:'05',name:'Power & Electrical',icon:'bolt',
  summary:'Generates and distributes electrical power to the drawworks, top drive, pumps and rig services.',
  body:'Diesel gensets feed a common AC bus. The VFD house converts to variable-frequency drives for the main motors and to 480 V for auxiliaries. Cable trays carry power and control to the substructure.',
  eng:'SYSTEM 05. Load sharing across gensets follows a power-management scheme that sheds pumps before drawworks. Regenerated energy from tripping is dissipated in brake resistors.',
  where:[['Area','Generator and VFD houses west of the substructure'],['Containing structure','Skid-mounted houses']],
  why:'Loss of power removes hoisting, rotation and circulation at once.',
  specs:[['Gensets','3 x 1,500 kW'],['Bus','600 V AC'],['VFDs','4 x 1,200 kW'],['Aux','480 V, 1,000 kVA'],['Fuel','2 x 60 m3']],
  safety:['Arc-flash boundaries at VFD house','Emergency generator auto-start','Ground-fault monitoring on main bus','Fuel bund and spill kit'],
  conns:['HS','RS','CS','WC','SS'],
  children:[
   {id:'PS.gen',name:'Generator Houses',summary:'Three diesel gensets in acoustic enclosures.',specs:[['Rating','1,500 kW each'],['Engine','16 cyl diesel']],
     children:[{id:'PS.gen.g1',name:'Genset 1'},{id:'PS.gen.g2',name:'Genset 2'},{id:'PS.gen.g3',name:'Genset 3'},{id:'PS.gen.exhaust',name:'Exhaust & silencers'},{id:'PS.gen.radiators',name:'Radiators'}]},
   {id:'PS.vfd',name:'VFD / SCR House',summary:'Drive cabinets, switchgear and the driller control network.',specs:[['Drives','4 x 1,200 kW'],['Switchgear','600 V, 4,000 A']],
     children:[{id:'PS.vfd.drives',name:'Drive cabinets'},{id:'PS.vfd.switchgear',name:'Switchgear'},{id:'PS.vfd.resistors',name:'Brake resistors'},{id:'PS.vfd.plc',name:'Rig PLC'}]},
   {id:'PS.fuel',name:'Fuel System',summary:'Bulk diesel storage and day tanks.',specs:[['Storage','2 x 60 m3'],['Transfer','Duplex filter, 200 L/min']],
     children:[{id:'PS.fuel.bulk',name:'Bulk tank'},{id:'PS.fuel.day',name:'Day tanks'},{id:'PS.fuel.transfer',name:'Transfer pumps'}]},
   {id:'PS.cables',name:'Cable Trays & Distribution',summary:'Power and control routing to the rig.',
     children:[{id:'PS.cables.tray',name:'Main cable tray'},{id:'PS.cables.mcc',name:'Motor control centre'},{id:'PS.cables.lighting',name:'Rig lighting'}]},
   {id:'PS.air',name:'Rig Air',summary:'Compressed air for tongs, clutches and instruments.',
     children:[{id:'PS.air.compressor',name:'Compressors'},{id:'PS.air.receiver',name:'Air receiver'},{id:'PS.air.dryer',name:'Air dryer'}]}
  ]},
 {id:'DS',code:'06',name:'Drill String & BHA',icon:'string',
  summary:'The pipe and bottom-hole assembly that transmit rotation, weight and fluid to the bit.',
  body:'Drill pipe from the top drive to the bottom-hole assembly, then heavy-weight pipe, drill collars, stabilisers, measurement tools and the bit. Weight on bit comes from the collars; the pipe above runs in tension.',
  eng:'SYSTEM 06. Modelled to total depth in the subsurface view. Torque and drag, buckling limits and connection make-up torque are the design checks.',
  where:[['Area','From the top drive quill to total depth'],['Containing structure','Wellbore']],
  why:'The only path for weight, rotation and hydraulics to the bit.',
  specs:[['Drill pipe','5 in, 19.5 lb/ft, S-135'],['HWDP','5 in, 30 joints'],['Collars','6 3/4 in x 12'],['Bit','8 1/2 in PDC'],['MWD','Pulser, gamma, inclination']],
  safety:['Connection make-up torque per tally','Stand inspection at racking board','Drill pipe screens when tripping'],
  conns:['HS','RS','CS','WC'],
  children:[
   {id:'DS.pipe',name:'Drill Pipe',summary:'Stands of 5 in S-135 drill pipe in the derrick and the hole.',specs:[['OD','5 in'],['Grade','S-135'],['Connection','NC50']],
     children:[{id:'DS.pipe.string',name:'Drill pipe string'},{id:'DS.pipe.setback',name:'Stands in setback'},{id:'DS.pipe.saver',name:'Saver sub'}]},
   {id:'DS.hwdp',name:'Heavy-Weight Drill Pipe',summary:'Transition pipe between drill pipe and collars.',
     children:[{id:'DS.hwdp.joints',name:'HWDP joints'}]},
   {id:'DS.bha',name:'Bottom-Hole Assembly',summary:'Collars, stabilisers, motor, MWD and jars.',specs:[['Collars','6 3/4 in x 12'],['Stabilisers','2 x 8 3/8 in'],['Jar','Hydraulic, 6 3/4 in']],
     children:[{id:'DS.bha.collars',name:'Drill collars'},{id:'DS.bha.stab',name:'Stabilisers'},{id:'DS.bha.motor',name:'Mud motor'},{id:'DS.bha.mwd',name:'MWD / LWD'},{id:'DS.bha.jar',name:'Drilling jar'}]},
   {id:'DS.bit',name:'Drill Bit',summary:'8 1/2 in PDC bit.',specs:[['Size','8 1/2 in'],['Type','PDC, 6 blades'],['Nozzles','6 x 13/32 in']],
     children:[{id:'DS.bit.body',name:'Bit body'},{id:'DS.bit.cutters',name:'PDC cutters'},{id:'DS.bit.nozzles',name:'Nozzles'}]}
  ]},
 {id:'SS',code:'07',name:'Structure & Drill Floor',icon:'grid',
  summary:'Substructure, drill floor, pipe handling and site works that carry and organise the rig.',
  body:'A box-on-box substructure lifts the drill floor about 9 m above the pad so the BOP stack fits underneath. The floor carries the rotary table, drawworks, driller cabin and setback. Pipe comes up the V-door ramp from the catwalk and pipe racks.',
  eng:'SYSTEM 07. Setback and rotary loads are the governing structural cases. The pad and cellar are the site interface.',
  where:[['Area','Pad, substructure, drill floor and pipe deck'],['Containing structure','Rig site']],
  why:'Every other system stands on it.',
  specs:[['Floor height','9.1 m'],['Setback','230 t'],['Rotary capacity','500 t'],['Pad','70 x 50 m compacted']],
  safety:['Floor guarding and V-door gate','Stair and handrail inspection','Setback load posted','Ground bearing check after rain'],
  conns:['HS','RS','WC','PS'],
  children:[
   {id:'SS.sub',name:'Substructure',summary:'Box-on-box steel frame under the drill floor.',specs:[['Height','9.1 m'],['Setback','230 t'],['Rotary','500 t']],
     children:[{id:'SS.sub.columns',name:'Columns'},{id:'SS.sub.beams',name:'Beams & bracing'},{id:'SS.sub.cellar',name:'Cellar'},{id:'SS.sub.stairs',name:'Stairs'}]},
   {id:'SS.floor',name:'Drill Floor',summary:'Working deck around well centre.',
     children:[{id:'SS.floor.deck',name:'Deck plate'},{id:'SS.floor.rails',name:'Handrails'},{id:'SS.floor.vdoor',name:'V-door'},{id:'SS.floor.setback',name:'Setback area'},{id:'SS.floor.tongs',name:'Iron roughneck & tongs'}]},
   {id:'SS.cabin',name:"Driller's Cabin",summary:'Climate-controlled cabin with the drilling control system.',specs:[['Chairs','2'],['Screens','6']],
     children:[{id:'SS.cabin.shell',name:'Cabin shell'},{id:'SS.cabin.console',name:'Driller console'},{id:'SS.cabin.hmi',name:'HMI screens'}]},
   {id:'SS.pipe',name:'Pipe Handling',summary:'Catwalk, V-door ramp and pipe racks.',
     children:[{id:'SS.pipe.catwalk',name:'Catwalk'},{id:'SS.pipe.ramp',name:'V-door ramp'},{id:'SS.pipe.racks',name:'Pipe racks'},{id:'SS.pipe.tubulars',name:'Tubulars on rack'}]},
   {id:'SS.site',name:'Site Works',summary:'Pad, offices, workshop and flag.',
     children:[{id:'SS.site.pad',name:'Rig pad'},{id:'SS.site.office',name:'Site office'},{id:'SS.site.workshop',name:'Workshop container'},{id:'SS.site.store',name:'Store containers'},{id:'SS.site.flag',name:'Flag pole'},{id:'SS.site.loader',name:'Forklift'}]}
  ]}
 ],
 build(h){
  const {box,cyl,strut,pipe,mat,C,sub}=h;
  const F=9.1; // drill floor elevation
  // ---- pad & site
  const pad=box(70,.3,50,C.concrete,0,.15,4,'SS.site.pad',null,{roughness:.95});pad.receiveShadow=true;
  box(12,3,3.2,0xf1efe8,-42,1.65,-6,'SS.site.office',{shell:true});box(1.6,1.2,.6,0xd0cbbf,-42,3.8,-6,'SS.site.office');
  box(12,3,3,0xd8cfae,-38,1.6,10,'SS.site.workshop',{shell:true});
  box(12,3,3,0xf3f1ea,-40,1.6,22,'SS.site.store',{shell:true});box(10,2.8,2.8,0xd9d1b0,-26,1.5,26,'SS.site.store',{shell:true});
  cyl(.12,12,C.steel,-30,6,-22,'SS.site.flag',null,null,.1);const flag=box(5,3,.06,0x161c3a,-27.4,10.6,-22,'SS.site.flag',null,{roughness:.9});
  box(2.6,1.6,1.4,C.yellow,14,.9,-24,'SS.site.loader');cyl(.5,.4,C.dark,12.9,.5,-23.2,'SS.site.loader');cyl(.5,.4,C.dark,15.1,.5,-23.2,'SS.site.loader');cyl(.5,.4,C.dark,12.9,.5,-24.8,'SS.site.loader');cyl(.5,.4,C.dark,15.1,.5,-24.8,'SS.site.loader');box(.3,1.4,1,C.dark,15.9,1.1,-24,'SS.site.loader');
  // ---- substructure
  [[-6,-6],[6,-6],[-6,6],[6,6],[0,-6],[0,6],[-6,0],[6,0]].forEach(([x,z])=>box(.9,F-.6,.9,C.blue,x,(F-.6)/2,z,'SS.sub.columns'));
  [[[-6,4.5,-6],[6,4.5,-6]],[[-6,4.5,6],[6,4.5,6]],[[-6,4.5,-6],[-6,4.5,6]],[[6,4.5,-6],[6,4.5,6]],[[-6,8.4,-6],[6,8.4,-6]],[[-6,8.4,6],[6,8.4,6]],[[-6,8.4,-6],[-6,8.4,6]],[[6,8.4,-6],[6,8.4,6]],[[-6,.6,-6],[6,8.4,-6]],[[6,.6,6],[-6,8.4,6]],[[-6,.6,6],[-6,8.4,-6]],[[6,.6,-6],[6,8.4,6]]].forEach(([a,b])=>strut(a,b,.22,C.blue,'SS.sub.beams'));
  box(14,.6,14,0x2a3550,0,F-.3,0,'SS.floor.deck',null,{roughness:.85});
  cyl(3.2,.8,0x5a5a5a,0,.4,0,'SS.sub.cellar',null,{roughness:1},3.2,24);
  // rails
  const railY=F+.55;[[-7,-7,7,-7],[-7,7,7,7],[-7,-7,-7,7],[7,-7,7,2]].forEach(([x1,z1,x2,z2])=>{strut([x1,railY,z1],[x2,railY,z2],.06,C.yellow,'SS.floor.rails');strut([x1,railY-.5,z1],[x2,railY-.5,z2],.05,C.yellow,'SS.floor.rails');for(let t=0;t<=1;t+=.2)strut([x1+(x2-x1)*t,F,z1+(z2-z1)*t],[x1+(x2-x1)*t,railY,z1+(z2-z1)*t],.05,C.yellow,'SS.floor.rails');});
  // stairs
  for(let i=0;i<10;i++)box(1.4,.15,.5,C.steel,-8.2-i*.55,F-.9*i-.4,-3,'SS.sub.stairs');
  strut([-8,F+.4,-3.7],[-13.4,.4,-3.7],.05,C.yellow,'SS.sub.stairs');strut([-8,F+.4,-2.3],[-13.4,.4,-2.3],.05,C.yellow,'SS.sub.stairs');
  // V-door ramp & catwalk & pipe racks
  const ramp=box(3,.3,22,C.steel,0,F/2-.2,17.5,'SS.pipe.ramp');ramp.rotation.x=Math.atan2(F-.6,21);
  box(3,.8,14,C.steel,0,.7,35,'SS.pipe.catwalk');strut([-1.5,1.5,28],[-1.5,1.5,42],.05,C.yellow,'SS.pipe.catwalk');strut([1.5,1.5,28],[1.5,1.5,42],.05,C.yellow,'SS.pipe.catwalk');
  [[-5.5,34],[5.5,34],[-5.5,38.5],[5.5,38.5]].forEach(([x,z])=>box(3.6,.9,.4,C.steel,x,.75,z,'SS.pipe.racks'));
  for(let i=0;i<6;i++){cyl(.13,12,C.dark,-6.6+i*.44,1.35,36,'SS.pipe.tubulars',null,{metalness:.5,roughness:.4}).rotation.x=Math.PI/2;cyl(.13,12,C.dark,4.4+i*.44,1.35,36,'SS.pipe.tubulars',null,{metalness:.5,roughness:.4}).rotation.x=Math.PI/2;}
  // driller cabin, setback, roughneck
  box(3.2,2.8,3,0xf2f2f0,5.2,F+1.7,3.8,'SS.cabin.shell',{shell:true});box(2.6,1.2,.05,0x2b4a80,5.2,F+2,2.28,'SS.cabin.hmi',null,{metalness:.4,roughness:.3});box(1.6,.8,1,0x3a3f4a,5.2,F+1,3.8,'SS.cabin.console');
  box(5,.2,3,0x354262,-2,F+.4,2.4,'SS.floor.setback');
  box(1,1.6,.8,C.yellow,2.6,F+1.1,-1.6,'SS.floor.tongs');cyl(.35,1.2,C.dark,2.6,F+2.4,-1.6,'SS.floor.tongs');
  cyl(1.2,.4,C.dark,0,F+.5,6.9,'SS.floor.vdoor',null,null,1.2).rotation.x=Math.PI/2;
  // ---- rotating: rotary table & top drive
  cyl(1.7,.5,C.dark,0,F+.25,0,'RS.rt.table',null,{metalness:.5,roughness:.4},1.7,32);cyl(.7,.3,C.steel,0,F+.55,0,'RS.rt.slips',null,{metalness:.6,roughness:.3},.55,24);
  box(1.6,1,1.2,C.blue,3.1,F+.5,-.2,'RS.rt.drive');box(.5,.4,.5,C.yellow,1.6,F+.25,.9,'RS.rt.lock');
  const TD=F+15.5; // top drive centre
  box(1.5,3.2,1.5,C.yellow,0,TD+1.2,0,'RS.td.motor',null,{roughness:.5});box(1.9,1.6,1.9,C.yellow,0,TD-1,0,'RS.td.gearbox',null,{roughness:.5});
  cyl(.28,2.6,C.steel,0,TD-3.1,0,'RS.td.quill',null,{metalness:.6,roughness:.3});cyl(.55,.9,C.dark,0,TD+3.1,0,'RS.td.swivel');
  box(.6,3.2,.6,C.yellow,1.2,TD-3.6,.4,'RS.td.handler');box(.8,.6,.6,C.dark,0,TD-4.7,0,'RS.td.ibop');
  box(.5,5.5,.5,C.yellow,1.6,TD,-1.6,'RS.td.dolly');box(.5,5.5,.5,C.yellow,-1.6,TD,-1.6,'RS.td.dolly');
  // ---- hoisting
  const MT=F+43;   // mast top
  const legs=[[-3,-3],[3,-3],[3,3],[-3,3]],topc=[[-1.25,-1.25],[1.25,-1.25],[1.25,1.25],[-1.25,1.25]];
  legs.forEach(([x,z],i)=>strut([x,F,z],[topc[i][0],MT,topc[i][1]],.19,C.white,'HS.mast.legs'));
  const at=(i,t)=>[legs[i][0]+(topc[i][0]-legs[i][0])*t,F+(MT-F)*t,legs[i][1]+(topc[i][1]-legs[i][1])*t];
  const LV=14;for(let l=0;l<=LV;l++){const t=l/LV;for(let i=0;i<4;i++){const j=(i+1)%4;strut(at(i,t),at(j,t),.09,C.white,'HS.mast.girts');if(l<LV){const t2=(l+1)/LV;strut(at(i,t),at(j,t2),.075,C.red,'HS.mast.braces');if(l%2)strut(at(j,t),at(i,t2),.075,C.red,'HS.mast.braces');}}}
  box(4.2,.25,2.4,C.yellow,0,F+27,-.8,'HS.mast.racking');box(.15,1,4.2,C.yellow,-2.1,F+27.6,-.8,'HS.mast.racking').rotation.y=Math.PI/2;
  strut([2.6,F,3.2],[1.2,MT,1.4],.06,C.yellow,'HS.mast.ladder');strut([3.2,F,3.2],[1.5,MT,1.4],.06,C.yellow,'HS.mast.ladder');
  strut([-3,F,-3],[-9,F+8,-9],.12,C.white,'HS.mast.raising');strut([3,F,-3],[9,F+8,-9],.12,C.white,'HS.mast.raising');strut([-9,F+8,-9],[9,F+8,-9],.12,C.white,'HS.mast.raising');
  // crown
  box(3.4,.6,3.4,C.red,0,MT+.3,0,'HS.crown.frame');box(3.8,.15,3.8,C.steel,0,MT+.7,0,'HS.crown.platform');for(let i=0;i<4;i++){const j=(i+1)%4;strut([topc[i][0]*1.5,MT+1.7,topc[i][1]*1.5],[topc[j][0]*1.5,MT+1.7,topc[j][1]*1.5],.05,C.yellow,'HS.crown.platform');strut([topc[i][0]*1.5,MT+.7,topc[i][1]*1.5],[topc[i][0]*1.5,MT+1.7,topc[i][1]*1.5],.05,C.yellow,'HS.crown.platform');}
  for(let i=0;i<5;i++)cyl(.55,.2,C.dark,0,MT+1.3,-.9+i*.45,'HS.crown.sheaves',null,{metalness:.6,roughness:.3},.55,24).rotation.z=Math.PI/2;
  cyl(.5,.2,C.dark,0,MT+.9,-2,'HS.crown.fastline',null,{metalness:.6,roughness:.3},.5,24).rotation.z=Math.PI/2;
  box(.5,1.2,.5,C.yellow,-1.1,MT+1.3,1.2,'HS.crown.bumper');box(.5,1.2,.5,C.yellow,1.1,MT+1.3,1.2,'HS.crown.bumper');
  // traveling block, hook, links, elevator
  const TB=TD+7.5;box(1.3,3.6,1.1,C.dark,0,TB,0,'HS.tb.shell',null,{metalness:.5,roughness:.4});for(let i=0;i<4;i++)cyl(.55,.16,C.steel,0,TB+1,-.7+i*.47,'HS.tb.sheaves',null,{metalness:.7,roughness:.3},.55,24).rotation.z=Math.PI/2;box(.5,.4,.5,C.yellow,0,TB+2,0,'HS.tb.becket');
  cyl(.5,1.4,C.yellow,0,TB-2.4,0,'HS.hook.body',null,{metalness:.5,roughness:.4},.35);box(.3,.5,.3,C.dark,0,TB-3.2,0,'HS.hook.latch');
  strut([.8,TD-2,0],[.8,TD-6.5,0],.08,C.steel,'HS.elev.links');strut([-.8,TD-2,0],[-.8,TD-6.5,0],.08,C.steel,'HS.elev.links');cyl(.5,.5,C.dark,0,TD-6.7,0,'HS.elev.elevator',null,{metalness:.6,roughness:.3});
  // drilling line
  for(let i=0;i<4;i++)strut([0,MT+1.1,-.85+i*.55],[0,TB+1,-.7+i*.47],.03,C.cable,'HS.line.reeved');
  strut([0,MT+.9,-2.1],[0,F+1.8,-5.4],.04,C.cable,'HS.line.fast');strut([0,MT+1.1,1.1],[4.3,F+.8,-4],.03,C.cable,'HS.line.dead');
  // drawworks
  box(5.2,2.6,3.2,C.blue,0,F+1.6,-5.4,'HS.dw.skid',{shell:true},{transparent:true});cyl(.9,3.4,C.dark,0,F+1.8,-5.4,'HS.dw.drum',null,{metalness:.6,roughness:.35}).rotation.z=Math.PI/2;
  box(1.4,1.2,1.2,C.yellow,-3.3,F+1.2,-5.4,'HS.dw.motors');box(1.4,1.2,1.2,C.yellow,3.3,F+1.2,-5.4,'HS.dw.motors');box(.9,1.4,1.6,C.dark,-2.2,F+1.4,-5.4,'HS.dw.gearbox');
  cyl(1.1,.15,C.steel,2.05,F+1.8,-5.4,'HS.dw.brake',null,{metalness:.7,roughness:.25},1.1,32).rotation.z=Math.PI/2;box(.3,.3,.3,C.dark,0,F+3.1,-5.4,'HS.dw.encoder');
  box(1,.8,1,C.blue,4.3,F+.7,-4,'HS.anchor.drum');box(.4,.3,.6,C.yellow,4.3,F+1.25,-4,'HS.anchor.sensor');cyl(.9,1.4,C.steel,16,.9,-20,'HS.anchor.reel',null,null,.9).rotation.z=Math.PI/2;
  // ---- circulating
  const SP=[[3.3,F+.5,3.3],[3.3,F+24,3.3]];strut(SP[0],SP[1],.13,C.steel,'CS.standpipe.pipe');box(.9,1.3,.9,C.dark,3.3,F+.8,3.3,'CS.standpipe.manifold');
  pipe([[3.3,F+24,3.3],[3,F+21.5,3.6],[2,F+18.5,3.2],[.9,TD+3,1.1],[0,TD+3.6,.4]],.11,C.cable,'CS.standpipe.hose');cyl(.16,.8,C.dark,0,TD+3.8,.2,'CS.standpipe.gooseneck');
  cyl(.7,.9,C.dark,0,F-.75,0,'CS.return.bell');pipe([[.5,F-.9,.5],[6,F-1.6,5],[14,3.5,6.5]],.2,C.dark,'CS.return.flowline');box(1.6,.7,2,C.dark,14,3.4,6.6,'CS.return.possum');
  [['CS.tanks.t1',7],['CS.tanks.t2',13],['CS.tanks.t3',19]].forEach(([id,z])=>{box(12,3,5.5,C.blue,16,1.5,z,id,null,{roughness:.6});});
  box(1,2,1,C.blue,10.3,2.6,24,'CS.tanks.trip');for(let i=0;i<4;i++)cyl(.3,.6,C.yellow,12+i*2.6,3.3,13,'CS.tanks.agit');
  for(let i=0;i<3;i++)box(2.6,.9,1.6,C.yellow,12.4+i*3.4,3.6,8.5,'CS.solids.shakers');cyl(.5,3,C.blue,21,4.5,12,'CS.solids.degasser');cyl(.35,1.6,C.yellow,20,4,17.5,'CS.solids.desander',null,null,.15);cyl(.35,1.6,C.yellow,17,4,17.5,'CS.solids.desilter',null,null,.15);box(2.4,1,1.2,C.dark,14,3.7,19.5,'CS.solids.centrifuge');
  cyl(.8,7,C.steel,26,3.5,4,'CS.mgs.vessel',null,{metalness:.4,roughness:.4});strut([26,7,4],[26,12,4],.12,C.steel,'CS.mgs.vent');pipe([[26,.6,4],[26,.6,7],[24,.6,7]],.12,C.dark,'CS.mgs.seal');
  [['CS.pumps.p1',-8],['CS.pumps.p2',-14]].forEach(([id,z])=>{box(7.5,3.4,3.4,0xe2e6ea,20,1.7,z,id,{shell:true},{transparent:true});box(3,2.2,2.4,C.blue,18.5,1.4,z,id);cyl(.7,2.6,C.dark,22.4,1.6,z,id).rotation.z=Math.PI/2;box(1.2,1.4,2.6,C.yellow,20.4,1.6,z,id);});
  cyl(.45,1.2,C.red,23.9,2.9,-8,'CS.pumps.dampener');cyl(.45,1.2,C.red,23.9,2.9,-14,'CS.pumps.dampener');box(1.4,.8,1,C.blue,25,.5,-11,'CS.pumps.charge');box(.4,.6,.4,C.yellow,23.9,3.9,-11,'CS.pumps.relief');
  pipe([[23.9,3.4,-8],[23.9,4,-4],[10,4,-2],[3.3,F+.5,3.3]],.12,C.steel,'CS.standpipe.manifold');
  // ---- well control
  cyl(1.05,.7,C.dark,0,1.4,0,'WC.wellhead.head',null,{metalness:.6,roughness:.35});
  box(2.4,1.1,2.4,C.dark,0,2.6,0,'WC.bop.pipe2',null,{metalness:.5,roughness:.4});cyl(.9,.5,C.steel,0,3.4,0,'WC.bop.spool');box(2.4,1.1,2.4,C.dark,0,4.2,0,'WC.bop.shear',null,{metalness:.5,roughness:.4});box(2.4,1.1,2.4,C.dark,0,5.4,0,'WC.bop.pipe1',null,{metalness:.5,roughness:.4});cyl(1.3,1.4,C.blue,0,6.7,0,'WC.bop.annular',null,{metalness:.4,roughness:.5},1.1);
  box(.5,.5,.5,C.red,1.7,3.4,0,'WC.bop.hcr');box(.5,.5,.5,C.red,-1.7,3.4,0,'WC.bop.hcr');
  pipe([[1.9,3.4,0],[8,3.4,0],[10.5,1.2,-3]],.11,C.red,'WC.lines.choke');pipe([[-1.9,3.4,0],[-4,3.4,0],[-4,1,-3],[-12,1,-8]],.11,C.dark,'WC.lines.kill');
  box(3.6,.6,2.4,C.steel,11.5,.5,-4,'WC.choke.valves');for(let i=0;i<4;i++)cyl(.22,.5,C.red,10.4+i*.8,1.05,-4,'WC.choke.valves');box(.7,1,.7,C.yellow,13,1.3,-3.3,'WC.choke.hydraulic');cyl(.4,.15,C.red,13,1.9,-4.5,'WC.choke.manual',null,null,.4).rotation.x=Math.PI/2;box(1,1.4,.3,C.dark,12,1,-6,'WC.choke.panel');
  box(6,1,2.4,C.red,-13,.5,-8,'WC.acc.manifold');for(let i=0;i<10;i++)cyl(.22,1.6,C.steel,-15.5+i*.55,1.8,-8.6,'WC.acc.bottles',null,{metalness:.6,roughness:.3});box(1.6,.9,1,C.blue,-11.4,1.4,-7.5,'WC.acc.pumps');box(.9,1.3,.3,C.dark,3.8,F+1.2,4.6,'WC.acc.remote');
  // ---- power
  [['PS.gen.g1',-6],['PS.gen.g2',-1],['PS.gen.g3',4]].forEach(([id,z])=>{box(12,3.2,3.4,0xf2f2ee,-24,1.6,z,id,{shell:true},{transparent:true});box(5,2.2,2.2,C.yellow,-26,1.3,z,id);cyl(.9,3,C.dark,-21,1.4,z,id).rotation.z=Math.PI/2;cyl(.18,2,C.dark,-27,3.9,z,'PS.gen.exhaust');box(2.4,2.4,.4,C.dark,-19.5,1.6,z,'PS.gen.radiators');});
  box(12,3.2,3.4,0xf2f2ee,-24,1.6,12,'PS.vfd.drives',{shell:true},{transparent:true});for(let i=0;i<5;i++)box(1.6,2.4,.9,C.dark,-28+i*2.2,1.3,11.4,'PS.vfd.drives');box(3,2.4,.9,C.steel,-24,1.3,12.8,'PS.vfd.switchgear');box(1.4,1.2,1.4,C.dark,-17.5,4,12,'PS.vfd.resistors');box(.6,.8,.3,C.blue,-19.5,1.4,13.6,'PS.vfd.plc');
  cyl(1.5,10,C.cream,-30,1.6,-16,'PS.fuel.bulk',null,null,1.5).rotation.z=Math.PI/2;cyl(1.5,10,C.cream,-30,1.6,-20,'PS.fuel.bulk',null,null,1.5).rotation.z=Math.PI/2;box(1,1.4,1,C.cream,-25,.7,-17,'PS.fuel.day');box(1,.6,.8,C.blue,-23.5,.4,-18,'PS.fuel.transfer');
  box(11,.2,.9,C.steel,-12.5,.9,2,'PS.cables.tray');box(.9,.2,8,C.steel,-7,.9,-2,'PS.cables.tray');box(1.2,2,.8,C.steel,-7,1.2,-6.5,'PS.cables.mcc');for(let i=0;i<4;i++){const a=i*Math.PI/2+.4;strut([Math.cos(a)*30,0,Math.sin(a)*30+4],[Math.cos(a)*30,9,Math.sin(a)*30+4],.1,C.steel,'PS.cables.lighting');box(.8,.4,.3,C.yellow,Math.cos(a)*30,9,Math.sin(a)*30+4,'PS.cables.lighting');}
  box(2.2,1.4,1.2,C.blue,-14,.9,18,'PS.air.compressor');cyl(.6,2.4,C.steel,-11,1,18,'PS.air.receiver',null,null,.6).rotation.z=Math.PI/2;box(.8,1,.6,C.dark,-9,.7,18,'PS.air.dryer');
  // ---- drill string (above floor & subsurface)
  cyl(.13,TD-5-F-.5,C.dark,0,(TD-5+F+.5)/2,0,'DS.pipe.saver',null,{metalness:.5,roughness:.4});
  for(let i=0;i<9;i++)cyl(.13,27,C.dark,-3.9+i*.45,F+13.7,2.4,'DS.pipe.setback',null,{metalness:.5,roughness:.4});
  cyl(.13,F+.5+52,C.dark,0,(F+.5-52)/2,0,'DS.pipe.string',null,{metalness:.5,roughness:.4});
  cyl(.16,6,C.dark,0,-55,0,'DS.hwdp.joints',null,{metalness:.5,roughness:.4});
  cyl(.24,7,C.steel,0,-62,0,'DS.bha.collars',null,{metalness:.6,roughness:.3});cyl(.35,.8,C.yellow,0,-59,0,'DS.bha.stab');cyl(.24,1.6,C.blue,0,-66.5,0,'DS.bha.motor');cyl(.24,1.4,C.red,0,-64.8,0,'DS.bha.mwd');cyl(.24,1.2,C.yellow,0,-57.6,0,'DS.bha.jar');
  cyl(.42,.9,C.dark,0,-67.9,0,'DS.bit.body',null,{metalness:.6,roughness:.3},.2);for(let i=0;i<6;i++){const a=i/6*Math.PI*2;box(.12,.5,.08,0xd8d8d8,Math.cos(a)*.3,-68.05,Math.sin(a)*.3,'DS.bit.cutters',null,{metalness:.8,roughness:.2}).rotation.y=-a;}cyl(.06,.3,C.yellow,0,-68.5,0,'DS.bit.nozzles');
  // ---- casing (subsurface)
  cyl(1.0,10,C.steel,0,-5,0,'WC.wellhead.conductor',null,{metalness:.5,roughness:.4,transparent:true,opacity:.8},1.0,24);
  cyl(.7,30,C.steel,0,-15,0,'WC.wellhead.surface',null,{metalness:.5,roughness:.4,transparent:true,opacity:.75},.7,24);
  cyl(.5,54,C.steel,0,-27,0,'WC.wellhead.intermediate',null,{metalness:.5,roughness:.4,transparent:true,opacity:.7},.5,24);
  cyl(.85,34,0xd8d2c0,0,-17,0,'WC.wellhead.cement',null,{roughness:1,transparent:true,opacity:.45},.85,24);
  cyl(.42,14,0x4a3c2c,0,-61,0,'WC.wellhead.openhole',null,{roughness:1,transparent:true,opacity:.5},.42,24);
  // formation layers (not selectable)
  [[0,-6,0x9c7f58,'Topsoil & alluvium'],[-6,-26,0xb89a6a,'Sandstone'],[-26,-46,0x6c6a6a,'Shale'],[-46,-60,0xbdb5a0,'Limestone'],[-60,-76,0xa88a5c,'Reservoir sand']].forEach(([top,bot,col])=>{const m=new THREE.Mesh(new THREE.BoxGeometry(140,top-bot,110),mat(col,{transparent:true,opacity:.28,roughness:1,depthWrite:false}));m.position.set(0,(top+bot)/2,4);sub.add(m);const edge=new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.18}));edge.position.copy(m.position);sub.add(edge);});
  sub.visible=false;
 }
});
