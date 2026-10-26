// Buck Board 26 data. Claude updates this file when new photos come in.
// Names, points and seen-live sightings edited by the group live in Firebase and override what's here.
window.STANDS = [
  {group:"Gun blinds", list:["TC BOY","SHP","LMK","LTC","LRH","MTN TOP"]},
  {group:"Bow stands", list:["SHROUD","LTC CLIMBER","LMK CLIMBER","LADDER"]},
  {group:"", list:["OTHER"]}
];

// top:true = ★ TOP TARGET tag.
// g: shoot = 3.5+, mid = 2-3, young = under 2, unk = can't age
// hist: camera sightings, newest first. pics are files in img/. cover: pic to use as the card photo (else newest).
// In rep/note text, @X means "the current name of buck X".
window.BUCKS = [
 {id:"K",name:"WIDE LOAD",top:true,g:"shoot",age:"4.5+",pts:"8–10",dn:"Night",rep:"No match",
  note:"10/21 daylight: wide rack well outside the ears, long beams sweeping forward with tips curving in, tall G2s (Bob matched the G2 shape and length to the 10/14 night shot). Heaviest body in the set: deep chest, thick neck, belly starting to drop. Good mass, head down at a scrape or feeding. Very close to the camera, which exaggerates size.",
  hist:[{added:"10/21/26",date:"10/21/26",time:"6:27 PM",temp:"60°F",cam:"Barnyard (Spypoint)",pics:["K-5","K-cmp","K-4"]},{added:"10/17/26",date:"10/14/26",time:"5:17 AM",temp:"46°F",cam:"Spypoint Flex-M",pics:["K","K-2"]}]},
 {id:"I",name:"BIG RED",g:"shoot",age:"4.5+",pts:"8",dn:"Day",rep:"Possible @D/@G",
  note:"Evening, walking, doe in background. Belly sag and short-looking legs for the body. Long beams with good mass and spread.",
  hist:[{added:"10/17/26",date:"10/16/26",time:"5:47 PM",temp:"45°F",cam:"Spypoint Flex-M + Mikey Sunshine (Moultrie)",pics:["I","I-2","I-3"]}]},
 {id:"D",name:"NIGHT SHIFT",g:"shoot",age:"3.5",pts:"8",dn:"Night",rep:"Likely @G, possible @I/@A",
  note:"Facing camera. Clean 8 with brows, G2s and G3s. Spread at or just outside the ears. Best measurable rack.",
  hist:[{added:"10/19/26",date:"10/19/26",time:"7:54 PM",temp:"46°F",cam:"Spypoint Flex-M",pics:["D-5","D-6"]},{added:"10/17/26",date:"10/17/26",time:"4:16 AM",temp:"34°F",cam:"School House (Moultrie)",pics:["D","D-4"]},{added:"10/18/26",date:"10/07/26",time:"7:28 PM",temp:"57°F",cam:"Spypoint Flex-M",pics:["D-2","D-3"]}]},
 {id:"G",name:"TALL BOY",cover:"G",g:"shoot",age:"3.5",pts:"8",dn:"Day",rep:"Likely @D, possible @J",
  note:"Runs with a leaner 8 on Big Joe Webb: 10/20 video shows the two grooming and sparring at 6:18–6:20. Low-res, facing camera. Tall 8 with good G2s. If @G and @J are the same deer, @G is likely closer to 3.",
  hist:[{added:"10/26/26",date:"10/26/26",time:"5:58 PM",temp:"50°F",cam:"Big Joe Webb (Moultrie)",pics:["G-7","G-8","G-9","G-6"]},{added:"10/20/26",date:"10/20/26",time:"6:14–6:20 PM",temp:"56°F",cam:"Big Joe Webb (Moultrie)",pics:["G-3","G-5","G-4"]},{added:"10/17/26",date:"10/16/26",time:"6:41 PM",temp:"48°F",cam:"Big Joe Webb (Moultrie)",pics:["G","G-2"]}]},
 {id:"O",name:"OLD MAN",g:"shoot",age:"3.5",pts:"8 (your call)",dn:"Day",rep:"Possible @I, @L",
  note:"Walking both directions with head down. Deep chest, belly starting to drop, neck filling out. Rack blends into the woods, so no count. Borderline 3.5: a head-up shot would settle it.",
  hist:[{added:"10/18/26",date:"10/17/26",time:"6:22 PM",temp:"57°F",cam:"Mikey Sunshine (Moultrie)",pics:["O","O-2","O-3"]}]},
 {id:"H",name:"DASH",g:"shoot",cover:"H-2",age:"3.5",pts:"8 (your call)",dn:"Day",rep:"No match",
  note:"Patterned at the School House pump in daylight: 6:51 (10/16), 6:48 (10/20), 6:40 (10/23). 10/23 he came in head low and neck out, scent-checking a doe. 10/20: on Big Joe Webb at 6:41, then School House pump at 6:48 (300 yds apart). Video from School House shows him broadside: deep chest, heavy through the middle, thick neck running into the shoulders. Belly still fairly flat, so not old, but past 2.5. Bob would shoot him. 10/20 hi-res shows several tines on the near side; likely a solid 8, bigger than it first looked.",
  hist:[{added:"10/23/26",date:"10/23/26",time:"6:40 PM",temp:"56°F",cam:"School House (Moultrie)",pics:["H-12","H-13"]},{added:"10/20/26",date:"10/20/26",time:"6:41–6:48 PM",temp:"56°F",cam:"Big Joe Webb → School House (Moultrie)",pics:["H-10","H-11","H-8","H-9","H-7"]},{added:"10/17/26",date:"10/16/26",time:"6:51 PM",temp:"48°F",cam:"School House (Moultrie)",pics:["H-2","H-5","H-3","H","H-4"]}]},
 {id:"N",name:"SHADOW",g:"shoot",age:"3.5",pts:"8",dn:"Night",cover:"N",rep:"Possible @A",
  note:"Tall beams rising into a U, near ear width. 10/20 fog shot shows a thick neck and sagging belly; Bob moved him up to 3.5 (his call). Fog bloom can exaggerate body on IR, so a clear shot would confirm.",
  hist:[{added:"10/20/26",date:"10/20/26",time:"12:04 AM",temp:"41°F",cam:"Spypoint Flex-M",pics:["N-4","N-3"]},{added:"10/17/26",pics:["N"]}]},
 {id:"J",name:"PITCHFORK",g:"mid",age:"2.5–3.5",pts:"8",dn:"Day",rep:"Possible @G",
  note:"Best daylight photo in the set. Tall tines, forked left side, rack inside the ears. Neck not swelled, chest moderate. Borderline.",
  hist:[{added:"10/17/26",date:"10/11/26",time:"6:23 PM",temp:"67°F",cam:"Spypoint Flex-M",pics:["J","J-2"]}]},
 {id:"A",name:"EARLY BIRD",g:"mid",age:"2.5–3.5",pts:"8",dn:"Night",rep:"Possible @D/@G, @N",
  note:"Profile hides the spread. Tall G2/G3s, but neck and body don't say mature yet. Borderline.",
  hist:[{added:"10/17/26",date:"10/03/26",time:"5:13 AM",temp:"41°F",pics:["A"]}]},
 {id:"F",name:"LOPSIDE",g:"mid",age:"2.5",pts:"6–7",dn:"Day",rep:"No match",
  note:"Heavy compression. Uneven rack, one side mostly beam. Neck not swelled.",
  hist:[{added:"10/17/26",pics:["F"]}]},
 {id:"M",name:"STILTS",g:"mid",age:"2.5",pts:"6–8",dn:"Day",rep:"No match",
  note:"Clean profile. Lean, long-legged, straight belly, thin neck, modest rack with short tines.",
  hist:[{added:"10/18/26",date:"10/18/26",time:"7:07 PM",temp:"61°F",cam:"Mikey Sunshine (Moultrie)",pics:["M-2","M-3"]},{added:"10/17/26",pics:["M"]}]},
 {id:"L",name:"TIP TOE",g:"mid",age:"2.5?",pts:"8 (your call)",dn:"Day",rep:"No match",
  note:"Rack barely readable. Moderate body. Age is a guess.",
  hist:[{added:"10/17/26",pics:["L"]}]},
 {id:"P",name:"TURNSTILE",g:"mid",age:"2.5",pts:"6 (confirmed)",dn:"Day",rep:"Possible @J, @C",
  note:"Video confirms it: straight belly, long legs, neck not swelled yet. Short brows, tall G2s, narrow rack inside the ears. Confirmed 6 point. If this is @J, @J is likely a 2.5 too.",
  hist:[{added:"10/18/26",date:"10/18/26",time:"9:02 AM",temp:"47°F",cam:"Little Tobin Clarkinski (Moultrie)",pics:["P-3","P-4","P","P-2"]}]},
 {id:"Q",name:"BEAMER",g:"mid",age:"2.5",pts:"8",dn:"Day",rep:"No match (not @L)",
  note:"Very long main beams that run flat forward past the nose: that's the ID mark. Near side shows brow, tall G2 and a G3. Lean and long-legged, straight belly, neck not swelled.",
  hist:[{added:"10/18/26",date:"10/06/26",time:"9:39 AM",temp:"37°F",cam:"Spypoint Link-Micro-LTE",pics:["Q","Q-2"]},
        {added:"10/18/26",date:"10/03/26",time:"7:13 PM",temp:"50°F",cam:"Spypoint Link-Micro-LTE",pics:["Q-3","Q-4"]}]},
 {id:"R",name:"TINY DANCER",cover:"R",g:"mid",age:"2.5",pts:"8",dn:"Day + night",rep:"Runs with @G",
  note:"Clean, symmetric 8 with brows, tall G2s and G3s. Lean and long-legged, straight belly, neck not swelled. Lighter, grayer coat than @G. 10/20 video: groomed by @G at 6:18, then the two sparred at 6:20. Likely the second buck feeding beside @G on Big Joe Webb 10/16. Too symmetric to be @J.",
  hist:[{added:"10/26/26",date:"10/21/26",time:"9:25 PM",cam:"Barnyard (Reolink)",pics:["R-5","R-6","R-7","R-8"]},{added:"10/20/26",date:"10/20/26",time:"6:14–6:20 PM",temp:"56°F",cam:"Big Joe Webb (Moultrie)",pics:["R","R-2","R-3","R-4"]}]},
 {id:"E",name:"SMUDGE",g:"young",age:"1.5–2.5",pts:"4–6",dn:"Night",rep:"Possible @C",
  note:"Small, blurry rack. Could be a 2.5.",
  hist:[{added:"10/17/26",pics:["E"]}]},
 {id:"C",name:"SMIRK",g:"young",age:"1.5",pts:"4–6",dn:"Day",rep:"Possible @E",
  note:"Lip-curling. Thin neck, leggy, small narrow rack. Clearest young buck in the set.",
  hist:[{added:"10/17/26",pics:["C"]}]},
 {id:"S",name:"NAME TBD",cover:"S-2",g:"unk",age:"3.5+?",pts:"8+ (your call)",dn:"Day",rep:"No match",
  note:"Head only, behind brush at Powerline Tango. Tall rack with long G2s, at least 4 points on the side we can see, heavy-looking head and neck. Can't see spread vs ears or the body, so not aged yet. Calm in daylight at 47°F. Bob thinks mature. Move to Shooters or match once a better photo comes in.",
  hist:[{added:"10/26/26",date:"10/26/26",time:"9:09 AM",temp:"47°F",cam:"Powerline Tango (Spypoint Flex-M)",pics:["S","S-2"]}]},
 {id:"B",name:"GHOST",g:"unk",age:"Unknown",pts:"8 (your call)",dn:"Night",rep:"No match",
  note:"Motion blur in the ferns. Different spot from the other cameras.",
  hist:[{added:"10/17/26",pics:["B"]}]}
];

