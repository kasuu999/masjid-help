
# Masjid / Dargah Help Portal (React)

**Quick start**
1. Extract the zip.
2. In the project folder run:
   ```bash
   npm install
   ```
3. Create a `.env` file in project root with your EmailJS values:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=service_xxx
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
   REACT_APP_EMAILJS_PUBLIC_KEY=public_xxx
   ```
4. Run the app:
   ```bash
   npm start
   ```

**Notes**
- Replace the dummy images in `public/` as you like.
- The main component is `src/components/Background.js` which contains the glass form and background.
- Template in EmailJS must use variables: `{{name}} {{phone}} {{location}} {{place}} {{message}}`
