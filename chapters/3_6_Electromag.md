---
layout: default
title: 3.6 Electromagnetism & Fields
---

# Electromagnetism & Fields

Electricity and magnetism are two facets of the same fundamental force—beautifully unified by Maxwell's equations and essential to nearly every aspect of modern technology, from power grids and motors to wireless communication and MRI machines. In this chapter, we explore how smartphones can be transformed into instruments for detecting magnetic fields, visualizing induced currents, and probing electromagnetic waves. Equipped with built-in magnetometers, microphones, antennas, and cameras, your phone becomes a pocket-sized physics lab for exploring both static and dynamic field effects, electromagnetic induction, wave propagation, and the invisible infrastructure of our digital world.

---


### Mapping Magnetic Fields

---


### Measuring Magnetic Field Strength vs. Distance (EMAG-01)

**Sensors Used:** Magnetometer  
**What's Measured:** Magnetic field strength as a function of distance

**Description**  
This experiment explores how the strength of a magnetic field changes with distance from its source — a core question in electromagnetism. Using a smartphone magnetometer app such as phyphox or Physics Toolbox, students place a small bar magnet in a fixed position and then systematically move the phone away in equal increments, such as every 1 cm. At each position, they record the magnetic field strength. Once the data is collected, it can be plotted using a spreadsheet or AI tool like ChatGPT to determine how the field decays with distance — for example, whether it follows an inverse square (1/r²) or inverse cube (1/r³) relationship. The magnetic dipole field from a small bar magnet should ideally follow a 1/r³ trend, which becomes evident through careful data collection and plotting. This experiment not only reinforces the mathematical nature of field laws, but also highlights how smartphone sensors can be used for meaningful, quantitative physics investigations.


### Exploring Earth's Magnetic Field: Latitude and Declination (EMAG-02)

**Sensors Used:** Magnetometer, Compass, GPS (optional)  
**What's Measured:** Vertical and total magnetic field strength; magnetic declination angle

**Description**  
This experiment uses a smartphone's built-in magnetometer and compass to investigate two global properties of Earth's magnetic field: magnetic inclination and declination. First, students use a magnetometer app to measure the vertical (Z-axis) component of Earth's magnetic field. Since this component depends on magnetic latitude — being strongest at the poles and nearly zero at the magnetic equator — it can be used to estimate one's geographic latitude. By comparing the vertical and total magnetic field strengths and computing their ratio, students can determine their magnetic inclination and compare it with known values for their location.

