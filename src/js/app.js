const mySharedTemplate = require('../../views/layouts/main.hbs');

//scss files
import css from '../scss/main.scss';
//js files
import $ from 'jquery'
require('bootstrap-sass');

import NavBar from "./navbar.js";
//partials
import adminNav from './partials/adminNav.js'
import Toolpit from './partials/toolpitBootstrap.js'
import sideNav from './partials/sideNav.js'
import modal from './partials/modal.js';

import Map from "./map.js";
import image from "./image_src.js";
import imagePreview from "./imagePreview.js";