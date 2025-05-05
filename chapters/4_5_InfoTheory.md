---
layout: default
title: 4.5 Information Theory & Signal Science
---

# Information Theory & Signal Science

Information is all around us—carried by sound, light, radio waves, and digital signals. Whether we're streaming music, scanning a QR code, or sending a text, we rely on the physics of signals to transmit, encode, and decode meaning.

This chapter explores the science of communication through hands-on experiments using everyday devices. With tools like microphones, light sensors, Wi-Fi analyzers, and Fourier transform apps, smartphones become powerful labs for investigating how signals travel, degrade, and reveal structure.

Students will dive into core ideas from information theory, sampling, and error correction by watching audio degrade through generations, visualizing hidden frequencies, or transmitting messages via flashlight. Abstract concepts like Shannon entropy, Nyquist limits, and Hamming codes come to life—not as equations, but as experiments you can do in your pocket.

---


### Signal Transmission, Delay & Degradation

---


### Smartphone-to-Smartphone Communication: Light, Sound, and Signal Decay (INFO-01)

**Sensors Used:** Camera, Microphone, Flashlight, Speaker  
**What's Measured:** Signal strength, clarity, and delay over distance and through obstacles

**Description**  
Can one smartphone "talk" to another — without Wi-Fi, Bluetooth, or wires? In this experiment, one phone acts as a transmitter, sending out a repeated light signal (flashlight) or sound signal (beep or tone). The other phone acts as a receiver, using its camera (for light) or microphone (for sound) to detect the signal.**

Record how the signal quality changes with distance or barriers like cloth or walls. You'll observe effects like signal degradation, latency, and interference, just like in real-world communication systems — from Wi-Fi to fiber optics to sonar.

This hands-on demo makes abstract concepts like line-of-sight, signal attenuation, and noise come to life.


### Signal Echo and Delay: Sound Bouncing Through Space (INFO-02)

**Sensors Used:** Microphone, Audio Recorder  
**What's Measured:** Echo delay time, signal degradation, and acoustic reflections

**Description**  
Every echo tells a story. In this experiment, use your smartphone to record a sharp sound — like a clap, beep, or click — in a large, reflective space such as a hallway, stairwell, tunnel, or gymnasium. The microphone captures both the original sound and its echo as it bounces back from walls.**

By measuring the time delay between the sound and its echo, you can estimate the distance to surfaces or analyze how sound energy decays and disperses. Try repeating the experiment in both quiet and noisy environments to hear how background noise and interference affect clarity.

This real-world echo illustrates core ideas from digital communication: latency, signal fidelity, and how data can be distorted by noise.


### Signal Degradation: Generations of Loss (INFO-03)

**Sensors Used:** Microphone, Speaker, Camera, Display  
**What's Measured:** Loss of signal fidelity across repeated analog transfers

**Description**  
What happens when a signal is copied — over and over again? In this analog-style experiment, explore how quality degrades through repeated transfers.**

Start by playing a sound clip from one smartphone's speaker and record it using another smartphone's microphone. Then play back the new recording and repeat the process several times. Watch as the sound becomes progressively more muffled, noisy, or distorted with each generation.

You can try the same with images: take a photo with one phone, display it, then photograph that display with another phone — repeating the process to simulate visual degradation.

Compare the first and final versions. This models cascading loss in analog systems, the effects of error accumulation, and the concept behind lossy compression. It's a hands-on demonstration of why fidelity matters — and how easily information can decay.

---


### Spectral Analysis & Frequency Domain

---


### Fourier Explorer: Visualizing Frequencies with Your Voice (INFO-05)

**Sensors Used:** Microphone  
**What's Measured:** Frequency spectrum of sounds using real-time FFT

**Description**  
Every sound is a blend of frequencies — and your smartphone can reveal what's hidden inside. In this experiment, use a real-time FFT (Fast Fourier Transform) app to visualize the frequency spectrum of your voice, music, or ambient sounds**

Try speaking different vowels, whistling, playing an instrument, or even clapping. You'll see how pure tones show up as sharp peaks, harmonics appear in multiples, and noise creates a fuzzy, scattered pattern.

This simple tool turns your phone into a spectrum analyzer, offering an intuitive look into how sound is structured — and unlocking key ideas in harmonics, resonance, and frequency decomposition.


### Signal vs. Noise: Listening to the Invisible Mess (INFO-06)

**Sensors Used:** Microphone  
**What's Measured:** Signal-to-noise ratio (SNR), frequency spectrum, waveform clarity

**Description**  
What separates a clear message from a garbled one? In this experiment, use your smartphone to record ambient sound in a variety of environments — from a quiet room to a busy street or crowded hallway. Then use a Fourier transform app or waveform viewer to analyze the recordings.**

