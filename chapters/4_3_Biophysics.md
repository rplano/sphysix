---
layout: default
title: 4.3 Biophysics & the Human Body
---

# Biophysics & the Human Body

What happens when you turn a smartphone toward your own body? You open a window into your circulation, movement, breathing, stress, and sleep — all measurable, all meaningful. This chapter explores the powerful intersection of physics, physiology, and technology, using everyday mobile devices to understand how we function, adapt, and respond.

Modern smartphones and smartwatches — equipped with accelerometers, gyroscopes, microphones, cameras, barometers, and even infrared sensors — can now capture data once reserved for clinical labs or sports science centers. From the rise of a heartbeat to the arc of a step, from skin temperature recovery to reaction time under pressure, each experiment reveals part of the remarkable system we live inside: the human body.

Some activities are deeply personal, like tracking your own stress, fatigue, or sleep quality. Others highlight physics in motion — through force curves, thermal gradients, or vibration profiles. And for the bold, a handful of capstone projects dive into DIY biosensors, turning simple circuits into tools for exploring cardiac, neural, or autonomic function.

---


### Cardiovascular Monitoring & Circulatory Response

---


### Optical Heart Rate Monitoring: From Fingertip to Face (BIOP-01)

**Sensors Used:** Camera, Flashlight  
**What's Measured:** Heart rate via light-based detection of blood volume changes

**Description**  
Your smartphone can detect your heartbeat — just by watching light bounce off your skin. In this experiment, explore two methods of optical pulse monitoring using your phone's camera and flashlight.**

Method 1: Fingertip Transmission (Contact-Based)
Place your finger over the phone's flashlight and camera. As your heart beats, tiny changes in blood volume affect how much light passes through your finger. A pulse app or video analysis reveals a clear, periodic waveform — your pulse wave — in real time.**

Method 2: Facial or Fingertip Reflection (Non-Contact)
Record a video of the face or fingertip under steady, bright lighting. Then, analyze pixel intensity changes (especially in the green or red channel) across time. Apply a Fast Fourier Transform (FFT) to extract the dominant frequency, which corresponds to the heart rate — no physical contact needed.**

This experiment introduces biomedical optics, periodic functions, and real-world applications of Fourier analysis — used in fitness wearables, webcam-based monitors, and even remote stress detection systems.

Tip: For Method 2, use 30 fps or higher, avoid motion, and ensure even lighting for best results. You can export data as CSV and analyze using tools like spreadsheets or code.


### Heart in Motion: Tracking Resting and Active Heart Rate (BIOP-02)

**Sensors Used:** Smartwatch or Fitness Tracker, (Optional: Smartphone Camera for PPG)  
**What's Measured:** Heart rate at rest, during activity, and post-exercise recovery

**Description**  
Your heart tells a story — whether you're sitting still, walking briskly, or climbing stairs. In this experiment, use a smartwatch or fitness tracker to measure how your heart rate responds to activity and how quickly it recovers afterward.**

Start by recording your resting heart rate. Then perform a mild to moderate activity (like walking, jogging, or stair climbing) for a few minutes. After stopping, record your heart rate again at 1, 3, and 5 minutes into recovery. A faster return to baseline often indicates better cardiovascular fitness.

For added insight, compare these values with manual smartphone-based measurements using camera-based PPG methods from BIOP-01.

This experiment links personal physiology to concepts like heart rate zones, autonomic nervous system regulation, and sports science, showing how simple data can reflect your body's fitness and resilience.


### Heartbeats in Between: Exploring HRV and Stress with a Smartwatch (BIOP-03)

**Sensors Used:** Smartwatch or Fitness Tracker with HRV Capability  
**What's Measured:** Heart Rate Variability (HRV) as an indicator of stress and recovery

**Description**  
Your heart doesn't beat like a metronome — it subtly varies from beat to beat. This variation, known as Heart Rate Variability (HRV), offers powerful insight into your autonomic nervous system and how your body responds to stress, fatigue, or relaxation.**

Using a smartwatch or HRV-capable app, record HRV in different states:

- At rest
- After physical activity
- After deep breathing or mindfulness exercises

Most devices display HRV as a single value (in milliseconds) or a derived stress/recovery score. Generally, higher HRV suggests strong parasympathetic (rest and digest) activity, while lower HRV indicates sympathetic (stress-related) activation.

For deeper exploration, have students log their emotional or mental state before each session to investigate links between mood, cognitive load, and physiological response.

This experiment builds awareness of the hidden rhythms that connect mind, body, and health — and how wearable tech can make them visible.


### Stand and Deliver: The Orthostatic Heart Rate Challenge (BIOP-04)

**Sensors Used:** Smartphone Camera + Flashlight (PPG), or Smartwatch  
**What's Measured:** Heart rate changes across body positions (lying, sitting, standing)

**Description**  
How does your body respond to gravity? In this experiment, explore the orthostatic response — the way your autonomic nervous system adjusts your heart rate and blood pressure when moving from lying to sitting to standing.**

Using a smartphone camera and flashlight (PPG method) or a smartwatch, measure your heart rate in three positions:

- Lying down (baseline)
- Sitting upright
- Standing

Record your pulse at each stage, and optionally track how long it takes for your heart rate to return to baseline after standing. A modest rise in heart rate is normal, but a large or prolonged jump may indicate how your body is managing circulatory stress.

This simple test reveals the baroreflex in action — a vital feedback system that maintains vascular tone, regulates blood pressure, and helps you stay upright without fainting. It's a great introduction to the balance between pressure and pulse in human physiology.


### Blink of Blood: Measuring Capillary Refill Time with a Smartphone (BIOP-05)

**Sensors Used:** Camera (Standard or Slow-Motion), (Optional: Macro Lens or Water Droplet Lens)  
**What's Measured:** Capillary refill time as an indicator of circulatory efficiency

**Description**  
Your circulatory system is constantly working — and sometimes, you can see it in action. In this experiment, measure capillary refill time, a quick and informative test used to assess how well blood is reaching the extremities.**

Press on the fingertip or nail bed until it turns pale — this temporarily squeezes blood out of the capillaries. Then release and record how long it takes for the normal pink color to return. Use slow-motion video or macro photography (with a drop of water as a makeshift lens) to capture and analyze the moment with precision.

This simple test is widely used in first aid and clinical settings to check peripheral perfusion. It opens the door to discussions about vascular health, blood pressure regulation, and the body's ability to maintain homeostasis under stress.

---


### Breathing, Oxygen, and Altitude

---


### Breath in Motion: Measuring Respiration with Camera or Microphone (BIOP-06)

**Sensors Used:** Camera, Microphone  
**What's Measured:** Respiration rate, breathing patterns, and amplitude

**Description**  
Breathing is one of the body's most essential rhythms — and it's measurable with just a smartphone. In this experiment, explore respiratory patterns and rate using video or audio-based methods.**

Option 1: Camera-Based Tracking
Use the front-facing camera to record the rise and fall of the chest. Regular, slow-motion, or time-lapse video can help analyze the timing, frequency, and depth of each breath.

Option 2: Microphone-Based Detection
Place the microphone near the nostrils to record the sound of breathing. Use a waveform viewer or FFT app to visualize inhale/exhale cycles, track frequency, and observe changes in amplitude (breath depth).

Compare results at rest, after exercise, or during different emotional states to see how respiration reflects stress, exertion, and autonomic response. It's a gentle, non-invasive window into the body's respiratory mechanics — and how breath responds to both body and mind.


### Measuring Oxygen Saturation with a Pulse Oximeter (BIOP-07)

**Sensors Used:** Fingertip Pulse Oximeter or Smartwatch with SpO₂ Sensor  
**What's Measured:** Blood oxygen saturation (SpO₂), heart rate, and respiration trends

**Description**  
our blood carries oxygen to every cell — and with a pulse oximeter, you can measure how efficiently it does the job. In this experiment, explore oxygen saturation (SpO₂) as a window into respiratory health, aerobic fitness, and altitude adaptation.**