// ---------- Stand Sits tab ----------
// Wind each stand can hunt. g = green (ideal), y = yellow (questionable). Any direction not listed = red.
window.STAND_WINDS = {
  "TC BOY":      {g:["NW","W","SW"], y:["N","S"]},
  "SHP":         {g:["NW","W","SW"], y:["N","S"]},
  "LMK":         {g:["S","SE","SW"], y:["W","E"]},
  "LTC":         {g:["NW","N","NE","E"], y:["W"]},
  "LRH":         {g:["N","NE","NW","W"], y:[]},
  "MTN TOP":     {g:["W","NW","SW","S"], y:["N"]},
  "SHROUD":      {g:["N","NW"], y:["NE"]},
  "LTC CLIMBER": {g:["NW","N","NE","E"], y:["W"]},
  "LMK CLIMBER": {g:["S","SE","SW"], y:["W","E"]},
  "LADDER":      {g:["S","SE","SW"], y:["W","E"]}
};
// Normal daily high (°F) at Alpena, 1991–2020 (closest long-record station). Index 0 = day 1.
window.NORMAL_HIGH = {
  9:[75.0,74.8,74.6,74.4,74.2,73.9,73.6,73.3,72.9,72.6,72.2,71.9,71.6,71.1,70.7,70.2,69.8,69.3,69.0,68.5,67.9,67.5,67.2,66.9,66.6,66.2,65.8,65.5,65.1,64.7],
  10:[64.1,63.5,63.0,62.5,62.0,61.5,61.0,60.5,60.1,59.6,59.2,58.7,58.2,57.8,57.4,56.9,56.5,56.1,55.7,55.2,54.7,54.3,53.8,53.3,52.8,52.3,51.8,51.3,50.8,50.4,50.1],
  11:[49.7,49.2,48.8,48.4,48.1,47.7,47.2,46.8,46.4,46.0,45.7,45.3,44.9,44.4,44.1,43.8,43.4,43.1,42.6,42.2,41.8,41.2,40.7,40.1,39.7,39.4,39.0,38.6,38.2,37.9],
  12:[37.7,37.4,36.9,36.5,36.1,35.8,35.5,35.2,35.0,34.6,34.3,34.0,33.8,33.5,33.2,32.9,32.7,32.4,32.1,31.9,31.8,31.7,31.5,31.3,31.1,30.9,30.8,30.7,30.5,30.2,30.0],
  1:[30.0]
};
