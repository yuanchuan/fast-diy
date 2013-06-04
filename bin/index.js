#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var compose = require('fcompose');
var cheerio = require('cheerio');


/**
 * selector class name for diy elements.
 */
var selectorClass = 'diy';


/**
 *  The diy template format.
 */
var tmpl = '<!--[diy={id}]--><div id="{id}">{tag}</div><!--[/diy]-->'; 
var tmplDiv = '<!--[diy={id}]-->{tag}<!--[/diy]-->';  


/**
 *  Generate diy format content. 
 */
var format = function(html) {
  var $ = cheerio.load(html);  
  $('.' + selectorClass).each(function() {
    var div = (this.name === 'div');
    // remove selector class.
    var $diy = $(this).removeClass(selectorClass);
    // generate random unique id.
    var id = 'diy-' + Math.random().toString(16).substr(2);  
    // use default id for div.
    if (div) {
      id = $diy.attr('id') || id; 
    }
    // replace with the diy format content.
    $diy.replaceWith(
      (div ? tmplDiv : tmpl).replace(/\{id\}/g, id).replace(/\{tag\}/g, $.html($diy))
    );   
  });
  // remove empty class and return.
  return $.html().replace(/\s+class\=""/g, ''); 
};


/**
 *  $ diy input output
 */
var input = process.argv[2] || '';
var output = process.argv[3] || '';


/**
 * Print help info.
 */
if (!input) {
  console.log(
    '\n  Usage:  %s <filename> [output].\n', 
    path.basename(process.argv[1])
  )
  return;
}


/**
 *  Output to the terminal.
 */
if (!output) {
  input = path.join(process.cwd(), input);
  fs.readFile(input, 'utf-8', function(err, html) {
    if (err) throw err;
    console.log(format(html))
  }); 
  return;
}


/**
 *  Output to a specified file.
 */
compose(
  path.join(process.cwd(), input), 
  path.join(process.cwd(), output), 
  function(html, next) {
    next(format(html.toString()));
  }, 
  function(ms) {
    console.log('\n  Done in %s ms\n', ms)
  }
);

