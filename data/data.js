const mongoose = require("mongoose");
const Blog = require("../model/blogs");

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/devlog");
}

let data = [
  {
    category: "Tech",
    title: "The Rise of Artificial Intelligence",
    image: {
      filename: "blog-image",
      url: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    },
    content:
      "Artificial Intelligence (AI) has become one of the most transformative technologies of the 21st century. It enables machines to mimic human intelligence and perform tasks such as speech recognition, image processing, and decision-making. AI applications are now embedded in everyday life—from personalized recommendations on streaming platforms to voice assistants like Alexa and Siri. In business, AI improves efficiency through automation and predictive analytics, helping organizations make smarter decisions. Industries like healthcare, finance, and manufacturing rely heavily on AI for diagnostic tools, fraud detection, and process optimization. However, as AI grows more powerful, ethical concerns about bias, privacy, and job displacement have also emerged. To address these, developers and policymakers are focusing on creating transparent and explainable AI systems. The future of AI lies in responsible innovation, where human creativity and machine intelligence work hand in hand to solve global challenges and create a more efficient and connected world.",
  },
  {
    category: "Tech",
    title: "The Future of Cloud Computing",
    image: {
      filename: "blog-image",
      url: "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1093",
    },
    content:
      "Cloud computing has revolutionized how data and applications are stored, managed, and accessed. Instead of relying on physical servers, organizations now use cloud platforms like AWS, Google Cloud, and Microsoft Azure to scale operations seamlessly. The flexibility of the cloud allows businesses to pay only for the resources they use, making it cost-effective and sustainable. Hybrid and multi-cloud strategies are also gaining popularity, enabling companies to distribute workloads efficiently. Security has become a key focus area, with advanced encryption and zero-trust architectures ensuring data protection. Additionally, the rise of edge computing brings data processing closer to users, reducing latency and improving performance. As AI, IoT, and big data continue to grow, cloud computing will remain the backbone of digital transformation, powering innovation across all industries.",
  },
  {
    category: "Tech",
    title: "Blockchain Beyond Cryptocurrency",
    image: {
      filename: "blog-image",
      url: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872",
    },
    content:
      "Blockchain technology, often associated with cryptocurrencies like Bitcoin and Ethereum, has much broader potential. It’s essentially a decentralized ledger that records transactions securely and transparently. Beyond finance, industries such as healthcare, logistics, and supply chain management are adopting blockchain for secure data sharing and traceability. In the public sector, it can enhance transparency in voting and identity verification systems. Smart contracts, which automatically execute agreements when predefined conditions are met, eliminate intermediaries and reduce fraud. Despite its promise, blockchain still faces challenges like scalability, high energy consumption, and regulatory uncertainty. However, ongoing innovations, including proof-of-stake and layer-two solutions, are addressing these issues. As adoption grows, blockchain is set to redefine how trust and transparency are built in digital ecosystems.",
  },
  {
    category: "Tech",
    title: "The Power of 5G Technology",
    image: {
      filename: "blog-image",
      url: "https://plus.unsplash.com/premium_photo-1733342562190-1960519ca29f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    content:
      "5G technology marks a major leap in wireless communication, offering faster speeds, lower latency, and massive connectivity. It’s not just an upgrade from 4G—it’s the foundation for future innovations like autonomous vehicles, smart cities, and the Internet of Things (IoT). With 5G, devices can exchange data almost instantly, enabling real-time decision-making in critical applications such as remote surgery and industrial automation. Telecom companies are investing heavily in infrastructure to expand coverage globally. However, challenges like high deployment costs and security concerns remain. Once fully implemented, 5G will fuel advancements in AI, augmented reality, and cloud computing, transforming industries and redefining how we interact with technology.",
  },
  {
    category: "Tech",
    title: "The Evolution of Cybersecurity",
    image: {
      filename: "blog-image",
      url: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=900",
    },
    content:
      "As technology advances, so do cyber threats. Cybersecurity has evolved from simple antivirus programs to complex defense systems powered by AI and machine learning. Organizations face challenges like ransomware, phishing, and data breaches that can cripple operations. Modern cybersecurity strategies focus on zero-trust frameworks, endpoint security, and user awareness training. The rise of cloud adoption and remote work has further expanded the attack surface, demanding continuous monitoring and adaptive threat response. Governments and private sectors are collaborating to set global standards for data protection and cyber resilience. In the future, quantum encryption and AI-driven security will play a crucial role in safeguarding digital ecosystems from ever-evolving threats.",
  },
  {
    category: "Tech",
    title: "Internet of Things and Smart Living",
    image: {
      filename: "blog-image",
      url: "https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=670",
    },
    content:
      "The Internet of Things (IoT) connects everyday objects—like thermostats, watches, and cars—to the internet, enabling them to collect and exchange data. This interconnected network enhances convenience, efficiency, and automation in daily life. In smart homes, IoT allows users to control appliances remotely, monitor energy consumption, and enhance security. Industries use IoT for predictive maintenance, logistics optimization, and real-time analytics. However, security and privacy remain major concerns as more devices share sensitive information. Future advancements will focus on interoperability, edge computing, and AI integration to make IoT systems smarter and more secure, paving the way for truly intelligent living environments.",
  },
  {
    category: "Tech",
    title: "Quantum Computing Explained",
    image: {
      filename: "blog-image",
      url: "https://images.unsplash.com/photo-1609151376730-f246ec0b99e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    },
    content:
      "Quantum computing is a revolutionary field that leverages quantum mechanics to process information at unprecedented speeds. Unlike classical computers that use bits (0s and 1s), quantum computers use qubits, which can exist in multiple states simultaneously. This allows them to perform complex calculations exponentially faster, making them ideal for cryptography, drug discovery, and climate modeling. Major tech companies like IBM, Google, and Intel are investing heavily in quantum research. However, building stable quantum systems remains challenging due to noise and error correction issues. As breakthroughs continue, quantum computing is expected to transform industries and redefine the limits of computational power.",
  },
  {
    category: "Tech",
    title: "Augmented Reality and Virtual Reality",
    image: {
      filename: "blog-image",
      url: "https://plus.unsplash.com/premium_photo-1710118990459-07ad42731385?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=934",
    },
    content:
      "Augmented Reality (AR) and Virtual Reality (VR) are transforming how people interact with digital environments. AR overlays digital information onto the real world, while VR immerses users in fully virtual spaces. These technologies have moved beyond gaming into fields like education, healthcare, and real estate. Surgeons use VR for simulation-based training, while architects use AR to visualize building designs. The development of lightweight headsets and better graphics has accelerated adoption. As 5G and AI advance, AR and VR will enable more immersive and interactive experiences, blurring the line between the physical and digital worlds.",
  },
  {
    category: "Tech",
    title: "Machine Learning in Everyday Life",
    image: {
      filename: "blog-image",
      url:  "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    },
    content:
      "Machine Learning (ML), a subset of AI, enables systems to learn from data without being explicitly programmed. From personalized recommendations on Netflix to fraud detection in banking, ML is already integrated into daily activities. It uses algorithms to recognize patterns, predict outcomes, and improve performance over time. Businesses use ML for customer segmentation, demand forecasting, and automation. As more data becomes available, ML models grow more accurate and efficient. However, issues like data bias and transparency remain critical challenges. The future of ML will focus on ethical AI, explainability, and sustainable data practices to ensure fair and responsible innovation.",
  },
  {
    category: "Tech",
    title: "The Role of Big Data in Innovation",
    image: {
      filename: "blog-image",
      url: "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=900",
    },
    content:
      "Big Data refers to massive datasets that are too complex for traditional data processing tools. With the rise of social media, IoT, and online transactions, organizations now have access to vast amounts of information. Analyzing this data helps companies identify trends, improve products, and enhance customer experiences. Tools like Hadoop, Spark, and data lakes enable efficient data management. Big Data also fuels AI and predictive analytics, helping businesses make data-driven decisions. However, managing data privacy and security remains a major concern. As technology evolves, Big Data will continue to drive innovation and shape the digital economy.",
  },
];
  

const initializeData = async () => {  
  await Blog.deleteMany({}); // Clear existing data
  data = data.map((obj) => ({...obj, owner: '69050c8788784729c101660a'})); // Assign a default owner ID
  await Blog.insertMany(data);
  console.log("Data initialization complete.");
} 
initializeData();
