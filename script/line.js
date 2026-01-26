const linesIds = ['line1', 'line2', 'line3', 'line4'];
  const leaderLines = [];

  function createLines() {
    leaderLines.forEach(line => line.remove());
    leaderLines.length = 0;

    for (let i = 0; i < linesIds.length - 1; i++) {
      const start = document.getElementById(linesIds[i]);
      const end = document.getElementById(linesIds[i + 1]);

      const line = new LeaderLine(start, end, {
        color: '#292929',
        size: 2,
        path: 'fluid',
        startPlug: 'disc',
        endPlug: 'arrow1',
        dash: {animation: true},
        gradient: true
      });

      leaderLines.push(line);
    }
  }

  window.addEventListener('load', createLines);

  window.addEventListener('resize', () => {
    leaderLines.forEach(line => line.position());
  });
