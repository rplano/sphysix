---
layout: default
title: A. Smartphone Science Reference Tables
---

## Appendix A: Smartphone Science Reference Tables

This appendix collects a series of structured tables that categorize and summarize the technical elements most relevant to using smartphones for scientific experiments. Unlike model-specific data, these tables focus on the types of components and capabilities that are generally available across most modern smartphones and smartwatches, as well as software-derived features that expand experimental possibilities.

---

### Output Devices

These are components your smartphone uses to deliver information back to the user or to interact with the environment. While often overlooked in science education, outputs like the flashlight or screen can be cleverly repurposed for experiments.

|  Output Device |  Type |  Possible Uses in Physics |
| --- | --- | --- |
| Speaker | Acoustic | Sound waves, Doppler, sonar |
| Screen | Optical | Flicker, light patterns, feedback |
| Flashlight / LED | Optical | Signaling, strobe, Morse code |
| Vibration Motor | Mechanical | Tactile signals, vibration transfer |
| Headphone Jack | Analog Audio | Signal generation, microphone, line-in |
| USB Port | Power/Digital | Power delivery, interfacing with microcontrollers |
| WiFi / Bluetooth | EM Signal | Signal strength, delay, proximity |
| NFC / RFID | EM Field | Near-field signaling, detection |
| Cellular Radio | EM Signal | Latency, RF interference studies |

---

### Smartphone Hardware Input Sensors

These are the primary built-in components that allow the phone to gather data from the world.

| **Category** | **Sensor / Module** | **Measures / Receives** | **Typical Use** | **Physics Applications** |
| --- | --- | --- | --- | --- |
| **Motion & Orientation** | Accelerometer | Linear acceleration (m/s²) | Screen rotation, motion sensing | Free fall, g-force, pendulum |
|  | Gyroscope | Angular velocity (rad/s) | Rotation detection | Circular motion, spin |
|  | Magnetometer | Magnetic field (μT) | Compass, metal detection | Earth's field, induction |
|  | Proximity Sensor | Nearby objects (IR) | Face detection, auto screen-off | Light absorption, distance |
|  | Touchscreen (Capacitive) | Touch location via electric field | UI interaction | Timing, pressure analysis |
| **Position & Location** | GPS Receiver | Latitude, longitude, altitude | Navigation, location services | Speed, distance, triangulation |
|  | Barometer* | Atmospheric pressure (hPa) | Altitude estimation, weather sensing | Pressure vs height |
| **Sound** | Microphone | Sound pressure waves | Audio input | Speed of sound, Doppler, FFT |
| **Optical / Imaging** | Front/Back Camera | Visible light (image, video) | Photography, video | Motion analysis, spectra |
|  | Ambient Light Sensor | Light intensity (lux) | Screen brightness control | Inverse square law, optics |
|  | ToF / LiDAR Sensor* | Distance via light time-of-flight | AR depth sensing | Distance/time experiments |
| **Environmental** | Hygrometer* | Relative humidity (%) | Environmental sensing | Vapor pressure, dew point |
|  | Thermometer* | Ambient or internal temperature (°C) | System monitoring | Thermal experiments |
| **Signal Input Modules** | Headphone Jack (Line In) | Analog voltage or sound | Microphones, sensors | Signal measurement |
|  | USB Port (OTG) | Digital input from external sensors | Sensor add-ons, power supply | Power/data experiments |
| **Wireless RF Receivers** | WiFi Receiver | 2.4 GHz / 5 GHz radio signals | Internet connection | Signal mapping, interference |
|  | Bluetooth Receiver | 2.4 GHz radio | Device pairing, proximity sensing | EM shielding, range tests |
|  | NFC Receiver | Near-field magnetic field (~13.56 MHz) | Contactless payment | Field decay, induction |
|  | 2G (GSM) Receiver | 900 / 1800 MHz radio | Voice, text communication | Signal propagation |
|  | 3G (UMTS) Receiver | ~2.1 GHz radio | Mobile data | Signal strength analysis |
|  | 4G (LTE) Receiver | 700 MHz – 2.6 GHz radio | High-speed mobile data | Traceroute latency tests |
|  | 5G (mmWave) Receiver* | 24–47 GHz radio | Ultra high-speed mobile data | Directionality, absorption |

 * *Rare or only present in higher-end models. May not be accessible on all devices.*

---

### Smartwatch Sensors (Common Across Most Modern Devices)

