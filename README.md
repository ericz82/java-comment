# java-comment

Library for converting text into java-based syntax comments

## Setup

```
npm install
```

## Usage

*To specify the line length at which to move the comment to a new line: include the line length amount as the first parameter*


### For input via command line:

```
> npm start <lineLength>

Text you want commented:
```

And then type or paste the text you want converted to a comment.

### For file inputs:

```
> npm start <lineLength> <fileName>
```

**This input requires specifying the line length**

## Output

Your comment will be saved as a text file in `output/comment.txt`

```
/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec magna vitae
 * mauris elementum luctus. Praesent sollicitudin nisl ac nulla scelerisque, eu laoreet
 * ex hendrerit. Ut nec nulla faucibus, vestibulum tellus in, molestie neque. Lorem
 * ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat sit amet nisl tincidunt
 * condimentum. Maecenas vestibulum eu sapien eget interdum. Nullam commodo arcu
 * pharetra justo elementum ultricies. Vivamus euismod tellus eget enim egestas porttitor.
 * Nulla id volutpat nisi, ac dapibus urna. Proin sed iaculis elit. Vivamus consectetur
 * faucibus elit, eu aliquam augue maximus at. Duis ante ex, molestie sed bibendum
 * non, eleifend nec lacus. Suspendisse tortor purus, rutrum at imperdiet in, convallis
 * vitae ex. Fusce ut ipsum sit amet ipsum rutrum cursus. Nulla pellentesque venenatis
 * metus vitae vestibulum. Pellentesque pulvinar enim quis porta volutpat.  
 */
 ```
