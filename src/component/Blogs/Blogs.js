import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-4 mb-5 px-5 py-4 border rounded-3'>
            <h2 className='text-center mb-5'>Questions and Answers</h2>
            <div>
                <h5>1. Difference between JavaScript & Node.js</h5>
                <ul>
                    <li>JavaScript is a programming language. On the other hand, Node.js is a JavaScript runtime environment.</li>
                    <li>JavaScript commonly used on client-side. Node.js mostly used on server-side.</li>
                    <li>JavaScript runs in any engine like Spider Monkey, Java Script Core, V8. Node.js only run in V8 engine which mainly using by google chrome.</li>
                </ul>
            </div>
            <div>
                <h5>2. When should you use nodejs and when should you use mongodb</h5>
                <ul>
                    <li>Node. js is typically used for non-blocking, event-driven servers. It is used for real-time applications. Node.js is especially used for applications where you'd like to maintain a persistent connection from the browser back to the server.It's used for traditional web sites and back-end API services.</li>

                    <li>MongoDB are better choice when your data is document-centric and doesn't fit well into the schema of a relational database . MongoDB is good for cloud computing. MongoDB great for Big Data systems, MapReduce applications, news site forums, and social networking applications.</li>
                </ul>
            </div>
            <div>
                <h5>3. Differences between sql and nosql databases.?</h5>
                <ul>
                    <li>SQL database have tables with fixed rows and columns. Whereas, NoSQL database is unstructured database. </li>
                    <li>NoSQL database is flexible. SQL database is rigid.</li>
                    <li>SQL databases are vertically scalable. NoSQL databases are horizontally scalable.</li>
                </ul>
            </div>
            <div>
                <h5>4. What is the purpose of jwt and how does it work</h5>
                <ul>
                    <li>The purpose of JWT is to verify the owner of some JSON data.</li>
                    <li>JWT creates a token for whenever an user is created. Then, when the user requested any data from the database it matches the token and verify the authenticity of the user.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;