Use a fingertip pulse oximeter or smartwatch with SpO₂ tracking to measure oxygen levels:

- At rest
- During and after exertion (e.g., walking or stair climbing)
- At altitude, if available (e.g., on a hill or in a tall building)

Log changes in SpO₂, and optionally track heart rate and breathing rate to explore the body's response to oxygen demand. This experiment connects core ideas from respiratory physiology, hemoglobin binding, and oxygen transport — and shows how our bodies adapt to changing environments and activity levels.


### Up, Down, and Out of Breath: Tracking Altitude and Pressure Changes (BIOP-08)

**Sensors Used:** Smartwatch Barometer, Altimeter, Heart Rate Monitor, SpO₂ Sensor  
**What's Measured:** Altitude, barometric pressure, oxygen saturation, and heart rate

**Description**  
What happens to your body when the air gets thinner — even just a little? In this experiment, use a smartwatch or smartphone barometer to track altitude and pressure changes during daily elevation shifts, such as climbing stairs, hiking, or riding an elevator.**

Log changes in barometric pressure and altitude, and pair them with heart rate and oxygen saturation (SpO₂) data. This allows you to explore how your body responds to lower oxygen availability — even at modest elevations — by adjusting circulation and breathing.

For an added twist, track barometric pressure across several days to observe how weather-driven pressure shifts subtly impact breathing, energy levels, or physical performance.

This experiment blends environmental physics with human physiology, highlighting how even small atmospheric changes can influence how we feel and function.


### Breath Control: Exploring Biofeedback and Calm with a Smartwatch (BIOP-09)

**Sensors Used:** Smartwatch with HRV, Heart Rate, (Optional: Skin Temperature or EDA Sensor)  
**What's Measured:** Heart rate, heart rate variability (HRV), and markers of relaxation

**Description**  
What if you could watch your body relax in real time? This experiment introduces students to biofeedback — using technology to observe and gently influence physiological processes like heart rate, stress, and autonomic balance.**

Using a smartwatch or breathing-coach app, follow a guided slow-breathing session (typically 4-6 breaths per minute). As breathing slows, observe how heart rate decreases and HRV increases — a clear sign that the parasympathetic nervous system is taking over.

If supported, track additional indicators like skin temperature or electrodermal activity (EDA) to measure sympathetic arousal. Students can also reflect on their emotional state before and after the session — connecting the data to personal awareness, and the science to self-regulation.

This experiment offers a rare moment where physiology, psychology, and mindfulness meet — and where calm becomes visible.

---


### Reaction Time & Cognition

---


### Reaction Time Challenge: Measuring Your Neural Reflexes (BIOP-10)

**Sensors Used:** Touchscreen, Camera (Optional), Timer App  
**What's Measured:** Human reaction time to visual or auditory stimuli

**Description**  
How fast can your brain respond to the world around you? In this experiment, use a smartphone to measure reaction time — the interval between a stimulus (like a flash or beep) and a physical response (like a tap or movement).**

Use a reaction time app, a simple screen flash, or an audio tone as the trigger. Test different conditions:

- Left vs. right hand
- With or without distractions
- Visual vs. auditory stimuli

Run multiple trials to calculate averages, variance, and identify patterns. This experiment offers a hands-on way to explore how your nervous system, senses, and motor responses work together — and how small changes can reveal big insights about brain-body coordination.


### Tapping into the Brain: Estimating Cognitive Load with Tap Speed (BIOP-11)

**Sensors Used:** Touchscreen, Timer App, (Optional: Spreadsheet or CSV Export)  
**What's Measured:** Tap frequency, timing variability, and psychomotor performance under cognitive load

**Description**  
How fast can you tap when your brain is busy? This experiment explores how cognitive load, fatigue, and distraction affect psychomotor speed by having students tap rapidly on a smartphone screen — and analyze how performance changes under different conditions.**

Use a tap-speed app or a manual stopwatch and logging setup. Have the participant tap as quickly as possible for 10-15 seconds, then measure:

