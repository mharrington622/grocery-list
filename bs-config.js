
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },
    "files": false,
    "watchOptions": {},
    "server": true,
    "proxy": false,
    "port": 48879,
    "middleware": false,
    "serveStatic": [],
    "ghostMode": false,
    "browser": ["chrome", "firefox", "microsoft-edge"],
    "startPath": "app\\grocery-list.html",
    "minify": true
};