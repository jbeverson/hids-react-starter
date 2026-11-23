# Instructions for Copilot (course project rules)

This is a student project for a health informatics course. Follow these rules in every answer.

## Tech
- React with Vite, plain JavaScript (not TypeScript), function components and hooks.
- Keep the project small. Do not add libraries unless the student asks, and say why if you do.
- Put FHIR calls in src/fhir.js and screens in src/App.jsx (or small components in src/).

## Data and privacy
- The only FHIR server is the public HAPI test server: https://hapi.fhir.org/baseR4
- Use synthetic or test data only. Never ask for, request, or store real patient information.
- Never put API keys, passwords, or tokens in the code.
- Do not invent FHIR fields. If you are unsure a field exists, show the raw value or say so.

## Patient-facing design
- Write for a patient, not a clinician: plain language at about an 8th-grade reading level.
- Do not give medical advice or diagnoses. Show the patient's own data and explain what it is.
- Show clear messages for blank input, "not found", and network errors. Never fail silently.
- Basic accessibility: every input has a label, readable contrast, works with the keyboard.

## How to work with the student
- After each change, say in 2 to 3 sentences what you changed and why.
- Tell the student one thing to check in the browser to confirm it works.
- If something fails, explain the error in plain words before proposing a fix.
- If you are guessing, say so.