- Total number of taps
- Time between taps
- Variability in speed

Then repeat the test:

- After physical exertion
- While multitasking (e.g., solving math problems or answering questions)
- With background noise or distractions

Analyze the results in a spreadsheet or with ChatGPT-assisted CSV analysis to explore how the brain manages attention, motor control, and mental fatigue. It's a fast, flexible intro to cognitive neuroscience, with clear connections to real-world multitasking and human performance.

---


### Sleep & Circadian Rhythms

---


### Rhythms of Rest: Tracking Sleep and Circadian Cycles with a Smartwatch (BIOP-12)

**Sensors Used:** Smartwatch or Sleep Tracker, (Optional: Tap-Speed App or Reaction Timer)  
**What's Measured:** Sleep duration and stages, heart rate trends, and daytime performance

**Description**  
Sleep isn't just rest — it's restoration, memory consolidation, and your body's circadian clock in action. In this experiment, use a smartwatch or sleep-tracking device to explore your own sleep patterns and the science behind biological rhythms.**

Over several days or a full week, record:

- Bedtime and wake time
- Estimated sleep stages (light, deep, REM), if available
- Overnight heart rate trends

Optionally, log your morning mood, alertness, or reaction time using a simple tap-speed app or reflex test. Then compare how sleep quality and consistency affect daytime performance and overall well-being.

This experiment connects circadian biology to real life, helping students understand how sleep influences focus, energy, and health — and offering insight into how we can improve it.

---


### Movement & Gait Tracking

---


### Balancing Physics: Posture and Movement with Smartphone Sensors (BIOP-13)

**Sensors Used:** Accelerometer, Gyroscope  
**What's Measured:** Body sway, balance, motion symmetry, and postural stability

**Description**  
Your phone is a miniature motion lab — and your body is the subject. In this experiment, explore balance and posture by placing a smartphone on your head, back, or chest while standing, walking, or performing stability tests.**

Use the accelerometer and gyroscope to track small shifts in orientation and movement. Try comparing:

- Standing still vs. balancing on one foot
- Normal walking vs. heel-to-toe walking in a straight line

Analyze how your body sways, how stable your movements are, and how your center of mass shifts in different conditions. This experiment links classical mechanics with human biomechanics, making it perfect for studying coordination, postural control, and dynamic balance — using nothing but your phone.


### Walking Waves: Analyzing Gait with Smartphone Sensors (BIOP-14)

**Sensors Used:** Accelerometer, Gyroscope  
**What's Measured:** Gait cycle, step frequency, stride symmetry, and impact forces

**Description**  
Every step creates a rhythm — a physical signature of how your body moves through space. In this experiment, turn your smartphone into a gait lab by recording motion data while walking**

Secure the phone to your hip, chest, or even shoe, then walk at a steady pace. Use a sensor-logging app like Phyphox to record data from the accelerometer and gyroscope. Look for:

- Step frequency
- Stride symmetry
- Impact forces (seen as periodic spikes in acceleration)

Export your data for analysis using ChatGPT, a spreadsheet, or coding tools to explore your unique walking waveform. This kind of motion analysis is used in sports science, rehabilitation, and wearable health tech — and now, it's accessible with the device in your pocket.


### Steps in Sync: Analyzing Gait and Movement with a Smartwatch (BIOP-15)

**Sensors Used:** Smartwatch (Accelerometer, Gyroscope, Gait Metrics), (Optional: Smartphone Camera)  
**What's Measured:** Step count, cadence, stride length, and vertical oscillation

**Description**  
Every step is a data point — and your smartwatch can capture the full story. In this experiment, analyze gait mechanics by tracking how your body moves with each stride, and how changes in pace, terrain, or footwear affect your walking efficiency.**

Start by walking at a normal pace on flat ground, recording:

- Step count
- Cadence (steps per minute)
- Stride length
- Vertical movement (oscillation)

Then repeat under different conditions: faster or slower speeds, stairs, uneven surfaces, or different shoes. Observe how the metrics shift — and what they reveal about posture, effort, or even injury risk.

