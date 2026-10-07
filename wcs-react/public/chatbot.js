const chatbot = document.querySelector(".chatbot");
const chatToggle = document.getElementById("chat-toggle");
const closeChat = document.getElementById("close-chat");

const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

let currentTopic = null;

// =====================================================
// WHATSAPP CONFIGURATION
// =====================================================

const WHATSAPP_NUMBER = "918446944700";

function openWhatsApp(message) {
    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}
// =====================================================
// CONTACT OPTIONS
// =====================================================

function showContactOptions() {

    displayBotMessage(
        "Sure! You can connect with our team directly using any of the options below.",
        [
            {
                text: "📞 Call Us",
                message: "Call Us"
            },
            {
                text: "💬 WhatsApp",
                message: "WhatsApp"
            },
            {
                text: "🏠 Main Menu",
                message: "Main Menu"
            }
        ]
    );
}

// =====================================================
// MAIN MENU BUTTONS
// =====================================================

function mainMenuButtons() {
    return [
        {
            text: "Business Consulting",
            message: "Business Consulting"
        },
        {
            text: "Technology Solutions",
            message: "Technology Solutions"
        },
        {
            text: "Branding & Social Media",
            message: "Branding & Social Media"
        },
        {
            text: "Learning & Career",
            message: "Learning & Career"
        },
        {
            text: "Our Portfolio",
            message: "Our Portfolio"
        },
        {
            text: "Contact Us",
            message: "Contact Us"
        }
    ];
}


// =====================================================
// OPEN CHATBOT
// =====================================================

chatToggle.addEventListener("click", function () {
    chatbot.style.display = "flex";
    chatToggle.style.display = "none";
});


// =====================================================
// CLOSE CHATBOT
// =====================================================

closeChat.addEventListener("click", function () {
    chatbot.style.display = "none";
    chatToggle.style.display = "block";
});


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


// =====================================================
// DISPLAY BOT MESSAGE
// =====================================================

