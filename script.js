function calcProgress(start, end, progress) {
  return (progress - start) / (end - start);
}

function progress(){
  
  const now = new Date();

  // Dia
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const dayProgress = calcProgress(dayStart, dayEnd, now);
  
  var dayP = Math.round(dayProgress*100);
  document.getElementById("day").innerHTML = 'Day: '+dayP+'%';
  document.documentElement.style.setProperty('--progressVD', dayProgress*100+'%');
  
  // Semana
  let weekDay = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - weekDay);
  const weekEnd = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 7);
  const weekProgress = calcProgress(weekStart, weekEnd, now);
  
  var weekP = Math.round(weekProgress*100);
  document.getElementById("week").innerHTML = 'Week: '+weekP+'%';
  document.documentElement.style.setProperty('--progressVW', weekProgress*100+'%');
  
  // Mes
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const monthProgress = calcProgress(monthStart, monthEnd, now);
  
  var monthP = Math.round(monthProgress*100);
  document.getElementById("month").innerHTML = 'Month: '+monthP+'%';
  document.documentElement.style.setProperty('--progressVM', monthProgress*100+'%');
}

progress()

window.onload = function() {
    setInterval(progress, 6000);
}