For deeper insight, pair this with a smartphone video to capture visible gait features like arm swing, foot strike, and symmetry. Together, the data paints a detailed picture of your personal walking pattern — the physics of motion made wearable.


### The Shaky Truth: Measuring Muscle Fatigue with Isometric Holds (BIOP-16)

**Sensors Used:** Accelerometer  
**What's Measured:** Micro-vibrations from muscle fatigue during sustained effort

**Description**  
Even when you're holding perfectly still, your muscles are working — and over time, they start to shake. In this experiment, explore muscle fatigue by performing an isometric hold: extend your arm and hold a smartphone as steady as possible while recording accelerometer data.**

Use a sensor-logging app to track subtle micro-vibrations as your muscles tire. These small tremors will increase in amplitude over time, revealing the moment when endurance gives way to fatigue.

Graph vibration amplitude vs. time to visualize this decline in stability. Try comparing your dominant vs. non-dominant arm, or repeat the test after exercise or rest to explore recovery and fatigue dynamics.

This experiment turns biomechanical performance into a quantifiable signal, offering a hands-on view of what your muscles are silently saying.

---


### Skin Temperature & Thermoregulation

---


### Heat Maps of the Body: Tracking Skin Temperature with Infrared Imaging (BIOP-17)

**Sensors Used:** Infrared (IR) Camera or Thermal Imaging Attachment  
**What's Measured:** Skin surface temperature distribution and thermal changes over time

**Description**  
Your skin tells stories — through heat. In this experiment, use infrared imaging to explore how body temperature shifts in response to activity, environment, and emotion. With a thermal camera (like the CAT S60 or a smartphone IR attachment), visualize how heat is distributed across the body in real time.**

Measure temperature changes:

- Before and after applying a cold pack
- During and after physical activity
- While observing stress responses, blushing, or cooling recovery

Capture thermal images or videos to analyze patterns of temperature symmetry, recovery time, and localized heat changes. This experiment reveals how thermoregulation, circulation, and metabolic activity shape the body's thermal fingerprint — making the invisible, visible.


### Cold Hands, Warm Body: Tracking Skin Temperature Recovery (BIOP-18)

**Sensors Used:** Smartwatch Skin Temperature Sensor, Infrared Thermometer, or Thermal Camera  
**What's Measured:** Rate of skin temperature recovery after cold exposure

**Description**  
Even when your hands get cold, your body fights to keep your core warm. In this experiment, explore peripheral thermoregulation by tracking how skin temperature recovers after cold exposure — a powerful way to visualize vasoconstriction, vasodilation, and metabolic heat flow.**

Immerse one hand in cold water for 1 minute, then remove it and measure skin temperature at regular intervals using a smartwatch, IR thermometer, or thermal camera.

Compare recovery patterns across:

- Dominant vs. non-dominant hand
- Different individuals
- Varying stress levels, hydration, or ambient temperature

This experiment makes the body's homeostatic systems visible — revealing the real-time balance between heat loss and active recovery as your circulatory system springs into action.

---


### Advanced Projects

---


### Sonar Heartbeat: Using Smart Speakers to Detect Cardiac Rhythms (BIOP-19)

**Sensors Used:** Speaker and Microphone Array (Smart Speaker), (Optional: Audio Signal Processing Tools)  
**What's Measured:** Microscopic chest movements caused by heartbeat via reflected sound waves

**Description**  
What if your smart speaker could detect your heartbeat — not by hearing it, but by feeling it through sonar? In this advanced experiment, explore how a speaker and microphone system can detect the tiny chest movements caused by each heartbeat using high-frequency sound reflections.**

Smart speakers emit inaudible tones, then analyze the reflected signals to capture subtle rhythmic shifts — turning the system into a contactless biosensor. While reproducing the full signal-processing pipeline requires advanced tools, students can conceptually investigate:

- Acoustic reflection and interference
- Doppler effects
- Bioacoustics and remote sensing

