import {  FaVolumeUp ,FaCode, FaComment, FaKey, FaQrcode, FaYoutube } from 'react-icons/fa'; // Import the Font Awesome icons

export const toolsData = [
  {
    ToolId: 1,
    topic: "Online Compiler",
    description: "This React app allows users to input, compile, and view HTML, CSS, and JavaScript code in real-time.",
    icon: FaCode, // Icon component imported from react-icons
    link: "https://www.rukshantharindu.link/compilerpage",
    hoverColor: "text-blue-500" // CSS class for hover color
  },
  {
    ToolId: 2,
    topic: "Password Generator",
    description: "This React tool generates random passwords with user-defined lengths and character sets. It features options for uppercase, lowercase, numbers, and special characters, plus easy copy-to-clipboard functionality.",
    icon: FaKey, // Icon component imported from react-icons
    link: "https://www.rukshantharindu.link/passwordgeneratorpage",
    hoverColor: "text-blue-500" // CSS class for hover color
  },
  {
    ToolId: 3,
    topic: "QR Code Generator",
    description: "This React tool generates customizable QR codes from user-inputted text or URLs, allowing users to select QR code colors and download the generated codes as PNG files.",
    icon: FaQrcode, // Icon component imported from react-icons
    link: "https://www.rukshantharindu.link/qrcodegeneratorpage",
    hoverColor: "text-blue-500" // CSS class for hover color
  },
  {
    ToolId: 4,
    topic: "Online Chat App",
    description: "ChatApp is a Firebase-powered messaging tool allowing users to sign in, send messages, and view chats.",
    icon: FaComment , // Icon component imported from react-icons
    link: "https://www.rukshantharindu.link/chatapppage",
    hoverColor: "text-blue-500" // CSS class for hover color
  },
  {
    ToolId: 5,
    topic: "Text To Speech",
    description: "React component converts text to speech, offering speaker selection. Utilizes react-speech-kit. Suggested icon.",
    icon: FaVolumeUp  , // Icon component imported from react-icons
    link: "https://www.rukshantharindu.link/ttspage",
    hoverColor: "text-blue-500" // CSS class for hover color
  },
  {
    ToolId: 6,
    topic: "Text To Speech",
    description: "React component converts text to speech, offering speaker selection. Utilizes react-speech-kit. Suggested icon.",
    icon: FaYoutube  , // Icon component imported from react-icons
    link: "https://www.rukshantharindu.link/ytvideodownloader",
    hoverColor: "text-blue-500" // CSS class for hover color
  }
  
  // Add more tools with topics as needed
];
