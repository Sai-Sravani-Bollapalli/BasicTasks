### HTTP

HTTP (HyperText Transfer Protocol) is the underlying protocol of the World Wide Web, developed by Tim Berners-Lee
HTTP is the foundation of data communication for the World Wide Web

Communication between clients and servers is done by requests and responses:

```markdown
- A client (the browser) sends an HTTP request to the web
- An web server receives the request
- The server runs an application to process the request
- The server returns an HTTP response (output) to the browser
- The client (the browser) receives the response
```

The first documented version of HTTP was HTTP V0.9

### HTTP V0.9 (1991)

The first version of the protocol had only one method, namely GET, which would request a page from a server. The response from the server was always an HTML page.

```markdown
Get /
<!DOCTYPE html>
<html>...</html>
```

No metadata, no HTTP headers, no content negotiation

### HTTP V1.0 (1996)

To expand the protocol with extended operations, extended negotiation, richer meta-information, tied with a security protocol which became more efficient by adding additional methods and header fields. RFC 1945 officially introduced and recognized HTTP V1.0 in 1996.

- Request may have multiple newline seperated headers and HTTP version
- Response has its own seperated headers and is prefixed with response staus line
- Connection is closed after transfer complete

```markdown
=> curl -vo https://twitter.com

* Connected to twitter.com port 443 (#0)

> Get / HTTP/1.0
> Host: twitter.com
> User-Agent: curl/743.0
> Accept: */*
>
< HTTP/1.0 200 OK
< Content-type: text/html;charset=utf-8
<pragma: no-cache
<
<!DOCTYPE html>
<html>...</html>

* Closing connection 0
```

Support is not limited to hypertext(can send images), content in coding, character-set support, media-type negotiations, proxy behaviours, cache authorization and a bunch of things.

### HTTP V1.1 (1996)

To satisfy the needs of modern world HTTP V1.1 was developed over a period of roughly 4 years. RFC was published in 1997 followed by an extension in 1999, RFC 2616. 











## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Sai-Sravani-Bollapalli/Blog/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Sai-Sravani-Bollapalli/Blog/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
