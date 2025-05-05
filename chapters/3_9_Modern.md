---
layout: default
title: 3.9 Constants & Modern Physics
---

## Constants & Modern Physics

Modern physics begins where classical understanding reaches its limits—at the atomic, subatomic, and cosmological scales, or when exploring the fundamental constants that define the universe itself. This chapter brings those lofty ideas within reach through hands-on experiments that connect the abstract with the observable. With nothing more than a smartphone and a few clever materials, students can explore concepts like Planck's constant, quantum behavior, diamagnetism, and the speed of light. These experiments are not about replicating precision lab results, but about building intuition—making deep physics visible, tangible, and real through creativity, curiosity, and direct experience.

---


### Gravitational Constant

---


### Estimating the Gravitational Constant G (MODP-01)

**Sensors Used:** None (uses derived values from earlier measurements)  
**What's Measured:** Gravitational constant G (estimated via Earth's radius, mass, and surface gravity)

**Description**  
Once you've estimated Earth's mass and radius—as explored in the Astronomy chapter—you can take it a step further and calculate Newton's gravitational constant, G, from first principles. Begin with Newton's Law of Universal Gravitation, which describes the force between two masses. At the surface of the Earth, the gravitational force on a test mass is simply its weight, F = m₁g, and is also given by F = G·m₁·m₂ / r². Equating the two expressions and solving for G gives the formula: G = g·r² / m_E.

Now plug in the values you've previously estimated or measured: g = 9.81 m/s², r_E ≈ 6,000,000 meters, and m_E ≈ 4.5 × 10²⁴ kilograms. Doing the math yields an estimate of G ≈ 7.8 × 10⁻¹¹ N·m²/kg². While the accepted value is 6.67 × 10⁻¹¹, this estimate is impressively close—within about 20%—especially considering it's derived with no laboratory equipment, just basic observations, a smartphone, and some algebra. Ask ChatGPT to walk you through the calculation, and you'll see how far curiosity and logic can take you toward uncovering a universal constant.

---


### Speed of Light

---


### Measuring the Speed of Light (with Traceroute!) (MODP-02)

**Sensors Used:** Network diagnostics (traceroute or ping tools)  
**What's Measured:** Signal latency, used to estimate the speed of light in fiber optic cables

**Description**  
You don't need a particle accelerator or a laser lab to measure the speed of light—you just need a smartphone and an internet connection. By using the traceroute or ping command, students can send a signal across the Atlantic and measure how long it takes to come back. For example, if you ping a server in New York from Paris and record a round-trip time of about 60 milliseconds, you can use this data to estimate the speed at which the signal traveled.

Since the round trip includes both directions, divide the latency in half to get the one-way travel time. Then, divide the distance (roughly 5,800 km) by this time to estimate the signal's velocity. The result should come out close to 200,000 km/s—about two-thirds the speed of light in a vacuum, which is expected since light slows slightly in fiber optic cables.

Is it an approximation? Absolutely. But with nothing more than a smartphone and a global data network, you're probing one of the universe's fundamental constants—c—in a way that's both playful and profound.


### Measuring the Speed of Light in a Microwave (MODP-03)

**Sensors Used:** None (uses microwave oven and ruler)  
**What's Measured:** Wavelength of standing wave; speed of light calculated from wavelength × frequency

**Description**  
Your kitchen microwave holds a hidden physics lab—and with some cheese or marshmallows, you can use it to estimate the speed of light. First, remove the rotating plate so the food doesn't move during heating. Arrange a line of slices (cheese, chocolate, or marshmallow works well) on a microwave-safe plate and heat just long enough for hot spots to appear. These spots form because the microwaves bounce inside the oven, creating a standing wave pattern.

Once the hot spots are visible, measure the distance between them—this gives you half the wavelength of the microwaves. Multiply the full wavelength by the microwave's frequency (usually printed on the back of the unit, often around 2.45 GHz) to estimate the speed of light. Most results come impressively close to the accepted value of 3 × 10⁸ m/s.

This experiment is playful, tactile, and remarkably effective—it turns a common appliance into a portal for exploring one of nature's most fundamental constants.

