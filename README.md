# vue-component-minify README

"vue-component-minify" is vs-code extension for minifying .vue files. 


## Extension Settings

* `vue-component-minify.minifyOnSave`: Automatically minify file when saving (yes/no).
 `vue-component-minify.useBasePath`: Minify files only in folder src and save in root project with same folder structure (yes/no). If yes minPath is not used.
* `vue-component-minify.minPath`: Where to save the minified file (/componentsmin).
* `vue-component-minify.postfix`: Minified filename postfix (min).

## Release Notes

### 0.0.1
Initial release

### 0.0.2
* fixed delete multiline html comments
* added config useBasePath