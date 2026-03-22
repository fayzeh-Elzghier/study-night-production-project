import gulp from "gulp";
import shell from "gulp-shell";

const { task, series } = gulp;

task("parcel", shell.task(["npx parcel index.html"]));

task("test", shell.task(["npx mocha test/shuffle.js"]));

task("cypress", shell.task(["npx cypress run"]));

task("default", series("parcel"));