**References:**    
[1] "How To Calculate The Speed Of Light With Your Microwave," [https://www.youtube.com/watch?time_continue=211&v=GH5W6xEeY5U](https://www.youtube.com/watch?time_continue=211&v=GH5W6xEeY5U)  
[2] "Measuring the Speed of Light," The Naked Scientists, [https://www.thenakedscientists.com/get-naked/experiments/measuring-speed-light](https://www.thenakedscientists.com/get-naked/experiments/measuring-speed-light)

---


### Avogadro's Number and Charge of the Electron

---


### Avogadro's Number via Oil Film (MODP-04)

**Sensors Used:** Camera  
**What's Measured:** Area of oil film; molecular thickness inferred to estimate Avogadro's number

**Description**  
With nothing more than a drop of oil, a powder-dusted surface, and a smartphone camera, students can recreate a famous experiment that hints at the scale of molecules—and even estimate Avogadro's number. In this classic setup, a small known volume of oil is carefully placed on the surface of water that's been sprinkled with a fine powder like cinnamon or lycopodium. As the oil spreads, it pushes the powder outward, forming a visible circle. The assumption is that the oil forms a film one molecule thick.

By photographing the spread and analyzing the area with basic image tools or pixel counting, students can estimate the diameter—and therefore the thickness—of that single molecular layer. Using the known volume of the oil drop and the calculated thickness, it's possible to estimate the number of molecules involved. Combine this with the molar volume and molecular mass, and you're well on your way to a ballpark estimate of Avogadro's number.

It's a striking example of how indirect measurement, careful observation, and a pinch of physics can unlock the secrets of the molecular world—bringing the unimaginably small into view.

**References:**    
[1] "Introducing the oil film experiment," http://practicalphysics.org/introducing-oil-film-experiment.html


### Measuring the Charge of the Electron via Electrolysis (MODP-05)

**Sensors Used:** Stopwatch or camera (for timing), multimeter (for current), scale (for mass)  
**What's Measured:** Mass of copper deposited, electric current, elapsed time

**Description**  
By combining a classic chemistry setup with simple smartphone tools, students can estimate one of the fundamental constants of nature—the elementary charge of the electron. This experiment involves copper electroplating: a metal object is used as the cathode, paired with a copper anode, and both are submerged in a copper sulfate solution. When a known current is applied—using a battery or regulated power supply—copper ions are reduced and deposited on the cathode.

Students begin by measuring the mass of the cathode before and after electrolysis. They also record the current (using a multimeter) and the duration of the process (using a stopwatch or smartphone video). With these values, they apply Faraday's laws of electrolysis to calculate Faraday's constant—the charge required to deposit one mole of copper. From there, dividing by Avogadro's number yields an estimate of the charge of a single electron.

This experiment blends electrochemistry and physics, turning a tangible chemical process into a window on quantized charge—and revealing just how much information a simple metal coating can contain.

**References:**    
[1] "Introduction to copper plating," http://practicalphysics.org/introduction-copper-plating.html

---


### Planck's Constant

---


### Measuring Planck's Constant with LEDs (MODP-06)

**Sensors Used:** Voltmeter or audio input (mic jack), optional spectrometer app or lookup for LED wavelengths  
**What's Measured:** LED threshold voltage, wavelength or frequency of emitted light

**Description**  
By using just a few LEDs, a basic circuit, and a smartphone, students can experimentally estimate Planck's constant—one of the cornerstones of quantum mechanics. Each LED emits light of a specific color, which corresponds to photons of a certain energy. When forward biased, each LED begins to emit light at a specific threshold voltage—the minimum energy needed to generate photons.

In this experiment, students build a simple circuit to measure that threshold voltage using a voltmeter or even by monitoring voltage via the smartphone's microphone input (with the right setup). Then, they associate each LED's color with the corresponding frequency of light, either by referencing standard wavelength values or using a spectrometer app. With photon energy calculated from the voltage and frequency from the color, they can use the relation E=hfE = hfE=hf to estimate Planck's constant hhh.

This clever, hands-on approach makes the abstract world of quantum physics tangible, offering a striking example of how constants of nature can emerge from everyday components.

**References:**    
[1] "Planck Constant Measurement," https://physicsopenlab.org/2015/12/08/planck-constant-measurement/


### Thermal Radiation with Smartphone IR Camera (MODP-07)

**Sensors Used:** Infrared camera (e.g., CAT S60 or FLIR One)  
**What's Measured:** Infrared radiation from heated objects (qualitative temperature and emissivity differences)

**Description**  
Thermal radiation, the invisible glow of heat, becomes visible through the lens of a smartphone infrared camera. In this experiment, students use a device like the CAT S60 or a thermal imaging attachment to explore blackbody radiation in everyday materials. By heating objects made of metal, plastic, ceramic, or cloth—using sunlight, warm water, or a hair dryer—they can watch how each material emits infrared light depending on its temperature and emissivity.

The thermal camera reveals bright and dark patches, subtle gradients, and thermal fingerprints, transforming the concept of blackbody emission from an abstract curve into something visually intuitive. This experiment opens the door to discussions about radiation laws, emissivity, heat transfer, and the physics of temperature — all without needing to see flames or filaments. It's a striking way to explore how all warm objects glow, and how technology lets us see what our eyes alone cannot.

---


### Boltzmann's Constant

---


### Brownian Motion with a DIY Microscope (MODP-08)

**Sensors Used:** Camera (with clip-on or DIY microscope lens)  
**What's Measured:** Random motion of suspended particles (Brownian motion), optionally particle size or thermal energy

**Description**  
In this experiment, students witness the restless dance of microscopic particles — a visible trace of invisible molecular motion. By placing a drop of diluted milk or pollen-infused water on a slide and observing it under a smartphone microscope or Foldscope, they can capture one of the earliest visual proofs of atomic theory: Brownian motion. The tiny particles appear to jitter and bounce erratically, buffeted by countless unseen water molecules in thermal motion.

By recording a video and analyzing the movement frame by frame — either manually or with AI tools — students can go further, estimating average displacement, particle size, or even inferring aspects of the surrounding temperature. What was once an abstract concept in statistical mechanics becomes directly observable, bringing the chaos of thermal energy into focus, right on the screen.

**References:**    
[1] "Brownian motion in a smoke cell," http://practicalphysics.org/brownian-motion-smoke-cell.html  
[2] "Brownian Motion," physicsexperiments.eu/1944/brownian-motion


### Johnson Noise and the Boltzmann Constant (MODP-09)

**Sensors Used:** Microphone (via audio input jack)  
**What's Measured:** Voltage noise generated by thermal fluctuations in a resistor

**Description**  
Johnson noise — the subtle hiss of electrons dancing from heat alone — is a profound window into the statistical nature of reality. In this advanced experiment, students use a resistor, a low-noise amplifier, and a smartphone audio input to capture the random thermal fluctuations known as Johnson (or Nyquist) noise. By carefully analyzing this signal, it's possible to estimate the Boltzmann constant, kBk_BkB​, which connects temperature to energy at the molecular level.

The signal is extremely faint, so this activity requires good shielding, a sensitive circuit, and digital signal analysis — but it opens a path to deep insights in thermodynamics and quantum theory. With persistence, students will see how a smartphone can detect the statistical motion of electrons, and how one of the universe's most fundamental constants reveals itself through noise.

**References:**    
[1] "Johnson Noise, Boltzmann Constant and Brownian Motion," https://physicsopenlab.org/2016/10/07/johnson-noise-and-boltzmann-constant/

---


### Quantum Mechanics

---


### Sodium Vapor Lamps (MODP-10)

**Sensors Used:** Smartphone camera  
**What's Measured:** Emission spectra of sodium and comparison with known light sources

**Description**  
This experiment reveals the atomic fingerprints of elements—starting with the iconic yellow glow of sodium. Using a smartphone camera and a simple diffraction grating (such as the reflective surface of a CD or DVD), students can build a homemade spectroscope and capture the visible spectrum of various light sources. Begin by observing known sources like red and green laser pointers to calibrate the spectrum and establish reference wavelengths. Then turn your gaze toward a sodium vapor street lamp, or recreate the effect in a more hands-on way by placing a pinch of table salt on a metal pin and introducing it into a candle flame.

Viewed through the spectroscope, sodium's characteristic yellow emission line becomes vivid and unmistakable. Compare this to the diffuse flame spectrum without salt to highlight the sharpness and specificity of atomic emission. This experiment introduces the principles of spectroscopy, quantum transitions, and the unique visual signatures that atoms reveal when excited — all using just light, salt, and a smartphone.


### Polarization and Photon Spin (MODP-11)

**Sensors Used:** Smartphone camera or light sensor  
**What's Measured:** Light intensity as a function of filter orientation

**Description**  
Light may seem simple, but when passed through a polarizing filter, its hidden structure is revealed. In this experiment, students explore the concept of polarization by shining light through one, then two, polarizing filters. Using a smartphone to observe or measure the intensity of transmitted light, they rotate the second filter and watch as the light dims and brightens, depending on its alignment.

This changing intensity demonstrates that light waves have orientation—that they can be filtered by direction. When the filters are aligned, light passes through easily. As the angle between them increases, the transmission drops, and at 90 degrees, it vanishes. This classical behavior opens the door to quantum ideas: each photon carries a tiny amount of angular momentum, or spin, which determines how it interacts with the filter.

With just a phone and two pieces of polarized film, students step into the world of wave-particle duality, quantum measurement, and one of the simplest—but most beautiful—demonstrations of quantum behavior in the everyday world.


### Interference from Laser Pointer and Razor Blades (MODP-12)

**Sensors Used:** Smartphone camera  
**What's Measured:** Fringe spacing, light wavelength

**Description**  
Light behaves like a wave—and few experiments make that clearer than this one. By shining a laser pointer through a narrow slit formed by two razor blades placed edge-to-edge, students create a homemade diffraction setup. On a distant wall or screen, the laser light spreads into an interference pattern of bright and dark bands, known as fringes.

Using a smartphone camera, students can record the pattern and then measure the distance between the fringes. With some basic geometry and knowledge of the laser's distance from the wall, they can calculate the wavelength of the light itself.

This experiment doesn't just reveal the wavelike nature of light—it invites students to measure something invisible using nothing more than light, precision alignment, and a little mathematics. It's a beautiful, hands-on illustration of wave interference and the quantum mystery encoded in every beam of laser light.


### Photon Pressure on a Mirror (MODP-13)

**Sensors Used:** Smartphone camera (video)  
**What's Measured:** Mirror deflection due to light-induced momentum

**Description**  
Light may feel weightless, but it carries momentum—and in this experiment, students explore that subtle reality by detecting radiation pressure. Suspend a small, lightweight mirror on a thin thread to create a simple torsion balance. Then, shine a laser pointer or a focused smartphone flashlight steadily onto the mirror. Over time, or with pulsed illumination, the mirror may begin to deflect ever so slightly under the influence of photon pressure.

Use your smartphone's video function to record the mirror's motion, and analyze the footage frame by frame to spot tiny shifts. While the effect is delicate and tricky to quantify without high-end equipment, the qualitative observation alone is profound. It's a tangible gateway to the idea that light, though massless, carries momentum—and can push, however gently, on the matter it meets.

This experiment links classical optics with quantum theory, offering a rare opportunity to see one of physics' most elegant predictions unfold in a homemade lab.


### Band Gap of Photodiodes via Light and Voltage (MODP-14)

**Sensors Used:** Photodiode, smartphone flashlight, multimeter or audio jack voltage reader  
**What's Measured:** Voltage response of a photodiode under different wavelengths of light

**Description**  
Semiconductors are the building blocks of modern technology, and their most fundamental property—the band gap—can be explored with simple components and a smartphone. In this experiment, students use a photodiode harvested from an old remote control or solar garden light, connecting it to a basic voltage-reading setup such as a multimeter app or audio jack interface.

By shining different colors of light—red, green, and blue—from the smartphone flashlight or LED sources onto the photodiode, students measure the resulting voltage output. Since the energy of each photon depends on its wavelength, only light with energy above the material's band gap will produce a measurable photoresponse. The threshold at which voltage begins to rise marks the effective band gap energy of the material.

This elegant experiment connects optics, electronics, and quantum physics, showing how everyday materials embody the discrete nature of energy transitions. With just a bit of circuitry and color, students glimpse the quantum rules that govern how our devices work.


### Measuring the Half-Life of Tritium with a Smartphone (MODP-15)

**Sensors Used:** Camera (with radioactivity detection app)  
**What's Measured:** Beta decay rate of tritium over time

**Description**  
Tritium, a radioactive isotope of hydrogen, provides a rare opportunity to measure nuclear decay with a smartphone. This isotope undergoes beta decay with a half-life of about 12.32 years—and while imperceptible to our senses, its emission can be detected with a smartphone camera using a specialized radioactivity app that repurposes the sensor as a crude beta detector.

To begin, acquire a tritium source such as a glow-in-the-dark vial commonly found in watches or keychains. Place the phone in a stable, lightproof enclosure to shield it from ambient radiation and light. Record an initial count rate over a consistent period, logging the results as a baseline. Then—exercise patience. After a full year, repeat the measurement using the exact same setup.

The slow decline in count rate reflects the decay of tritium atoms. By comparing the two measurements and analyzing the decrease, students can derive an estimate of tritium's half-life. This long-term project turns a smartphone into a personal nuclear lab—showing how even the faintest of atomic processes can leave a measurable trace.

---


### Advanced Concepts

---


### DIY Electron Beam with Car Bulb (MODP-16)

**Sensors Used:** Smartphone camera (for video observation), optional magnetic field sensor  
**What's Measured:** Visible electron beam deflection in a magnetic field

**Description**  
With a bit of ingenuity and some salvaged parts, students can recreate a rudimentary electron beam experiment reminiscent of early cathode ray tube demonstrations. This setup uses a dual-filament car headlight bulb—an inexpensive and surprisingly effective vacuum envelope. When one filament is heated by a current, it emits electrons through thermionic emission. A voltage applied to the second filament or a nearby electrode accelerates these electrons, creating a narrow beam.

In a darkened room, the path of this electron beam may become visible due to residual gas ionization inside the bulb, especially if the bulb has aged or been lightly evacuated. Bring a strong magnet (like a neodymium magnet) near the bulb, and the beam deflects—demonstrating the interaction between charged particles and magnetic fields.

Students can film the experiment using a smartphone camera to capture deflection angles or use a magnetic field sensor to log the local field strength. It's a striking and hands-on way to observe classic concepts in electromagnetism, from the Lorentz force to early experiments that paved the way for television and particle physics.


### Thermionic Emission with Heated Filament (MODP-17)

**Sensors Used:** Camera (video), light sensor, optional multimeter or current probe  
**What's Measured:** Light intensity vs. temperature, onset of electron emission

**Description**  
Thermionic emission—the phenomenon where electrons are "boiled off" a hot metal surface—played a pivotal role in the birth of modern physics. In this experiment, students explore this concept using nothing more than an old-fashioned incandescent bulb and their smartphone.

Begin by filming the bulb as it slowly brightens from cold to full intensity. As the tungsten filament heats up, its glow emerges from red to white, tracing a visible curve of blackbody radiation. The brightness increases rapidly with temperature, hinting at the exponential relationship described by Planck's radiation law. A light sensor app can be used alongside the video to quantify this relationship more precisely.

For a deeper dive into thermionic emission itself, use a dual-filament bulb like those found in car headlights. Heat one filament to incandescence, and measure the current received by the second filament due to thermally emitted electrons bridging the vacuum. This setup mimics the early experiments of vacuum tube technology and offers an experimental path to visualizing electron emission without complex lab equipment.

Both variations touch on major themes in modern physics—blackbody radiation, the energy-temperature relationship, and the quantum leap that Planck introduced. It's a vivid, hands-on way to experience the physics that helped launch the 20th-century revolution in science.


### Photon Noise: Measuring the Quantum Nature of Light (MODP-18)

**Sensors Used:** Camera  
**What's Measured:** Pixel intensity fluctuations (shot noise) under low-light conditions

**Description**  
Light may seem smooth and continuous to our eyes, but at its core, it's delivered in tiny, indivisible packets called photons. This quantum reality reveals itself in a subtle but measurable way through photon noise—also known as shot noise—a phenomenon that becomes most apparent in extremely low light. Unlike electronic or thermal noise, which have various causes, photon noise arises purely from the random arrival times of individual photons. It follows Poisson statistics, a mathematical fingerprint of randomness that's intrinsic to quantum events.

To explore this invisible jitter, students can use a smartphone camera in a carefully controlled setting. Either cover the lens with a neutral density filter or conduct the experiment in a very dimly lit room. Capture a series of identical images of a static, low-light scene. Even though nothing visibly changes, the brightness of individual pixels will fluctuate slightly from frame to frame. These fluctuations are not imperfections—they're the quantum granularity of light making itself known.

By analyzing the variation in pixel intensities, students can trace the signature of discrete photon arrivals. It's a rare opportunity to observe quantum effects without needing particle accelerators or cryogenics—just a smartphone, some darkness, and a careful eye.

---


### Capstone / Research Extension

---


### Building Your Own Scanning Tunneling Microscope (STM)

**Sensors Used:** Custom-built electronics (not smartphone-based)  
**What's Measured:** Quantum tunneling current; atomic-scale topography

**Description**  
What if you could actually see atoms—not in a textbook, not in a simulation, but on your own screen, using something you built? That's exactly what this extraordinary DIY project offers. Based on the work of David Berard, this home-built Scanning Tunneling Microscope (STM) proves that atomic-scale imaging isn't confined to million-dollar labs. With a bit of soldering skill, a piezo buzzer, a sharpened wire tip, and some clever circuitry, students can construct an instrument that uses quantum tunneling to detect the contours of individual atoms.

Unlike conventional microscopes that rely on light, the STM works by measuring an electrical current that flows when a conductive tip hovers just nanometers above a surface. This current is highly sensitive to distance—changing exponentially with even the slightest variation—allowing the device to "feel" the atomic landscape one point at a time.

Though this project doesn't use a smartphone, it's deeply aligned with the spirit of Sphysix: building your own scientific tools from everyday materials, guided by curiosity and ingenuity. For anyone fascinated by quantum physics, nanoscience, or extreme DIY experimentation, building an STM isn't just a capstone—it's a milestone.

**References:**    
[1] "Home-Built STM," Dan Berard, https://dberard.com/home-built-stm/


### Building a High-Precision DIY Quartz Clock for Time Dilation Experiments

**Sensors Used:** Oven-Controlled Crystal Oscillator (OCXO), microcontroller with logging capability  
**What's Measured:** Precise elapsed time; potential tiny deviations due to relativistic effects

**Description**  
Precision timekeeping lies at the heart of modern physics—and in this advanced project, students build a high-accuracy quartz clock using an Oven-Controlled Crystal Oscillator (OCXO). These components, designed to maintain a rock-solid frequency by keeping the crystal at a stable temperature, dramatically improve the accuracy of conventional quartz clocks.

While the primary outcome is a stable, high-resolution timebase, this opens the door to ambitious experiments. One tantalizing possibility is using two identical clocks—one stationary, the other traveling aboard an aircraft—to look for relativistic time dilation, as predicted by Einstein's theory of General Relativity. Although the predicted time difference from commercial air travel is only a few nanoseconds, even attempting such a comparison brings relativity out of abstraction and into physical, measurable (or nearly measurable) reality.

More realistically, this project teaches the principles of oscillator stability, thermal control, frequency measurement, and experimental design at the limits of accuracy. Whether or not you detect time dilation directly, you'll be thinking—and building—like a physicist.

**References:**    
[1] "Build the Most Accurate DIY Quartz Clock Yet", [https://spectrum.ieee.org/diy-ocxo-quartz-clock](https://spectrum.ieee.org/diy-ocxo-quartz-clock)
