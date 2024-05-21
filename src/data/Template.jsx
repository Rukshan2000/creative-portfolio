// Template.jsx
import React from 'react';

export const generateHTMLTemplate = (name, email, about) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Portfolio</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            line-height: 1.6;
        }
        header {
            background: #1a1a1a;
            color: #fff;
            padding: 20px 0;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #333;
            box-shadow: 0 4px 2px -2px gray;
        }
        nav a {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            text-align: center;
            transition: background 0.3s ease;
            font-size: 1.1em;
        }
        nav a:hover {
            background: #555;
        }
        .container {
            padding: 20px;
            max-width: 1200px;
            margin: auto;
        }
        .section {
            padding: 40px 20px;
            text-align: center;
        }
        .section h2 {
            margin-bottom: 20px;
            font-size: 2em;
            color: #333;
        }
        .section p {
            max-width: 800px;
            margin: auto;
            font-size: 1em;
            color: #666;
            line-height: 1.6;
        }
        .section:nth-child(odd) {
            background: #f9f9f9;
        }
        footer {
            background: #1a1a1a;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: relative;
            bottom: 0;
            width: 100%;
        }
        .nav-toggle {
            display: none;
        }
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                display: none;
            }
            .nav-toggle {
                display: block;
                cursor: pointer;
                text-align: right;
                padding: 10px 20px;
                background: #333;
                color: white;
                font-size: 1.1em;
            }
            nav.active {
                display: flex;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1 style="font-size: 2.5em;">${name}'s Portfolio</h1>
    </header>
    <div class="nav-toggle">☰ Menu</div>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <div id="home" class="section">
            <h2>Home</h2>
            <p>${about}</p>
        </div>
        <div id="about" class="section">
            <h2>About</h2>
            <p>${name} is a web developer with a passion for creating beautiful and functional websites.</p>
            <p>${about}</p>
        </div>
        <div id="contact" class="section">
            <h2>Contact</h2>
            <p>You can contact ${name} at ${email}.</p>
            <p>Feel free to reach out to discuss potential collaborations, job opportunities, or just to say hello!</p>
        </div>
    </div>
    <footer>
        <p>&copy; ${new Date().getFullYear()} ${name}</p>
    </footer>
    <script>
        document.querySelector('.nav-toggle').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    </script>
</body>
</html>
`;
