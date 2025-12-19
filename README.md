## CMU Learning Science & Engineering Seminar Website

This repository hosts the website for the **CMU LSE Seminar** series. The site is designed to be accessible, responsive, and easy to update.

**Live Site:** [https://the-oak-lab.github.io/learning-seminar](https://the-oak-lab.github.io/learning-seminar)

### About the Seminar

The CMU LSE seminar series aims to broaden our understanding of how technology can be leveraged to enhance learning and its impact on learners, instructors, and learning environments. 

### How to Update the Schedule

The weekly schedule is populated dynamically from a `schedule.json` file. To change the lineup, edit `schedule.json` and commit your changes.

**Steps to Update the Schedule:**

1. **Open `schedule.json`:**
   Located in the root of the repository, `schedule.json` is a JSON file containing an array of session entries. Each entry looks like this:
   ```json
   {
     "date": "3/12/2025",
     "speakers": [
       {
         "name": "Georgie Qiao Jin",
         "link": "http://georgiejin.com/"
       }
     ],
     "topic": "Building the Future of Educational VR: Towards an Immersive and Social Learning Experience",
     "topicSlides": "https://example.com/slides"
   }
   ```

2. **Add or Modify Entries:**
   - **Date (required):** Provide the session date in a recognizable format (e.g., `MM/DD/YYYY`).
   - **Speakers (optional):** Add an array of speaker objects, each with `name` and optional `link`. If multiple speakers are used, they’ll be displayed inline, separated by spaces.
     ```json
     "speakers": [
       { "name": "Speaker Name", "link": "https://theirprofile.com" },
       { "name": "Another Speaker" }
     ]
     ```
     If no speakers are listed or if the `speaker` field is empty, it will show "TBA."
   
   - **Topic (optional):** Provide a short title or description for the week’s talk. If empty, it will display as "TBA."
   - **topicSlides (optional):** Add a link to slides or related materials. If provided, the entire topic text becomes clickable. If omitted, the topic will be plain text.
   
3. **Commit Your Changes:**
   Once you’ve edited and saved `schedule.json`, commit and push your changes to the `main` branch. The website, hosted on GitHub Pages, will automatically update within minutes.

### Running Locally

If you want to test changes before pushing:

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/the-oak-lab/lse-seminar.git
   ```

2. **Serve Locally:**
   You can use a simple HTTP server. For example, with Python:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

### Contributing

- **Accessibility:** Contributions that improve web accessibility with assistive technologies are highly encouraged.  
- **New Features or Layout Changes:** Please open an issue to discuss your ideas before submitting a pull request.

### License

This repository is released under the [MIT License](LICENSE).
