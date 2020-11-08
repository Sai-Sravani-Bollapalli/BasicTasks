# 
# HTTP
HTTP (HyperText Transfer Protocol) is the underlying protocol of the World Wide Web, developed by Tim Berners-Lee.
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
- Response has its own seperated headers and is prefixed with response status code
- Connection is closed after transfer complete

```markdown
=> curl -v0 https://twitter.com

* Connected to twitter.com port 443 (#0)

> Get / HTTP/1.0
> Host: twitter.com
> User-Agent: curl/743.0
> Accept: */*
>
< HTTP/1.0 200 OK
< Content-type: text/html;charset=utf-8
< pragma: no-cache
<
<!DOCTYPE html>
<html>...</html>

* Closing connection 0
```

Support is not limited to hypertext(can send images), content in coding, character-set support, media-type negotiations, proxy behaviours, cache authorization and a bunch of things.

### HTTP V1.1 

To satisfy the needs of modern world HTTP V1.1 was developed over a period of roughly 4 years. RFC was published in 1997 followed by an extension in 1999, RFC 2616. 

- HTTP response was boosted by many things, but speacial tribute should be paid to keep-alive connections.
- We have Chunked responses, compressions, byte ranges and pipelining.
- There is more pragma, there is much better caching mechanisms to improve performances.
- There are 24 new status codes
- We got cookies because we wanted to make our apps stateful


```markdown
=> curl -v https://github.com

> Get / HTTP/1.1
> Host: github.com
> User-Agent: curl/743.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Transfer-Encoding: chunked
< Cache-Control: no-cache
<
{ [1370 bytes data]
* Connection #0 to host github.com left intact


**lets make another one**


=> curl -v -H "Range: bytes=0-1024" https://assests-cdn.github.com/../puppy.png

<HTTP/1.1 206 Partial Content
< Cache-Control: public, max-age=315360000
< Age: 2165764
< Content-Type: image/png
< Content-Range: bytes 0-1024/35407
< Content-Length: 1025
< Connection: keep-alive
<
{ [1025 bytes data]
* Connection #0 to host left intact
```

### HTTP V2.0 

The basis of HTTP 2.0 is SPDY, an experimental protocol developed at Google that had the goal of reducing the latency of web pages and minimizing the cost of deployment complexity and avoiding changes in the network infrastructure. In 2015, ISG approved HTTP V2.0 and HPACK drafts

If I were to do a HTTP/2 request then, for the outside of the server not much would have changed. Its the same exchange headers, status codes, keep-alive connection. To understand the changes we need to look at a slightly more low levels, analyse the packets. Once you are able to decrypt the traffic, we can see new type of packets which HTTP/2 calls them a Frame. So I can see window update and settings and headers, decompressed-header data and we can already decipher the well-known headers.

  
  
  
  

# Difference between HTTP V2.0 and its predecessor

- HTTP/2 is binary instead of textual. It introduces a binary framing layer.
- HTTP/2 allows multiplexing of requests and responses
- Due to multiplexing, we require only one single connection per origin
- HTTP/2 can also do server push (push resources pro-actively without the need for the client to request those)
- HTTP/2 can do flow control but at the application level
- HTTP/2 also uses header compression to reduce the overhead






# Difference between Browser JS(console) vs Nodejs

Both the browser and Node.js use JavaScript as their programming language.

- Building apps that run in the browser is a completely different thing than building a Node.js application.

- Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.

- From the perspective of a frontend developer who extensively uses JavaScript, Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language. You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language, and by using the same language to perform all your work on the web - both on the client and on the server, you're in a unique position of advantage.

**What changes is the ecosystem ?**

- In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser. And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.

- Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient. This means that you can write all the modern ES6-7-8-9 JavaScript that your Node.js version supports. Since JavaScript moves so fast, but browsers can be a bit slow and users a bit slow to upgrade, sometimes on the web, you are stuck with using older JavaScript / ECMAScript releases. 

- You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won't need that.

- Another difference is that Node.js uses the CommonJS module system, while in the browser we are starting to see the ES Modules standard being implemented. In practice, this means that for the time being you use require() in Node.js and import in the browser.






# What happens when you type a URL in the address bar in the browser?

URL stands for Uniform Resource Locator. URL is the address of the website which you can find in the address bar of your web browser. It is a reference to a resource on the internet, be it images, hypertext pages, audio/video files, etc.

Example :
https;//github.com/


URL is sent to DNS. DNS is short for Domain Name System. Like a phonebook, DNS maintains and maps the name of the website, i.e. URL, and particular IP address it links to. Every URL on the internet has a unique IP address which is of the computer which hosts the server of the website requested.

Steps for what happens when we enter a URL :

- Browser checks cache for DNS entry to find the corresponding IP address of website. It looks for following cache. If not found in one, then continues checking to the next until found.
1. Browser Cache
2. Operating Systems Cache
3. Router Cache
4. ISP Cache
- If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
- The requests are sent using small data packets that contain information content of request and IP address it is destined for.
- Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
- Browser sends an HTTP request to the web server. GET or POST request.
- Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
- Server sends out an HTTP response along with the status of response.
- Browser displays HTML content