While smartphones are powerful scientific tools, smartwatches expand the possibilities for body-centric and wearable experiments. These sensors are optimized for continuous monitoring of motion, physiology, and environmental exposure and can be synchronized with a phone for richer datasets.

| **Sensor** | **Measures** | **Physics / Biophysics Applications** |
| --- | --- | --- |
| **Photoplethysmograph (PPG)** | Heart rate via optical light absorption | Heart rate, pulse wave timing, heart rate variability |
| **Accelerometer** | Linear acceleration | Step counting, gait analysis, arm swing, motion tracking |
| **Gyroscope** | Angular velocity | Wrist orientation, gesture recognition, rotational motion |
| **Magnetometer** | Magnetic field strength | Compass functionality, magnetic mapping |
| **Barometer** | Air pressure / altitude | Elevation change during movement, stair counting |
| **Temperature Sensor** *(some models)* | Skin temperature (°C) | Thermoregulation, circadian rhythm, recovery tracking |
| **SpO₂ Sensor** *(via PPG + IR)* | Blood oxygen saturation (%) | Biophysics, respiration rate, pulse oximetry |
| **ECG Sensor** *(electrical, advanced models)* | Electrical heart signals | Electrocardiogram waveform, heart electrical activity |
| **Bioimpedance Sensor** *(advanced models)* | Electrical resistance across skin | Hydration levels, body composition (fat/muscle), skin contact quality |
| **Ambient Light Sensor** | Light intensity (lux) | Circadian rhythm, environmental exposure |
| **Microphone** *(occasionally)* | Sound | Ambient noise exposure, breathing sounds |
| **Skin Contact Sensor** | Detects if watch is worn | Ensures accuracy of bio-data |
| **IR Thermometer** *(rare)* | Infrared surface temperature | Skin temperature tracking |

---

### Sensor Fusion: Android Virtual Sensors

Modern smartphones use data from multiple sensors to create more accurate and stable “virtual sensors.” These are not physical components but software-derived data streams that compensate for drift, noise, or missing axes — and they are indispensable in precise motion tracking.

| **Sensor** | **Derived From** | **Measures / Reports** | **Physics Applications** |
| --- | --- | --- | --- |
| **Gravity Sensor** | Accelerometer + filtering | Direction and magnitude of gravity (m/s²) | Isolate gravity vector from acceleration |
| **Linear Acceleration Sensor** | Accelerometer – gravity | Motion-only acceleration (m/s²) | Pure inertial acceleration |
| **Rotation Vector Sensor** | Accel + Gyro + Magneto | Device orientation as quaternion or rotation matrix | Orientation, 3D modeling, astronomy apps |
| **Geomagnetic Rotation Vector** | Accel + Magneto | Same as rotation vector, but no gyro (less stable) | Orientation without gyro |
| **Orientation Sensor** *(deprecated)* | Accel + Magneto | Azimuth, pitch, roll (degrees) | Compass heading, tilt angle |
| **Game Rotation Vector** | Accel + Gyro (no magneto) | Orientation in a drift-resistant frame | VR/AR motion tracking |
| **Pose 6DOF** *(ARCore only)* | All sensors + camera | Full 6 degrees-of-freedom pose | Augmented reality applications |
| **Step Detector** | Accel + pattern matching | Single event per step | Walking and running experiments |
| **Step Counter** | Accel + pattern matching | Total number of steps since boot | Pedometer projects |
| **Significant Motion Detector** | Accel + AI | Detects major movement patterns | Wake-up triggers, motion detection |
| **Tilt Detector** | Accel | Detects device tilt beyond threshold | UI triggers, ergonomic design |

---

### Artificial / Software-Derived Sensors

Some inputs are not derived from dedicated hardware but instead inferred through clever combinations of data and algorithms. These artificial sensors are useful in interpreting environmental context, human behavior, or even subtle biological signals.

