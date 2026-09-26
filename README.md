# JavaScript Website Starter

A beginner-friendly, responsive website for learning HTML, CSS and JavaScript.
No installation, dependencies, build process or internet connection is needed.

## Run immediately

1. Extract the ZIP completely.
2. Open the `website-starter` folder.
3. Double-click `index.html` to open it in your browser.
4. After editing a file, save it and refresh the browser.

## Visual Studio Code

1. Select File > Open Folder and choose `website-starter`.
2. Edit `index.html`, `css/style.css` or `js/main.js`.
3. Open `index.html` in your browser as above.
4. Optional: if you already use the Live Server extension, right-click `index.html`
   and select Open with Live Server for automatic refresh.

## Microsoft Visual Studio

1. Use File > Open > Folder and select `website-starter`.
2. Edit the HTML, CSS and JavaScript files in the editor.
3. Open `index.html` from File Explorer in your browser.
4. Save and refresh to see changes. This is a static folder project; it does not
   require a .sln file, .NET SDK, IIS, npm or the F5 debugger.

## Files

- `index.html`: navigation, home, about, course cards, contact form and footer.
- `css/style.css`: colors, typography, layout, dark mode and mobile styles.
- `js/main.js`: commented examples of events, DOM updates, filtering and validation.
- `assets/images/`: a place for your own photos and logos.
- `PRACTICE.md`: small exercises and a manual verification checklist.

## Features to try

- Click Try JavaScript to update the page without reloading.
- Switch between dark and light mode. The theme preference uses localStorage.
- Search courses by JavaScript, CRM or Power Platform.
- Narrow the browser window and use the mobile menu.
- Fill in the demo contact form and validate the entries.

## Demo scope

The course content is sample content. The contact form validates inputs locally;
it does not send email or save entries. Login, payments, a database and a backend
are not included. Do not put payment keys, passwords or other secrets in browser
JavaScript. Theme storage behavior can vary when opening local files; the page
works even if storage is unavailable.

## Customize

Change visible text in `index.html`. Adjust theme colors in `:root` and
`body.dark` inside `css/style.css`. Add interactions in `js/main.js`.
To add a photo, copy it into `assets/images/` and use an HTML image element:

```html
<img src="assets/images/my-photo.jpg" alt="Describe your photo" width="320">
```
