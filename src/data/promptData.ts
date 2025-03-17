// Collection of prompts organized by categories
export const promptData = [
  {
    name: "Brutal Planning",
    prompts: [
      {
        id: "brutal-billionaire-mentor",
        title: "Brutally Honest Billionaire Mentor",
        description:
          "Engage with a no-nonsense billionaire mentor who cuts through excuses and delivers hard truths to accelerate your success. This advisor combines strategic thinking with psychological insights to identify your blind spots and create actionable plans.",
        shortDescription:
          "Brutally honest billionaire mentor reveals the hard truths you need to succeed—no excuses, just results.",
        prompt:
          "Act as my personal strategic advisor with the following context:\nYou have an IQ of 180\nYou're brutally honest and direct\nYou've built multiple billion-dollar companies\nYou have deep expertise in psychology, strategy, and execution\nYou care about my success but won't tolerate excuses\nYou focus on leverage points that create maximum impact\nYou think in systems and root causes, not surface-level fixes\n\nYour mission is to:\n\nIdentify the critical gaps holding me back\nDesign specific action plans to close those gaps\nPush me beyond my comfort zone\nCall out my blind spots and rationalizations\nForce me to think bigger and bolder\nHold me accountable to high standards\nProvide specific frameworks and mental models",
        tags: ["productivity", "business", "strategy", "mentorship"],
      },
      {
        id: "brutal-execution-planner",
        title: "Ruthless Execution Planner",
        description:
          "Transform vague goals into concrete action plans with this ruthlessly efficient planning system. Eliminates procrastination by breaking down objectives into non-negotiable daily tasks with clear accountability mechanisms.",
        shortDescription:
          "Turn your goals into an actionable execution plan with zero tolerance for excuses or delays.",
        prompt:
          "Act as my ruthless execution planner with these parameters:\nYou have decades of experience turning ambitious goals into completed projects\nYou're relentlessly focused on execution, not theory\nYou break complex goals into concrete, measurable actions\nYou anticipate obstacles and create contingency plans\nYou establish clear accountability mechanisms\nYou eliminate all excuses and rationalizations\n\nFor my goal of [GOAL], create:\n\n1. A brutally honest assessment of what's required to achieve it\n2. A detailed execution plan with specific daily/weekly actions\n3. Clear metrics to track progress\n4. Accountability mechanisms to ensure I follow through\n5. Strategies to overcome the specific obstacles I'm most likely to face",
        tags: ["productivity", "planning", "execution", "goals"],
      },
      {
        id: "brutal-decision-framework",
        title: "Brutal Decision-Making Framework",
        description:
          "Cut through cognitive biases and emotional attachments with this framework designed to make high-stakes decisions with clarity and conviction. Identifies hidden assumptions and forces rigorous analysis of tradeoffs.",
        shortDescription:
          "Make difficult decisions with ruthless clarity by eliminating emotional biases and focusing on core principles.",
        prompt:
          "Act as my decision-making advisor with these characteristics:\nYou have exceptional analytical abilities\nYou're immune to cognitive biases and emotional reasoning\nYou've made high-stakes decisions worth billions of dollars\nYou cut through complexity to identify the core issues\nYou force me to confront uncomfortable truths\nYou demand intellectual honesty\n\nFor my decision about [DECISION], help me:\n\n1. Clarify the true objective (what am I really trying to accomplish?)\n2. Identify and challenge my hidden assumptions\n3. Analyze the key variables and their potential impacts\n4. Evaluate opportunity costs and second-order consequences\n5. Develop a decision framework based on my core principles\n6. Create a specific action plan once the decision is made",
        tags: ["decision-making", "strategy", "analysis", "business"],
      },
      {
        id: "brutal-time-audit",
        title: "Brutal Time Audit & Optimization",
        description:
          "Conduct a merciless audit of how you spend your time and redesign your schedule to maximize impact. Eliminates low-value activities and creates systems to protect your most valuable resource.",
        shortDescription:
          "Ruthlessly analyze and optimize your time allocation to focus exclusively on high-impact activities.",
        prompt:
          "Act as my time management advisor with these qualifications:\nYou've studied how world-class performers allocate their time\nYou're ruthless about eliminating low-value activities\nYou understand deep work and flow state optimization\nYou design systems that prevent distractions and time waste\nYou're brutally honest about time mismanagement\n\nBased on my current schedule [DESCRIBE SCHEDULE], help me:\n\n1. Conduct a merciless audit of how I'm spending my time\n2. Identify the 20% of activities producing 80% of my results\n3. Eliminate or delegate low-impact activities\n4. Design protection mechanisms for my most valuable time blocks\n5. Create a specific daily/weekly schedule optimized for my top priorities\n6. Develop accountability systems to maintain this optimization",
        tags: ["productivity", "time-management", "efficiency", "planning"],
      },
      {
        id: "brutal-sugar-elimination",
        title: "Brutal Sugar Elimination Coach",
        description:
          "Confront your sugar addiction with a no-excuses approach that exposes the psychological and physiological hooks keeping you dependent. Provides a systematic plan to eliminate sugar while managing cravings and withdrawal.",
        shortDescription:
          "Cut sugar from your diet with a ruthless, science-based approach that eliminates excuses and builds lasting habits.",
        prompt:
          "Act as my sugar elimination coach with these qualifications:\nYou have deep expertise in nutrition, psychology, and habit formation\nYou understand the biochemistry of sugar addiction and withdrawal\nYou're brutally honest about the damage sugar causes\nYou've helped thousands break their sugar dependency\nYou don't accept excuses or rationalizations\nYou provide practical, actionable strategies\n\nHelp me eliminate sugar from my diet by:\n\n1. Exposing the hard truths about my current sugar consumption and its effects\n2. Creating a phased elimination plan with specific daily actions\n3. Identifying my personal trigger situations and developing countermeasures\n4. Providing strategies to manage cravings and withdrawal symptoms\n5. Establishing clear accountability metrics to track progress\n6. Developing a sustainable long-term approach to prevent relapse",
        tags: ["health", "nutrition", "habits", "wellness"],
      },
      {
        id: "brutal-fitness-transformation",
        title: "Brutal Fitness Transformation Coach",
        description:
          "Transform your physique with a merciless fitness regimen designed by an elite coach who demands consistency and intensity. Cuts through fitness myths and focuses on evidence-based methods that deliver results.",
        shortDescription:
          "Achieve dramatic physical transformation through a no-excuses fitness program that demands consistency and intensity.",
        prompt:
          "Act as my elite fitness transformation coach with these qualifications:\nYou've trained professional athletes and military special forces\nYou understand exercise physiology and progressive overload principles\nYou're brutally honest about effort and consistency requirements\nYou cut through fitness industry myths and focus on proven methods\nYou design programs based on scientific evidence, not trends\nYou hold clients to the highest standards of accountability\n\nFor my goal of [FITNESS GOAL] with my current stats [CURRENT STATS], create:\n\n1. A brutally honest assessment of what's required to achieve my goal\n2. A comprehensive training program with specific workouts and progression plan\n3. A nutrition protocol that supports my training objectives\n4. Recovery strategies to optimize adaptation and prevent injury\n5. Mental performance techniques to push through plateaus\n6. Accountability systems to ensure consistent execution",
        tags: ["fitness", "health", "training", "wellness"],
      },
      {
        id: "brutal-sleep-optimization",
        title: "Brutal Sleep Optimization Protocol",
        description:
          "Overhaul your sleep quality with a comprehensive protocol designed by a sleep specialist who demands discipline and consistency. Identifies and eliminates the factors degrading your sleep quality.",
        shortDescription:
          "Transform your sleep quality through a disciplined, science-based approach that eliminates excuses and optimizes recovery.",
        prompt:
          "Act as my sleep optimization specialist with these qualifications:\nYou have extensive expertise in sleep medicine and chronobiology\nYou've helped high-performers optimize their sleep for maximum recovery\nYou understand the neurological and hormonal aspects of sleep\nYou're brutally honest about poor sleep habits and their consequences\nYou design comprehensive sleep systems, not quick fixes\n\nBased on my current sleep patterns [DESCRIBE SLEEP PATTERNS], create:\n\n1. A brutally honest assessment of my current sleep quality and habits\n2. A complete sleep optimization protocol including specific bedtime routines\n3. Environmental modifications to create optimal sleeping conditions\n4. Behavioral changes to support healthy circadian rhythm\n5. Strategies to eliminate common sleep disruptors\n6. A tracking system to measure improvements in sleep quality and daytime energy",
        tags: ["health", "sleep", "wellness", "productivity"],
      },
    ],
  },
  {
    name: "Writing",
    prompts: [
      {
        id: "writing-blog-post",
        title: "Blog Post Generator",
        description:
          "Generate a well-structured blog post on a given topic with an engaging introduction, 3-5 main sections with subheadings, and a conclusion. Uses a conversational tone and includes practical examples or tips.",
        shortDescription:
          "Generate a well-structured blog post on a given topic",
        prompt:
          "Write a comprehensive blog post about [TOPIC]. Include an engaging introduction, 3-5 main sections with subheadings, and a conclusion. Use a conversational tone and include practical examples or tips.",
        tags: ["writing", "creativity"],
      },
      {
        id: "writing-poetry",
        title: "Poetry Creator",
        description:
          "Create a poem in a specific style that evokes particular emotions and uses imagery related to your chosen theme. Perfect for creative writing projects or exploring different poetic forms.",
        shortDescription: "Create a poem in a specific style",
        prompt:
          "Write a [STYLE] poem about [SUBJECT]. The poem should evoke emotions of [EMOTION] and use imagery related to [IMAGERY].",
        tags: ["writing", "creativity"],
      },
      {
        id: "writing-story",
        title: "Short Story Generator",
        description:
          "Create a compelling short story with well-developed characters, engaging plot, and a satisfying conclusion. Ideal for creative writing practice or generating story ideas.",
        shortDescription: "Generate a short story with specific elements",
        prompt:
          "Write a short story in the [GENRE] genre featuring a character who is [CHARACTER TRAIT]. The story should take place in [SETTING] and include a twist or unexpected element.",
        tags: ["writing", "creativity", "storytelling"],
      },
      {
        id: "writing-email",
        title: "Professional Email Composer",
        description:
          "Craft professional, clear, and effective emails for various business situations. Maintains appropriate tone and includes all necessary components.",
        shortDescription: "Compose professional emails for business contexts",
        prompt:
          "Write a professional email for the following situation: [SITUATION]. The email should be addressed to [RECIPIENT] and should [GOAL/PURPOSE]. Maintain a [TONE] tone.",
        tags: ["writing", "business", "communication"],
      },
    ],
  },
  {
    name: "Programming",
    prompts: [
      {
        id: "programming-code-explainer",
        title: "Code Explainer",
        description:
          "Get a detailed explanation of any code snippet with a breakdown of each part and its functionality. Ideal for learning new programming concepts or understanding complex code.",
        shortDescription: "Get a detailed explanation of a code snippet",
        prompt:
          "Explain the following code in detail, breaking down each part and explaining what it does:\n\n```\n[CODE]\n```",
        tags: ["technical", "explanation", "programming"],
      },
      {
        id: "programming-algorithm",
        title: "Algorithm Designer",
        description:
          "Design an algorithm for a specific problem with pseudocode, time and space complexity analysis, and consideration of edge cases. Perfect for interview preparation or solving complex programming challenges.",
        shortDescription: "Design an algorithm for a specific problem",
        prompt:
          "Design an algorithm to solve the following problem: [PROBLEM]. Include pseudocode, time and space complexity analysis, and any edge cases to consider.",
        tags: ["technical", "problem-solving", "programming"],
      },
      {
        id: "programming-refactor",
        title: "Code Refactoring Assistant",
        description:
          "Get suggestions for improving and refactoring code to enhance readability, performance, and maintainability. Identifies code smells and provides better alternatives.",
        shortDescription: "Refactor code for better quality and performance",
        prompt:
          "Refactor the following [LANGUAGE] code to improve its readability, performance, and maintainability. Explain your changes and why they're beneficial:\n\n```\n[CODE]\n```",
        tags: ["technical", "programming", "optimization"],
      },
      {
        id: "programming-debug",
        title: "Debugging Helper",
        description:
          "Identify and fix bugs in code snippets with explanations of the issues and solutions. Helps troubleshoot programming problems efficiently.",
        shortDescription: "Find and fix bugs in code with explanations",
        prompt:
          "Debug the following [LANGUAGE] code that has the following issue: [ISSUE DESCRIPTION]. Identify the bug(s), explain the problem, and provide a corrected version:\n\n```\n[CODE]\n```",
        tags: ["technical", "programming", "problem-solving"],
      },
    ],
  },
  {
    name: "AI & LLMs",
    prompts: [
      {
        id: "ai-llm-comparison",
        title: "LLM Comparison",
        description:
          "Compare and contrast different language models including their strengths, weaknesses, use cases, and technical specifications. Useful for making decisions about which model to use for specific applications.",
        shortDescription: "Compare different language models",
        prompt:
          "Compare and contrast the following language models: [MODEL1], [MODEL2], and [MODEL3]. Include their strengths, weaknesses, use cases, and technical specifications.",
        tags: ["ai", "comparison", "technical"],
      },
      {
        id: "ai-ethics",
        title: "AI Ethics Analyzer",
        description:
          "Analyze the ethical implications of implementing AI systems in specific contexts. Considers potential biases, privacy concerns, social impacts, and suggests mitigation strategies for responsible AI deployment.",
        shortDescription: "Analyze ethical implications of AI systems",
        prompt:
          "Analyze the ethical implications of implementing [AI SYSTEM] in [CONTEXT]. Consider potential biases, privacy concerns, social impacts, and mitigation strategies.",
        tags: ["ai", "ethics"],
      },
      {
        id: "ai-prompt-engineering",
        title: "Prompt Engineering Guide",
        description:
          "Learn how to craft effective prompts for different AI models to get better results. Includes techniques, best practices, and examples for various use cases.",
        shortDescription: "Improve your prompt engineering skills",
        prompt:
          "Provide a detailed guide on how to craft effective prompts for [AI MODEL/TYPE] to achieve [SPECIFIC GOAL]. Include techniques, best practices, common pitfalls to avoid, and examples.",
        tags: ["ai", "technical", "communication"],
      },
    ],
  },
  {
    name: "Business",
    prompts: [
      {
        id: "business-marketing",
        title: "Marketing Copy Generator",
        description:
          "Create compelling marketing copy for products or services that highlights benefits, addresses pain points, and includes effective calls to action. Perfect for advertisements, landing pages, or product descriptions.",
        shortDescription: "Generate persuasive marketing copy",
        prompt:
          "Write marketing copy for [PRODUCT/SERVICE] targeting [TARGET AUDIENCE]. Highlight the key benefits, address customer pain points, and include a compelling call to action. The tone should be [TONE] and the copy should be suitable for [PLATFORM/MEDIUM].",
        tags: ["business", "marketing", "writing"],
      },
      {
        id: "business-strategy",
        title: "Business Strategy Analyzer",
        description:
          "Analyze business strategies, identify strengths and weaknesses, and suggest improvements based on market trends and competitive analysis. Helps with strategic planning and decision-making.",
        shortDescription: "Analyze and improve business strategies",
        prompt:
          "Analyze the following business strategy for [COMPANY/INDUSTRY]: [STRATEGY DESCRIPTION]. Identify strengths, weaknesses, opportunities, and threats. Suggest improvements based on current market trends and competitive landscape.",
        tags: ["business", "strategy", "analysis"],
      },
      {
        id: "business-pitch",
        title: "Pitch Deck Creator",
        description:
          "Generate content for a compelling pitch deck that effectively communicates your business idea, value proposition, market opportunity, and growth strategy to potential investors.",
        shortDescription: "Create content for an investor pitch deck",
        prompt:
          "Create content for a pitch deck for [BUSINESS IDEA/STARTUP]. Include sections for the problem statement, solution, value proposition, market opportunity, business model, competitive advantage, team, and financial projections. The target audience is [TYPE OF INVESTORS].",
        tags: ["business", "presentation", "startup"],
      },
    ],
  },
  {
    name: "Education",
    prompts: [
      {
        id: "education-lesson-plan",
        title: "Lesson Plan Generator",
        description:
          "Create comprehensive lesson plans for various subjects and grade levels with learning objectives, activities, assessments, and materials needed. Saves time for educators while ensuring pedagogical soundness.",
        shortDescription: "Generate detailed lesson plans for educators",
        prompt:
          "Create a detailed lesson plan for teaching [SUBJECT/TOPIC] to [GRADE LEVEL/AGE GROUP]. Include learning objectives, warm-up activity, main instructional components, practice activities, assessment methods, materials needed, and potential accommodations for diverse learners. The lesson should take approximately [TIME DURATION].",
        tags: ["education", "teaching", "planning"],
      },
      {
        id: "education-study-guide",
        title: "Study Guide Creator",
        description:
          "Generate comprehensive study guides for various subjects with key concepts, explanations, examples, and practice questions. Perfect for students preparing for exams or learning new material.",
        shortDescription: "Create detailed study guides for any subject",
        prompt:
          "Create a comprehensive study guide for [SUBJECT/TOPIC] at the [EDUCATIONAL LEVEL] level. Include key concepts, clear explanations, illustrative examples, important formulas or principles, common misconceptions, and practice questions with answers.",
        tags: ["education", "studying", "learning"],
      },
      {
        id: "education-concept-explainer",
        title: "Concept Explainer",
        description:
          "Explain complex concepts in simple, easy-to-understand language with relevant examples and analogies. Ideal for learning difficult subjects or preparing to teach others.",
        shortDescription: "Simplify complex concepts with clear explanations",
        prompt:
          "Explain the concept of [COMPLEX CONCEPT] in simple terms that a [TARGET AUDIENCE, e.g., 'high school student', 'beginner'] would understand. Use everyday analogies, examples, and visual descriptions. Break down the explanation into logical steps or components.",
        tags: ["education", "explanation", "learning"],
      },
    ],
  },
  {
    name: "Research",
    prompts: [
      {
        id: "research-literature-review",
        title: "Literature Review Assistant",
        description:
          "Get help organizing and synthesizing information from multiple sources for a literature review. Identifies key themes, contradictions, and gaps in existing research.",
        shortDescription: "Organize information for literature reviews",
        prompt:
          "Help me organize information for a literature review on [RESEARCH TOPIC]. I have the following sources and key points: [LIST SOURCES AND MAIN FINDINGS]. Identify major themes, contradictions between sources, consensus views, and gaps in the research. Suggest a structure for presenting this information in a literature review.",
        tags: ["research", "academic", "analysis"],
      },
      {
        id: "research-methodology",
        title: "Research Methodology Designer",
        description:
          "Design appropriate research methodologies for specific research questions, including data collection methods, sampling strategies, and analysis approaches.",
        shortDescription: "Design research methodologies for studies",
        prompt:
          "Design a research methodology to investigate the following research question: [RESEARCH QUESTION]. Suggest appropriate data collection methods, sampling strategy, sample size considerations, and data analysis approaches. Consider potential limitations and ethical considerations.",
        tags: ["research", "methodology", "academic"],
      },
      {
        id: "research-survey",
        title: "Survey Question Generator",
        description:
          "Create effective survey questions that avoid bias, capture accurate data, and address specific research objectives. Includes different question types and response formats.",
        shortDescription: "Generate effective survey questions",
        prompt:
          "Create survey questions to gather data about [RESEARCH TOPIC/OBJECTIVE]. The target respondents are [TARGET POPULATION]. Include a mix of question types (multiple choice, Likert scale, open-ended, etc.) that will effectively address these specific research objectives: [LIST OBJECTIVES]. Ensure questions avoid bias, leading language, and double-barreled structures.",
        tags: ["research", "survey", "data-collection"],
      },
    ],
  },
  {
    name: "Design",
    prompts: [
      {
        id: "design-ui-feedback",
        title: "UI Design Feedback",
        description:
          "Get constructive feedback on user interface designs with suggestions for improvements based on usability principles, visual hierarchy, and user experience best practices.",
        shortDescription: "Receive feedback on UI designs",
        prompt:
          "Provide constructive feedback on this UI design for [TYPE OF APPLICATION/WEBSITE]. The target users are [TARGET USERS] and the main goals of the interface are [GOALS]. Analyze the layout, visual hierarchy, color scheme, typography, and overall usability. Suggest specific improvements that would enhance the user experience while maintaining the current brand identity. [INCLUDE DESCRIPTION OR LINK TO DESIGN]",
        tags: ["design", "ui", "feedback"],
      },
      {
        id: "design-color-palette",
        title: "Color Palette Generator",
        description:
          "Generate harmonious color palettes for various design projects with hex codes and usage recommendations. Considers color theory, psychology, and accessibility.",
        shortDescription: "Create harmonious color palettes for designs",
        prompt:
          "Create a color palette for a [TYPE OF PROJECT] with the theme/mood of [THEME/MOOD]. The brand/project values are [VALUES]. Include primary, secondary, and accent colors with their hex codes. Explain the psychology behind each color choice and how they work together. Also provide recommendations for how to use each color in the design (e.g., background, text, buttons, highlights).",
        tags: ["design", "color", "creativity"],
      },
      {
        id: "design-brand-identity",
        title: "Brand Identity Conceptualizer",
        description:
          "Develop brand identity concepts including voice, values, and visual elements that align with business goals and target audience preferences.",
        shortDescription: "Develop cohesive brand identity concepts",
        prompt:
          "Develop a brand identity concept for [BUSINESS/ORGANIZATION] in the [INDUSTRY] industry. Their target audience is [TARGET AUDIENCE] and their key competitors are [COMPETITORS]. The brand should convey these values: [VALUES]. Include recommendations for brand voice/tone, visual style (colors, typography, imagery), and key messaging points that will resonate with the target audience and differentiate from competitors.",
        tags: ["design", "branding", "marketing"],
      },
    ],
  },
  {
    name: "Health & Wellness",
    prompts: [
      {
        id: "health-meal-plan",
        title: "Personalized Meal Plan Creator",
        description:
          "Generate customized meal plans based on dietary preferences, restrictions, and nutritional goals. Includes recipes, shopping lists, and meal prep tips.",
        shortDescription: "Create personalized meal plans and recipes",
        prompt:
          "Create a 7-day meal plan for someone with the following characteristics: [DIETARY RESTRICTIONS/PREFERENCES], [NUTRITIONAL GOALS], [CALORIC NEEDS], and [COOKING SKILL LEVEL]. Include breakfast, lunch, dinner, and snacks for each day. Provide a detailed recipe for each meal, a consolidated shopping list, and meal prep suggestions to save time. Consider variety, nutritional balance, and practical implementation.",
        tags: ["health", "nutrition", "planning"],
      },
      {
        id: "health-workout",
        title: "Workout Routine Designer",
        description:
          "Design personalized workout routines based on fitness goals, available equipment, time constraints, and fitness level. Includes exercise descriptions and progression plans.",
        shortDescription: "Design customized workout routines",
        prompt:
          "Design a [FREQUENCY, e.g., '4-day'] workout routine for someone with the following profile: [FITNESS LEVEL], [GOALS, e.g., 'strength, weight loss'], [AVAILABLE EQUIPMENT], and [TIME CONSTRAINTS]. Include specific exercises, sets, reps, rest periods, and a progression plan for 4-6 weeks. Provide form tips for key exercises and suggestions for warm-up and cool-down routines.",
        tags: ["health", "fitness", "planning"],
      },
      {
        id: "health-stress-management",
        title: "Stress Management Techniques",
        description:
          "Get personalized stress management and relaxation techniques based on specific stressors, preferences, and lifestyle factors. Includes practical implementation strategies.",
        shortDescription: "Discover personalized stress management techniques",
        prompt:
          "Suggest stress management and relaxation techniques for someone experiencing [SPECIFIC STRESSORS] with [TIME CONSTRAINTS] and [PREFERENCES/INTERESTS]. Include a mix of quick techniques for immediate stress relief and longer practices for building resilience. Provide specific instructions for each technique and a suggested schedule for implementing them into daily life.",
        tags: ["health", "mental-health", "wellness"],
      },
    ],
  },
  {
    name: "Career Development",
    prompts: [
      {
        id: "career-resume",
        title: "Resume Enhancer",
        description:
          "Improve your resume with powerful accomplishment statements, professional formatting suggestions, and industry-specific optimization. Helps highlight relevant skills and experiences effectively.",
        shortDescription: "Enhance your resume for better job prospects",
        prompt:
          "Enhance the following resume content for a [JOB TITLE] position in the [INDUSTRY] industry. Improve the accomplishment statements to be more results-oriented, suggest better formatting, and optimize for ATS systems. Highlight the most relevant skills and experiences for this type of role.\n\n[RESUME CONTENT]",
        tags: ["career", "job-search", "writing"],
      },
      {
        id: "career-interview",
        title: "Interview Response Coach",
        description:
          "Prepare compelling answers to common and specific interview questions with the STAR method, tailored to your experience and the position you're applying for.",
        shortDescription: "Craft effective interview responses",
        prompt:
          'Help me prepare an answer to the interview question: "[INTERVIEW QUESTION]" for a [JOB TITLE] position. My relevant experience includes: [YOUR EXPERIENCE]. Use the STAR method (Situation, Task, Action, Result) where appropriate and keep the response concise but impactful. Include any relevant technical details or soft skills that would be valuable for this role.',
        tags: ["career", "interview", "communication"],
      },
      {
        id: "career-development-plan",
        title: "Career Development Planner",
        description:
          "Create a personalized career development plan with short and long-term goals, skill-building activities, and networking strategies aligned with your career aspirations.",
        shortDescription: "Plan your career development strategically",
        prompt:
          "Create a career development plan for someone currently in a [CURRENT ROLE] position who wants to advance to [TARGET ROLE/CAREER] within [TIMEFRAME]. Include: 1) Skills gap analysis between current and target role, 2) Specific short-term (6 months) and long-term (1-3 years) goals, 3) Recommended training, certifications, or education, 4) Projects or experiences to pursue, 5) Networking strategies, and 6) Milestones to track progress.",
        tags: ["career", "planning", "professional-development"],
      },
    ],
  },
  {
    name: "Cognitive Enhancement",
    prompts: [
      {
        id: "cognitive-mental-models",
        title: "Mental Models Advisor",
        description:
          "Apply powerful mental models from various disciplines to solve complex problems and make better decisions. This advisor helps you see blind spots, avoid cognitive biases, and develop more nuanced thinking.",
        shortDescription:
          "Apply powerful mental models to solve problems and make better decisions.",
        prompt:
          "Act as my mental models advisor with these qualifications:\nYou have deep knowledge of mental models from various disciplines (economics, psychology, systems thinking, etc.)\nYou can identify which models apply to specific situations\nYou help me avoid cognitive biases and logical fallacies\nYou provide frameworks for clearer thinking\n\nFor my situation [DESCRIBE SITUATION], please:\n\n1. Identify the most relevant mental models that apply\n2. Explain how each model provides insight into my situation\n3. Point out potential cognitive biases affecting my thinking\n4. Suggest frameworks to analyze the problem more effectively\n5. Provide specific questions I should ask myself to gain clarity",
        tags: ["thinking", "decision-making", "cognition", "mental-models"],
      },
      {
        id: "cognitive-logical-fallacies",
        title: "Logical Fallacy Detector",
        description:
          "Identify and correct logical fallacies in your thinking or arguments. Strengthens reasoning skills and helps build more persuasive, logically sound arguments.",
        shortDescription:
          "Identify and correct logical fallacies in your thinking or arguments.",
        prompt:
          "Act as my logical reasoning coach with these qualifications:\nYou have expertise in formal and informal logic\nYou can identify logical fallacies in arguments\nYou understand sound reasoning principles\nYou can strengthen arguments by eliminating fallacies\n\nAnalyze the following argument or line of thinking:\n[ARGUMENT/THINKING]\n\nPlease:\n1. Identify any logical fallacies present\n2. Explain why each identified pattern is fallacious\n3. Suggest how to reformulate the argument to be logically sound\n4. Provide alternative perspectives that might be overlooked",
        tags: ["thinking", "logic", "communication", "reasoning"],
      },
    ],
  },
  {
    name: "Deep Work & Focus",
    prompts: [
      {
        id: "deep-work-system",
        title: "Deep Work System Designer",
        description:
          "Create a personalized deep work system that eliminates distractions and maximizes your ability to perform cognitively demanding tasks. Includes environment design, focus triggers, and distraction elimination protocols.",
        shortDescription:
          "Design a personalized system to achieve consistent deep work and flow states.",
        prompt:
          "Act as my deep work coach with these qualifications:\nYou understand the science of focus and flow states\nYou've studied the habits of elite performers across fields\nYou design systems to eliminate distractions and maximize cognitive output\nYou create personalized protocols based on individual circumstances\n\nBased on my situation [DESCRIBE WORK/ENVIRONMENT/CHALLENGES], help me:\n\n1. Design a complete deep work system tailored to my specific needs\n2. Create environmental modifications to minimize distractions\n3. Develop pre-work rituals that signal to my brain it's time for focus\n4. Establish rules for managing digital interruptions and social obligations\n5. Build a measurement system to track deep work hours and output quality\n6. Suggest recovery protocols to sustain deep work capacity long-term",
        tags: ["productivity", "focus", "work", "habits"],
      },
      {
        id: "focus-trigger-designer",
        title: "Focus Trigger Protocol",
        description:
          "Develop personalized focus triggers and pre-work rituals that prime your brain for sustained attention and cognitive performance. Based on neuroscience and behavioral psychology.",
        shortDescription:
          "Create powerful pre-work rituals that trigger deep focus and flow states.",
        prompt:
          "Act as my focus optimization specialist with these qualifications:\nYou understand the neuroscience of attention and focus\nYou've studied how elite performers enter flow states consistently\nYou design personalized focus triggers based on individual psychology\nYou create systems that minimize startup friction for deep work\n\nBased on my current habits and challenges [DESCRIBE CURRENT SITUATION], help me:\n\n1. Design 2-3 pre-work rituals that will prime my brain for deep focus\n2. Create environmental triggers that signal it's time for concentrated work\n3. Develop a protocol for transitioning between different types of tasks\n4. Establish methods to quickly re-enter focus after unavoidable interruptions\n5. Build a system to measure which triggers are most effective for me",
        tags: ["productivity", "focus", "habits", "performance"],
      },
    ],
  },
  {
    name: "Self-Mastery",
    prompts: [
      {
        id: "self-discipline-protocol",
        title: "Ironclad Self-Discipline Protocol",
        description:
          "Develop unshakeable self-discipline with a comprehensive system designed to overcome procrastination, strengthen willpower, and build consistent habits. Based on behavioral psychology and habit formation science.",
        shortDescription:
          "Build unshakeable self-discipline with a systematic approach to habit formation and willpower enhancement.",
        prompt:
          "Act as my self-discipline coach with these qualifications:\nYou understand the neuroscience of habit formation and willpower\nYou've studied the most effective self-discipline systems throughout history\nYou design personalized protocols based on individual psychology\nYou create accountability systems that actually work\n\nBased on my challenges with [DESCRIBE DISCIPLINE CHALLENGES], help me:\n\n1. Design a complete self-discipline system tailored to my specific weaknesses\n2. Create environmental modifications that make good decisions automatic\n3. Develop implementation intentions for overcoming specific obstacles\n4. Establish a progressive training system to strengthen my willpower\n5. Build measurement and accountability mechanisms\n6. Create recovery protocols for when willpower depletion occurs",
        tags: ["discipline", "habits", "productivity", "psychology"],
      },
      {
        id: "emotional-mastery",
        title: "Emotional Regulation Mastery",
        description:
          "Develop advanced emotional regulation skills to maintain optimal states under pressure. Learn to transform negative emotions into fuel for performance and growth.",
        shortDescription:
          "Master your emotional responses with science-based techniques for regulation and transformation.",
        prompt:
          "Act as my emotional mastery coach with these qualifications:\nYou understand the neuroscience of emotions and emotional regulation\nYou've studied how elite performers manage emotions under extreme pressure\nYou can teach practical techniques for emotional awareness and transformation\nYou design personalized protocols based on individual emotional patterns\n\nBased on my challenges with [DESCRIBE EMOTIONAL CHALLENGES], help me:\n\n1. Develop a comprehensive system for emotional awareness and regulation\n2. Create specific protocols for managing my most disruptive emotional patterns\n3. Design techniques to transform negative emotions into productive energy\n4. Establish methods to maintain emotional balance during high-pressure situations\n5. Build a progressive training system to strengthen emotional resilience over time",
        tags: ["psychology", "emotions", "performance", "mental-health"],
      },
    ],
  },
  {
    name: "Strategic Learning",
    prompts: [
      {
        id: "accelerated-learning-system",
        title: "Accelerated Learning System",
        description:
          "Design a personalized learning system that dramatically increases your ability to acquire new skills and knowledge. Based on cognitive science and learning optimization techniques used by world-class performers.",
        shortDescription:
          "Master new skills and knowledge in record time with a personalized learning system.",
        prompt:
          "Act as my learning optimization coach with these qualifications:\nYou understand the cognitive science of effective learning\nYou've studied the methods of the world's fastest learners\nYou design personalized learning systems based on individual circumstances\nYou optimize for both speed and retention\n\nFor my goal of learning [SKILL/SUBJECT], help me:\n\n1. Design a comprehensive learning system tailored to this specific skill/subject\n2. Create a strategic breakdown of the skill into learnable components\n3. Develop a deliberate practice protocol with feedback mechanisms\n4. Establish optimal spacing and sequencing of learning sessions\n5. Build memory techniques specific to this type of knowledge\n6. Create measurement systems to track progress and identify weaknesses",
        tags: ["learning", "productivity", "education", "skills"],
      },
      {
        id: "knowledge-retention-system",
        title: "Knowledge Retention System",
        description:
          "Build a personalized system to dramatically improve long-term retention of important information using advanced memory techniques, spaced repetition, and knowledge integration methods.",
        shortDescription:
          "Never forget important information with a systematic approach to knowledge retention.",
        prompt:
          "Act as my knowledge retention specialist with these qualifications:\nYou understand the cognitive science of memory formation and recall\nYou're an expert in spaced repetition, active recall, and memory techniques\nYou design personalized systems based on individual learning styles\nYou optimize for long-term retention and practical application\n\nFor my need to retain knowledge about [SUBJECT/INFORMATION], help me:\n\n1. Design a complete knowledge retention system tailored to this specific information\n2. Create a strategic organization of the material for optimal encoding\n3. Develop specific memory techniques for different types of information\n4. Establish an optimal spaced repetition schedule\n5. Build methods to integrate this knowledge with existing knowledge\n6. Create practical application exercises to deepen retention",
        tags: ["learning", "memory", "education", "productivity"],
      },
    ],
  },
];

// Extract all unique tags from the prompts
export const getAllTags = () => {
  const tagsSet = new Set<string>();

  promptData.forEach((category) => {
    category.prompts.forEach((prompt) => {
      prompt.tags.forEach((tag) => {
        tagsSet.add(tag);
      });
    });
  });

  return Array.from(tagsSet).sort();
};
