# fast-diy

A small tool to quickly format Discuz! diy module.   

## Install from npm

```bash
$ npm install -g fast-diy
```

## How to use
Add a "diy" class name to each html tag which is going to be DIYed. Then: 

```bash
$ fast-diy INPUT.html OUTPUT.html
```

Sample input:

```html
<div class="diy">
  <p> test </p>
</div>
```

Sample output:

```html
<!--[diy=diy-f78e9de8]--><div id="diy-f78e9de8">
  <p> test </p>
</div><!--[/diy]-->
```

## License
MIT
