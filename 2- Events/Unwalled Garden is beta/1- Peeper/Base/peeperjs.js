var archive = await DatArchive.create({
  title: 'User Name',
  description: 'User bio'
})
console.log(archive.url)
// => dat://da2ce4..dc/
// Missing "type": ["unwalled.garden/person"], / add it to dat-temp.json

await archive.writeFile('/thumb.png', myBase64, 'base64')

// https://beakerbrowser.com/docs/apis/dat
// https://beakerbrowser.com/docs/apis/by-example.html

// https://unwalled.garden/docs/common-fields
// https://unwalled.garden/docs/how-to-extend-schemas
// https://unwalled.garden/docs/browser-integration
// https://unwalled.garden/docs/dat-primer
// https://unwalled.garden/dir/data
// https://unwalled.garden/docs/mounts
// https://unwalled.garden/dir/refs
// https://unwalled.garden/docs/why-not-rdf
// https://unwalled.garden/person
// https://unwalled.garden/docs/api/profiles
// https://unwalled.garden/post
// https://unwalled.garden/docs/api/posts

// https://unwalled.garden/person https://unwalled.garden/docs/api/profiles

// https://unwalled.garden/post https://unwalled.garden/docs/api/posts

// https://unwalled.garden/reaction https://unwalled.garden/docs/api/reactions
// https://unwalled.garden/vote https://unwalled.garden/docs/api/votes
// https://unwalled.garden/comment https://unwalled.garden/docs/api/comments

// https://unwalled.garden/media https://unwalled.garden/docs/api/media
// https://unwalled.garden/follows https://unwalled.garden/docs/api/follows

// https://unwalled.garden/discussion https://unwalled.garden/docs/api/discussions

// https://unwalled.garden/sitelist https://unwalled.garden/docs/api/sitelists
// https://unwalled.garden/bookmark https://unwalled.garden/docs/api/bookmarks

// https://github.com/beakerbrowser/pauls-dat-api

// https://www.electrictoolbox.com/unix-timestamp-javascript/
// https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
// https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
// https://stackoverflow.com/questions/12008120/console-log-timestamps-in-chrome
// https://javascript.info/date
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://www.w3schools.com/js/js_date_formats.asp
// https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
// https://codehandbook.org/javascript-date-format/
// https://stackoverflow.com/questions/5416920/timestamp-to-human-readable-format
// https://timestamp.online/article/how-to-convert-timestamp-to-datetime-in-javascript
// https://flaviocopes.com/how-to-get-timestamp-javascript/
// https://tecadmin.net/get-current-timestamp-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
// https://gist.github.com/hurjas/2660489
// https://coderwall.com/p/rbfl6g/how-to-get-the-correct-unix-timestamp-from-any-date-in-javascript
// https://appdividend.com/2019/02/13/how-to-get-timestamp-in-javascript-timestamp-example/
// https://www.w3schools.com/jsref/jsref_gettime.asp

// https://www.drupal.org/sandbox/auth/1093236
// https://www.google.com/search?q=sandbox+HTML+wih+iframe&oq=sandbox+HTML+wih+iframe&aqs=chrome..69i57.6078j0j4&sourceid=chrome&ie=UTF-8
// https://html.com/attributes/iframe-sandbox/
// https://www.html5rocks.com/tutorials/security/sandboxed-iframes/
// https://benfrain.com/sandbox-local-htmlcss-code-snippets-inside-iframe-style-guidespattern-libraries/
// https://blog.dareboost.com/en/2015/07/securing-iframe-sandbox-attribute/
// https://codepen.io/marcysutton/pen/ZYqjPj

// file:///C:/Peeper/Other%20networks/takeout-20160825T052257Z/Orkut/Perfil/internal/profile.html