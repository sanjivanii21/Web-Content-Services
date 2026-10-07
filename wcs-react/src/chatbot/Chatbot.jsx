import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./chatbot.css";

function Chatbot() {
    const navigate = useNavigate();
    useEffect(() => {
        window.wcsNavigate = navigate;
        // Load chatbot JavaScript only once
        const existingScript = document.getElementById("wcs-chatbot-script");

        if (!existingScript) {

            const script = document.createElement("script");

            script.id = "wcs-chatbot-script";
            script.src = "/chatbot.js";
            script.async = false;

            document.body.appendChild(script);
        }

        return () => {

            const script = document.getElementById("wcs-chatbot-script");

            if (script) {
                script.remove();
            }

        };

    }, []);


    return (
        <>
            {/* =========================
                CHATBOT
            ========================= */}

            <div className="chatbot">

                {/* Chat Header */}

                <div className="chat-header">

                    <div>
                        <h3>WCS Assistant</h3>
                        <span>Online</span>
                    </div>

                    <button id="close-chat">
                        ×
                    </button>

                </div>


                {/* Chat Messages */}

                <div
                    className="chat-messages"
                    id="chat-messages"
                >

                    <div className="bot-message">

                        <p>Hello! 👋</p>

                        <p>
                            Welcome to <strong>WEB CONTENT.</strong>
                        </p>

                        <p>
                            <em>
                                Where Smart Solutions Build Trusted Brands!
                            </em>
                        </p>

                        <p>
                            How can we help you?
                        </p>


                        <div className="quick-replies">

                            <button onClick={() => window.quickReply("Business Consulting")}>
                                Business Consulting
                            </button>

                            <button onClick={() => window.quickReply("Technology Solutions")}>
                                Technology Solutions
                            </button>

                            <button onClick={() => window.quickReply("Branding & Social Media")}>
                                Branding &amp; Social Media
                            </button>

                            <button onClick={() => window.quickReply("Learning & Career")}>
                                Learning &amp; Career
                            </button>

                            <button onClick={() => window.quickReply("Our Portfolio")}>
                                Our Portfolio
                            </button>

                            <button onClick={() => window.quickReply("Contact Us")}>
                                Contact Us
                            </button>

                        </div>

                    </div>

                </div>


                {/* Input Area */}

                <div className="chat-input-area">

                    <input
                        type="text"
                        id="user-input"
                        placeholder="Type your message..."
                        autoComplete="off"
                    />

                    <button id="send-button">
                        ➤
                    </button>

                </div>

            </div>


            {/* Floating Button */}

            <button
                className="chat-toggle"
                id="chat-toggle"
            >
                💬
            </button>

        </>
    );
}

export default Chatbot;