Compare how signal clarity, background noise, and interference appear in both the time and frequency domains. Look for sharp patterns in clean signals and scattered energy in noisy environments.

This hands-on investigation demonstrates how signal-to-noise ratio (SNR) affects communication, and why filtering and noise reduction are essential in both audio systems and data networks.


### Sound-as-Data: From Voice to Waveform to Bits (INFO-07)

**Sensors Used:** Microphone  
**What's Measured:** Bit depth, sampling rate, waveform clarity, and audio fidelity

**Description**  
Your voice is analog — but how does it turn into digital data? In this experiment, record short voice clips using a smartphone audio app, then visualize them as waveforms or spectrograms.**

Export the same recording using different bit depths (e.g., 16-bit vs. 8-bit) and sampling rates, and compare how the sound quality changes. Can you hear the difference? Can you see it in the waveform?

This experiment brings to life core concepts of digitization, including sampling, quantization, and bitrate — and shows how each decision affects signal fidelity, file size, and compression quality.

---


### Information Theory & Data Encoding

---


### Data Compression Visualization: Seeing What Gets Lost (INFO-08)

**Sensors Used:** Camera, Video Recorder  
**What's Measured:** File size, visual quality, and compression artifacts

**Description**  
Digital files are often compressed — but what's actually lost in the process? In this experiment, record a short video clip with your smartphone, then export it at multiple quality levels using built-in editing tools or compression settings.**

Compare both the file sizes and the visual appearance of the videos. Look for compression artifacts like blocky motion, blurring, or color banding. Which details vanish first? Which distortions are most noticeable?

This is a vivid way to explore lossy vs. lossless compression, redundancy, and Shannon entropy. You'll see firsthand how data can be stripped down — and where the line lies between efficient encoding and noticeable degradation.


### Morse Code Light Transmission: Encoding Messages with Flash (INFO-09)

**Sensors Used:** Flashlight, Camera  
**What's Measured:** Time-based encoding of binary signals using light

**Description**  
Before fiber optics and 5G, there was the flash of a light. In this classic communication experiment, use one smartphone's flashlight to send a Morse code message — such as "HI" or "SOS" — by manually turning the light on and off in short and long pulses.**

Use a second smartphone to record the flashing sequence on video. Then, analyze the footage frame by frame to decode the message based on timing patterns.

This hands-on activity brings to life the core ideas of binary encoding, time-based signaling, and light-based data transmission — all using tools in your pocket.


### QR Code Dissection: Cracking the Digital Matrix (INFO-10)

**Sensors Used:** Camera, QR Scanner App, (Optional: Microscope)  
**What's Measured:** Structure, redundancy, and error correction in visual encoding

**Description**  
QR codes may look like digital noise — but they're actually precisely engineered grids of information. In this experiment, use a QR code generator to encode short messages, then print the codes and zoom in using a smartphone camera or microscope.**

Explore the structure by identifying key features like position markers, data zones, and error correction regions. Then, obscure or damage part of the code and test how well it still scans. Thanks to built-in Hamming-style error correction, the message often survives — even when parts are missing.

You can also generate versions with different redundancy levels, comparing how much damage each can tolerate. It's a perfect introduction to visual encoding, redundancy, and the power of error-correcting codes.


### Error-Correcting Codes: Hamming's Rescue Mission (INFO-11)

**Sensors Used:** None (paper-based or digital logic simulation)  
**What's Measured:** Bit error detection and correction using Hamming codes

**Description**  
What happens when a bit flips mid-transmission? In this logic-based experiment, explore how Hamming codes add smart redundancy to detect and correct errors.**

Start with a 4-bit binary message (e.g., 1011), calculate the required parity bits, and assemble the full encoded word. Then, simulate a noisy channel by deliberately flipping a single bit. Using Hamming's method, identify and correct the error — restoring the original message.

This is a hands-on introduction to how error detection and correction work in real-world systems like CDs, satellite links, and QR codes. It makes the abstract idea of redundancy feel both logical and powerful.

---


### Sampling, Quantization & Bitrate

---


### Nyquist in Action: Sampling Limits and Aliasing (INFO-12)

**Sensors Used:** Microphone  
**What's Measured:** Sampling rate, aliasing effects, and waveform fidelity

**Description**  
How fast do you need to sample a signal to capture it accurately? In this experiment, explore the Nyquist-Shannon Sampling Theorem — the foundation of digital audio and signal processing.**

Use a tone generator app to play sine waves at increasing frequencies, and record them using your smartphone's microphone with an FFT or spectrogram viewer. As the input frequency approaches half the sampling rate, observe how the recorded signal begins to distort — a phenomenon known as aliasing, where the output no longer matches the original.

As an extension, use an audio editing app to downsample a high-quality recording and visualize the loss in detail and clarity. This is a striking demonstration of why sampling rate matters, and what happens when we digitize signals too slowly.
