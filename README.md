# fast-diy

A small tool to quickly format Discuz! diy module(I hate it!).  

## Install from npm

```bash
$ npm install -g fast-diy
```

## How to use
Add a `diy` class name to each html tag which is going to be DIYed and run the **fast-diy** command: 

```bash
$ fast-diy INPUT.html OUTPUT.html
```

Sample input:

```html
<div class="article diy">
  <p> test </p>
</div>
```

Sample output:

```html
<!--[diy=diy-f78e9de8]--><div class="article" id="diy-f78e9de8">
  <p> test </p>
</div><!--[/diy]-->
```

## License
MIT
