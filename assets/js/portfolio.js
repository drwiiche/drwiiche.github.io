document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     1. TYPING ANIMATION (SIDEBAR ROLE)
     ========================================================================== */
  const words = [
    "Software Developer",
    "Network Engineer",
    "Machine Learning Engineer"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterElement = document.getElementById('typewriter');
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Erasing text
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Erase faster
    } else {
      // Typing text
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 120; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Cycle to next word
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Small delay before next word
    }

    setTimeout(type, typeSpeed);
  }

  if (typewriterElement) {
    type();
  }

  /* ==========================================================================
     2. WISP INTERACTIVE NETWORK VISUALIZER
     ========================================================================== */
  const nodesData = {
    'core-router': {
      title: 'MikroTik Core Router (RouterOS)',
      desc: 'Central network core orchestrating traffic routing, QoS queues, and network security.',
      stats: {
        'Uptime': '45d 16h 24m',
        'CPU Load': '12% @ 1.4GHz',
        'Active Leases': '148 clients',
        'Memory Usage': '182MB / 1024MB',
        'Gateway Temp': '42°C',
        'IP Routing': 'OSPF / Static'
      },
      log: 'Querying MikroTik API... Connection established. Route table: 12 active paths. Noise: clean.'
    },
    'pharos-ap': {
      title: 'TP-Link Pharos AP (CPE610 Array)',
      desc: 'High-gain 23dBi direction-optimized sector array distributing local backbone links.',
      stats: {
        'Frequency': '5.840 GHz (Auto)',
        'TX/RX Rate': '300Mbps / 300Mbps',
        'Noise Floor': '-104 dBm',
        'Transmit Power': '23 dBm',
        'Channel Width': '40 MHz (DFS)',
        'Antenna Gain': '23 dBi'
      },
      log: 'TP-Link Pharos connection: RSSI: -42dBm, CCQ: 99.1%. Running MAXtream TDMA protocol.'
    },
    'client-cpe-1': {
      title: 'Client CPE - Node West',
      desc: 'Subscriber TP-Link CPE510 antenna mounted at client residence.',
      stats: {
        'Distance': '0.74 km',
        'Signal Strength': '-58 dBm (Excellent)',
        'Link CCQ': '98.5%',
        'Ping Latency': '3 ms',
        'RX Rate': '86.4 Mbps',
        'TX Rate': '68.2 Mbps'
      },
      log: 'Pinging client-cpe-1 (192.168.10.22)... 64 bytes: icmp_seq=1 ttl=64 time=2.84ms. 0% packet loss.'
    },
    'client-cpe-2': {
      title: 'Client CPE - Node South-East',
      desc: 'Subscriber TP-Link CPE510 antenna mounted at client residence.',
      stats: {
        'Distance': '1.35 km',
        'Signal Strength': '-65 dBm (Good)',
        'Link CCQ': '94.2%',
        'Ping Latency': '5 ms',
        'RX Rate': '54.1 Mbps',
        'TX Rate': '45.7 Mbps'
      },
      log: 'Pinging client-cpe-2 (192.168.10.45)... 64 bytes: icmp_seq=1 ttl=64 time=4.91ms. 0% packet loss.'
    },
    'client-cpe-3': {
      title: 'Client CPE - Node North',
      desc: 'Subscriber TP-Link CPE510 antenna mounted at client residence.',
      stats: {
        'Distance': '2.10 km',
        'Signal Strength': '-72 dBm (Moderate)',
        'Link CCQ': '88.9%',
        'Ping Latency': '8 ms',
        'RX Rate': '32.5 Mbps',
        'TX Rate': '18.4 Mbps'
      },
      log: 'Pinging client-cpe-3 (192.168.10.64)... 64 bytes: icmp_seq=1 ttl=64 time=7.62ms. 0% packet loss.'
    },
    'client-cpe-4': {
      title: 'Client CPE - Node Valley (Distant)',
      desc: 'Subscriber CPE510 link located in peripheral valley sector.',
      stats: {
        'Distance': '3.42 km',
        'Signal Strength': '-78 dBm (Fair)',
        'Link CCQ': '81.4%',
        'Ping Latency': '14 ms',
        'RX Rate': '12.4 Mbps',
        'TX Rate': '5.2 Mbps'
      },
      log: 'Pinging client-cpe-4 (192.168.10.99)... 64 bytes: icmp_seq=1 ttl=64 time=13.8ms. Warning: low RSSI.'
    }
  };

  const nodeElements = document.querySelectorAll('.net-node');
  const detailsTitle = document.getElementById('details-title');
  const detailsDesc = document.getElementById('details-desc');
  const detailsGrid = document.getElementById('details-grid');
  const consoleBody = document.getElementById('console-body');

  function updateDiagnosticCard(nodeId) {
    const data = nodesData[nodeId];
    if (!data) return;

    // Remove active class from all SVG nodes
    nodeElements.forEach(n => n.classList.remove('active'));
    
    // Add active class to selected SVG node
    const activeNode = document.getElementById(nodeId);
    if (activeNode) activeNode.classList.add('active');

    // Update details card info
    if (detailsTitle) detailsTitle.textContent = data.title;
    if (detailsDesc) detailsDesc.textContent = data.desc;

    // Clear grid and populate
    if (detailsGrid) {
      detailsGrid.innerHTML = '';
      for (const [key, value] of Object.entries(data.stats)) {
        const row = document.createElement('div');
        row.className = 'details-row';
        row.innerHTML = `
          <span class="details-label">${key}</span>
          <span class="details-value">${value}</span>
        `;
        detailsGrid.appendChild(row);
      }
    }

    // Add log to console
    logToConsole(data.log, 'success');
  }

  function logToConsole(message, type = 'info') {
    if (!consoleBody) return;
    
    const timestamp = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.className = `console-line ${type === 'success' ? 'cyan' : ''}`;
    line.textContent = `[${timestamp}] ${message}`;
    
    consoleBody.appendChild(line);
    // Keep max 20 lines in console
    while (consoleBody.children.length > 15) {
      consoleBody.removeChild(consoleBody.firstChild);
    }
    // Auto-scroll to bottom
    consoleBody.scrollTop = consoleBody.scrollHeight;
  }

  // Set up event listeners for SVG nodes
  nodeElements.forEach(node => {
    node.addEventListener('click', (e) => {
      const nodeId = e.currentTarget.id;
      updateDiagnosticCard(nodeId);
    });
  });

  // Automated network log generator loop
  const autoLogs = [
    "MikroTik firewall: dropped packet from unauthorized IP to port 23",
    "Pharos MAXtream: active client stations count: 48",
    "WISP Core: total download throughput 54.8 Mbps, upload 14.2 Mbps",
    "DNS cache query: local hit rate 84.6% (MikroTik optimized)",
    "Bridge filtering: IP spoofing block rule checked successfully",
    "CPE-2 ping stability: Jitter 1.2ms (Excellent link CCQ)",
    "MikroTik DHCP: Assigned IP 192.168.10.104 to client device"
  ];

  const visualizerContent = document.getElementById('visualizer-content');

  setInterval(() => {
    // Only log if the tab is visible and the visualizer is expanded
    if (document.hidden || !visualizerContent || !visualizerContent.classList.contains('active')) return;
    const randomLog = autoLogs[Math.floor(Math.random() * autoLogs.length)];
    logToConsole(randomLog);
  }, 6000);

  // Initialize with core router selected
  if (document.getElementById('core-router')) {
    updateDiagnosticCard('core-router');
    logToConsole('WISP Diagnostics Console initialized... Listening on ports 8728 (API) & 22 (SSH)');
  }

  /* ==========================================================================
     3. COLLAPSIBLE VISUALIZER TOGGLE
     ========================================================================== */
  const visualizerToggle = document.getElementById('visualizer-toggle');
  const toggleIcon = document.getElementById('toggle-icon');

  if (visualizerToggle && visualizerContent) {
    visualizerToggle.addEventListener('click', () => {
      visualizerContent.classList.toggle('active');
      const isExpanded = visualizerContent.classList.contains('active');
      
      if (toggleIcon) {
        if (isExpanded) {
          toggleIcon.setAttribute('data-lucide', 'chevron-up');
        } else {
          toggleIcon.setAttribute('data-lucide', 'chevron-down');
        }
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }
    });
  }

  /* ==========================================================================
     4. PROJECT GRID FILTERS
     ========================================================================== */
  const navButtons = document.querySelectorAll('.nav-btn');
  const resumeEntries = document.querySelectorAll('.resume-entry');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterClass = btn.getAttribute('data-filter');

      // Filter grid
      resumeEntries.forEach(entry => {
        if (filterClass === 'all') {
          entry.style.display = 'flex';
        } else {
          if (entry.classList.contains(filterClass)) {
            entry.style.display = 'flex';
          } else {
            entry.style.display = 'none';
          }
        }
      });
    });
  });
});
