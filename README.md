# Pipe Embed Code v2.0 Demos

This repository contains clear, working examples of how to integrate the [Pipe Video Recording Platform](https://addpipe.com/) into your web applications using the v2.0 embed code.

These demos highlight different integration strategies, from simple HTML tags to dynamic JavaScript rendering, form integration, or a video recording teleprompter.

## 📂 Demos Overview

### 1. HTML Embed (`embed-html.html`)
**Best for**: Standard websites, static pages, or CMS (WordPress, etc.).
- **Implementation**: Uses the custom `<piperecorder>` HTML tag.
- **Features**:
  - Shows how to embed the recorder declaratively;
  - Demonstrates controlling the recorder (Record, Stop, Play, Save) using external buttons via the JS API;
  - Includes an example of having multiple recorders on a single page.

### 2. JavaScript Embed (`embed-javascript.html`)
**Best for**: Single Page Applications (SPAs) built with React, Vue, Angular, or detailed logic.
- **Implementation**: Dynamically injects the recorder into a specific `<div>` container using JavaScript.
- **Features**:
  - Simulates a dynamic environment where recorders are added or removed programmatically;
  - Ideal for workflows where the recorder should only appear after a specific user action.

### 3. Custom Form Integration (`custom-form.html`)
**Best for**: Contact forms, job applications, surveys, or testimonials.
- **Implementation**: Integrates the recorder inside a standard HTML `<form>`.
- **Features**:
  - Automatically captures the final video URL;
  - Stores the URL in a `type="hidden"` input field;
  - Submits the video link alongside standard text data (First Name, Last Name, Email, and Comments) when the user clicks Submit.

### 4. Video Recorder with Teleprompter (`video-recorder-with-teleprompter.html`)
**Best for**: Video testimonials, presentations, training videos, or any scenario where speakers need scripted guidance.
- **Implementation**: Integrates the recorder with a vertical-style teleprompter.
- **Features**:
  - Scrolling teleprompter with playback controls (start, pause, reset);
  - Records video while displaying the teleprompter text.

## 🚀 Getting Started
1. Clone the repository:
````bash
Bash

git clone https://github.com/addpipe/embed-code-v2.0-demos.git
cd embed-code-v2.0-demos
````

2. Run the Demos:

You can open the `.html` files directly in your browser.
- Note: Modern browsers require a secure context (HTTPS) or `localhost` to access the camera and microphone. If you are not opening the file locally, ensure your server uses HTTPS.

## 🛠 Configuration
The demos use a public demo account hash (`NON-EXISTENT-HASH-SO-THAT-THE-VIDEOS-ARE-NOT-PROCESSED-AT-ALL`). To use these with your own Pipe account:
1. Log in to your [Pipe Account Dashboard](https://dashboard.addpipe.com/signup)
2. Navigate to the **Account** section.
3. Copy your unique **Account Hash**.
4. Open the `.html` file you wish to use and replace the value of `pipe-accountHash` with your own.

## 📁 File Structure
```` Plaintext
Plaintext


└── style.css                                # Basic styling for the demo layout
└── custom-form.css                          # Bootstrap v5.3.6 for the custom form layout
├── js/
    └── custom-form.js                       # Logic for the Custom Form JS demo
│   ├── embed-html.js                        # Logic for the HTML Tag demo
│   └── embed-javascript.js                  # Logic for the Dynamic JS demo
├── custom-form.html                         # Demo: Simple Form With Video Recorder
├── embed-html.html                          # Demo: Pipe Embed v2.0 HTML Demo
├── embed-javascript.html                    # Demo: Pipe Embed v2.0 JavaScript Demo
├── video-recorder-with-teleprompter.html    # Demo: Video Recorder With Vertical Style Teleprompter
└── README.md
````

## 📚 Documentation
For deep dives into the API methods and events used in these files, check out the official developer guides:
  - [2.0 Embed Code Overview](https://www.google.com/search?q=https://addpipe.com/docs/2.0/embed-code)
  - [JavaScript Desktop Control API (Record, Stop, Play, etc.)](https://www.google.com/search?q=https://addpipe.com/docs/2.0/desktop-control-api)
  - [JavaScript Desktop Events API (onSaveOk, onVideoUploadSuccess, etc.)](https://www.google.com/search?q=https://addpipe.com/docs/2.0/desktop-events-api)

