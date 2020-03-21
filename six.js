// The construction of the new Death Star is almost complete. It only needs a certain amount of 3 materials – iron (100 Gt), steel (75 Gt) and chromium(50 Gt). The emperor wants the construction finished within a week because he senses an impending rebel attack and knows the battle station will be destroyed if it is not completed within this timeframe. He has already ordered enough material delivered to the station within a week. The problem is, the rebels are attacking the supply routes and there are different amounts of material arriving at the station each week. Will the station be ready in time or will it be destroyed?
//
// You will receive an array of 7 arrays – one for each day of the week. Each subarray will contain the three materials mentioned above in the exact order mentioned. The last item of the main array will be a number indicating the day on which the rebel attack will occur. Your task is to determine whether the station will survive the attack. In case of success return “The station is completed!”. In case of failure return “The station is destroyed! It needed x iron, y steel and z chromium for completion.”, where x, y and z are the quantities of the respective material. If any material has already reached its quota, just replace it will 0.
//
// Note: The attack always happens after the materials for the day are delivered and within a week.


function deathStar(week) {
   let attackDay =week[week.length-1]
   let materialsForWeek=week.slice(0,attackDay)
   let steelMin =75;
   let chromiumMin = 50;
   let ironMin= 100;
   for (let i=0;i<materialsForWeek.length;i++){
     ironMin=ironMin-materialsForWeek[i][0]
     steelMin=steelMin-materialsForWeek[i][1]
     chromiumMin=chromiumMin=chromiumMin-materialsForWeek[i][2]
     if (ironMin<=0&&steelMin<=0&&chromiumMin<=0)
       return 'The station is completed!'
   }
//    if ironMin <=0, return 0, ELSE: return ironMin
   return `The station is destroyed! It needed ${ironMin<=0?0:ironMin} iron, ${steelMin<=0?0:steelMin} steel and ${chromiumMin<=0?0:chromiumMin} chromium for completion.`
}
