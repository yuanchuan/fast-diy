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

Example input:

```html
<div class="diy">
  <p> test </p>
</div>
```

Example output

```html
<!--[diy=diy-f78e9de8]--><div>
  <p> test </p>
</div><!--[/diy]-->
```

## License
MIT