| **Artificial Sensor** | **Derived From** | **Measures / Estimates** | **Physics Applications** |
| --- | --- | --- | --- |
| **Loudness** | Microphone amplitude (RMS) | Sound pressure level (dB) | Inverse-square law, sound insulation, noise mapping |
| **Frequency / Pitch** | FFT of microphone signal | Dominant frequency (Hz) | Musical tones, Doppler shift, beat frequencies |
| **Spectrum Analyzer** | Microphone + FFT | Full sound spectrum | Overtones, resonance, harmonic analysis |
| **Distance (via Camera)** | Pixel size + known object size | Distance to object | Parallax, scaling, angular size |
| **Object Speed (Video Analysis)** | Frame-by-frame camera tracking | Velocity (pixels/s → m/s) | Projectile motion, acceleration |
| **Color Detection** | Camera + RGB pixel values | Dominant color, light source quality | Spectrometry, color mixing, LED analysis |
| **Motion Tracking** | Optical flow (from video) | Direction/speed of moving object | Rolling balls, pendulums, oscillators |
| **Light Flicker Frequency** | Camera + video frame modulation | AC flicker rate (Hz) | Light bulb analysis, aliasing effects |
| **QR Code / Marker Tracking** | Camera + pattern recognition | Location/orientation | Pose tracking, AR experiments |
| **Vibration Frequency (via Video or Audio)** | Mic or frame analysis | Natural frequency (Hz) | Tuning forks, resonance tests |
| **Echo Delay** | Mic + speaker pulse timing | Distance to reflecting surface | Speed of sound, sonar, room mapping |
| **Heart Rate** | Camera light absorption over time | Pulse (BPM) | Biophysics, stress tests, signal processing |
| **Time-of-Flight via Sound** | Speaker → mic roundtrip | Distance (cm-m scale) | Simple sonar, object detection |
| **Angular Displacement (Image)** | Marker position/frame | Angle vs time | Pendulums, rotational motion |
 
---

### Filters That Make Sense for Smartphone Sensor Data

Raw data is often messy. Filters are essential tools in extracting meaningful signals from noisy inputs — especially in experiments involving motion, sound, or changing conditions. Understanding these tools helps students make cleaner measurements and build better models.

| **Filter Type** | **Purpose** | **Use Case in Physics Experiments** |
| --- | --- | --- |
| **Low-Pass Filter** |  Removes high-frequency noise |  Smooth out accelerometer data, heart rate signals, brightness flicker |
| **High-Pass Filter** |  Removes slow-changing (DC) trends |  Isolate vibrations or small oscillations |
| **Band-Pass Filter** |  Keeps only a specific frequency range |  Detect resonance, sound frequencies, filtering beat tones |
| **Moving Average Filter** |  Smooths data over time window |  Remove jitter from motion data, simplify curves |
| **Median Filter** |  Removes spikes and outliers |  Great for abrupt sensor noise, camera flicker, jumpy data |
| **Fourier Transform** |  Converts time → frequency domain |  Sound analysis, periodic motion, Doppler |
| **Inverse Fourier** |  Reconstructs time-domain signal from frequency data |  Rebuild filtered sound or motion signals |
| **Color Filters (RGB / IR / UV)** |  Restrict light to specific bands |  Spectrometer experiments, stress birefringence |
| **Kalman Filter** |  Recursive estimation, combines noisy sensor inputs |  Sensor fusion (e.g., combining gyro + accelerometer for smooth orientation) |
| **Exponential Smoothing** |  Time-weighted moving average |  Real-time display smoothing (like Phyphox graphs) |
| **Differentiation Filter** |  Calculates rate of change |  Convert position → velocity → acceleration |
| **Integration Filter** |  Cumulative summing |  Estimate displacement from acceleration (with caution!) |
| **Fourier Band Filter** |  Removes unwanted frequency bands from FFT |  Isolate harmonics, clean up sound spectra |
| **Periodic Pattern Filter** |  Emphasize or isolate repeating behavior |  Detect breathing, heartbeat, walking rhythm |
| **Laplace Transform** |  Time-frequency transformation (theoretical) |  More useful in modeling/control theory than in raw sensor data |
| **Wavelet Transform** |  Multiscale time-frequency analysis |  Advanced signal inspection; often overkill for high school projects |

---

### Sources of Randomness

Randomness may seem like a nuisance in experiments, but it’s also a powerful tool — for simulations, cryptography, or understanding statistical variation. Smartphones offer multiple sources of measurable randomness, from thermal noise to pixel jitter.

| **Source** | **Data Type** | **Use Case** |
| --- | --- | --- |
|  Microphone |  Amplitude vs time |  Noise floor analysis, entropy estimation |
|  Camera (dark frame) |  Pixel value distribution |  True noise-based RNG |
|  Accelerometer |  |  |
|  Magnetometer |  Field fluctuations |  Chaotic EM environment modeling |
|  WiFi RSSI |  Signal over time |  Environment randomness, motion detection |
|  PRNG |  Simulated randomness |  Statistical distributions, fairness testing |
|  Quantum RNG (web) |  Binary string |  Baseline comparison for true randomness |

 Other sources of randomness can be Accelerometer, Gyroscope, Barometer, GPS signal timing fluctuations, etc..
