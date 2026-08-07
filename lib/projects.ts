export type Category =
  | "Computer Vision"
  | "Agents & LLMs"
  | "RAG & NLP"
  | "MLOps & Data"
  | "Applied Products";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  category: Category;
  stack: string[];
  repo: string;
  stars: number;
  year: string;
  featured?: boolean;
  /** Headline result, written as a measurement rather than a claim. */
  metric?: string;
};

export const categories: Category[] = [
  "Computer Vision",
  "Agents & LLMs",
  "RAG & NLP",
  "MLOps & Data",
  "Applied Products",
];

export const projects: Project[] = [
  {
    slug: "yolo11-face-emotion-detection",
    title: "Face Emotion Detection",
    blurb:
      "A YOLOv11 detector trained on a custom facial dataset that reads emotion straight from a live video feed, class by class, frame by frame.",
    category: "Computer Vision",
    stack: ["YOLOv11", "Ultralytics", "OpenCV"],
    repo: "https://github.com/alihassanml/Yolo11-Face-Emotion-Detection",
    stars: 31,
    year: "2024",
    featured: true,
    metric: "5 emotion classes, real time",
  },
  {
    slug: "smoking-detection-yolo11",
    title: "Smoking Detection",
    blurb:
      "Workplace safety monitoring that flags smoking in real-time camera feeds, built for sites where a missed detection is a compliance failure.",
    category: "Computer Vision",
    stack: ["YOLOv11", "OpenCV", "Python"],
    repo: "https://github.com/alihassanml/Smoking-detection-yolo11",
    stars: 26,
    year: "2024",
    featured: true,
    metric: "Live video inference",
  },
  {
    slug: "self-driving-deep-learning",
    title: "Self-Driving Steering Model",
    blurb:
      "A convolutional network that predicts steering angle directly from road imagery, trained end to end on driving footage.",
    category: "Computer Vision",
    stack: ["TensorFlow", "CNN", "NumPy"],
    repo: "https://github.com/alihassanml/Self-Driving-Using-Deep-learning",
    stars: 20,
    year: "2025",
    metric: "End-to-end control",
  },
  {
    slug: "sign-language-detection",
    title: "Sign Language Recognition",
    blurb:
      "A 40-class YOLOv11 model that reads hand signs in real time, built so deaf users get an interpreter that runs on a laptop camera.",
    category: "Computer Vision",
    stack: ["YOLOv11", "Python", "OpenCV"],
    repo: "https://github.com/alihassanml/Yolo11-sign-lanugage-detection",
    stars: 12,
    year: "2024",
    metric: "40 gesture classes",
  },
  {
    slug: "agentic-ai-stock-analysis",
    title: "Agentic Stock Analysis",
    blurb:
      "A multi-agent system where research, analysis and recommendation agents divide a market question between them and report back with reasoning.",
    category: "Agents & LLMs",
    stack: ["LangChain", "Groq", "Python"],
    repo: "https://github.com/alihassanml/agentic-ai-stock-analysis",
    stars: 6,
    year: "2025",
    featured: true,
    metric: "Multi-agent pipeline",
  },
  {
    slug: "smartsurv",
    title: "SmartSurv Surveillance",
    blurb:
      "An autonomous security layer that turns existing CCTV into a system which watches, classifies and escalates events on its own.",
    category: "Applied Products",
    stack: ["TypeScript", "Deep SORT", "FastAPI"],
    repo: "https://github.com/alihassanml/AI-Powered-Intelligent-Surveillance-Ecosystem",
    stars: 5,
    year: "2026",
    metric: "Legacy CCTV, retrofitted",
  },
  {
    slug: "researchmind-ai",
    title: "ResearchMind AI",
    blurb:
      "A research assistant built on the programmatic agent hand-off pattern, so a question moves between specialist agents instead of one model guessing.",
    category: "Agents & LLMs",
    stack: ["Pydantic AI", "Python", "OpenAI"],
    repo: "https://github.com/alihassanml/ResearchMind-AI",
    stars: 1,
    year: "2026",
    featured: true,
    metric: "Agent hand-off pattern",
  },
  {
    slug: "knowledge-graph-rag",
    title: "Knowledge Graph RAG",
    blurb:
      "Production-ready retrieval that builds a knowledge graph first, so answers follow relationships in the source material rather than nearest-neighbour luck.",
    category: "RAG & NLP",
    stack: ["Neo4j", "LangChain", "Python"],
    repo: "https://github.com/alihassanml/Knowledge-Graph-RAG-System",
    stars: 1,
    year: "2026",
    featured: true,
    metric: "Graph-grounded answers",
  },
  {
    slug: "claude-code-monitor",
    title: "Claude Code Monitor",
    blurb:
      "A local dashboard over your own agent usage: tokens, cost, prompts, sessions, tool calls and the failures nobody logs.",
    category: "MLOps & Data",
    stack: ["Python", "Analytics", "CLI"],
    repo: "https://github.com/alihassanml/claude-code-monitor",
    stars: 1,
    year: "2026",
    metric: "Runs fully local",
  },
  {
    slug: "federated-learning-nlp",
    title: "Federated Learning for RAG",
    blurb:
      "Training across separate institutions without moving a single raw document, using federated averaging over distributed nodes.",
    category: "RAG & NLP",
    stack: ["PyTorch", "Federated Learning", "Python"],
    repo: "https://github.com/alihassanml/Federated-Learning-NLP",
    stars: 1,
    year: "2026",
    metric: "Raw data never leaves site",
  },
  {
    slug: "fedsearch-rag-qa",
    title: "FedSearch Enterprise QA",
    blurb:
      "A FastAPI backend for enterprise document search and question answering, sized for corpora that break naive vector search.",
    category: "RAG & NLP",
    stack: ["FastAPI", "RAG", "Vector DB"],
    repo: "https://github.com/alihassanml/FedSearch-NLP-Federated-RAG-QA-System",
    stars: 2,
    year: "2025",
    metric: "Production API",
  },
  {
    slug: "linkedin-followup-n8n",
    title: "LinkedIn Follow-Up Engine",
    blurb:
      "Follow-up sequencing across n8n, PhantomBuster and Sheets, so outreach keeps running when nobody is at the keyboard.",
    category: "Applied Products",
    stack: ["n8n", "PhantomBuster", "Automation"],
    repo: "https://github.com/alihassanml/Linkedin-Follow-Up-N8N",
    stars: 5,
    year: "2025",
    metric: "Zero manual sends",
  },
  {
    slug: "ai-avatar-video",
    title: "AI Avatar Video Pipeline",
    blurb:
      "A pipeline that picks up a trending topic, writes it, renders an avatar presenter and publishes the video without a human in the loop.",
    category: "Agents & LLMs",
    stack: ["Python", "TTS", "Automation"],
    repo: "https://github.com/alihassanml/AI-Avature",
    stars: 4,
    year: "2025",
    metric: "Topic to published video",
  },
  {
    slug: "adaptive-llm-chat",
    title: "Adaptive Conversational AI",
    blurb:
      "A local-LLM chatbot that adapts its replies to a user's personality, holds long-term memory and tracks sentiment across a conversation.",
    category: "Agents & LLMs",
    stack: ["Ollama", "LangChain", "Python"],
    repo: "https://github.com/alihassanml/Adaptive-LLM-Based-Conversational-AI",
    stars: 2,
    year: "2025",
    metric: "Long-term memory",
  },
  {
    slug: "illegal-activity-detection",
    title: "Illegal Activity Detection",
    blurb:
      "A FastAPI detection service that watches a stream for suspicious activity and returns annotated frames with the alert.",
    category: "Computer Vision",
    stack: ["FastAPI", "YOLO", "OpenCV"],
    repo: "https://github.com/alihassanml/Illegal-Activity-Detection",
    stars: 2,
    year: "2025",
    metric: "Streaming inference",
  },
  {
    slug: "voice-ai-deepseek",
    title: "Voice AI Agent",
    blurb:
      "A real-time voice agent wiring DeepSeek-R1 reasoning to AssemblyAI transcription and ElevenLabs speech, tuned for turn latency.",
    category: "Agents & LLMs",
    stack: ["DeepSeek-R1", "AssemblyAI", "ElevenLabs"],
    repo: "https://github.com/alihassanml/Voice-AI-Using-DeepSeek-R1",
    stars: 2,
    year: "2025",
    featured: true,
    metric: "Real-time turns",
  },
  {
    slug: "resume-screening",
    title: "AI Resume Screening",
    blurb:
      "Semantic matching between resumes and job descriptions, with skill extraction and scoring that a recruiter can actually audit.",
    category: "RAG & NLP",
    stack: ["Transformers", "NLTK", "FastAPI"],
    repo: "https://github.com/alihassanml/Automated-AI-Resume-Screening",
    stars: 2,
    year: "2025",
    metric: "Explainable scoring",
  },
  {
    slug: "halify-proposal-intelligence",
    title: "Halify Proposal Intelligence",
    blurb:
      "A full-stack platform that scrapes the market, reads the signals with GPT and writes the business proposal that follows from them.",
    category: "Applied Products",
    stack: ["TypeScript", "OpenAI", "Scraping"],
    repo: "https://github.com/alihassanml/AI-Powered-Proposal-Business-Intelligence-Platform",
    stars: 1,
    year: "2026",
    metric: "Research to proposal",
  },
  {
    slug: "iot-dual-auth-access",
    title: "IoT Dual-Auth Access Control",
    blurb:
      "RFID and facial recognition together on an Arduino gate, because one factor at a door has never been enough.",
    category: "Computer Vision",
    stack: ["FaceNet", "Arduino", "OpenCV"],
    repo: "https://github.com/alihassanml/Real-time-iot-based-dual-authentication-access",
    stars: 1,
    year: "2026",
    metric: "Two-factor at the door",
  },
  {
    slug: "text-to-sign-language",
    title: "Two-Way Deaf Assistant",
    blurb:
      "A Flask and MediaPipe system that translates speech into sign and sign back into text, closing both directions of the conversation.",
    category: "Applied Products",
    stack: ["Flask", "MediaPipe", "Python"],
    repo: "https://github.com/alihassanml/text-to-sign-language",
    stars: 1,
    year: "2026",
    metric: "Two-way translation",
  },
  {
    slug: "food-recommendation-agent",
    title: "Food Recommendation Agent",
    blurb:
      "A small FastAPI and LangChain agent that answers one question well: what should you eat right now.",
    category: "Agents & LLMs",
    stack: ["FastAPI", "LangChain", "Python"],
    repo: "https://github.com/alihassanml/food-recommendation-agent",
    stars: 1,
    year: "2026",
    metric: "Single-purpose agent",
  },
  {
    slug: "theft-detection",
    title: "Theft Detection",
    blurb:
      "YOLOv11 trained on in-store theft behaviour, catching the motion pattern rather than waiting for the missing stock count.",
    category: "Computer Vision",
    stack: ["YOLOv11", "OpenCV", "Python"],
    repo: "https://github.com/alihassanml/Theft-Detection",
    stars: 2,
    year: "2025",
    metric: "Behaviour-level detection",
  },
  {
    slug: "rock-paper-scissors-yolo",
    title: "Gesture Recognition",
    blurb:
      "A YOLOv11 gesture model trained on a custom rock-paper-scissors dataset, fast enough to keep up with a real game.",
    category: "Computer Vision",
    stack: ["YOLOv11", "ONNX", "OpenCV"],
    repo: "https://github.com/alihassanml/Rcok-Seassor-Paper-Predict-Yolo11",
    stars: 6,
    year: "2024",
    metric: "Sub-100ms response",
  },
  {
    slug: "credit-risk-automl",
    title: "Credit Risk with AutoML",
    blurb:
      "Default prediction on a large lending set, paired with explainable AI so a rejected application can be justified line by line.",
    category: "MLOps & Data",
    stack: ["AutoML", "SHAP", "Python"],
    repo: "https://github.com/alihassanml/Credit-Risk-Modeling-Using-AutoML",
    stars: 2,
    year: "2025",
    metric: "Explainable decisions",
  },
  {
    slug: "ml-pipeline-dvc",
    title: "Versioned ML Pipeline",
    blurb:
      "An emotion classification pipeline wired through DVC, so every experiment has a reproducible path back to its data.",
    category: "MLOps & Data",
    stack: ["DVC", "Scikit-learn", "Python"],
    repo: "https://github.com/alihassanml/Building-ML-Pipeline-using-DVC",
    stars: 1,
    year: "2025",
    metric: "Fully reproducible runs",
  },
  {
    slug: "mental-health-transformers",
    title: "Mental Health Risk Detection",
    blurb:
      "A transformer classifier for multi-class mental health and suicide risk signals, built with the caution that subject demands.",
    category: "RAG & NLP",
    stack: ["Transformers", "PyTorch", "NLP"],
    repo: "https://github.com/alihassanml/Multi-Class-Mental-Health-and-Suicide-Detection-Using-Transformer-Models",
    stars: 0,
    year: "2025",
    metric: "Multi-class risk model",
  },
  {
    slug: "arxiv-mcp-server",
    title: "arXiv MCP Server",
    blurb:
      "An MCP server and client pair that gives any agent a clean tool for pulling research papers on demand.",
    category: "Agents & LLMs",
    stack: ["MCP", "Python", "LangChain"],
    repo: "https://github.com/alihassanml/Arxivloader-MCP-Server-and-Client",
    stars: 1,
    year: "2025",
    metric: "Standard MCP transport",
  },
  {
    slug: "stock-transformer",
    title: "Transformer Stock Forecasting",
    blurb:
      "Sequence forecasting on market data with a transformer backbone, benchmarked against the usual statistical baselines.",
    category: "MLOps & Data",
    stack: ["PyTorch", "Transformers", "Pandas"],
    repo: "https://github.com/alihassanml/Stock-Prediction-and-Analysis-Using-Transformer",
    stars: 1,
    year: "2025",
    metric: "Benchmarked forecasts",
  },
];

/** Home-page order: agentic and voice work first, then the most-starred models. */
const featuredOrder = [
  "agentic-ai-stock-analysis",
  "voice-ai-deepseek",
  "researchmind-ai",
  "knowledge-graph-rag",
  "yolo11-face-emotion-detection",
  "smoking-detection-yolo11",
];

export const featured = featuredOrder
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));
