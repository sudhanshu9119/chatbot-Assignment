var convObj = {
    conversation: [
        {
            speaker: "user",
            message: "What are some of the major causes of global warming?",
        },
        {
            speaker: "assistant",
            message:
                "Global warming is primarily caused by the increased concentration of greenhouse gases in the atmosphere. These gases, such as carbon dioxide and methane, trap heat from the sun and result in the warming of the Earth's surface.",
        },
        {
            speaker: "user",
            message: "How does human activity contribute to global warming?",
        },
        {
            speaker: "assistant",
            message:
                "Human activities such as burning fossil fuels for energy, deforestation, and industrial processes release large amounts of greenhouse gases into the atmosphere, intensifying the greenhouse effect and leading to global warming.",
        },
        {
            speaker: "user",
            message: "What are some potential consequences of global warming?",
        },
        {
            speaker: "assistant",
            message:
                "The consequences of global warming include rising global temperatures, melting polar ice caps, sea level rise, extreme weather events like hurricanes and droughts, disruption of ecosystems and loss of biodiversity, and impacts on agriculture and food security.",
        },
        {
            speaker: "user",
            message: "What can individuals do to mitigate global warming?",
        },
        {
            speaker: "assistant",
            message:
                "Individuals can take actions such as reducing energy consumption, using renewable energy sources, driving fuel-efficient vehicles, minimizing waste, supporting policies that reduce greenhouse gas emissions, and advocating for sustainable practices in their communities.",
        },

        {
            speaker: "user",
            message: "hello",
        },
        {
            speaker: "assistant",
            message: "Hello! How are you?",
        },
    ],
};

const chatInput = document.querySelector("#userInput");
const messageList = document.querySelector(".messageList");
const chat1 = document.querySelector("#chat1");
const chat2 = document.querySelector("#chat2");
const chat3 = document.querySelector("#chat3");
const micInput = document.querySelector("#micInput");
const typingStatus = document.querySelector("#typingStatus");

var userMessage;
var msg = {};
var chatMsg1 = [];
var chatMsg2 = [
    {
        user: "What is javascript?",
        assistant:
            "JavaScript is a high-level, interpreted programming language that is commonly used for web development.",
    },
    {
        user: "How many data type in js?",
        assistant: "There are eight data types in js.",
    },
];

var chatMsg3 = [
    {
        user: "What is javascript?",
        assistant:
            "JavaScript is a high-level, interpreted programming language that is commonly used for web development.",
    },
    {
        user: "what is edvanta technologies",
        assistant:
            `Edvanta Technologies is a leading provider of learning software development and consulting 
       services, empowering businesses to achieve their learning and ...`,
    },
];



const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent =
        className === "incoming" ? `<p>${message}</p>` : `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const setOutPutMsg = (userMessage) => {
    for (var i = 0; i < convObj.conversation.length; i++) {
        if (
            userMessage == convObj.conversation[i].message &&
            convObj.conversation[i].speaker == "user"
        ) {
            messageList.appendChild(
                createChatLi(convObj.conversation[i + 1].message, "outgoing")
            );
            msg.assistant = convObj.conversation[i + 1].message;
            chatInput.value = "";
        }
    }
};

const showSavedChat1 = () => {
    while (messageList.firstChild) {
        messageList.removeChild(messageList.firstChild);
    }

    for (var i = 0; i < chatMsg1.length; i++) {
        messageList.appendChild(createChatLi(chatMsg1[i].user, "incoming"));
        messageList.appendChild(createChatLi(chatMsg1[i].assistant, "outgoing"));
    }
};

const showSavedChat2 = () => {
    while (messageList.firstChild) {
        messageList.removeChild(messageList.firstChild);
    }
    for (var i = 0; i < chatMsg2.length; i++) {
        messageList.appendChild(createChatLi(chatMsg2[i].user, "incoming"));
        messageList.appendChild(createChatLi(chatMsg2[i].assistant, "outgoing"));
    }
};

const showSavedChat3 = () => {
    while (messageList.firstChild) {
        messageList.removeChild(messageList.firstChild);
    }
    for (var i = 0; i < chatMsg3.length; i++) {
        messageList.appendChild(createChatLi(chatMsg3[i].user, "incoming"));
        messageList.appendChild(createChatLi(chatMsg3[i].assistant, "outgoing"));
    }
};

const voiceToText = () => {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        chatInput.value = transcript;
    };
    recognition.start();
};

const TofocusOntextaria = () => {
    var textareaElement = document.getElementById("userInput");
    textareaElement.focus();
    textareaElement.setSelectionRange(0, 0);
};

const TypingStatus = () => {
    typingStatus.style.display = "block";
    clearTimeout(typingTimer);
    var typingTimer = setTimeout(function() {
        typingStatus.style.display = "none";
    }, 1200);
}

const handlechat = (event) => {
    if (event.key === "Enter") {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;
        messageList.appendChild(createChatLi(userMessage, "incoming"));
        msg.user = userMessage;
        setOutPutMsg(userMessage);
        chatMsg1.push(msg);
    } 
};

chatInput.addEventListener("input", TypingStatus);
chatInput.addEventListener("keypress", handlechat);
chat1.addEventListener("click", showSavedChat1);
chat2.addEventListener("click", showSavedChat2);
chat3.addEventListener("click", showSavedChat3);
micInput.addEventListener("click", voiceToText);
document.addEventListener("DOMContentLoaded", TofocusOntextaria);