Next, the experiment shifts focus to magnetic declination, the angle between magnetic north (as detected by the phone's compass) and true geographic north. Students can find true north using GPS, a map, or the position of the Sun at solar noon. The difference between the two directions reveals the local magnetic declination, which varies with geographic location and is an important correction factor in navigation. Comparing the measured declination with official geomagnetic data provides insight into both local field variations and the accuracy of smartphone sensors.


### Building and Comparing a DIY Compass (EMAG-03)

**Sensors Used:** Magnetometer, Compass  
**What's Measured:** Magnetic field direction, alignment accuracy, interference effects

**Description**  
This classic experiment begins by guiding students through the creation of a homemade compass. By magnetizing a sewing needle — typically by stroking it with a permanent magnet — and floating it on a lightweight surface such as a leaf, piece of cork, or a sliver of Styrofoam, students can observe how the needle aligns itself with Earth's magnetic field. This analog compass provides a direct, tactile demonstration of geomagnetism and the behavior of dipoles in a field.

Once the DIY compass is functioning, students compare its orientation to that of their smartphone's built-in compass or magnetometer app. This comparison offers a valuable opportunity to explore the effects of nearby magnetic interference, calibration differences, and the resolution of digital versus analog methods. Through careful observation, students can assess how closely the two readings match, and whether any discrepancies arise from environmental factors or device limitations.

**References:**    
[1] "Build your own compass," [https://www.thenakedscientists.com/get-naked/experiments/build-your-own-compass](https://www.thenakedscientists.com/get-naked/experiments/build-your-own-compass)


### Losing Magnetism at the Curie Temperature (EMAG-04)

**Sensors Used:** Smartphone magnetometer  
**What's Measured:** Magnetic field strength before, during, and after heating

**Description**  
This dramatic yet simple experiment demonstrates the thermal limits of magnetism by exploring the Curie temperature — the point at which ferromagnetic materials lose their magnetic properties. Begin by magnetizing a steel nail or needle using a permanent magnet. Use a smartphone magnetometer app (such as Phyphox or Physics Toolbox) to measure its magnetic field strength at close range. Suspend the magnetized nail from a thread, or rest it on a non-magnetic surface while monitoring the field.

Next, carefully heat the nail using a lighter or candle flame. As the temperature rises and crosses the material's Curie point (around 770 °C for steel), the nail will lose its magnetism due to the thermal agitation of magnetic domains. If suspended, it may suddenly fall away from a second magnet or object it was clinging to — a striking visual cue of the phase transition. The smartphone's magnetometer will show a sharp drop in field strength. Once cooled, the nail can often be re-magnetized, confirming that the material's magnetic properties were temporarily disrupted but not permanently lost.

This experiment provides a clear, hands-on illustration of how magnetism arises from microscopic order — and how that order can be undone with heat


### How Strong Is Earth's Magnetic Field? Could You Replace It with Magnets? (EMAG-05)

**Sensors Used:** Magnetometer  
**What's Measured:** Magnetic field strength (in microtesla, µT)

**Description**  
This thought-provoking experiment invites students to measure and reflect on the strength of Earth's magnetic field using the smartphone's built-in magnetometer. Typically, the ambient geomagnetic field at the Earth's surface falls between 25 and 65 microtesla, depending on your latitude. By opening a magnetometer app, students can directly observe this field and begin to appreciate the invisible magnetic envelope that surrounds our planet.

Next, the experiment takes a comparative turn: place a small permanent magnet near the phone and measure how much stronger its local field is — likely hundreds of microtesla or more. Then, by moving the phone further away in equal steps, students can observe how rapidly the magnet's field drops off with distance. This reinforces the inverse cube law behavior of dipole magnetic fields and introduces the idea of spatial decay in field strength.

The real intrigue begins with a playful yet serious thought experiment: What if you were standing as far from your magnet as you are from the magnetic north pole? How many magnets would it take to recreate Earth's magnetic field at that distance? This opens the door to discussions of planetary magnetism, space environments, and technological shielding. On Mars, for example, the magnetic field is weak and patchy — far too feeble to deflect cosmic radiation or solar wind the way Earth's field does. Could a network of artificial magnets offer protection for future Mars colonies? How strong would they need to be?


### Mapping Magnetic Fields with a Smartphone (EMAG-06)

**Sensors Used:** Magnetometer  
**What's Measured:** Magnetic field strength and spatial distribution (µT)

**Description**  
Instead of relying on iron filings or compasses to visualize magnetic fields, this modern version of a classic experiment uses your smartphone's magnetometer to map the invisible structure of magnetic field lines. Begin by placing one or more permanent magnets on a flat surface in various configurations — single bar, side-by-side, head-to-tail, or opposing poles. Then, systematically move your smartphone across a regular grid, pausing every few centimeters to record the magnetic field strength using a magnetometer app such as phyphox or Physics Toolbox Sensor Suite.

The grid can be sketched out on paper or imagined, but be consistent with your spacing — for example, 2 cm steps along the x and y axes. At each point, log the magnetic field strength (usually given in microtesla) and its direction, if your app allows vector readings. Once your dataset is complete, export it as a CSV file.

Now comes the exciting part: use AI tools like ChatGPT to analyze your data. Upload your CSV and prompt the model with something like: "Plot this magnetic field strength data on a 2D grid and visualize the field lines." This turns your smartphone into a portable, programmable magnetometer array — capable of producing detailed, field-based visualizations that rival more traditional methods.

In doing so, you move beyond qualitative impressions of magnetic fields to quantitative mapping, exploring the dipole structure, symmetry, and decay of magnetic influence across space. This experiment seamlessly blends tactile exploration with digital analysis, reinforcing core concepts of magnetostatics while building modern data-handling skills.

**References:**    
[1] "Magnetic fields due to arrangements of magnets," [http://practicalphysics.org/magnetic-fields-due-arrangements-magnets.html](http://practicalphysics.org/magnetic-fields-due-arrangements-magnets.html)


### Detecting Hidden Iron with the Magnetometer: DIY Metal Detector (EMAG-07)

**Sensors Used:** Magnetometer  
**What's Measured:** Magnetic field strength anomalies (µT)

**Description**  
Turn your smartphone into a simple metal detector by using its built-in magnetometer to sense subtle changes in the surrounding magnetic field. With a magnetometer app like Physics Toolbox Sensor Suite, you can monitor the magnetic field in all three spatial directions (X, Y, and Z) as you move through different environments. Begin by establishing a baseline reading in an open area free of large metal objects, then slowly walk around — either indoors or outdoors — while observing the magnetometer data in real time.

As you pass near iron-containing objects such as table legs, metal pipes, fences, or even buried infrastructure like rebar or manhole covers, the field strength will spike or shift noticeably. Try hiding a known piece of iron under a cardboard sheet or table, and see if you can detect it purely by watching for distortions in the magnetic field readings. These deviations, though invisible to the eye, become clearly measurable through the phone's sensors.

This experiment demonstrates the principle behind magnetic anomaly detection used in geophysics and security screening, and highlights the sensitivity of modern smartphones to environmental electromagnetic variations. With a bit of creativity, you can even turn it into a scavenger hunt or challenge: can you locate a hidden object without seeing or touching it — only by sensing its magnetic presence?


### Measuring Energy Transfer in a Gauss Rifle with Smartphone Sensors (EMAG-08)

**Sensors Used:** Smartphone camera (slow motion), thermal camera (optional)  
**What's Measured:** Projectile velocity, impact heat signature, energy transfer

**Description**  
The Gauss rifle is a compelling demonstration of magnetic acceleration and energy transfer, combining magnetism, mechanics, and thermal effects into a single elegant experiment. Using a ruler or track, line up steel balls and powerful neodymium magnets in a specific arrangement: when a steel ball rolls in from one end and strikes the first magnet, it causes the last ball in the sequence to shoot out at high speed. This sudden acceleration results from magnetic potential energy being transferred through the balls almost instantaneously, creating a vivid example of momentum conservation and impulse.

Use your smartphone's slow-motion camera to record the action and analyze the projectile's motion. You can calculate the velocity of the launched ball by measuring travel time across a known distance. Vary the number of magnets or steel balls and observe how that changes the outcome — a valuable opportunity to experiment with mass, acceleration, and the limits of energy transfer.

For an additional layer of analysis, place a non-metallic target (such as wood or plastic) at the end of the track and observe the point of impact using a thermal camera (e.g. CAT S60). You should detect a small but measurable increase in surface temperature where the ball hits, revealing how kinetic energy is partly converted into heat upon collision. This allows you to connect mechanical and thermal energy in a highly visual and measurable way.

---


### Diamagnetism, Paramagnetism & Advanced Phenomena

---


### Demonstrating Diamagnetism and Paramagnetism with Floating Bismuth (EMAG-09)

**Sensors Used:** Magnetometer, Smartphone Camera (optional slow-motion)  
**What's Measured:** Material displacement in a magnetic field; local magnetic field strength

**Description**  
In this experiment, you'll explore the subtle but fascinating world of diamagnetism and paramagnetism — properties that cause materials to weakly repel or attract in response to magnetic fields. Begin with a collection of small, lightweight samples: bismuth, graphite, aluminum, or even an ice cube. Place each sample on a floating platform, such as a small piece of Styrofoam or a plastic lid, and float it in a shallow container of water.

Now bring a strong neodymium magnet close to the water's surface and observe how different materials respond. Bismuth, a classic diamagnetic substance, will be repelled, visibly sliding away from the magnet. Try the same with graphite or an ice cube — both are weakly diamagnetic, but the effect is harder to observe. Contrast these with a paramagnetic material like aluminum, which is weakly attracted instead.

Record the motion using your smartphone's camera — slow-motion mode can make subtle deflections easier to see. For quantitative exploration, you can use your phone's magnetometer to map out the local field strength near the magnet and compare it to the observed movement of each material. The strength of the response correlates with magnetic susceptibility, allowing you to rank the materials from most to least affected.

This simple yet elegant experiment demonstrates that not all materials interact with magnetic fields in the same way. It offers a tangible way to visualize magnetic properties that often remain hidden, and it sets the stage for deeper questions about electronic structure, field interactions, and even the design of magnetic shielding in technology.

**References:**    
[1] "Demonstration of Properties of Diamagnetic and Paramagnetic Substances," [https://physicsexperiments.eu/1953/demonstration-of-properties-of-diamagnetic-and-paramagnetic-substances](https://physicsexperiments.eu/1953/demonstration-of-properties-of-diamagnetic-and-paramagnetic-substances)  
[2] "Anti-Magnetic Water and Levitating Graphite by Diamagnetism," [https://www.youtube.com/watch?v=jyqOTJOJSoU](https://www.youtube.com/watch?v=jyqOTJOJSoU)


### Visualizing Water Surface Distortion by Diamagnetism (EMAG-10)

**Sensors Used:** Laser pointer, Smartphone Camera (optional)  
**What's Measured:** Angular shift of laser reflection due to surface deformation

**Description**  
Water, though weakly diamagnetic, exhibits a measurable repulsion in the presence of strong magnetic fields. This experiment uses optical methods to detect the subtle deformation of a water surface caused by a neodymium magnet. Fill a shallow, transparent bowl with still water and position a strong neodymium magnet directly beneath it. Then, shine a laser pointer at a low, grazing angle across the surface so that the beam reflects onto a nearby wall or screen.

As the magnetic field pushes against the water's surface, it causes a small but real indentation. This deformation slightly alters the angle of the reflected laser beam. Watch carefully: even a tiny shift in the beam's position on the wall signals that the surface has been disturbed — a beautiful, indirect observation of water's diamagnetic response.

For enhanced analysis, record the beam's reflection with a smartphone camera and compare it with and without the magnet in place. Though the effect is subtle, the experiment showcases how delicate optical tools can detect forces that are otherwise invisible, bridging the domains of magnetism, surface physics, and light. It also introduces the concept of an "optical lever" — a powerful tool in scientific measurement.


### Ferrofluids and Magnetic Levitation with Smart Materials (EMAG-11)

**Sensors Used:** Smartphone camera (photo and video)  
**What's Measured:** Shape deformation, spike height, pattern evolution in a magnetic field

**Description**  
Ferrofluids are remarkable materials — liquids that become highly magnetized in the presence of a magnetic field, forming intricate spike-like patterns that visually reveal the otherwise invisible field lines. In this experiment, students explore the behavior of ferrofluids by placing them near strong neodymium magnets. As the magnetic field interacts with the fluid, it forms peaks and valleys corresponding to the local field strength and direction, governed by a balance between magnetic forces and surface tension.

Using a smartphone camera, students can record the emergence and evolution of these structures in real time. Moving the magnet closer or farther changes the spike height and density, and rotating it causes the entire ferrofluid landscape to shift dynamically. For further exploration, place a drop of ferrofluid between two opposing magnets or compare its response to that of a non-magnetic fluid, such as water or oil.

Beyond their stunning appearance, ferrofluids provide an accessible way to visualize field gradients and explore the intersection of magnetism, fluid mechanics, and materials science. With just a smartphone and a few inexpensive components, students can capture one of the most iconic and responsive examples of magnetic phenomena in action.

**References:**    
[1] "Smart Materials: Ferrofluids & Magnetic Levitation," [https://physicsopenlab.org/2017/04/03/smart-materials-ferrofluids-magnetic-levitation/](https://physicsopenlab.org/2017/04/03/smart-materials-ferrofluids-magnetic-levitation/)


### Levitating Pencil Lead: Demonstrating Diamagnetism (EMAG-12)

**Sensors Used:** Smartphone camera, optional magnetometer  
**What's Measured:** Visual observation of levitation; optional measurement of magnetic field strength

**Description**  
This experiment vividly demonstrates diamagnetism — the property of some materials to be repelled by a magnetic field — using common graphite pencil lead and strong neodymium magnets. Start by placing two neodymium magnets in a parallel, opposing configuration with a small gap between them. Then, carefully position a piece of pencil lead (ideally 0.5 mm mechanical graphite or a slender graphite rod) within the gap. With the right alignment, the graphite will levitate — suspended and stabilized by the repulsive magnetic force acting equally from both sides.

The result is a striking and stable example of passive levitation. While diamagnetic forces are usually extremely weak, graphite is among the few common materials with a strong enough diamagnetic response to visibly float in this configuration. A smartphone camera can be used to capture the levitation from multiple angles, or record slow-motion footage to analyze its stability and vibration response. Students may also experiment with nudging the graphite gently and observing how it returns to equilibrium, highlighting the restoring nature of the diamagnetic force.

**References:**    
[1] "Levitating Pencil Lead - Demonstration of Diamagnetism," [https://physicsexperiments.eu/2121/levitating-pencil-lead---demonstration-of-diamagnetism](https://physicsexperiments.eu/2121/levitating-pencil-lead---demonstration-of-diamagnetism)


### Suspended Graphite and Laser Shadow Sensor: Measuring Diamagnetism & Tiny Motion (EMAG-13)

**Sensors Used:** Smartphone camera, magnetometer (optional)  
**What's Measured:** Displacement of graphite via laser beam interruption

**Description**  
This experiment takes advantage of graphite's diamagnetic properties not just for levitation, but for precision sensing. Begin by levitating a thin graphite rod or pencil lead above a pair of strong neodymium magnets, similar to the setup in the previous experiment. With careful alignment, the graphite will float or balance stably above the magnetic field. Now, shine a laser pointer across the graphite so that the beam casts a visible spot or line on a surface — or directly onto the lens of a smartphone camera positioned to record it.

Even the slightest vibration or movement of the graphite, whether caused by tapping the table, footsteps, air currents, or even distant environmental events, will deflect the beam or shift the shadow cast. The smartphone camera, especially in time-lapse or slow-motion mode, can capture and amplify these minute changes. With the right lighting and setup, this acts as a highly sensitive displacement sensor — essentially turning the diamagnetically levitated graphite into a makeshift optical seismometer.


### Quantifying Diamagnetic Repulsion: Bismuth on a Torsion Balance (EMAG-14)

**Sensors Used:** Smartphone camera (optional: magnetometer or angle measurement app)  
**What's Measured:** Angular displacement due to diamagnetic repulsion

**Description**  
This experiment offers a rare opportunity to make a quantitative measurement of diamagnetic repulsion using simple tools and a smartphone. Suspend a small piece of bismuth from a thin, torsion-free thread so that it can swing freely in a horizontal plane. Once it has come to rest, carefully bring a strong neodymium magnet close to the bismuth from the side. You'll observe a horizontal deflection of the bismuth sample — a result of the weak repulsive force caused by diamagnetic interaction with the magnetic field.

Record this displacement using a smartphone camera, ideally positioned above the setup to capture the angle from a top-down view. Alternatively, fix a ruler or protractor behind the thread and capture the change in angle directly. Using known values — such as the magnetic field strength of the neodymium magnet (which can be estimated using a magnetometer app or manufacturer data) and the torsion characteristics of the thread — students can make back-of-the-envelope estimates of the diamagnetic force acting on the sample.

If the magnetic susceptibility of bismuth is known (approximately -1.66 × 10⁻⁴), the experiment can be reversed to estimate the field strength of the magnet instead. Either way, the result offers a meaningful connection between force, field, and material properties.

Suggestions for Enhancement:

- If available, use a second smartphone or webcam to record the deflection from a fixed angle for later analysis with frame-by-frame measurement tools.
- Try varying the distance between the magnet and the bismuth, and measure how the deflection scales — does it follow an inverse-square or cube law?
- Replace the thread with a thin elastic fiber and explore harmonic oscillations under pulsed magnetic fields.

---


### Eddy Currents and Magnetic Braking

---


### Magnetic Braking: Dropping a Magnet Through a Copper Pipe (EMAG-15)

**Sensors Used:** Smartphone camera (optional: slow-motion mode)  
**What's Measured:** Fall time, qualitative motion comparison

**Description**  
In this classic and visually striking experiment, students explore the surprising effects of electromagnetic induction by observing how a magnet falls through a conductive pipe. When a strong neodymium magnet is dropped vertically through a copper or aluminum tube, it descends dramatically slower than a non-magnetic object of similar size and mass. The cause is eddy currents—circular electrical currents induced in the pipe walls as the magnet's changing magnetic field passes by. According to Lenz's Law, these eddy currents generate magnetic fields that oppose the motion of the magnet, effectively acting as a brake.

To highlight this effect, try dropping both a magnet and a similar-sized object like a wooden dowel or aluminum bolt (non-magnetic) through the same pipe. The difference in descent speed will be immediately apparent. Using a smartphone's slow-motion camera mode enhances the observation, allowing students to clearly visualize the magnet's gradual fall.

Extensions include testing different pipe materials (copper, aluminum, brass, or plastic), trying magnets of varying strength and mass, and timing the descent to compare relative braking strength. The setup can even be turned into a quantitative lab by plotting fall times against pipe length or magnet properties.

Note: Alternatively to metal pipes, flat metal sheets can also be used. Suspend a strong magnet as a pendulum and let it swing over horizontal sheets of various materials (e.g. copper, aluminum, plastic). The damping effect from eddy currents in conductive metals will visibly reduce the swing amplitude over time, offering a variation on this experiment that further reinforces the concept.

Extension: Try using metal sheets of different thicknesses — especially with copper — to observe how the strength of the eddy current damping changes. Thicker sheets tend to produce stronger eddy currents, resulting in greater magnetic braking. This provides a clear, hands-on way to explore the dependence of electromagnetic effects on material properties.

**References:**    
[1] "Mysterious forces: Eddy currents," [https://www.thenakedscientists.com/get-naked/experiments/mysterious-forces-eddy-currents](https://www.thenakedscientists.com/get-naked/experiments/mysterious-forces-eddy-currents)  
[2] "Electromagnetic braking in a copper pipe," Practical Physics (archived), [http://practicalphysics.org/electromagnetic-braking-copper-pipe.html](https://web.archive.org/web/20181111085651/http://practicalphysics.org/electromagnetic-braking-copper-pipe.html)


### Quantifying Eddy Current Damping with a Magnetic Pendulum (EMAG-16)

**Sensors Used:** Smartphone camera (video or slow-motion), optional gyroscope app  
**What's Measured:** Pendulum amplitude over time, rate of damping

**Description**  
This experiment transforms the concept of eddy currents from a visual curiosity into a measurable, quantitative investigation. Suspend a strong magnet as a pendulum — for example, using string or fishing line — so it swings freely back and forth above various flat conducting surfaces such as sheets of copper, aluminum, or brass. When the magnet swings over a conductive material, it induces eddy currents in the metal due to the changing magnetic field. According to Lenz's Law, these currents produce opposing magnetic fields, which apply a resistive force to the motion of the magnet, causing it to slow down more quickly than it would over an insulator like plastic or wood.

Use your smartphone's camera to record the pendulum motion. From the video, measure how quickly the amplitude decreases over time for different materials and thicknesses. Alternatively, use a gyroscope sensor app to monitor and graph angular velocity decay in real-time. This setup allows students not only to observe eddy current damping but also to quantify its strength and link it to material properties such as electrical conductivity.

To take the experiment further, challenge students to rank materials by damping strength or estimate relative conductivities from the rate of amplitude decay. With creative extensions, this setup can even be used to simulate the role of magnetic damping in engineering applications like train brakes and induction cooktops.

---


### Induction, Current & Fields

---


### Faraday's Shake: Visualizing Induced Voltage with a Smartphone (EMAG-17)

**Sensors Used:** Smartphone microphone input (via audio adapter)  
**What's Measured:** Induced voltage spikes over time

**Description**  
This elegant and hands-on experiment lets students directly observe Faraday's Law of electromagnetic induction using nothing more than a coil of wire, a strong magnet, and a smartphone. Begin by wrapping 30-50 turns of insulated copper wire around a non-conductive core, such as a cardboard tube, to create a simple solenoid. Connect the coil to the smartphone's microphone input via an audio adapter (e.g., a TRRS to mic splitter).

Now, quickly move a neodymium magnet in and out of the coil. The changing magnetic flux through the loop induces a voltage, which is picked up by the smartphone's microphone. Using an oscilloscope or audio recording app (such as Phyphox or a sound visualizer), you'll observe distinct voltage spikes each time the magnet moves — a vivid manifestation of Faraday's Law in action.

To explore further, reverse the direction of the magnet's motion and note how the signal polarity changes. Try varying the speed of motion or the number of coil turns to see how these factors influence the induced voltage. While the smartphone microphone input blocks DC signals, rapid changes in magnetic flux (i.e., fast magnet movement) generate the necessary alternating signal for detection.


### Seeing the Hum: Electromagnetic Induction and Fourier Analysis with a Smartphone (EMAG-18)

**Sensors Used:** Smartphone magnetometer or microphone input  
**What's Measured:** Time-varying magnetic field and frequency spectrum

**Description**  
This experiment explores how smartphones can detect time-varying magnetic fields caused by everyday electrical devices and how these signals can be analyzed in both the time and frequency domains. There are two variations — both illustrating Faraday's Law and the electromagnetic interference generated by household appliances.

In the first method, wrap a few turns of wire around your smartphone or a small sensor coil connected to the microphone input. Power on a nearby appliance with a motor or heating coil, such as a hairdryer or electric shaver. These devices emit fluctuating magnetic fields — typically at 50 or 60 Hz depending on your region — which induce voltage in the wire. Use a spectrum analyzer or oscilloscope app to record the signal. A strong 50 Hz peak will often appear in the Fourier spectrum, along with harmonics related to the motor's speed or brush contacts.

**Alternatively, use a magnetometer app such as Phyphox to monitor ambient magnetic fields in real time. Move a magnet back and forth near the phone at a consistent rhythm (e.g., 2-5 Hz), and observe a matching spike in the frequency plot. This technique allows direct observation of induction via motion, as well as induced noise from external fields.**

Phones with higher sampling rates (10 ms or faster) provide clearer resolution of the 50/60 Hz mains signal and higher harmonics. Slower phones may still detect noisy spikes or broad-spectrum activity from nearby electronics.


### Observing the Lorentz Force on a Current-Carrying Wire (EMAG-19)

**Sensors Used:** Smartphone camera (video or slow motion), magnetometer  
**What's Measured:** Wire deflection angle; magnetic field strength

**Description**  
This classic demonstration brings the Lorentz force to life using nothing more than a wire, a battery, a strong magnet, and your smartphone. Suspend a flexible copper wire like a pendulum so it hangs freely between the poles of a strong U-shaped magnet. When a low-voltage DC current (e.g. 3-9 V from a battery) is applied through the wire, it deflects sideways due to the force exerted by the magnetic field on the moving charges in the wire — a direct consequence of the Lorentz force law, F = I × B × L.

Use your smartphone's camera to record the motion, ideally in slow-motion mode to clearly capture the deflection. You can freeze the video to measure the angle of deflection. Meanwhile, a magnetometer app (such as Phyphox or Physics Toolbox) can be used to estimate the magnetic field strength inside the magnet gap, allowing for a rough quantitative estimate of the force involved.

This experiment illustrates the vector nature of the Lorentz force, as the direction of the deflection depends on the orientation of the magnetic field and the current. Reversing either the current or the magnet poles causes the wire to deflect in the opposite direction, reinforcing the idea of cross-product behavior.

---


### Electromagnetic Fields

---


### Wi-Fi Signal Strength and the Inverse-Square Law (EMAG-20)

**Sensors Used:** Smartphone Wi-Fi analyzer app  
**What's Measured:** Received signal strength (RSSI, in dBm) vs. distance

**Description**  
This experiment investigates how electromagnetic radiation diminishes with distance, using smartphones to measure Wi-Fi signal strength as a proxy. Start by activating a Wi-Fi hotspot on one smartphone and placing it in a fixed, unobstructed location—preferably in an open indoor space or a long hallway with minimal reflections. Connect a second smartphone running a signal analyzer app and record the signal strength (RSSI) at a series of increasing distances from the hotspot: 1 m, 2 m, 4 m, 8 m, and so on. To improve accuracy, take multiple readings at each point and calculate an average. It's also helpful to disable automatic power adjustments in developer settings, if supported by your device, to ensure consistent transmission power.

Once the data is collected, plot signal strength versus the logarithm of the distance. With some guidance from ChatGPT or data analysis tools, students can determine whether the trend matches the inverse-square law expected for radiated energy (i.e. intensity ∝ 1/r²). Repeat the experiment using both 2.4 GHz and 5 GHz Wi-Fi bands and compare the results — lower frequencies typically travel farther but are more prone to interference, while higher frequencies attenuate more quickly but offer better speed in close range.

This simple experiment opens the door to understanding how electromagnetic waves propagate through space, providing a clear connection between mathematical models and real-world measurements using everyday technology.


### Comparing Wi-Fi at 2.4 GHz and 5 GHz: Frequency vs. Reach (EMAG-21)

**Sensors Used:** Smartphone Wi-Fi analyzer app  
**What's Measured:** Signal strength (RSSI) at various distances and through obstacles

**Description**  
In this experiment, students investigate how different frequencies used in Wi-Fi communications behave as they propagate through space and interact with their environment. Start by activating the mobile hotspot function on a smartphone that allows toggling between 2.4 GHz and 5 GHz bands. Use a second phone with a Wi-Fi analyzer app to record signal strength (RSSI in dBm) at a series of increasing distances — for example, 1 m, 3 m, and 5 m — and then repeat the same measurements with one or more obstacles in between, such as a wall, a door, or even a metal cabinet.

The key concept is that electromagnetic waves at higher frequencies (like 5 GHz) have shorter wavelengths, allowing faster data transmission but also leading to greater attenuation with distance and reduced ability to penetrate solid objects. In contrast, 2.4 GHz signals travel farther and pass through walls more easily, but suffer more from interference due to overcrowding on that frequency band.

Students can plot and compare the signal strength curves for each band, with and without obstructions, and discuss how signal attenuation is influenced by frequency, material absorption, and reflection. The results provide an accessible entry point into wave-matter interactions, wireless engineering, and real-world design tradeoffs between speed and coverage in modern communication systems.

As an extension, try placing a hand, a metal object, or even a body between the hotspot and receiver to visualize how different materials — especially water-rich ones like the human body — block or reflect signals differently depending on their frequency.


### Comparing Wireless Frequencies: A Smartphone's Invisible Spectrum (EMAG-22)

**Sensors Used:** Smartphone Wi-Fi, Bluetooth, NFC, LTE/5G radios; signal monitoring apps  
**What's Measured:** Signal strength, range, and stability across frequencies

**Description**  
This experiment offers students a hands-on way to explore the vast but invisible world of wireless communication by comparing how different parts of the electromagnetic spectrum behave in everyday environments. Smartphones operate across a wide frequency range — from low-frequency near-field technologies like NFC (13.56 MHz), through mid-range bands such as LTE and Bluetooth, up to high-frequency millimeter waves used in some 5G networks. Each of these frequencies exhibits unique behaviors in terms of range, data rate, and how well they penetrate materials.

Begin by exploring NFC, the lowest frequency commonly available on smartphones. Try scanning a payment tag or accessing stored data, noting how extremely short the usable range is — often less than 4 cm — and how easily materials like metal or even a human hand can block the connection. Then, move to Bluetooth (~2.4 GHz) by pairing a phone with a speaker or headset and walking away slowly, noting when the signal drops and how well it passes through walls or is affected by body position.

Next, revisit Wi-Fi, comparing 2.4 GHz and 5 GHz signal strength across varying distances and barriers. Students can use analyzer apps to log signal drop-offs and discuss how frequency influences attenuation and reflection. Continue by exploring LTE or 4G bands, which typically fall between 800 MHz and 2100 MHz. Signal monitoring apps can be used to track strength at different indoor locations, helping to visualize how lower frequencies maintain better coverage inside buildings.

If available, test 5G mmWave connectivity (~24-47 GHz), noting how high-speed data performance is accompanied by extremely limited range and sensitivity to physical obstructions like walls or even glass. These comparisons will help students appreciate the trade-offs between frequency, range, and bandwidth that underpin modern wireless systems.

To deepen understanding, students can ask ChatGPT:
Why do higher frequency signals carry more data but travel shorter distances?
Why are some materials (like water or metal) more effective at blocking wireless signals?
Can we use this frequency-dependent behavior to identify unknown materials based on how they interfere with wireless signals?

This spectrum-spanning inquiry encourages students to think critically about how devices communicate and what physical principles shape our wireless world.


### Visualizing Wi-Fi Fields with Long Exposure Imaging (EMAG-23)

**Sensors Used:** Wi-Fi analyzer app, smartphone camera  
**What's Measured:** Real-time Wi-Fi signal strength (RSSI), spatial variation

**Description**  
This experiment transforms invisible wireless fields into vibrant, visible patterns using two smartphones and a long-exposure photography setup. First, one phone is configured as a Wi-Fi hotspot, while a second runs a signal analyzer app that displays real-time RSSI (Received Signal Strength Indicator) as a color-coded visual—red for strong, blue for weak, and gradients in between. Set up a third device (or use the second phone's front-facing camera in time-lapse mode) on a tripod or stable surface with long exposure or video capture enabled.

Now, slowly walk through the room in a grid-like pattern while holding the "color" phone screen visible to the camera. As you move, the camera captures the glowing trail left behind—creating a literal painting of Wi-Fi signal strength across space. This striking visualization not only reveals the reach of your wireless network but also demonstrates signal attenuation, interference from walls or furniture, and the complex geometry of indoor EM propagation.

This experiment merges physics and art, offering both qualitative beauty and quantitative insight. Try repeating it with the hotspot operating at 2.4 GHz and then at 5 GHz to compare coverage patterns. You'll see how frequency affects range and wall penetration—concepts that tie directly into wireless design and electromagnetic theory.


### Measuring Wi-Fi Signal Disruption by Passing Vehicles (EMAG-24)

**Sensors Used:** Wi-Fi analyzer app, two smartphones  
**What's Measured:** Real-time signal strength (RSSI), attenuation due to obstruction

**Description**  
This experiment reveals how large moving objects—like cars or trucks—affect wireless communication by temporarily disrupting line-of-sight signals. Set up one smartphone as a Wi-Fi hotspot and place a second smartphone connected to it approximately three meters away, with a clear line between them. Use a Wi-Fi analyzer app to monitor the received signal strength (RSSI) on the second phone in real time.

Then, have a vehicle pass between the two phones and observe how the signal fluctuates or drops as the line of sight is temporarily blocked. For a more comprehensive analysis, repeat the setup using both 2.4 GHz and 5 GHz Wi-Fi bands. Since higher-frequency signals (like 5 GHz) are more susceptible to obstruction, comparing the two datasets reveals how different frequencies behave when faced with physical barriers.

Try recording the screen or logging the data to examine how sharp or gradual the drop is, how long the disruption lasts, and how quickly the signal recovers. This simple setup powerfully illustrates key concepts in wireless communication, such as signal attenuation, diffraction, and the role of wavelength in obstacle interaction.


### Exploring Signal Loss in Shielded Environments (EMAG-25)

**Sensors Used:** Wi-Fi analyzer or cellular signal strength app  
**What's Measured:** Signal attenuation (Wi-Fi or cellular) through different shielding materials

**Description**  
This experiment demonstrates how different materials can block or attenuate electromagnetic signals—an effect at the heart of Faraday cages and RF shielding technologies. Begin by measuring the baseline Wi-Fi or cellular signal strength on your smartphone using a signal analyzer app. Then, carefully wrap the phone in various materials such as aluminum foil, copper mesh, Mylar emergency blankets, or even everyday objects like metal baking pans or steel pots.

With each material, observe and record how much the signal drops. You might find that conductive materials like foil are highly effective at blocking signals, while others like plastic or paper have little to no effect. Try different configurations: fully wrapped, partial coverage, or wrapping only the antenna region. Compare not only the degree of signal reduction, but also whether the phone can still maintain a connection.

This simple yet revealing experiment introduces the concept of electromagnetic shielding, the principles behind Faraday cages, and how material properties like conductivity and thickness influence the transmission of wireless signals. It's also an excellent starting point for discussions about privacy, security, and why your phone struggles in elevators or microwave-lined rooms.


### Exploring Electromagnetic Pollution: Detecting Electro-Smog with a Smartphone (EMAG-26)

**Sensors Used:** Magnetometer, optionally microphone input or external coil  
**What's Measured:** Electromagnetic field strength and frequency content

**Description**  
In this experiment, students use their smartphones to detect and visualize ambient electromagnetic fields—commonly referred to as "electro-smog." Using magnetometer apps (such as phyphox or Physics Toolbox), one can measure fluctuations in magnetic field strength while moving through different environments. Begin by establishing a quiet baseline—such as in a park or shielded room—then walk through a space filled with wireless electronics, fluorescent lights, or near sources like power lines, transformers, and especially microwave ovens.

With the magnetometer set to display real-time graphs or a frequency spectrum (Fourier mode), students can spot telltale signatures of electromagnetic activity. For example, power infrastructure often emits a steady 50 or 60 Hz signal (depending on region), while household devices may introduce spikes and noise at a variety of frequencies. Particularly interesting is the 2.4 GHz band—used by both Wi-Fi and Bluetooth devices—which can show subtle interactions, even though it's beyond the bandwidth of most magnetometers. Still, nearby microwave ovens, which operate on nearly the same carrier frequency, can flood this band with leakage, offering an intuitive explanation for their disruptive effect on wireless signals.

For added visual impact, students can walk through a room while a second phone records a long-exposure video or time-lapse. By mapping signal strength to screen brightness or color, the movement leaves behind glowing trails—painting a vivid picture of the room's invisible electromagnetic landscape.

This experiment highlights how pervasive and dynamic our wireless environment is, and introduces key concepts like signal interference, frequency overlap (e.g. Bluetooth vs. Wi-Fi), and electromagnetic compatibility. It's also an entry point into conversations about shielding, health concerns, and how our devices interact with a world we mostly can't see.

---


### Plasma Globe Explorations

---


### Exploring Electromagnetic Fields with a Plasma Globe (EMAG-27)

**Sensors Used:** Magnetometer, camera, microphone/audio input  
**What's Measured:** Magnetic field strength, induced voltage, streamer response

**Description**  
A plasma globe, with its glowing, finger-chasing streamers, offers much more than just visual intrigue — it's a powerful demonstrator of electromagnetic field behavior, and your smartphone is an excellent companion for exploring it. Begin by bringing your phone close to an active plasma globe and observe how its magnetometer readings change with distance. Using an app like phyphox or Physics Toolbox, you'll notice that the magnetic field strength increases sharply near the surface of the globe and drops off with distance, reflecting the strong oscillating fields at play.

Next, try interacting with the globe. Touching it with your finger causes the plasma streamers to intensify and focus toward the point of contact. Move a metal object close to the globe or bring the smartphone itself near — watch how the streamers shift in response, attracted to conductive materials and capacitively coupled objects. Use your smartphone's camera to record these interactions for later frame-by-frame analysis.

To further probe the electromagnetic fields, connect a coil of wire to your smartphone's audio input or a set of wired headphones. Hold this coil close to the plasma globe while it's active. If you use an oscilloscope or spectrum analyzer app, you may detect a faint humming signal — an induced voltage created by the time-varying magnetic field. This is a striking illustration of electromagnetic induction, where changing magnetic flux generates detectable electrical signals.

Altogether, these simple but engaging investigations turn a common science toy into a full-fledged exploration of electromagnetism, capacitive effects, and induction. With your smartphone as a lab instrument, the invisible becomes observable — and deeply educational.


### Analyzing Plasma Streamer Motion with Your Smartphone (EMAG-28)

**Sensors Used:** Camera (standard and slow-motion), optional video analysis tools  
**What's Measured:** Streamer position, brightness, response to proximity

**Description**  
The dynamic streamers inside a plasma globe aren't just fun to look at — they're full of physical information. With nothing more than your smartphone camera, you can turn these dancing filaments into a subject of serious investigation. Set your phone to record in slow-motion mode and film the plasma globe under various conditions: untouched, with a hand nearby, when touching the glass, or when bringing a conductive object (like a spoon or key) close.

You'll notice that the streamers reorganize themselves dramatically depending on your proximity and conductivity. For further analysis, import your footage into a video or pixel analysis app to quantify changes in brightness or color. Histogram tools can help reveal subtle intensity variations, and frame-by-frame analysis lets you study the response time of streamer movement.


### Wireless Bulb Lighting with a Plasma Globe (EMAG-29)

**Sensors Used:** Camera (video or slow-motion)  
**What's Measured:** Bulb brightness and response distance

**Description**  
One of the most captivating demonstrations of wireless energy transfer involves simply placing a neon bulb or fluorescent tube near an active plasma globe. Without any physical connection, the bulb begins to glow — excited by the high-frequency oscillating electric field generated by the plasma globe. This effect vividly illustrates how electromagnetic fields can transfer energy through space to excite particles in a gas.

To explore this further, vary the distance between the bulb and the globe to find the threshold where the light no longer activates. Try holding the bulb in different orientations to see how alignment with the field lines affects the brightness. Record these behaviors with your smartphone camera, and use slow-motion mode to investigate flickering or other changes in intensity that aren't visible to the naked eye.

**References:**    
[1] "Lighting Bulbs Without Wires," The Naked Scientists, [https://www.thenakedscientists.com/get-naked/experiments/lighting-bulbs-without-wires](https://www.thenakedscientists.com/get-naked/experiments/lighting-bulbs-without-wires)


### Plasma Stream Curvature: Qualitative Lorentz Force Effect (EMAG-30)

**Sensors Used:** Camera (slow-motion or video)  
**What's Measured:** Visual curvature of plasma streamers

**Description**  
Inside a plasma globe, the striking streamers you see are created by high-voltage electric fields accelerating ionized gas particles — essentially, moving charges. When a strong neodymium magnet is brought close to the glass surface, those glowing tendrils can shift, bend, or even twist in response to the external magnetic field. This behavior offers a compelling qualitative demonstration of the Lorentz force, which governs how magnetic fields influence moving charges.

To observe this effect, power up a plasma globe and let the streamers stabilize. Then, slowly bring a strong magnet near the globe — ideally from the side, where curvature is most visible. Watch as the streamers deviate from their usual straight-line paths, visibly curving or fanning out. Record the interaction with your smartphone's camera, and use slow-motion playback to catch more subtle effects.

This experiment turns the abstract vector equation F = q(v × B) into something you can watch with your own eyes — a striking reminder that electromagnetic forces shape the behavior of matter even in thin air.


### Stored Charge & Spark Discharge from Foil on a Plasma Globe (EMAG-31)

**Sensors Used:** Camera (optional for spark capture)  
**What's Measured:** Visual discharge event, qualitative electric field interaction

**Description**  
Plasma globes aren't just fun to look at — they're also excellent tools for exploring high-frequency electric fields and capacitive charging. In this experiment, you'll witness firsthand how charge can build up on conductive objects placed near such a field, and how that charge discharges when given a path to ground.

To begin, turn on the plasma globe and let it run for a few minutes so that the field around it stabilizes. Then, carefully place a small square of aluminum foil (about 1 cm × 1 cm) directly on the surface of the globe. Slowly approach the foil with the tip of a metal needle, pin, or other fine conductor. As the gap narrows to a few millimeters, you may see a tiny spark leap from the foil to the needle — a visible electric arc. This spark is the release of charge that the foil has picked up capacitively from the globe's high-frequency electric field.

This dramatic (yet safe) display offers a vivid example of capacitive coupling and discharge — similar in principle to how your body might pick up static charge and zap a doorknob. You can extend the experiment by exploring corona discharge patterns in darkness, or testing how close a neon bulb must be to the globe before it lights up — a natural follow-up to wireless energy transfer demonstrations.

Safety Note: Always use dry hands, avoid direct contact with conductors during the spark, and ensure your tools are small and well-insulated. Do not place your smartphone directly in the discharge path or too close to the foil — while the voltages involved are low-energy, a direct zap to the phone could potentially interfere with or damage its sensors or circuitry.

This experiment brings together several key concepts — capacitive charging, field strength, and electrical discharge — into a single, visually striking moment you can both observe and record.

**References:**    
[1] "Plasma: The Fourth State of Matter," Science in School, [https://www.scienceinschool.org/article/2016/plasma-fourth-state/](https://www.scienceinschool.org/article/2016/plasma-fourth-state/)

---


### Advanced Concepts

---


### Dual-Filament Car Bulb as a Thermionic Diode and Transistor (EMAG-32)

**Sensors Used:** Multimeter or smartphone-based current meter (via USB voltmeter or Bluetooth probes); optional camera for monitoring filament glow  
**What's Measured:** Electrical current, filament brightness, unidirectional conduction, thermionic emission behavior

**Description**  
In this advanced experiment, we repurpose a surprisingly common object — a dual-filament car headlight bulb — to explore the fundamental physics behind thermionic emission, vacuum tube diodes, and even primitive transistor-like behavior. These classic 12V bulbs contain two tungsten filaments (for low and high beam), sharing a common pin but isolated at the ends — and they become excellent analogues for early electronics.

Begin by connecting one filament (say, the low beam) to a DC power source to bring it to a glowing red-hot temperature. This filament now acts as a thermionic cathode, emitting electrons into the vacuum (or low-pressure gas) inside the bulb. Now apply a small positive voltage to the second, unheated filament — your anode — using a second power supply or battery. If the anode is at a higher potential, electrons from the hot filament can jump across and generate a current. If you reverse the polarity, the current disappears. You've built a vacuum diode — a one-way electron valve, just like in early radios.

For an even deeper look, turn the same setup into a two-terminal transistor analogue. Keep the anode voltage fixed, and instead vary the voltage driving the heated filament. As the temperature of the filament increases, the rate of electron emission grows exponentially, and you'll observe a steadily rising current at the collector (anode). This mimics the control behavior of modern transistors: small changes in input (heat/emission) cause larger changes in output current.

This demonstration showcases the fundamental operating principles behind electron tubes and solid-state electronics — all visible and measurable with basic lab tools and smartphone-assisted data collection.

Safety Note: These experiments involve high temperatures and glass bulbs — handle only with insulated wires and avoid touching the bulb when hot. For stability and safety, mount the bulb securely and avoid overvoltage.

This is not just a piece of physics history brought to life — it's a powerful, hands-on introduction to thermionic emission, electron flow, and the dawn of electronics.


### DIY Particle Accelerator (EMAG-33)

**Sensors Used:** Smartphone camera (optional thermal camera), multimeter  
**What's Measured:** Qualitative glow or heating asymmetry, electron-induced luminescence

**Description**  
This highly experimental and ambitious project explores whether a standard dual-filament automotive headlight bulb can serve as a crude vacuum-tube particle accelerator — a "DIY particle accelerator," in spirit if not in rigor. The idea builds on thermionic emission: when one filament is heated to incandescence, it may emit electrons into the rarefied gas or vacuum inside the bulb. Applying a voltage between the two filaments accelerates these electrons across the bulb's interior. If a strong external magnetic field is introduced — for instance, using a neodymium or U-shaped magnet — the moving electrons should feel a Lorentz force, bending their trajectory.

The bulb is mounted securely with one filament (e.g., low beam) connected to a 6-9 V DC power supply to heat it. The second filament (e.g., high beam) is left cold but biased positively using another low-voltage source. A strong magnet is placed around or beneath the bulb to introduce a transverse field. With the setup in a darkened room, observers should look for a brief glow path, visible ionization, or asymmetrical heating of the bulb glass — potentially hinting at curved electron paths or collisions.

While the chances of clearly seeing electron beams are low, even in the dark — these bulbs are not true vacuum tubes and contain variable gas mixtures — the experiment is still rich in educational value. Even indirect effects like glass warming, faint arcs, or field-induced asymmetries offer insight into electron dynamics, gas ionization, and the Lorentz force in action.

Safety Note: This experiment involves hot glass, potentially high currents, and strong magnets. Never exceed 12 V. Use insulated wiring and avoid physical contact with the bulb or terminals during operation. Do not attempt to open, break, or puncture the bulb. Perform only under adult supervision or with proper lab protocols in place.

Extension Idea: If you have access to a thermal camera, monitor the glass surface near the cold filament for asymmetric heating. Alternatively, place a photodiode or light sensor nearby to try and detect subtle emissions.

This experiment lives at the frontier between garage physics and true electron optics. While success isn't guaranteed, the process of setting it up and reasoning through what might happen makes it a compelling capstone challenge.

**References:**    
[1] "Shooting an electron beam through air," https://www.youtube.com/watch?v=m3oonk1wnHY

---


### Inquiry Sidebar — Magnetic Liquids That Aren't Ferrofluids (EMAG-34)

**Sensors Used:** None directly required  
**What's Measured:** Qualitative magnetic behavior of different liquids (via video analysis and conceptual exploration)

**Description**  
Not all liquids respond to magnetic fields in the same way—and one of the most surprising examples is liquid oxygen. Unlike its better-known cousin, liquid nitrogen, which remains utterly indifferent to a magnet, liquid O₂ is visibly attracted to magnetic fields. This difference stems from the quantum structure of the oxygen molecule, and opens up a deeper conversation about the magnetic properties of matter.

Begin your exploration by watching the striking demonstration in Liquid Nitrogen vs. Liquid Oxygen: Magnetism [1], where you can see liquid oxygen cling to a magnet while nitrogen does nothing at all. From there, use ChatGPT to guide your inquiry. Ask why oxygen is magnetic, but nitrogen isn't. Explore what distinguishes a paramagnetic substance from a diamagnetic one, and whether other common liquids or gases show unusual magnetic properties.

As a deeper challenge, try to understand how the electronic structure of O₂—with two unpaired electrons—gives rise to its paramagnetic behavior. Ask for a comparison table of magnetic susceptibilities across a range of molecules and materials. Finally, try to summarize what makes this phenomenon rare, and why it matters—especially in contexts like aerospace, medical imaging, or cryogenics.

This sidebar invites students to follow their curiosity beyond the bounds of simple experiments and into the quantum-level reasons behind everyday phenomena. It's a chance to connect chemistry, physics, and materials science, while seeing just how strange and magnetic the invisible world can be.

**References:**    
[1] "Liquid Nitrogen vs. Liquid Oxygen: Magnetism," www.youtube.com/watch?v=KcGEev8qulA