This experiment introduces a cutting-edge approach to non-invasive health monitoring, and offers a glimpse into the future of telemedicine and ambient biosensing.

**References:**    
[1] "Herzschlag messen mit Smart-Speaker als Sonar", [https://www.heise.de/news/Herzschlag-messen-mit-Smart-Speaker-als-Sonar-5077341.html](https://www.heise.de/news/Herzschlag-messen-mit-Smart-Speaker-als-Sonar-5077341.html)


### Draw Your Own Biosensor: Pencil-and-Paper Skin Electrode Circuits (BIOP-20)

**Sensors Used:** Handmade graphite skin electrodes, Conductive Tape or Wires, (Optional: Amplifier or Data Logger)  
**What's Measured:** Biopotential signals (ECG, EMG, EEG) using DIY electrodes

**Description**  
With just pencil and paper, you can build a functional biosensor — one that interfaces directly with the human body. In this advanced and creative experiment, explore how graphite circuits drawn onto paper can serve as skin-friendly electrodes for detecting physiological signals like heartbeats (ECG), muscle activity (EMG), or even brain waves (EEG).**

Students replicate real research by:

- Drawing conductive pathways with a soft graphite pencil
- Attaching wires or conductive tape
- Applying the sensor like a temporary tattoo electrode

These DIY patches demonstrate the principles of biopotential sensing, signal conduction, and low-cost wearable design — offering a hands-on intro to bioinstrumentation, circuit design, and the future of eco-friendly medical tech.

**References:**    
[1] "Aus Papier und mit Bleistift gezeichnet: Mess-Sensoren für die Haut", [https://www.heise.de/news/Aus-Papier-und-mit-Bleistift-gezeichnet-Mess-Sensoren-fuer-die-Haut-4842450.html](https://www.heise.de/news/Aus-Papier-und-mit-Bleistift-gezeichnet-Mess-Sensoren-fuer-die-Haut-4842450.html)

---


### Capstone / Research Extension

---


### Capstone: DIY Biomedical Sensing — Hacking the Smartphone into a Biosignal Lab (BIOP-21)

Smartphones are powerful. But with a bit of external circuitry, they can become biosignal labs, chemical analyzers, or even ultrasound platforms. This capstone explores how simple electronic add-ons — often built with breadboards and off-the-shelf parts — can unlock bold new frontiers in biophysics and biomedical engineering. These DIY builds connect to your phone via the audio jack, USB audio interface, or Bluetooth (Arduino/ESP32). They go beyond internal sensors to tap into the electrical rhythms of the body itself.

1. One-OpAmp ECG: Measuring the Heart's Electrical Signal
Build a basic ECG amplifier using a single op-amp, a few resistors, and body-surface electrodes. Feed the signal (~1 mV) into the smartphone's mic input, and visualize it using an oscilloscope app. What you'll see: the electrical waveform of your heartbeat, including P, QRS, and T waves — a personal tour of your cardiac cycle.

2. EEG Lite: Brain Waves on a Budget
Use a high-gain, shielded amplifier to detect µV-level brain activity, especially alpha waves (linked to relaxation) and eye blinks. The signal enters the smartphone through the mic input, as with the ECG. Despite the noise, seeing your brain flicker onscreen is a jaw-dropping introduction to neurotech — and to the challenges of real-world biosignal acquisition.

3. DIY Pulse Sensor (Piezo + Amp)
Swap out optical PPG for a mechanical pulse sensor: a piezoelectric film or microphone diaphragm senses pressure waves from the skin. Amplify the signal and feed it to the phone via audio jack. This setup records the mechanical pulse waveform, offering a tactile look at your heartbeat and a point of comparison for optical sensors.

4. GSR / EDA Sensor: Measuring Stress Through the Skin
Build a simple circuit with two skin-contact electrodes and a constant voltage source to measure electrodermal activity (EDA). As stress or arousal increases, skin conductance rises. Feed this signal into your phone via mic input or Bluetooth microcontroller, and watch your nervous system in action — the same principle behind lie detectors and emotional sensing tech.