function displayBotMessage(text, buttons = []) {

    if (!text) {
        return;
    }

    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");

    const textElement = document.createElement("p");

    textElement.innerHTML = text.replace(/\n/g, "<br>");

    botMessage.appendChild(textElement);

    if (buttons.length > 0) {

        const quickReplies = document.createElement("div");
        quickReplies.classList.add("quick-replies");

        buttons.forEach(function (button) {

            const btn = document.createElement("button");

            btn.textContent = button.text;

            btn.addEventListener("click", function () {
                quickReply(button.message);
            });

            quickReplies.appendChild(btn);
        });

        botMessage.appendChild(quickReplies);
    }

    chatMessages.appendChild(botMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// =====================================================
// DISPLAY USER MESSAGE
// =====================================================

function displayUserMessage(message) {

    const userMessage = document.createElement("div");

    userMessage.classList.add("user-message");

    userMessage.textContent = message;

    chatMessages.appendChild(userMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// =====================================================
// SHOW MAIN MENU
// =====================================================

function showMainMenu() {

    currentTopic = null;

    displayBotMessage(
        "Welcome to <strong>WEB CONTENT.</strong><br><em>Where Smart Solutions Build Trusted Brands!</em><br><br>How can we assist you today?",
        mainMenuButtons()
    );
}


// =====================================================
// SEND MESSAGE
// =====================================================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    displayUserMessage(message);

    userInput.value = "";

    const normalizedMessage = message
        .toLowerCase()
        .trim();

    // CONTACT US
    if (
        normalizedMessage === "contact us" ||
        normalizedMessage === "contact us →"
    ) {

        if (window.wcsNavigate) {
    window.wcsNavigate("/contact");
}

return;

        return;
    }

    // REQUIREMENT / CONSULTATION
    if (
        normalizedMessage === "talk to our team" ||
        normalizedMessage === "contact our team" ||
        normalizedMessage === "talk to a consultant" ||
        normalizedMessage === "discuss my requirement" ||
        normalizedMessage === "discuss my brand" ||
        normalizedMessage === "start a consultation" ||
        normalizedMessage === "need consultation" ||
        normalizedMessage === "request consultation"
    ) {

        showContactOptions();

        return;
    }

    // CALL
    if (
        normalizedMessage === "call" ||
        normalizedMessage === "call us"
    ) {

        window.location.href = "tel:+918446944700";

        return;
    }

    // WHATSAPP
    if (
        normalizedMessage === "whatsapp"
    ) {

        openWhatsApp(
            "Hello, I would like to discuss my requirement with Web Content Services."
        );

        return;
    }

    const response = getBotResponse(message);

    setTimeout(function () {

        if (!response) {
            return;
        }

        if (typeof response === "object") {

            displayBotMessage(
                response.text,
                response.buttons || []
            );

        } else {

            displayBotMessage(response);
        }

    }, 500);
}


// =====================================================
// BUSINESS CONSULTING
// =====================================================

function showBusinessConsulting() {

    currentTopic = "business";

    displayBotMessage(
        "Our Business Consulting & Analysis services help organizations identify challenges, improve systems and build a structured path toward sustainable growth.<br><br>What would you like to explore?",
        [
            {
                text: "Business Consultation",
                message: "Business Consultation"
            },
            {
                text: "Business Analysis",
                message: "Business Analysis"
            },
            {
                text: "Business Audit",
                message: "Business Audit"
            },
            {
                text: "Process & SOP Development",
                message: "Process & SOP Development"
            },
            {
                text: "Team & System Structuring",
                message: "Team & System Structuring"
            },
            {
                text: "Business Growth",
                message: "Business Growth"
            },
            {
                text: "Employee Training",
                message: "Employee Training"
            },
            {
                text: "Talk to a Consultant",
                message: "Talk to a Consultant"
            }
        ]
    );
}


// =====================================================
// BUSINESS AUDIT
// =====================================================

function showBusinessAudit() {

    currentTopic = "audit";

    displayBotMessage(
        "We assess your existing business processes, team structure, systems and operational challenges to identify gaps and improvement opportunities.",
        [
            {
                text: "Request Business Audit",
                message: "Request Business Audit"
            },
            {
                text: "Discuss My Business",
                message: "Discuss My Business"
            },
            {
                text: "Back to Main Menu",
                message: "Main Menu"
            }
        ]
    );
}


// =====================================================
// BUSINESS GROWTH
// =====================================================

function showBusinessGrowth() {

    currentTopic = "growth";

    displayBotMessage(
        "We help businesses identify growth opportunities, improve processes and develop practical transformation strategies.",
        [
            {
                text: "Growth Consultation",
                message: "Growth Consultation"
            },
            {
                text: "Business Transformation",
                message: "Business Transformation"
            },
            {
                text: "Talk to a Consultant",
                message: "Talk to a Consultant"
            }
        ]
    );
}


// =====================================================
// TECHNOLOGY SOLUTIONS
// =====================================================

function showTechnologySolutions() {

    currentTopic = "technology";

    displayBotMessage(
        "We develop technology solutions aligned with your business requirements — from websites and applications to databases, CRM and digital systems.",
        [
            {
                text: "Website Development",
                message: "Website Development"
            },
            {
                text: "Web Applications",
                message: "Web Applications"
            },
            {
                text: "Mobile Applications",
                message: "Mobile Applications"
            },
            {
                text: "CRM Solutions",
                message: "CRM Solutions"
            },
            {
                text: "Database Solutions",
                message: "Database Solutions"
            },
            {
                text: "UI/UX Design",
                message: "UI/UX Design"
            },
            {
                text: "API & System Integration",
                message: "API & System Integration"
            },
            {
                text: "Maintenance & Support",
                message: "Maintenance & Support"
            }
        ]
    );
}


// =====================================================
// WEBSITE DEVELOPMENT
// =====================================================

function showWebsiteDevelopment() {

    currentTopic = "website";

    displayBotMessage(
        "We build professional, responsive and business-focused websites based on your objectives, audience and functional requirements.",
        [
            {
                text: "Business Website",
                message: "Business Website"
            },
            {
                text: "E-Commerce Website",
                message: "E-Commerce Website"
            },
            {
                text: "Corporate Website",
                message: "Corporate Website"
            },
            {
                text: "Website Redesign",
                message: "Website Redesign"
            },
            {
                text: "Need Consultation",
                message: "Need Consultation"
            }
        ]
    );
}


// =====================================================
// MOBILE APPLICATIONS
// =====================================================

function showMobileApplications() {

    currentTopic = "mobile";

    displayBotMessage(
        "We develop mobile applications designed around your business requirements, user experience and operational goals.",
        [
            {
                text: "Android / iOS App",
                message: "Android / iOS App"
            },
            {
                text: "Business App",
                message: "Business App"
            },
            {
                text: "App Consultation",
                message: "App Consultation"
            }
        ]
    );
}


// =====================================================
// BRANDING & SOCIAL MEDIA
// =====================================================

function showBranding() {

    currentTopic = "branding";

    displayBotMessage(
        "We help businesses build a consistent brand identity and maintain a professional digital presence through strategy, content and communication.",
        [
            {
                text: "Brand Strategy",
                message: "Brand Strategy"
            },
            {
                text: "Corporate Identity",
                message: "Corporate Identity"
            },
            {
                text: "Social Media Management",
                message: "Social Media Management"
            },
            {
                text: "Content Planning",
                message: "Content Planning"
            },
            {
                text: "Graphic Design",
                message: "Graphic Design"
            },
            {
                text: "Video Editing",
                message: "Video Editing"
            },
            {
                text: "Cinematography",
                message: "Cinematography"
            },
            {
                text: "SEO & Local SEO",
                message: "SEO & Local SEO"
            },
            {
                text: "Paid Promotion",
                message: "Paid Promotion"
            },
            {
                text: "Content Writing",
                message: "Content Writing"
            }
        ]
    );
}


// =====================================================
// SOCIAL MEDIA MANAGEMENT
// =====================================================

function showSocialMediaManagement() {

    currentTopic = "social";

    displayBotMessage(
        "Our social media management combines content planning, creative production, account management, organic growth and paid promotion to build a stronger digital presence.",
        [
            {
                text: "View SMM Services",
                message: "View SMM Services"
            },
            {
                text: "Request a Content Plan",
                message: "Request a Content Plan"
            },
            {
                text: "Discuss My Brand",
                message: "Discuss My Brand"
            }
        ]
    );
}


// =====================================================
// CINEMATOGRAPHY
// =====================================================

function showCinematography() {

    currentTopic = "cinematography";

    displayBotMessage(
        "We provide professional on-field cinematography and visual content production for corporate, promotional and social media requirements.",
        [
            {
                text: "Book a Shoot",
                message: "Book a Shoot"
            },
            {
                text: "Discuss Requirement",
                message: "Discuss Requirement"
            }
        ]
    );
}


// =====================================================
// LEARNING & CAREER
// =====================================================

function showLearningCareer() {

    currentTopic = "career";

    displayBotMessage(
        "Build practical skills through industry exposure, live projects and career-focused learning opportunities.",
        [
            {
                text: "Internships",
                message: "Internships"
            },
            {
                text: "Live Industry Projects",
                message: "Live Industry Projects"
            },
            {
                text: "Professional Training",
                message: "Professional Training"
            },
            {
                text: "Certification",
                message: "Certification"
            },
            {
                text: "Career Opportunities",
                message: "Career Opportunities"
            },
            {
                text: "Freelancing Opportunities",
                message: "Freelancing Opportunities"
            },
            {
                text: "Portfolio Development",
                message: "Portfolio Development"
            }
        ]
    );
}


// =====================================================
// INTERNSHIP
// =====================================================

function showInternship() {

    currentTopic = "internship";

    displayBotMessage(
        "Our internship programs provide practical exposure through real projects, professional communication, teamwork and structured learning.",
        [
            {
                text: "Available Internships",
                message: "Available Internships"
            },
            {
                text: "Apply for Internship",
                message: "Apply for Internship"
            },
            {
                text: "Internship Process",
                message: "Internship Process"
            }
        ]
    );
}


// =====================================================
// CAREER OPPORTUNITIES
// =====================================================

function showCareerOpportunities() {

    currentTopic = "career-opportunities";

    displayBotMessage(
        "Explore opportunities to gain practical industry experience and develop career-ready skills.",
        [
            {
                text: "Current Openings",
                message: "Current Openings"
            },
            {
                text: "Internship Opportunities",
                message: "Internship Opportunities"
            },
            {
                text: "Freelancing Opportunities",
                message: "Freelancing Opportunities"
            },
            {
                text: "Contact HR",
                message: "Contact HR"
            }
        ]
    );
}


// =====================================================
// PORTFOLIO
// =====================================================

function showPortfolio() {

    currentTopic = "portfolio";

    displayBotMessage(
        "Explore selected work and solutions delivered across our core business verticals.",
        [
            {
                text: "Websites & Applications",
                message: "Websites & Applications"
            },
            {
                text: "Branding & Social Media",
                message: "Portfolio Branding & Social Media"
            },
            {
                text: "Business Solutions",
                message: "Portfolio Business Solutions"
            },
            {
                text: "Video & Cinematography",
                message: "Portfolio Video & Cinematography"
            },
            {
                text: "View All Work",
                message: "View All Work"
            }
        ]
    );
}


// =====================================================
// CONTACT US
// =====================================================

function startContact() {

    currentTopic = "contact";

    showContactOptions();
}


// =====================================================
// HUMAN ASSISTANCE
// =====================================================

function showHumanAssistance() {

    displayBotMessage(
        "Would you like to speak directly with our team regarding your requirement?",
        [
            {
                text: "Call",
                message: "Call"
            },
            {
                text: "WhatsApp",
                message: "WhatsApp"
            },
            {
                text: "Talk to Our Team",
                message: "Talk to Our Team"
            },
            {
                text: "Main Menu",
                message: "Main Menu"
            }
        ]
    );
}


// =====================================================
// NOT SURE WHAT I NEED
// =====================================================

function showNotSure() {

    currentTopic = "not-sure";

    displayBotMessage(
        "No problem. You don't need to decide the right solution yourself.<br><br>Our team can first understand your <strong>business objectives, challenges and requirements</strong> and recommend the appropriate solution.",
        [
            {
                text: "Start a Consultation",
                message: "Start a Consultation"
            },
            {
                text: "Talk to Our Team",
                message: "Talk to Our Team"
            },
            {
                text: "Contact Our Team",
                message: "Contact Our Team"
            }
        ]
    );
}


// =====================================================
// EXISTING CLIENT
// =====================================================

function showExistingClient() {

    currentTopic = "existing-client";

    displayBotMessage(
        "Welcome back. How can we assist you?",
        [
            {
                text: "Project Status",
                message: "Project Status"
            },
            {
                text: "Talk to Our Team",
                message: "Talk to Our Team"
            },
            {
                text: "Request Revision",
                message: "Request Revision"
            },
            {
                text: "Technical Support",
                message: "Technical Support"
            },
            {
                text: "Billing & Payment",
                message: "Billing & Payment"
            },
            {
                text: "Contact Project Manager",
                message: "Contact Project Manager"
            }
        ]
    );
}


// =====================================================
// PRICING
// =====================================================

function showPricing() {

    displayBotMessage(
        "Our pricing depends on the scope, complexity and requirements of each project. We follow a requirement-based approach rather than offering a one-size-fits-all solution.<br><br>Share your requirement and our team can provide an appropriate proposal.",
        [
            {
                text: "Talk to Our Team",
                message: "Talk to Our Team"
            },
            {
                text: "Request Consultation",
                message: "Start a Consultation"
            },
            {
                text: "Contact Us",
                message: "Contact Us"
            }
        ]
    );
}


// =====================================================
// WCS PRICING QUESTION CHECK
// =====================================================

function isWcsPricingQuestion(message) {

    const value = message.toLowerCase().trim();

    const pricingWords = [
        "price",
        "pricing",
        "cost",
        "charges",
        "charge",
        "fees",
        "fee"
    ];

    const hasPricingWord = pricingWords.some(function (word) {
        return value.includes(word);
    });

    if (!hasPricingWord) {
        return false;
    }


    // Direct WCS-related words
    const wcsWords = [
        "your",
        "our",
        "service",
        "services",
        "website",
        "web application",
        "web development",
        "mobile app",
        "mobile application",
        "app development",
        "branding",
        "social media",
        "consultation",
        "business consulting",
        "business solution",
        "technology solution",
        "project",
        "requirement",
        "development"
    ];

    const isWcsRelated = wcsWords.some(function (word) {
        return value.includes(word);
    });


    if (isWcsRelated) {
        return true;
    }


    // Short generic questions such as:
    // "What is your pricing?"
    // "How much?"
    // "What are the charges?"
    const genericPricingPatterns = [
        /^how much\??$/,
        /^what is the price\??$/,
        /^what is the pricing\??$/,
        /^what are the prices\??$/,
        /^what are the charges\??$/,
        /^what are your charges\??$/,
        /^what are your prices\??$/,
        /^what is your price\??$/,
        /^what is your pricing\??$/,
        /^how much does it cost\??$/,
        /^how much will it cost\??$/
    ];

    return genericPricingPatterns.some(function (pattern) {
        return pattern.test(value);
    });
}


// =====================================================
// TECHNOLOGY PORTFOLIO
// =====================================================

function showTechnologyPortfolio() {

    currentTopic = "portfolio-technology";

    displayBotMessage(
        "Our portfolio includes selected websites, web applications and technology solutions developed around different business requirements.",
        [
            {
                text: "Discuss a Similar Project",
                message: "Talk to Our Team"
            },
            {
                text: "Contact Our Team",
                message: "Contact Our Team"
            },
            {
                text: "Main Menu",
                message: "Main Menu"
            }
        ]
    );
}


// =====================================================
// BRANDING PORTFOLIO
// =====================================================

function showBrandingPortfolio() {

    currentTopic = "portfolio-branding";

    displayBotMessage(
        "Our Branding & Social Media portfolio includes selected brand identity work, social media content, creative designs, promotional content and digital presence projects.",
        [
            {
                text: "Discuss a Similar Project",
                message: "Talk to Our Team"
            },
            {
                text: "Contact Our Team",
                message: "Contact Our Team"
            },
            {
                text: "Main Menu",
                message: "Main Menu"
            }
        ]
    );
}


// =====================================================
// BUSINESS SOLUTIONS PORTFOLIO
// =====================================================

function showBusinessPortfolio() {

    currentTopic = "portfolio-business";

    displayBotMessage(
        "Our business solutions portfolio includes projects focused on business consulting, process improvement, structured systems and growth-oriented solutions.",
        [
            {
                text: "Discuss a Similar Project",
                message: "Talk to Our Team"
            },
            {
                text: "Contact Our Team",
                message: "Contact Our Team"
            },
            {
                text: "Main Menu",
                message: "Main Menu"
            }
        ]
    );
}


// =====================================================
// VIDEO PORTFOLIO
// =====================================================

function showVideoPortfolio() {

    currentTopic = "portfolio-video";

    displayBotMessage(
        "Our video and cinematography portfolio includes promotional, corporate and social media-oriented visual content projects.",
        [
            {
                text: "Discuss a Similar Project",
                message: "Talk to Our Team"
            },
            {
                text: "Contact Our Team",
                message: "Contact Our Team"
            },
            {
                text: "Main Menu",
                message: "Main Menu"
            }
        ]
    );
}


// =====================================================
// BOT RESPONSE
// =====================================================

function getBotResponse(originalMessage) {

    const original = originalMessage.trim();
    const message = original.toLowerCase();


    // =================================================
    // MAIN MENU
    // =================================================

    if (
        message === "main menu" ||
        message === "back to main menu" ||
        message === "home"
    ) {

        currentTopic = null;

        return {
            text: "Sure! How can we assist you today?",
            buttons: mainMenuButtons()
        };
    }

    // =================================================
    // GREETING
    // =================================================

    if (
        message === "hi" ||
        message === "hello" ||
        message === "hey" ||
        message === "good morning" ||
        message === "good afternoon" ||
        message === "good evening"
    ) {

        return {
            text: "Hello! 👋 Welcome to <strong>WEB CONTENT.</strong><br><em>Where Smart Solutions Build Trusted Brands!</em><br><br>How can we assist you today?",
            buttons: mainMenuButtons()
        };
    }


    // =================================================
    // BUSINESS CONSULTING
    // =================================================

    if (
        message === "business consulting" ||
        message.includes("business consulting")
    ) {

        showBusinessConsulting();

        return null;
    }


    if (message === "business consultation") {

        return {
            text: "Our Business Consultation service helps you understand your challenges, clarify your objectives and identify practical solutions for your business.",
            buttons: [
                {
                    text: "Talk to a Consultant",
                    message: "Talk to a Consultant"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    if (message === "business analysis") {

        return {
            text: "Our Business Analysis service helps identify operational gaps, understand business requirements and evaluate opportunities for improvement.",
            buttons: [
                {
                    text: "Discuss My Business",
                    message: "Discuss My Business"
                },
                {
                    text: "Talk to a Consultant",
                    message: "Talk to a Consultant"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    if (message === "business audit") {

        showBusinessAudit();

        return null;
    }


    if (
        message === "process & sop development" ||
        (message.includes("process") && message.includes("sop"))
    ) {

        return {
            text: "We help businesses develop structured processes and Standard Operating Procedures (SOPs) to improve consistency, efficiency and accountability.",
            buttons: [
                {
                    text: "Discuss My Business",
                    message: "Discuss My Business"
                },
                {
                    text: "Talk to a Consultant",
                    message: "Talk to a Consultant"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    if (
        message === "team & system structuring" ||
        (message.includes("team") && message.includes("system"))
    ) {

        return {
            text: "We help organizations structure teams, responsibilities and systems to create clearer workflows and improve operational efficiency.",
            buttons: [
                {
                    text: "Discuss My Business",
                    message: "Discuss My Business"
                },
                {
                    text: "Talk to a Consultant",
                    message: "Talk to a Consultant"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    if (
        message === "business growth" ||
        message === "growth"
    ) {

        showBusinessGrowth();

        return null;
    }


    if (
        message === "employee training" ||
        message.includes("employee training")
    ) {

        return {
            text: "Our Employee Training solutions focus on developing practical skills, improving team capabilities and supporting better business performance.",
            buttons: [
                {
                    text: "Training Consultation",
                    message: "Training Consultation"
                },
                {
                    text: "Talk to a Consultant",
                    message: "Talk to a Consultant"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    // =================================================
    // BUSINESS AUDIT OPTIONS
    // =================================================

    if (message === "request business audit") {

        return {
            text: "We'd be happy to understand your business and audit requirements.",
            buttons: [
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                },
                {
                    text: "Contact Us",
                    message: "Contact Us"
                }
            ]
        };
    }


    if (message === "discuss my business") {

        return {
            text: "We'd be happy to understand your business objectives, challenges and requirements.",
            buttons: [
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                }
            ]
        };
    }


    // =================================================
    // BUSINESS GROWTH OPTIONS
    // =================================================

    if (message === "growth consultation") {

        return {
            text: "Our Growth Consultation helps identify practical opportunities for business expansion, improvement and transformation.",
            buttons: [
                {
                    text: "Start Consultation",
                    message: "Start a Consultation"
                },
                {
                    text: "Talk to a Consultant",
                    message: "Talk to a Consultant"
                }
            ]
        };
    }


    if (message === "business transformation") {

        return {
            text: "Our Business Transformation approach focuses on improving processes, systems and strategies to support sustainable business growth.",
            buttons: [
                {
                    text: "Discuss My Business",
                    message: "Discuss My Business"
                },
                {
                    text: "Talk to a Consultant",
                    message: "Talk to a Consultant"
                }
            ]
        };
    }


    // =================================================
    // TECHNOLOGY
    // =================================================

    // IMPORTANT:
    // This specifically fixes:
    // "Requirement: Technology"

    if (
        message === "requirement: technology" ||
        message === "requirement: technology solutions"
    ) {

        showTechnologySolutions();

        return null;
    }


    if (
        message === "technology solutions" ||
        message === "technology" ||
        message.includes("technology solutions")
    ) {

        showTechnologySolutions();

        return null;
    }


    if (message === "website development") {

        showWebsiteDevelopment();

        return null;
    }


    if (message === "mobile applications") {

        showMobileApplications();

        return null;
    }


    if (
        message === "web applications" ||
        message.includes("web applications")
    ) {

        return {
            text: "We develop web applications designed around your business processes, users and operational requirements.",
            buttons: [
                {
                    text: "Discuss My Requirement",
                    message: "Talk to Our Team"
                },
                {
                    text: "Need Consultation",
                    message: "Need Consultation"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    if (message === "crm solutions") {

        return {
            text: "Our CRM solutions help businesses organize customer information, improve workflows and manage customer relationships more effectively.",
            buttons: [
                {
                    text: "Discuss CRM Requirement",
                    message: "Talk to Our Team"
                },
                {
                    text: "Need Consultation",
                    message: "Need Consultation"
                }
            ]
        };
    }


    if (message === "database solutions") {

        return {
            text: "We provide database solutions focused on organizing, managing and securely handling business data according to your requirements.",
            buttons: [
                {
                    text: "Discuss Database Requirement",
                    message: "Talk to Our Team"
                },
                {
                    text: "Need Consultation",
                    message: "Need Consultation"
                }
            ]
        };
    }


    if (message === "ui/ux design") {

        return {
            text: "Our UI/UX design services focus on creating intuitive, user-friendly and visually consistent digital experiences.",
            buttons: [
                {
                    text: "Discuss UI/UX Requirement",
                    message: "Talk to Our Team"
                },
                {
                    text: "Need Consultation",
                    message: "Need Consultation"
                }
            ]
        };
    }


    if (message === "api & system integration") {

        return {
            text: "We help connect applications, APIs and business systems so that information can move efficiently between different platforms.",
            buttons: [
                {
                    text: "Discuss Integration",
                    message: "Talk to Our Team"
                },
                {
                    text: "Need Consultation",
                    message: "Need Consultation"
                }
            ]
        };
    }


    if (message === "maintenance & support") {

        return {
            text: "Our maintenance and support services help keep your digital systems functional, updated and aligned with changing business requirements.",
            buttons: [
                {
                    text: "Request Support",
                    message: "Talk to Our Team"
                },
                {
                    text: "Contact Our Team",
                    message: "Contact Our Team"
                }
            ]
        };
    }


    // =================================================
    // WEBSITE OPTIONS
    // =================================================

    if (
        message === "business website" ||
        message === "e-commerce website" ||
        message === "corporate website" ||
        message === "website redesign"
    ) {

        return {
            text: "Absolutely! 🌐 We can help you plan and develop a website according to your business objectives, audience and functional requirements.",
            buttons: [
                {
                    text: "Need Consultation",
                    message: "Need Consultation"
                },
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                }
            ]
        };
    }


    // =================================================
    // MOBILE OPTIONS
    // =================================================

    if (
        message === "android / ios app" ||
        message === "business app"
    ) {

        return {
            text: "We can discuss your application requirements and recommend an appropriate approach based on your users, features and business objectives.",
            buttons: [
                {
                    text: "App Consultation",
                    message: "App Consultation"
                },
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                }
            ]
        };
    }


    // =================================================
    // PORTFOLIO
    // IMPORTANT:
    // PORTFOLIO ROUTES MUST COME BEFORE BRANDING.
    // =================================================

    if (
        message === "our portfolio" ||
        message === "portfolio"
    ) {

        showPortfolio();

        return null;
    }


    if (message === "portfolio branding & social media") {

        showBrandingPortfolio();

        return null;
    }


    if (message === "portfolio business solutions") {

        showBusinessPortfolio();

        return null;
    }


    if (message === "portfolio video & cinematography") {

        showVideoPortfolio();

        return null;
    }


    if (message === "websites & applications") {

        showTechnologyPortfolio();

        return null;
    }


    if (message === "view all work") {

        return {
            text: "Please visit our portfolio section to explore our selected work and solutions.",
            buttons: [
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    // =================================================
    // BRANDING
    // =================================================

    if (
        message === "requirement: branding & social media"
    ) {

        // During normal contact flow this is already
        // handled before the router reaches here.
        // If it reaches here independently, treat it
        // as a requirement category rather than opening
        // the service menu.

        return {
            text: "Branding & Social Media has been selected as your requirement.",
            buttons: [
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    if (
        message === "branding & social media" ||
        message.includes("branding & social media")
    ) {

        showBranding();

        return null;
    }


    if (
        message === "social media management" ||
        message.includes("social media management")
    ) {

        showSocialMediaManagement();

        return null;
    }


    if (message === "cinematography") {

        showCinematography();

        return null;
    }


    if (
        message === "brand strategy" ||
        message === "corporate identity" ||
        message === "content planning" ||
        message === "graphic design" ||
        message === "video editing" ||
        message === "seo & local seo" ||
        message === "paid promotion" ||
        message === "content writing"
    ) {

        return {
            text: "Our team can help you develop this aspect of your brand and digital presence according to your specific business requirements.",
            buttons: [
                {
                    text: "Discuss My Brand",
                    message: "Discuss My Brand"
                },
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                }
            ]
        };
    }


    // =================================================
    // SOCIAL MEDIA OPTIONS
    // =================================================

    if (
        message === "view smm services" ||
        message === "request a content plan" ||
        message === "discuss my brand"
    ) {

        return {
            text: "We'd be happy to understand your brand, audience and goals and recommend the appropriate social media approach.",
            buttons: [
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                }
            ]
        };
    }


    // =================================================
    // CINEMATOGRAPHY OPTIONS
    // =================================================

    if (
        message === "book a shoot" ||
        message === "discuss requirement"
    ) {

        return {
            text: "Please share your requirements and our team can discuss the shoot, production requirements and next steps with you.",
            buttons: [
                {
                    text: "Talk to Our Team",
                    message: "Talk to Our Team"
                },
                {
                    text: "Contact Our Team",
                    message: "Contact Our Team"
                }
            ]
        };
    }


    // =================================================
    // LEARNING & CAREER
    // =================================================

    if (
        message === "learning & career" ||
        message === "learning & careers" ||
        message.includes("learning & career")
    ) {

        showLearningCareer();

        return null;
    }


    if (message === "internships") {

        showInternship();

        return null;
    }


    if (message === "career opportunities") {

        showCareerOpportunities();

        return null;
    }


    if (
        message === "live industry projects" ||
        message === "professional training" ||
        message === "certification" ||
        message === "freelancing opportunities" ||
        message === "portfolio development"
    ) {

        return {
            text: "This opportunity is designed to help you build practical skills, industry exposure and career-ready capabilities.",
            buttons: [
                {
                    text: "Contact Us",
                    message: "Contact Us"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    // =================================================
    // INTERNSHIP OPTIONS
    // =================================================

    if (
        message === "available internships" ||
        message === "apply for internship" ||
        message === "internship process"
    ) {

        return {
            text: "For internship-related information, please contact our team so we can provide the latest opportunities and application details.",
            buttons: [
                {
                    text: "Contact Us",
                    message: "Contact Us"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    // =================================================
    // CAREER OPTIONS
    // =================================================

    if (
        message === "current openings" ||
        message === "internship opportunities" ||
        message === "freelancing opportunities" ||
        message === "contact hr"
    ) {

        return {
            text: "For current career and opportunity information, please contact our team for the latest available options.",
            buttons: [
                {
                    text: "Contact HR",
                    message: "Contact HR"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    // =================================================
    // NOT SURE WHAT I NEED
    // =================================================

    if (
        message === "i'm not sure what i need" ||
        message === "im not sure what i need" ||
        message.includes("not sure what i need") ||
        message === "not sure"
    ) {

        showNotSure();

        return null;
    }


    // =================================================
    // EXISTING CLIENT
    // =================================================

    if (
        message === "existing client" ||
        message.includes("existing client")
    ) {

        showExistingClient();

        return null;
    }


    // =================================================
    // PRICING
    // IMPORTANT:
    // Only WCS-related pricing questions reach here.
    // "What is the price of a Ferrari?"
    // will NOT match.
    // =================================================

    if (isWcsPricingQuestion(message)) {

        showPricing();

        return null;
    }


    // =================================================
    // CONSULTATION / HUMAN TEAM
    // =================================================

    if (
        message === "start a consultation" ||
        message === "contact our team" ||
        message === "talk to our team" ||
        message === "talk to a consultant" ||
        message === "need consultation" ||
        message === "app consultation" ||
        message === "training consultation"
    ) {

        showHumanAssistance();

        return null;
    }

    // =================================================
    // EXISTING CLIENT OPTIONS
    // =================================================

    if (
        message === "project status" ||
        message === "request revision" ||
        message === "technical support" ||
        message === "billing & payment" ||
        message === "contact project manager"
    ) {

        return {
            text: "We'd be happy to assist you with your request. Please contact our team and provide your project details so we can direct you to the appropriate person.",
            buttons: [
                {
                    text: "Contact Our Team",
                    message: "Contact Our Team"
                },
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    // =================================================
    // CALL / WHATSAPP
    // =================================================

if (message === "call" || message === "call us") {

    window.location.href = "tel:+918446944700";

    return null;
}

if (message === "whatsapp") {

    openWhatsApp(
        "Hello, I would like to discuss my requirement with Web Content Services."
    );

    return null;
}
message === "contact hr"


    // =================================================
    // CONTACT US
    // =================================================

    if (message === "contact us") {

    if (window.wcsNavigate) {
    window.wcsNavigate("/contact");
}

return;

    return null;
}


    // =================================================
    // THANK YOU
    // =================================================

    if (
        message === "thank you" ||
        message === "thanks" ||
        message === "thankyou"
    ) {

        return {
            text: "You're welcome! 😊 Is there anything else I can help you with?",
            buttons: [
                {
                    text: "Main Menu",
                    message: "Main Menu"
                }
            ]
        };
    }


    // =================================================
    // GOODBYE
    // =================================================

    if (
        message === "bye" ||
        message === "goodbye"
    ) {

        return "Goodbye! 👋 Thank you for visiting WCS. Have a great day!";
    }


    // =================================================
    // UNKNOWN QUESTION
    // =================================================

    return {
        text: "I'm sorry, I don't have that information. Please contact us for further assistance.",
        buttons: [
            {
                text: "Contact Us →",
                message: "Contact Us"
            },
            {
                text: "Main Menu",
                message: "Main Menu"
            }
        ]
    };
}


// =====================================================
// QUICK REPLY
// =====================================================

window.quickReply = function (message) {

    displayUserMessage(message);

    userInput.value = "";

    const normalizedMessage = message.trim().toLowerCase();


    // =================================================
    // CONTACT US → WEBSITE CONTACT PAGE
    // =================================================

    if (
        normalizedMessage === "contact us" ||
        normalizedMessage === "contact us →"
    ) {
        if (window.wcsNavigate) {
    window.wcsNavigate("/contact");
}

return;
        return;
    }


    // =================================================
    // REQUIREMENT / ENQUIRY → CALL OR WHATSAPP
    // =================================================

    if (
        normalizedMessage === "talk to our team" ||
        normalizedMessage === "contact our team" ||
        normalizedMessage === "talk to a consultant" ||
        normalizedMessage === "discuss my requirement" ||
        normalizedMessage === "discuss my brand" ||
        normalizedMessage === "start a consultation" ||
        normalizedMessage === "need consultation" ||
        normalizedMessage === "request consultation"
    ) {

        showContactOptions();
        return;
    }


    // =================================================
    // CALL US
    // =================================================

    if (
    normalizedMessage === "call" ||
    normalizedMessage === "Call" ||
    normalizedMessage === "Call us" ||
    normalizedMessage === "call us"
) {

    window.location.href = "tel:+918446944700";

    return;
}


    // =================================================
    // WHATSAPP
    // =================================================

    if (normalizedMessage === "whatsapp") {

        openWhatsApp(
            "Hello, I would like to discuss my requirement with Web Content Services."
        );

        return;
    }


    // =================================================
    // NORMAL CHATBOT FLOW
    // =================================================

    const response = getBotResponse(message);

    setTimeout(function () {

        if (!response) {
            return;
        }

        if (typeof response === "object") {

            displayBotMessage(
                response.text,
                response.buttons || []
            );

        } else {

            displayBotMessage(response);
        }

    }, 400);
}


// =====================================================
// SEND BUTTON
// =====================================================

sendButton.addEventListener("click", sendMessage);


// =====================================================
// ENTER KEY
// =====================================================

userInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});